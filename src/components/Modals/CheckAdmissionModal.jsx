import React, { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import Button from "./Button";
import Link from "next/link";
import Loader from "../Loader";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

function CheckAdmissionModal(props) {
  const [loader, setLoader] = useState(false);

  const router = useRouter();

  // Set loader false
  loader &&
    setTimeout(() => {
      setLoader(false);
      props.onCallChangeLocationModal;
    }, 3000);

  // INITIAL FORM VALUES
  let initialValues = {
    admissionNo: "",
  };

  // Yup validation
  const validationSchema = Yup.object({
    admissionNo: Yup.string().required("This field is required"),
  });

  // USING FORMIK PACKAGE FOR FORM HANDLING
  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  return (
    <section
      className={`w-full h-screen bg-[#00000065] fixed inset-0 z-30 flex items-center  justify-center ${
        props.display ? "flex" : "hidden"
      } `}
      onClick={props.onCallCheckAdmissionModal}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div
          className="w-fit h-fit border rounded-2xl bg-white px-6 py-6 "
          onClick={(e) => e.stopPropagation()}
        >
          <article className="w-full flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#F44336"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="font-bold">Check Admission Status</p>
          </article>
          <div className="flex flex-col justify-center items-center mb-5">
            <article className="relative mb-1">
              <MdPersonOutline
                style={{
                  fontWeight: "100",
                  fontSize: "20px",
                  color: "#8EA2BA",
                  position: "absolute",
                  left: "15px",
                  top: "14px",
                }}
              />
              <input
                type="text"
                id="admissionNo"
                name="admissionNo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                value={formik.values.admissionNo}
                className="shadow-sm h-12 pl-10 border border-[#CFDBEA] text-base text-gray-900 rounded-full outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-[260px]  xs:w-[320px] p-2.5 bg-[#F8FBFF] placeholder:text-xs"
                placeholder="Enter your admission number here"
              />
            </article>
            {formik.touched.admissionNo && formik.errors.admissionNo && (
              <p className="text-xs text-red-600">
                {formik.errors.admissionNo}
              </p>
            )}
          </div>

          {formik.isValid && formik.values.admissionNo !== "" ? (
            <Link
              href="/schools/admission_status/[admissionId]"
              as={`/schools/admission_status/${formik.values.admissionNo}`}
              passHref
            >
              <a
                className="w-full flex items-center justify-center"
                onClick={() =>
                  formik.values.admissionNo !== "" &&
                  formik.isValid &&
                  setLoader(true)
                }
              >
                <Button
                  borderRaduis="rounded-full"
                  px="px-5 w-full sm:w-[200px]"
                  py="py-3"
                  bg={`${
                    formik.isValid
                      ? "bg-[#5f9af2] text-[#E7F0FB]"
                      : "cursor-not-allowed bg-[#293b57] text-[#476697]"
                  }`}
                >
                  {" "}
                  Check Status
                </Button>
              </a>
            </Link>
          ) : (
            <a
              className="w-full flex items-center justify-center"
              onClick={() =>
                formik.values.admissionNo !== "" &&
                formik.isValid &&
                setLoader(true)
              }
            >
              <Button
                borderRaduis="rounded-full"
                px="px-5 w-full sm:w-[200px]"
                py="py-3"
                bg={`${
                  formik.isValid
                    ? "bg-[#5f9af2] text-[#E7F0FB]"
                    : "cursor-not-allowed bg-[#293b57] text-[#476697]"
                }`}
              >
                Check Status
              </Button>
            </a>
          )}
        </div>
      </form>
      <Loader display={loader} message="Checking Admission Status" />
    </section>
  );
}

export default CheckAdmissionModal;
