import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Image from "next/image";
import { Button2 } from "../EnrollmentLandingPage/Button";
import { useEnrollmentTabsValue } from "../../../StateProviders/EnrollmentTabsProvider";
import { useFormDetailsStateValue } from "../../../StateProviders/FormDetailsProvider";

function EnrollmentPageStudentDetails() {
  const [tab, dispatch] = useEnrollmentTabsValue();

  const [formDetailsStore, formDetailsDispatch] = useFormDetailsStateValue();

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

  let initialValues = {
    std_firstName: "",
    std_middleName: "",
    std_lastName: "",
    std_phoneNumber: "",
    std_email: "",
    std_sex: "",
    std_dob: "",
    std_country: "",
    std_state: "",
    std_lga: "",
    std_address: "",
  };

  let onSubmit = (values) => {
    console.log("Form data", values);
  };

  let validate = (values) => {
    const errors = {};
    if (!values.std_firstName) {
      errors.std_firstName = "This field is required";
    }
    if (!values.std_lastName) {
      errors.std_lastName = "This field is required";
    }
    if (!values.std_phoneNumber) {
      errors.std_phoneNumber = "This field is required";
    }
    if (!values.std_email) {
      errors.std_email = "This field is required";
    } else if (
      !String(values.std_email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      errors.std_email = "Invalid Email";
    }
    if (!values.std_sex) {
      errors.std_sex = "This field is required";
    }
    if (!values.std_dob) {
      errors.std_dob = "This field is required";
    }
    if (!values.std_country) {
      errors.std_country = "This field is required";
    }
    if (!values.std_state) {
      errors.std_state = "This field is required";
    }
    if (!values.std_lga) {
      errors.std_lga = "This field is required";
    }
    if (!values.std_address) {
      errors.std_address = "This field is required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log(formDetailsStore, "The Store form data");
  console.log(formik.values, "The student form data");
  console.log(formik, "The  formik");

  return (
    <section className="flex px-5 md:px-10 md2:px-28 md3:px-40 text-justify w-full mt-6 sm:mt-10 mb-14 mx-auto text-[0.8em] sm:text-base">
      <div className="w-full bg-white">
        <p className="font-bold mb-3">Student&apos;s details</p>
        {/* <p className="text-xs sm:text-sm font-medium ">
          Do you have a CloudNotte Student ID/Username? <span>Click here</span>
        </p>
        <p className="text-xs font-normal sm:font-medium mb-5">
          This won&apos;t require you entering your information again.
        </p> */}
        <form
          className="flex flex-col sm:flex-row w-full"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col items-center justify-center sm:justify-start mr-0 mt-5 sm:mr-10 sm:mt-7  w-full  sm:w-[200px] mb-7 sm:mb-0">
            <label htmlFor="studentPassport">
              <Image
                width={100}
                height={100}
                src="/assets/images/school-profile-img.png"
                objectFit="contain"
                className="w-[100px] h-[100px] mb-3 sm:w-[150px] sm:h-[150px] cursor-pointer object-contain bg-gray-400 rounded-[50%] sm:border"
                alt=""
              />
            </label>
            {/* IMAGE INPUT */}
            {/* <input
              type="file"
              id="studentPassport"
              name="studentPassport"
              className="hidden"
              required
            /> */}
            <label htmlFor="studentPassport">
              <span className="cursor-pointer">Upload Passport</span>
            </label>
          </div>
          <div className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="text"
                  id="std_firstName"
                  name="std_firstName"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="First name"
                  onChange={formik.handleChange}
                  value={formik.values.std_firstName}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.std_firstName &&
                  formik.errors.std_firstName && (
                    <p className="text-xs text-red-600">
                      {formik.errors.std_firstName}
                    </p>
                  )}
              </div>
              <div className="mb-6 w-full sm:w-1/2">
                <input
                  type="text"
                  id="std_middleName"
                  name="std_middleName"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Middle name"
                  onChange={formik.handleChange}
                  value={formik.values.std_middleName}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="text"
                  id="std_lastName"
                  name="std_lastName"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Last name"
                  onChange={formik.handleChange}
                  value={formik.values.std_lastName}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.std_lastName && formik.errors.std_lastName && (
                  <p className="text-xs text-red-600">
                    {formik.errors.std_lastName}
                  </p>
                )}
              </div>
              <div className=" w-full mb-6 sm:w-1/2">
                <input
                  type="tel"
                  id="std_phoneNumber"
                  name="std_phoneNumber"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Phone number"
                  onChange={formik.handleChange}
                  value={formik.values.std_phoneNumber}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.std_phoneNumber &&
                  formik.errors.std_phoneNumber && (
                    <p className="text-xs text-red-600">
                      {formik.errors.std_phoneNumber}
                    </p>
                  )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="std_email"
                  id="std_email"
                  name="std_email"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="std_Email std_address"
                  onChange={formik.handleChange}
                  value={formik.values.std_email}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.std_email && formik.errors.std_email && (
                  <p className="text-xs text-red-600">
                    {formik.errors.std_email}
                  </p>
                )}
              </div>
              <div className="mb-6 w-full sm:w-1/2">
                <input
                  type="text"
                  id="std_sex"
                  name="std_sex"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="std_Sex"
                  onChange={formik.handleChange}
                  value={formik.values.std_sex}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.std_sex && formik.errors.std_sex && (
                  <p className="text-xs text-red-600">
                    {formik.errors.std_sex}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="text"
                  id="std_dob"
                  name="std_dob"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Date of birth"
                  onChange={formik.handleChange}
                  value={formik.values.std_dob}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.std_dob && formik.errors.std_dob && (
                  <p className="text-xs text-red-600">
                    {formik.errors.std_dob}
                  </p>
                )}
              </div>
              <div className="mb-6 w-full sm:w-1/2">
                <input
                  type="name"
                  id="std_country"
                  name="std_country"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="std_Country"
                  onChange={formik.handleChange}
                  value={formik.values.std_country}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.std_country && formik.errors.std_country && (
                  <p className="text-xs text-red-600">
                    {formik.errors.std_country}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="text"
                  id="std_state"
                  name="std_state"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="std_State"
                  onChange={formik.handleChange}
                  value={formik.values.std_state}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.std_state && formik.errors.std_state && (
                  <p className="text-xs text-red-600">
                    {formik.errors.std_state}
                  </p>
                )}
              </div>
              <div className="mb-6 w-full sm:w-1/2">
                <input
                  type="text"
                  id="std_lga"
                  name="std_lga"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="std_LGA"
                  onChange={formik.handleChange}
                  value={formik.values.std_lga}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.std_lga && formik.errors.std_lga && (
                  <p className="text-xs text-red-600">
                    {formik.errors.std_lga}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-6 w-full">
              <textarea
                type="text"
                id="std_address"
                name="std_address"
                className="shadow-sm pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                placeholder="std_Address"
                onChange={formik.handleChange}
                value={formik.values.std_address}
                required
                onBlur={formik.handleBlur}
                rows="3"
              ></textarea>
              {formik.touched.std_address && formik.errors.std_address && (
                <p className="text-xs text-red-600">
                  {formik.errors.std_address}
                </p>
              )}
            </div>
            <div
              className="w-full flex justify-end"
              onClick={() => {
                formik.isValid && pushToStore(formik.values) && changeTab(3);
              }}
            >
              <Button2
                customStyle="w-full sm:w-[250px]"
                py="py-3"
                bg={`${
                  formik.isValid
                    ? "bg-[#5F9AF2] text-[#E7F0FB]"
                    : "cursor-not-allowed bg-[#293b57] text-[#476697]"
                }`}
              >
                Proceed to Parent&apos;s details
              </Button2>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EnrollmentPageStudentDetails;
