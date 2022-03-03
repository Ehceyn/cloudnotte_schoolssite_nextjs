import React, { useState } from "react";
import { useFormik } from "formik";
import Image from "next/image";
import { Button2 } from "../EnrollmentLandingPage/Button";

function EnrollmentPageStudentDetails() {
  let initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    sex: "",
    dob: "",
    country: "",
    state: "",
    lga: "",
    address: "",
  };

  let onSubmit = (values) => {
    console.log("Form data", values);
  };

  let validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\. [A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid Email";
    }
    if (!values.sex) {
      errors.sex = "Required";
    }
    if (!values.dob) {
      errors.sex = "Required";
    }
    if (!values.country) {
      errors.country = "Required";
    }
    if (!values.state) {
      errors.state = "Required";
    }
    if (!values.lga) {
      errors.lga = "Required";
    }
    if (!values.address) {
      errors.address = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log(formik.values, "The student form data");

  // FUNCTION TO COLLECT FORM INPUT VALUES ON INPUT VALUE CHANGE
  // function formik.handleChange(event) {
  //   const { name, value } = event.target;

  //   setformik.values((prevInputs) => {
  //     return {
  //       ...prevInputs,
  //       [name]: value,
  //     };
  //   });
  //   console.log(formik.values, "The student form data");
  // }

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
                  id="firstName"
                  name="firstName"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="First name"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  required
                />
                {formik.errors.firstName && (
                  <p className="text-xs text-red-600">
                    {formik.errors.firstName}
                  </p>
                )}
              </div>
              <div className="mb-6 w-full sm:w-1/2">
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Middle name"
                  onChange={formik.handleChange}
                  value={formik.values.middleName}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Last name"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  required
                />
                {formik.errors.lastName && (
                  <p className="text-xs text-red-600">
                    {formik.errors.lastName}
                  </p>
                )}
              </div>
              <div className=" w-full mb-6 sm:w-1/2">
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Phone number"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  required
                />
                {formik.errors.phoneNumber && (
                  <p className="text-xs text-red-600">
                    {formik.errors.phoneNumber}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Email address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  required
                />
                {formik.errors.email && (
                  <p className="text-xs text-red-600">{formik.errors.email}</p>
                )}
              </div>
              <div className="mb-6 w-full sm:w-1/2">
                <input
                  type="text"
                  id="sex"
                  name="sex"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Sex"
                  onChange={formik.handleChange}
                  value={formik.values.sex}
                  required
                />
                {formik.errors.sex && (
                  <p className="text-xs text-red-600">{formik.errors.sex}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Date of birth"
                  onChange={formik.handleChange}
                  value={formik.values.dob}
                  required
                />
                {formik.errors.dob && (
                  <p className="text-xs text-red-600">{formik.errors.dob}</p>
                )}
              </div>
              <div className="mb-6 w-full sm:w-1/2">
                <input
                  type="name"
                  id="country"
                  name="country"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Country"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                  required
                />
                {formik.errors.country && (
                  <p className="text-xs text-red-600">
                    {formik.errors.country}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="State"
                  onChange={formik.handleChange}
                  value={formik.values.state}
                  required
                />
                {formik.errors.state && (
                  <p className="text-xs text-red-600">{formik.errors.state}</p>
                )}
              </div>
              <div className="mb-6 w-full sm:w-1/2">
                <input
                  type="text"
                  id="lga"
                  name="lga"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="LGA"
                  onChange={formik.handleChange}
                  value={formik.values.lga}
                  required
                />
                {formik.errors.lga && (
                  <p className="text-xs text-red-600">{formik.errors.lga}</p>
                )}
              </div>
            </div>
            <div className="mb-6 w-full">
              <textarea
                type="text"
                id="address"
                name="address"
                className="shadow-sm pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                placeholder="Address"
                onChange={formik.handleChange}
                value={formik.values.address}
                required
                rows="3"
              ></textarea>
              {formik.errors.address && (
                <p className="text-xs text-red-600">{formik.errors.address}</p>
              )}
            </div>
            <div className="w-full flex justify-end">
              <Button2
                customStyle="w-full sm:w-[250px]"
                py="py-3"
                bg="bg-[#5F9AF2] text-[#E7F0FB]"
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
