import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Image from "next/image";
import { Button2 } from "../EnrollmentLandingPage/Button";
import { useEnrollmentTabsValue } from "../../../StateProviders/EnrollmentTabsProvider";
import { useFormDetailsStateValue } from "../../../StateProviders/FormDetailsProvider";

function EnrollmentPageParentDetails() {
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
    prt_firstName: "",
    prt_middleName: "",
    prt_lastName: "",
    prt_phoneNumber: "",
    prt_email: "",
    prt_sex: "",
    prt_dob: "",
    prt_country: "",
    prt_state: "",
    prt_lga: "",
    prt_address: "",
  };

  let onSubmit = (values) => {
    console.log("Form data", values);
  };

  let validate = (values) => {
    const errors = {};
    if (!values.prt_firstName) {
      errors.prt_firstName = "This field is required";
    }
    if (!values.prt_lastName) {
      errors.prt_lastName = "This field is required";
    }
    if (!values.prt_phoneNumber) {
      errors.prt_phoneNumber = "This field is required";
    }
    if (!values.prt_email) {
      errors.prt_email = "This field is required";
    } else if (
      !String(values.prt_email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      errors.prt_email = "Invalid Email";
    }
    if (!values.prt_sex) {
      errors.prt_sex = "This field is required";
    }
    if (!values.prt_dob) {
      errors.prt_dob = "This field is required";
    }
    if (!values.prt_country) {
      errors.prt_country = "This field is required";
    }
    if (!values.prt_state) {
      errors.prt_state = "This field is required";
    }
    if (!values.prt_lga) {
      errors.prt_lga = "This field is required";
    }
    if (!values.prt_address) {
      errors.prt_address = "This field is required";
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
                  id="prt_firstName"
                  name="prt_firstName"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="t name"
                  onChange={formik.handleChange}
                  value={formik.values.prt_firstName}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.prt_firstName &&
                  formik.errors.prt_firstName && (
                    <p className="text-xs text-red-600">
                      {formik.errors.prt_firstName}
                    </p>
                  )}
              </div>
              <div className="mb-6 w-full sm:w-1/2">
                <input
                  type="text"
                  id="prt_middleName"
                  name="prt_middleName"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="le name"
                  onChange={formik.handleChange}
                  value={formik.values.prt_middleName}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="text"
                  id="prt_lastName"
                  name="prt_lastName"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder=" name"
                  onChange={formik.handleChange}
                  value={formik.values.prt_lastName}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.prt_lastName && formik.errors.prt_lastName && (
                  <p className="text-xs text-red-600">
                    {formik.errors.prt_lastName}
                  </p>
                )}
              </div>
              <div className=" w-full mb-6 sm:w-1/2">
                <input
                  type="tel"
                  id="prt_phoneNumber"
                  name="prt_phoneNumber"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="e number"
                  onChange={formik.handleChange}
                  value={formik.values.prt_phoneNumber}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.prt_phoneNumber &&
                  formik.errors.prt_phoneNumber && (
                    <p className="text-xs text-red-600">
                      {formik.errors.prt_phoneNumber}
                    </p>
                  )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="prt_email"
                  id="prt_email"
                  name="prt_email"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Email prt_address"
                  onChange={formik.handleChange}
                  value={formik.values.prt_email}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.prt_email && formik.errors.prt_email && (
                  <p className="text-xs text-red-600">
                    {formik.errors.prt_email}
                  </p>
                )}
              </div>
              <div className="mb-6 w-full sm:w-1/2">
                <input
                  type="text"
                  id="prt_sex"
                  name="prt_sex"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Sex"
                  onChange={formik.handleChange}
                  value={formik.values.prt_sex}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.prt_sex && formik.errors.prt_sex && (
                  <p className="text-xs text-red-600">
                    {formik.errors.prt_sex}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="text"
                  id="prt_dob"
                  name="prt_dob"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder=" of birth"
                  onChange={formik.handleChange}
                  value={formik.values.prt_dob}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.prt_dob && formik.errors.prt_dob && (
                  <p className="text-xs text-red-600">
                    {formik.errors.prt_dob}
                  </p>
                )}
              </div>
              <div className="mb-6 w-full sm:w-1/2">
                <input
                  type="name"
                  id="prt_country"
                  name="prt_country"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Country"
                  onChange={formik.handleChange}
                  value={formik.values.prt_country}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.prt_country && formik.errors.prt_country && (
                  <p className="text-xs text-red-600">
                    {formik.errors.prt_country}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="text"
                  id="prt_state"
                  name="prt_state"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="State"
                  onChange={formik.handleChange}
                  value={formik.values.prt_state}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.prt_state && formik.errors.prt_state && (
                  <p className="text-xs text-red-600">
                    {formik.errors.prt_state}
                  </p>
                )}
              </div>
              <div className="mb-6 w-full sm:w-1/2">
                <input
                  type="text"
                  id="prt_lga"
                  name="prt_lga"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="LGA"
                  onChange={formik.handleChange}
                  value={formik.values.prt_lga}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.prt_lga && formik.errors.prt_lga && (
                  <p className="text-xs text-red-600">
                    {formik.errors.prt_lga}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-6 w-full">
              <textarea
                type="text"
                id="prt_address"
                name="prt_address"
                className="shadow-sm pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                placeholder="Address"
                onChange={formik.handleChange}
                value={formik.values.prt_address}
                required
                onBlur={formik.handleBlur}
                rows="3"
              ></textarea>
              {formik.touched.prt_address && formik.errors.prt_address && (
                <p className="text-xs text-red-600">
                  {formik.errors.prt_address}
                </p>
              )}
            </div>
            <div
              className="w-full flex justify-end"
              onClick={() => {
                formik.isValid && pushToStore(formik.values);
                changeTab(3);
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
                Proceed to Academic details
              </Button2>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EnrollmentPageParentDetails;
