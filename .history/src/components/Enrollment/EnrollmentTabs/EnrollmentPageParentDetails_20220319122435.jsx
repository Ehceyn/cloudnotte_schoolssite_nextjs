import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Image from "next/image";
import { Button2, Button4 } from "../EnrollmentLandingPage/Button";
import { useEnrollmentTabsValue } from "../../../StateProviders/EnrollmentTabsProvider";
import { useFormDetailsStateValue } from "../../../StateProviders/FormDetailsProvider";
import * as Yup from "yup";
import axios from "axios";
import Loader from "../../Loader";
import styles from "../../../../styles/MiniLoader.module.css";

function EnrollmentPageParentDetails({ display }) {
  const [tab, dispatch] = useEnrollmentTabsValue();
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [formDetailsStore, formDetailsDispatch] = useFormDetailsStateValue();
  const [loaderState, setLoaderState] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");
  // UPLOAD PASSPORT ON IMAGE CHANGE
  useEffect(() => {
    console.log(image, "PArent Passport upload");
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    const data = new FormData();
    data.append("file", image.raw);
    if (image.raw !== "" && formik.errors.Passport !== "") {
      const instance = axios.create();
      setLoaderState(true);
      setUploadMessage("Uploading Passport...");

      instance
        .post(
          "https://cloudnotte-api.herokuapp.com/api/rest/upload/file",
          data,
          { headers }
        )
        .then((res) => {
          formik.setFieldValue("passportUrl", res.data.url);
          formik.setFieldValue("Passport", image.raw);
          setLoaderState(false);
          setTimeout(() => {
            setUploadMessage(" Successfully uploaded");
          }, 1500);

          console.log(formik, "The url response");
        })
        .catch((err) => {
          console.log(err);
          setUploadMessage(
            "Error uploading image check your internet connection"
          );
        });
    }
  }, [image]);

  const handleImageChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
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
      item: formdetails,
    });
  };

  // REMOVE FROM FORM DETAILS STORE
  const removeFromStore = () => {
    formDetailsDispatch({
      type: "REMOVE_FROM_FORM_DETAILS_STORE",
    });
  };

  // INITIAL FORM VALUES
  let initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    relationship: "",
    occupation: "",
    country: "",
    state: "",
    lga: "",
    address: "",
    passportUrl: null,
  };

  // FORMIK ONSUBMIT
  const onSubmit = (values) => {
    pushToStore(values);
    changeTab(4);
  };

  // FORMIK VALIDATION SCHEMA WITH YUP
  const FILE_SIZE = 1024 * 1024;
  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
  const validationSchema = Yup.object({
    firstName: Yup.string().required("This field is required"),
    middleName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    phoneNumber: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Invalid Email")
      .required("This field is required"),
    relationship: Yup.string().required("This field is required"),
    occupation: Yup.string().required("This field is required"),
    country: Yup.string().required("This field is required"),
    state: Yup.string().required("This field is required"),
    lga: Yup.string().required("This field is required"),
    address: Yup.string().required("This field is required"),
    Passport: Yup.mixed()
      .nullable()
      .required()
      .test(
        "fileSize",
        "File Size is too large",
        (value) => value && value.size <= FILE_SIZE
      )

      .test(
        "fileType",
        "Unsupported File Format",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
      ),
  });

  // USING FORMIK PACKAGE FOR FORM HANDLING
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log(formDetailsStore, "The Store form data");
  console.log(formik.values, "The Parent form data");
  console.log(formik, "The  formik");

  return (
    <section
      className={`${
        display === 3 ? "flex" : "hidden"
      } px-5 md:px-10 md2:px-28 md3:px-40 text-justify w-full mt-6 sm:mt-10 mb-14 mx-auto text-[0.8em] sm:text-base`}
    >
      <div className="w-full bg-white">
        <h2 className="font-bold mb-3">Parents&apos;s details</h2>

        <form
          className="flex flex-col sm:flex-row w-full"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <div className="flex flex-col items-center justify-center sm:justify-start mr-0 mt-5 sm:mr-10 sm:mt-7  w-full  sm:w-[200px] mb-7 sm:mb-0">
            <label
              htmlFor="parentPassport"
              className={` relative ${
                loaderState ? styles.mini_loader_inner : null
              }  `}
            >
              {" "}
              {image.preview ? (
                <Image
                  width={100}
                  height={100}
                  src={image.preview}
                  objectFit="contain"
                  className="w-[100px] h-[100px] mb-3 sm:w-[150px] sm:h-[150px] cursor-pointer object-contain bg-gray-400 rounded-[50%] sm:border"
                  alt="parentPassport"
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
              id="parentPassport"
              name="parentPassport"
              className="hidden"
              accept="image/png,image/jpg,image/jpeg"
              required
              onChange={(e) => {
                handleImageChange(e);
                console.log(e.target.files[0], "The file");
              }}
            />
            <label htmlFor="parentPassport">
              <span className="cursor-pointer">
                {uploadMessage === "" ? "Upload Passport" : uploadMessage}
              </span>
            </label>
            {formik.errors.Passport && (
              <p className="text-xs bg-red-600 rounded-md px-2 py-2 text-white">
                {formik.errors.Passport}
              </p>
            )}
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
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName && (
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
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName && (
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
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
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
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-xs text-red-600">{formik.errors.email}</p>
                )}
              </div>
              <div className="mb-6 w-full sm:w-1/2">
                <input
                  type="text"
                  id="relationship"
                  name="relationship"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Relationship"
                  onChange={formik.handleChange}
                  value={formik.values.relationship}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.relationship && formik.errors.relationship && (
                  <p className="text-xs text-red-600">
                    {formik.errors.relationship}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Occupation"
                  onChange={formik.handleChange}
                  value={formik.values.occupation}
                  required
                  onBlur={formik.handleBlur}
                />
                {formik.touched.occupation && formik.errors.occupation && (
                  <p className="text-xs text-red-600">
                    {formik.errors.occupation}
                  </p>
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
                  onBlur={formik.handleBlur}
                />
                {formik.touched.country && formik.errors.country && (
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
                  onBlur={formik.handleBlur}
                />
                {formik.touched.state && formik.errors.state && (
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
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lga && formik.errors.lga && (
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
                onBlur={formik.handleBlur}
                rows="3"
              ></textarea>
              {formik.touched.address && formik.errors.address && (
                <p className="text-xs text-red-600">{formik.errors.address}</p>
              )}
            </div>
            <div className="w-full flex justify-between">
              <div
                onClick={() => {
                  changeTab(2);
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

export default EnrollmentPageParentDetails;
