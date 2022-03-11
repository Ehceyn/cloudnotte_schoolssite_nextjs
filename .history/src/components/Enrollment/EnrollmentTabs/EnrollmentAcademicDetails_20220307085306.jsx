import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import { Button2, Button4 } from "../EnrollmentLandingPage/Button";
import { useEnrollmentTabsValue } from "../../../StateProviders/EnrollmentTabsProvider";
import { useFormDetailsStateValue } from "../../../StateProviders/FormDetailsProvider";
import * as Yup from "yup";
import axios from "axios";
import Loader from "../../Loader";
import { useMutation } from "@apollo/client";
import { CREATE_NEW_ADMISSION_APPLICATION } from "../../../../graphql/user/mutations/createNewAdmissionApplication";

function EnrollmentAcademicDetails({ admissionProgrammes, display, schoolId }) {
  const [fee, setFee] = useState(
    "Choose a programme to see documents required"
  );
  const [tab, dispatch] = useEnrollmentTabsValue();
  const [formDetailsStore, formDetailsDispatch] = useFormDetailsStateValue();
  const [docs, setDocs] = useState();
  const [docForUpload, setDocForUpload] = useState();
  const [docForUploadIndex, setDocForUploadIndex] = useState();

  useEffect(() => {
    console.log(docForUpload, "docfor upload");
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    const data = new FormData();
    data.append("file", docForUpload);
    if (typeof docForUpload !== "undefined") {
      const instance = axios.create();
      instance
        .post(
          "https://cloudnotte-api.herokuapp.com/api/rest/upload/file",
          data,
          { headers }
        )
        .then((res) => {
          formik.setFieldValue(`uploads`, [res.data.url]);
          console.log(formik, "The url response");
        });
    }
    // eslint-disable-next-line
  }, [docForUpload, docForUploadIndex]);

  // DISPATCH ENROLLMENT TAB STATE
  const changeTab = (id) => {
    console.log("tab: " + id);
    dispatch({
      type: "TOGGLE_ENROLLMENT_TAB",
      item: id,
    });
  };

  //  DISPATCH STUDENTS DETAILS TO FORM DETAILS STORE
  const pushToStore = (formdetails) => {
    formDetailsDispatch({
      type: "ADD_TO_FORM_DETAILS_STORE",
      item: formdetails,
    });
  };

  // REMOVE FROM FORM DETAILS STORE
  const removeFromStore = () => {
    formDetailsDispatch({
      type: "REMOVE_FROM_FORM_DETAILS_STORE",
    });
  };

  // Upload sprt_Passport to Cloudinary and get the url
  //   const handleImageUpload = async () => {

  //     formDetailsStore.forEach((element, index) =>{
  // let imageUrls = [];
  //        const instance = axios.create();

  //        const data = new FormData();
  //        data.append('file', element.Passport);
  //        data.append('upload_preset', 'xwjm1oaf');
  //        data.append('cloud_name', 'zichygraphs');

  // instance.post(
  //          'https://api.cloudinary.com/v1_1/zichygraphs/upload/',
  //          data
  //        ).then(res => {
  //         //  Push returned links into image Url array
  //           imageUrls.push(res.data.secure_url);
  //           console.log(imageUrls,"Urlsss");
  //           imageUrls.length === formDetailsStore.length && submitApplicationToDB(imageUrls)
  //         })
  //         .catch(err => {
  //           console.log(err);
  //         });

  //     })

  //   };

  // Submit application to DB
  const [submitApplicationToDB, { data, loading, error }] = useMutation(
    CREATE_NEW_ADMISSION_APPLICATION,
    {
      variables: {
        studentFirstName: formDetailsStore?.state[0]?.firstName,
        studentLastName: formDetailsStore?.state[0]?.lastName,
        studentMiddleName: formDetailsStore?.state[0]?.middleName,
        studentPhoneNumber: formDetailsStore?.state[0]?.phoneNumber,
        studentEmail: formDetailsStore?.state[0]?.email,
        studentGender: formDetailsStore?.state[0]?.sex,
        studentDateOfBirth: "2006-01-02T15:04:05Z",
        studentCountry: formDetailsStore?.state[0]?.country,
        studentState: formDetailsStore?.state[0]?.state,
        studentLga: formDetailsStore?.state[0]?.lga,
        studentAddress: formDetailsStore?.state[0]?.address,
        studentPassportUrl: formDetailsStore?.state[0]?.PassportUrl,
        parentFirstName: formDetailsStore?.state[1]?.firstName,
        parentLastName: formDetailsStore?.state[1]?.lastName,
        parentMiddleName: formDetailsStore?.state[1]?.middleName,
        parentPhoneNumber: formDetailsStore?.state[1]?.phoneNumber,
        parentEmail: formDetailsStore?.state[1]?.email,
        parentRelationship: formDetailsStore?.state[1]?.relationship,
        parentOccupation: formDetailsStore?.state[1]?.occupation,
        parentCountry: formDetailsStore?.state[1]?.country,
        parentState: formDetailsStore?.state[1]?.state,
        parentLga: formDetailsStore?.state[1]?.lga,
        parentAddress: formDetailsStore?.state[1]?.address,
        parentPassportUrl: formDetailsStore?.state[1]?.PassportUrl,
        programmeId: formDetailsStore?.state[0]?.programmeId?.state[0],
        schoolId: schoolId,
        previousSchoolName: formDetailsStore?.state[2]?.prevSchool,
        previousSchoolLeaveReason: formDetailsStore?.state[2]?.reason,
        healthIssues: formDetailsStore?.state[2]?.health,
        docs: formDetailsStore?.state[2]?.uploads,
      },
    }
  );

  if (error) console.log(JSON.stringify(error, null, 2));
  console.log(data, "Welome bro");

  // INITIAL FORM VALUES
  let initialValues = {
    selectClass: "",
    prevSchool: "",
    health: "",
    programmeId: "",
  };

  // FORMIK VALIDATION SCHEMA WITH YUP
  const validationSchema = Yup.object({
    selectClass: Yup.string().required("This field is required"),
  });

  // FORMIK ONSUBMIT
  const onSubmit = (values) => {
    pushToStore(values);
    console.log(values, "Oboy see values");
    setLoaderState(true);
  };

  // USING FORMIK PACKAGE FOR FORM HANDLING
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  // SCHOOL FEES BASED ON CLASS
  const schoolFees = (class_) => {
    if (class_) {
      return admissionProgrammes
        .filter((i) => i.name === class_)
        .map((programme) => {
          return programme.admissionFee;
        });
    }
  };

  // REQUIRED DOCS BASED ON CLASS
  const requiredDocs = (class_) => {
    if (class_) {
      return admissionProgrammes
        .filter((i) => i.name === class_)
        .map((programme) => {
          return programme.documents[0];
        });
    }
  };

  // PROGRAMME ID BASED ON CLASS
  const updateProgrammeId = (class_) => {
    if (class_) {
      return admissionProgrammes
        .filter((i) => i.name === class_)
        .map((programme) => {
          return programme.id;
        });
    }
  };

  // SET SCHOOL FEES
  const changeSchoolFee = (e) => {
    setFee(schoolFees(e.target.value));
    setDocs(requiredDocs(e.target.value));
    formik.setFieldValue("programmeId", updateProgrammeId(e.target.value));
    console.log(docs, "jamm ffff");
    console.log(fee, "jamm f");
  };

  let allUploads = [];
  formDetailsStore[2] &&
    Object.keys(formDetailsStore[2]).filter((i) => {
      i.includes("uploads") === true && allUploads.push(i);
    });
  console.log(allUploads, "all uploads");

  console.log(formDetailsStore, "The Store form data");
  console.log(formik.values, "The Parent form data");
  console.log(formik, "The  formik");

  return (
    <section
      className={`${
        display === 4 ? "flex" : "hidden"
      } px-5 md:px-10 md2:px-28 md3:px-40 text-justify w-full mt-6 sm:mt-10 mb-14 mx-auto text-[0.8em] sm:text-base`}
    >
      <div className="w-full bg-white">
        <p className="font-bold mb-3">Academic details</p>

        <form
          id="academicDetailsForm"
          className="flex flex-col sm:flex-row w-full"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <div className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-3">
              <div className="flex flex-col items-center self-start w-full mr-0 sm:mr-14">
                <div className="mb-6 w-full ">
                  <select
                    id="selectClass"
                    name="selectClass"
                    className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF] "
                    onChange={(e) => {
                      changeSchoolFee(e);
                      formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                    values={formik.values.selectClass}
                    required
                  >
                    <option disabled="disabled" selected="selected">
                      Select class/program of entry{" "}
                    </option>
                    {admissionProgrammes.map((eachClass, index) => {
                      return <option key={index}>{eachClass.name}</option>;
                    })}
                  </select>
                  {fee && (
                    <p className="text-red-600" id="schoolFee" name="schoolFee">
                      {fee === "Choose a programme to see documents required"
                        ? `${fee}`
                        : `Your School Fee is ${fee}`}
                    </p>
                  )}
                </div>
                <div className="mb-6 w-full ">
                  <input
                    type="text"
                    id="prevSchool"
                    name="prevSchool"
                    className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                    placeholder="Name of previous school (optional)"
                    onChange={formik.handleChange}
                    value={formik.values.prevSchool}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="mb-6 w-full">
                  <textarea
                    type="text"
                    id="reason"
                    name="reason"
                    className="shadow-sm pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                    placeholder="Reason for leaving school (optional)"
                    rows="3"
                    onChange={formik.handleChange}
                    value={formik.values.reason}
                    onBlur={formik.handleBlur}
                  ></textarea>
                </div>
                <div className="mb-6 w-full">
                  <textarea
                    type="text"
                    id="health"
                    name="health"
                    className="shadow-sm pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                    placeholder="Any health challenges? Please specify it here"
                    rows="3"
                    onChange={formik.handleChange}
                    value={formik.values.health}
                    onBlur={formik.handleBlur}
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col items-center w-full">
                <p className="text-base font-medium mb-8">Documents required</p>
                <div className=" w-full bg-[#F8FBFF] px-10 py-14">
                  {docs?.map((doc, index) => {
                    console.log(doc, "doc");
                    return (
                      <div className="mb-6 w-full " key={index}>
                        <label htmlFor={doc.name}>
                          <input
                            type="file"
                            id={doc.name}
                            name={"uploads" + index}
                            className="hidden"
                            placeholder={doc.name}
                            accept={doc.fileTypes.map((type) => type)}
                            onChange={(e) => {
                              setDocForUpload(e.currentTarget.files[0]);
                              setDocForUploadIndex(index);
                            }}
                            required
                          />
                          <article
                            className={`shadow-sm flex items-center justify-center h-20 pl-7 border border-[#E7F0FB] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] w-full p-2.5 bg-[#FFF] cursor-pointer`}
                          >
                            <p className="flex flex-col justify-center items-center">
                              <Image
                                width={28}
                                height={28}
                                src="/assets/icons/Vector-upload-icon.svg"
                                className="w-7 h-7"
                                alt="upload icon"
                              />
                              {doc.name}
                            </p>
                          </article>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="w-full flex justify-between">
              <div
                onClick={() => {
                  changeTab(3);
                  removeFromStore();
                }}
              >
                <Button4
                  customStyle="w-full border mr-10 xs:mr-0"
                  py="py-3 px-3"
                  bg={`bg-[#fff] text-[#8EA2BA]
                 `}
                >
                  Previous
                </Button4>
              </div>
              <div
                onClick={() => {
                  console.log(formDetailsStore, "Here i am");
                  submitApplicationToDB();
                }}
              >
                <Button2
                  customStyle="w-[200px]"
                  py="py-3 px-1"
                  bg={`${
                    formik.isValid
                      ? "bg-[#5F9AF2] text-[#E7F0FB]"
                      : "cursor-not-allowed bg-[#293b57] text-[#476697]"
                  }`}
                >
                  Proceed
                </Button2>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EnrollmentAcademicDetails;
