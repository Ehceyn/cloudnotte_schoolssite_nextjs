import React, { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import Button from "./Button";
import Link from "next/link";
import Loader from "../Loader";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

function GetStudentDataModal(props) {
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

  // FORMIK ONSUBMIT
  const onSubmit = (values) => {
    if (values.admissionNo !== "" && formik.isValid) {
      //log("values: ", values.admissionNo);
      router.push(`/schools/students_info/${values.admissionNo}`);
    } else {
      null;
    }
  };

  // Yup validation
  const validationSchema = Yup.object({
    admissionNo: Yup.string().required("This field is required"),
  });

  // USING FORMIK PACKAGE FOR FORM HANDLING
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <section
      className={`w-full h-screen bg-[#00000065] fixed top-0 bottom-0 z-30 flex items-center  justify-center ${
        props.display ? "flex" : "hidden"
      } `}
      onClick={props.onCallGetStudentDataModal}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
      >
        <div
          className="w-fit h-fit border rounded-2xl bg-white px-6 py-6 "
          onClick={(e) => e.stopPropagation()}
        >
          <article className="w-full flex justify-center mb-4">
            <p className="font-bold">Print Admission Slip</p>
          </article>
          <div className="flex flex-col justify-center items-center mb-5">
            <article className="relative mb-1">
              <MdPersonOutline
                style={{
                  fontWeight: "100",
                  fontSize: "30px",
                  color: "#8EA2BA",
                  position: "absolute",
                  left: "15px",
                  top: "8px",
                }}
              />
              <input
                type="text"
                id="admissionNo"
                name="admissionNo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.admissionNo}
                className="shadow-sm h-12 pl-12 border border-[#CFDBEA] text-base text-gray-900 rounded-full outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-[260px]  xs:w-[320px] p-2.5 bg-[#F8FBFF]"
                placeholder="Student admission number"
                required
              />
            </article>
            {formik.touched.admissionNo && formik.errors.admissionNo && (
              <p className="text-xs text-red-600">
                {formik.errors.admissionNo}
              </p>
            )}
          </div>
          <article
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
              Proceed{" "}
            </Button>
          </article>
        </div>
      </form>
      <Loader display={loader} message="Checking Admission Information" />
    </section>
  );
}

export default GetStudentDataModal;
