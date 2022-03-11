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
import { useDocUploadStateValue } from "../../../StateProviders/DocUploadProvider";

function EnrollmentAcademicDetails({ admissionProgrammes, display, schoolId }) {
  const [fee, setFee] = useState(
    "Choose a programme to see documents required"
  );
  const [tab, dispatch] = useEnrollmentTabsValue();
  const [formDetailsStore, formDetailsDispatch] = useFormDetailsStateValue();
  const [docUploadStore, docUploadDispatch] = useDocUploadStateValue();
  const [allDocs, setAllDocs] = useState();
  const [docForUpload, setDocForUpload] = useState();
  const [docForUploadIndex, setDocForUploadIndex] = useState();
  console.log(admissionProgrammes, "All admission");
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
          //  DISPATCH STUDENTS DETAILS TO FORM DETAILS STORE
          docUploadDispatch({
            type: "ADD_TO_DOC_STORE",
            item: res.data.url,
          });
          // formik.setFieldValue(`uploads`, []);
        });
    }
    // eslint-disable-next-line
  }, [docForUpload, docForUploadIndex]);

  console.log(docUploadStore, "docUploadStore response");

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

  // Submit application to DB
  const [submitApplicationToDB, { data, loading, error }] = useMutation(
    CREATE_NEW_ADMISSION_APPLICATION,
    {
      variables: {},
    }
  );

  if (error) console.log(JSON.stringify(error, null, 2));
  console.log(data, "Welome bro");

  // INITIAL FORM VALUES
  let initialValues = {
    selectClass: "",
    previousSchoolName: "",
    previousSchoolLeaveReason: "",
    healthIssues: "",
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
        .filter((i) => i.id === class_)
        .map((programme) => {
          console.log(programme.admissionFee, "Met the d");
          return programme.admissionFee;
        });
    }
  };
  console.log(fee, "Feell");

  // REQUIRED allDocs BASED ON CLASS
  const requiredDocs = (class_) => {
    if (class_) {
      return admissionProgrammes
        .filter((i) => i.id === class_)
        .map((programme) => {
          setAllDocs(programme.documents);
        });
    }
  };
  console.log(allDocs, "Met the d");

  // SET SCHOOL FEES
  const changeSchoolFee = (e) => {
    console.log(e.target.value, "School fee idd");
    setFee(schoolFees(e.target.value));
    requiredDocs(e.target.value);
    formik.setFieldValue("programmeId", e.target.value);
    console.log(allDocs, "jamm ffff");
    console.log(fee, "jamm f");
  };

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
                      return (
                        <option key={index} value={eachClass.id}>
                          {eachClass.name}
                        </option>
                      );
                    })}
                  </select>
                  <p className="text-red-600" id="schoolFee" name="schoolFee">
                    {fee === "Choose a programme to see documents required"
                      ? `${fee}`
                      : `Your School Fee is ${fee}`}
                  </p>
                </div>
                <div className="mb-6 w-full ">
                  <input
                    type="text"
                    id="previousSchoolName"
                    name="previousSchoolName"
                    className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                    placeholder="Name of previous school (optional)"
                    onChange={formik.handleChange}
                    value={formik.values.previousSchoolName}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="mb-6 w-full">
                  <textarea
                    type="text"
                    id="previousSchoolLeaveReason"
                    name="previousSchoolLeaveReason"
                    className="shadow-sm pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                    placeholder="Reason for leaving school (optional)"
                    rows="3"
                    onChange={formik.handleChange}
                    value={formik.values.previousSchoolLeaveReason}
                    onBlur={formik.handleBlur}
                  ></textarea>
                </div>
                <div className="mb-6 w-full">
                  <textarea
                    type="text"
                    id="healthIssues"
                    name="healthIssues"
                    className="shadow-sm pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                    placeholder="Any health challenges? Please specify it here"
                    rows="3"
                    onChange={formik.handleChange}
                    value={formik.values.healthIssues}
                    onBlur={formik.handleBlur}
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col items-center w-full">
                <p className="text-base font-medium mb-8">Documents required</p>
                <div className=" w-full bg-[#F8FBFF] px-10 py-14">
                  {allDocs?.map((doc, index) => {
                    console.log(allDocs, "dohhc");
                    return (
                      <div className="mb-6 w-full " key={index}>
                        <label htmlFor={doc.name}>
                          <input
                            type="file"
                            id={doc.name}
                            name={"uploads" + index}
                            className="hidden"
                            placeholder={doc.name}
                            accept="application/pdf"
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
                  console.log(formDetailsStore.state, "Here i am");
                  let data = formDetailsStore.state;
                  let docData = docUploadStore.state;
                  let myObj = {
                    parentDetails: {},
                    studentDetails: {},
                  };
                  Object.keys(data[0]).forEach((key) => {
                    myObj.studentDetails[key] = data[0][key];
                  });
                  Object.keys(data[1]).forEach((key) => {
                    myObj.parentDetails[key] = data[1][key];
                  });
                  console.log(data[2], "data[2]");
                  Object.keys(data[2]).forEach((key) => {
                    myObj[key] = data[2][key];
                  });

                  console.log("my data hhh --->", myObj);

                  // submitApplicationToDB(formDetailsStore.state);
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
