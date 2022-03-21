import Image from "next/image";
import React, { useState, useEffect } from "react";
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
import { useRouter } from "next/router";
import styles from "../../../../styles/MiniLoader.module.css";
import MessageModal from "../../Modals/MessageModal";

function EnrollmentAcademicDetails({
  admissionProgrammes,
  display,
  schoolId,
  prefix,
  name,
  admissionSubAccountId,
  logoUrl,
}) {
  // Initialize the next router
  const router = useRouter();
  const [fee, setFee] = useState(
    "Choose a programme to see documents required /"
  );
  const [tab, dispatch] = useEnrollmentTabsValue();
  const [formDetailsStore, formDetailsDispatch] = useFormDetailsStateValue();
  const [docUploadStore, docUploadDispatch] = useDocUploadStateValue();
  const [allDocs, setAllDocs] = useState();
  const [docForUpload, setDocForUpload] = useState();
  const [classId, setClassId] = useState();
  const [docForUploadName, setDocForUploadName] = useState();
  const [docForUploadIndex, setDocForUploadIndex] = useState();
  const [formSubmitMessage, setFormSubmitMessage] = useState();
  const [formSubmitStatus, setFormSubmitStatus] = useState();
  const [displayMessageModal, setDisplayMessageModal] = useState(false);

  const [loaderState, setLoaderState] = useState({});
  const [uploadMessage, setUploadMessage] = useState({});
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
      setLoaderState({ ...loaderState, [docForUploadIndex]: true });
      setUploadMessage({
        ...uploadMessage,
        [docForUploadIndex]: "Uploading document...",
      });
      console.log(uploadMessage, "upload message");

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
            item: {
              name: docForUploadName,
              fileUrl: res.data.url,
              fileType: "PDF",
            },
          });
          setLoaderState((oldLoaderState) => ({
            ...oldLoaderState,
            [docForUploadIndex]: false,
          }));
          setUploadMessage({
            ...uploadMessage,
            [docForUploadIndex]: "Document uploaded successfully",
          });
        })
        .catch((err) => {
          setLoaderState((oldLoaderState) => ({
            ...oldLoaderState,
            [docForUploadIndex]: false,
          }));
          setUploadMessage({
            ...uploadMessage,
            [docForUploadIndex]: "Error uploading document",
          });
        });
    }
    // eslint-disable-next-line
  }, [docForUpload, docForUploadName]);
  console.log(uploadMessage, "upload all message");

  console.log(docUploadStore, "docUploadStore? response");

  // Flutterwave Script tag
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://checkout.flutterwave.com/v3.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
    CREATE_NEW_ADMISSION_APPLICATION
  );

  if (error) console.log(JSON.stringify(error, null, 2));
  console.log(
    data?.createNewAdmissionApplication.applicationNumber,
    "Welome bro"
  );

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

  // USING FORMIK PACKAGE FOR FORM HANDLING
  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  // GETS THE Application fEES BASED ON CLASS
  const applicationFees = (class_) => {
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

  // GETS THE REQUIRED Docs REQUIRED FOR THE APLLICATION BASED ON CLASS
  const requiredDocs = (class_) => {
    if (class_) {
      return admissionProgrammes
        .filter((i) => i.id === class_)
        .map((programme) => {
          console.log(admissionProgrammes, "so the d");
          setAllDocs(programme.documents);
        });
    }
  };
  console.log(allDocs, "Met the d");

  // SET Application fEES
  const changeApplicationFee = (e) => {
    console.log(e.target.value, "Application fee idd");
    setFee(applicationFees(e.target.value));
    requiredDocs(e.target.value);
    setClassId(e.target.value);
    formik.setFieldValue("programmeId", e.target.value);

    //  clear all the upload messages
    setUploadMessage({});
    setDocForUpload();
    setDocForUploadName();
    setDocForUploadIndex();
    // setAllDocs();
    console.log(allDocs, "jamm ffff");
    console.log(fee, "jamm f");
  };

  console.log(formDetailsStore, "The Store form data");
  console.log(formik.values, "The Parent form data");
  console.log(formik, "The  formik");

  // Flutter wave Payment
  function makePayment(details, id) {
    // convert the array to base64
    const base64Payload = btoa(JSON.stringify(details));

    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-033a6e0d3901df8b6701196398444fd5-X",
      tx_ref: new Date().getTime(),
      amount: fee,
      currency: "NGN",
      payment_options: "card, banktransfer, ussd",
      meta: {
        purpose: "admission",
        applicationJsonPayload: base64Payload,
      },
      customer: {
        email: details.parentDetails.email,
        phone_number: details.parentDetails.phoneNumber,
        name:
          details.studentDetails.firstName +
          " " +
          details.studentDetails.lastName,
      },
      subaccounts: [
        {
          id: admissionSubAccountId,
        },
      ],
      customizations: {
        title: name,
        description: `Payment for Application to ${details.selectClass}`,
        logo: `${
          logoUrl
            ? logoUrl
            : "https://res.cloudinary.com/ugomatt/image/upload/v1647277984/cloudnotte_icon_soqc6y.png"
        }`,
      },

      callback: function (payment) {
        console.log(payment.id);
        setDisplayMessageModal(true);
        setFormSubmitStatus("success");
      },
      onclose: function (incomplete) {
        if (incomplete === true) {
          alert("Payment cancelled");
        }
      },
    });
  }

  return (
    <section
      className={`${
        display === 4 ? "flex" : "hidden"
      } px-5 md:px-10 md2:px-28 md3:px-40 text-justify w-full mt-6 sm:mt-10 mb-14 mx-auto text-[0.8em] sm:text-base`}
    >
      {/* <Loader display={loaderState} /> */}
      <div className="w-full bg-white">
        <h2 className="font-bold mb-3">Academic details</h2>

        <form
          id="academicDetailsForm"
          className="flex flex-col sm:flex-row w-full"
          onSubmit={(e) => {
            e.preventDefault();

            // push the academic details values into the form store
            pushToStore(formik.values);
            console.log(formik.values, "Oboy see values");

            // Check if there is an application fee, submit if true else redirect to payment portal

            console.log(formDetailsStore.state, "Here i am");
            let formdata = formDetailsStore.state;
            console.log(data, "our data");
            let docData = docUploadStore?.state;
            let myObj = {
              parentDetails: {},
              studentDetails: {},
              schoolId: "",
              healthIssues: "",
              previousSchoolLeaveReason: "",
              previousSchoolName: "",
              programmeId: "",
              documents: [],
            };
            Object.keys(formdata[0]).forEach((key) => {
              if (key !== "Passport") {
                if (key !== "dateOfBirth") {
                  myObj.studentDetails[key] = formdata[0][key];
                } else {
                  // format the date of birth
                  const unformattedDate = formdata[0][key];
                  const formattedDate =
                    unformattedDate.split("/").reverse().join("-") +
                    "T00:00:00Z";

                  myObj.studentDetails[key] = formattedDate;
                  console.log(myObj.studentDetails[key], "date of birth");
                }
              }
            });
            Object.keys(formdata[1]).forEach((key) => {
              if (key !== "Passport") {
                myObj.parentDetails[key] = formdata[1][key];
              }
            });
            myObj.schoolId = schoolId;
            myObj.healthIssues = formdata[2].healthIssues;
            myObj.previousSchoolName = formdata[2].previousSchoolName;
            myObj.previousSchoolLeaveReason =
              formdata[2].previousSchoolLeaveReason;
            myObj.programmeId = formdata[2].programmeId;
            myObj.documents = docData;

            // If there is a fee, make payment

            fee > 0 &&
              makePayment(
                myObj,
                data?.createNewAdmissionApplication.applicationNumber
              );
            console.log(data, "uni data");
            formik.resetForm();

            // if there is no fee, submit form
            fee <= 0 &&
              submitApplicationToDB({
                variables: { submitVar: myObj },

                onCompleted: (data) => {
                  // CALL THE CREATE_NEW_ADMISSION_APPLICATION MUTATION
                  console.log(data, "lo data");
                  setDisplayMessageModal(true);
                  setFormSubmitStatus("success");
                },
                onError: (error) => {
                  console.log(error);
                  setDisplayMessageModal(true);
                  setFormSubmitStatus("error");
                },
              });
          }}
        >
          <MessageModal
            message={formSubmitMessage}
            status={formSubmitStatus}
            display={displayMessageModal}
            onCallMessageModal={!displayMessageModal}
            prefix={prefix}
          />
          <div className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-3">
              <div className="flex flex-col items-center self-start w-full mr-0 sm:mr-14">
                <div className="mb-6 w-full ">
                  <select
                    id="selectClass"
                    name="selectClass"
                    className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF] "
                    onChange={(e) => {
                      changeApplicationFee(e);
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
                        <option key={eachClass.id} value={eachClass.id}>
                          {eachClass.name}
                        </option>
                      );
                    })}
                  </select>
                  <p
                    className="text-red-600 pl-6 pt-5"
                    id="applicationFee"
                    name="applicationFee"
                  >
                    {fee === "Choose a programme to see documents required"
                      ? `${fee}`
                      : `Your Application fee is ${fee}`}
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
                      <div className="mb-6 w-full " key={doc.name + classId}>
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
                              setDocForUploadName(doc.name);
                              setDocForUploadIndex(index);
                            }}
                            required
                          />
                          <article
                            className={`shadow-sm flex items-center justify-center h-20 pl-7 border border-[#E7F0FB] text-gray-900 text-sm rounded-[5px] outline-none bg-white focus:ring-[#5f9af2] focus:border-[#5f9af2] w-full p-2.5 cursor-pointer relative ${
                              loaderState[index]
                                ? styles.mini_loader_inner2
                                : null
                            }`}
                          >
                            <p className="flex flex-col justify-center items-center">
                              {/* Upload status icons */}
                              {uploadMessage[index]?.includes("success") ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-7 w-7 text-green-500"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={1}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              ) : uploadMessage[index]?.includes("Error") ? (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-7 w-7 text-red-500"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={1}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              ) : (
                                <Image
                                  width={28}
                                  height={28}
                                  src="/assets/icons/Vector-upload-icon.svg"
                                  className="w-7 h-7"
                                  alt="upload icon"
                                />
                              )}
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
              <div>
                <Button2
                  customStyle="w-[200px]"
                  py="py-3 px-1"
                  bg={`${
                    formik.isValid && uploadMessage !== {}
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
