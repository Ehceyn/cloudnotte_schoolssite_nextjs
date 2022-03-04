import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Image from "next/image";
import { Button2, Button3 } from "../EnrollmentLandingPage/Button";
import { useEnrollmentTabsValue } from "../../../StateProviders/EnrollmentTabsProvider";
import { useFormDetailsStateValue } from "../../../StateProviders/FormDetailsProvider";
import * as Yup from "yup";

function EnrollmentPageStudentDetails({ display }) {
  const [tab, dispatch] = useEnrollmentTabsValue();
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [formDetailsStore, formDetailsDispatch] = useFormDetailsStateValue();

  const handleImageChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };

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
      item: { id: 0, appendedForm: formdetails },
    });
  };

  // INITIAL FORM VALUES
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
    std_Passport: null,
  };

  // FORMIK ONSUBMIT
  const onSubmit = (values) => {
    console.log("values: ", values);
    pushToStore(values);
    changeTab(3);
  };

  // FORMIK VALIDATION SCHEMA WITH YUP
  // const FILE_SIZE=
  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
  const validationSchema = Yup.object({
    std_firstName: Yup.string().required("This field is required"),
    std_middleName: Yup.string().required("This field is required"),
    std_lastName: Yup.string().required("This field is required"),
    std_phoneNumber: Yup.string().required("This field is required"),
    std_email: Yup.string()
      .email("Invalid Email")
      .required("This field is required"),
    std_sex: Yup.string().required("This field is required"),
    std_dob: Yup.string().required("This field is required"),
    std_country: Yup.string().required("This field is required"),
    std_state: Yup.string().required("This field is required"),
    std_lga: Yup.string().required("This field is required"),
    std_address: Yup.string().required("This field is required"),
    // std_Passport: Yup.mixed().test('fileSize', "File Size is too large", value => value.size <= FILE_SIZE) .test('fileType', "Unsupported File Format", value => SUPPORTED_FORMATS.includes(value.type) )
  });

  // USING FORMIK PACKAGE FOR FORM HANDLING
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log(formDetailsStore, "The Store form data");
  console.log(formik.values, "The student form data");
  console.log(formik, "The  formik");

  return (
    <section
      className={`${
        display === 2 ? "flex" : "hidden"
      } px-5 md:px-10 md2:px-28 md3:px-40 text-justify w-full mt-6 sm:mt-10 mb-14 mx-auto text-[0.8em] sm:text-base`}
    >
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
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <div className="flex flex-col items-center justify-center sm:justify-start mr-0 mt-5 sm:mr-10 sm:mt-7  w-full  sm:w-[200px] mb-7 sm:mb-0">
            <label htmlFor="std_Passport">
              {image.preview ? (
                <Image
                  width={100}
                  height={100}
                  src={image.preview}
                  objectFit="contain"
                  className="w-[100px] h-[100px] mb-3 sm:w-[150px] sm:h-[150px] cursor-pointer object-contain bg-gray-400 rounded-[50%] sm:border"
                  alt="std_Passport"
                />
              ) : (
                <Image
                  width={100}
                  height={100}
                  src="/assets/images/school-profile-img.png"
                  objectFit="contain"
                  className="w-[100px] h-[100px] mb-3 sm:w-[150px] sm:h-[150px] cursor-pointer object-contain bg-gray-400 rounded-[50%] sm:border"
                  alt=""
                />
              )}
            </label>
            {/* IMAGE INPUT */}
            <input
              type="file"
              id="std_Passport"
              name="std_Passport"
              className="hidden"
              required
              onChange={(e) => {
                formik.setFieldValue("std_Passport", e.target.files[0]);
                handleImageChange(e);
              }}
            />
            <label htmlFor="std_Passport">
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
                  placeholder="Email address"
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
                <select
                  id="std_sex"
                  name="std_sex"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF] "
                  onChange={formik.handleChange}
                  value={formik.values.std_sex}
                  required
                  onBlur={formik.handleBlur}
                >
                  <option selected="selected">Male</option>
                  <option>Female</option> <option>Other</option>
                </select>
              </div>
              {formik.touched.std_sex && formik.errors.std_sex && (
                <p className="text-xs text-red-600">{formik.errors.std_sex}</p>
              )}
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
                  placeholder="Country"
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
                  placeholder="State"
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
                  placeholder="LGA"
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
                placeholder="Address"
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
            <div className="w-full flex justify-end">
              <Button2
                customStyle="w-full sm:w-[250px]"
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
        </form>
      </div>
    </section>
  );
}

export default EnrollmentPageStudentDetails;
