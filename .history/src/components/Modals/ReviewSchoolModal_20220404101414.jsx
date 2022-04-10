import React, { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import Button3 from "./Button";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { ADD_NEW_SCHOOL_REVIEW } from "../../../graphql/user/mutations/addSchoolReview";
import MessageModal from "../Modals/MessageModal";
import * as Yup from "yup";

function ReviewSchoolModal(props) {
  const [displayMessageModal, setDisplayMessageModal] = useState(false);
  const [formSubmitStatus, setFormSubmitStatus] = useState();
  const [formSubmitHeading, setFormSubmitHeading] = useState();
  const [formSubmitMessage, setFormSubmitMessage] = useState();
  const [inProgress, setInProgress] = useState(false);
  // Formik initial state
  let initialValues = {
    userFullname: "",
    category: "",
    message: "",
  };

  // Yup validationSchema
  const validationSchema = Yup.object({
    userFullname: Yup.string().required("This field is required"),
    category: Yup.string().required("This field is required"),
    message: Yup.string().required("This field is required"),
  });

  // USING FORMIK PACKAGE FOR FORM HANDLING
  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  console.log("formik.values", formik);

  const reviewVar = {
    userFullname: formik.values.userFullname,
    category: formik.values.category,
    message: formik.values.message,
    schoolId: props.schoolId,
    starRating: 5,
  };

  console.log("Clicked");

  // Usemutation
  const [sendMessage] = useMutation(ADD_NEW_SCHOOL_REVIEW, {
    variables: { reviewVar: reviewVar },
    onCompleted: (data) => {
      // CALL THE ADD_NEW_REVIEW MUTATION
      console.log(data, "lo data");
      setDisplayMessageModal(true);
      setFormSubmitStatus("success");
      setFormSubmitHeading("Success");
      setFormSubmitMessage("Your review has been sent");
      formik.resetForm();
      setDisplayMessageModal(true);
      setInProgress(false);
    },
    onError: (error) => {
      console.log(error);
      setFormSubmitStatus("error");
      setFormSubmitHeading("Error");
      setFormSubmitMessage("Error sending review");
      setInProgress(false);
      setDisplayMessageModal(true);
    },
  });

  return (
    <section
      className={`w-full h-screen bg-[#00000065] fixed top-0 bottom-0 z-30 flex items-center  justify-center ${
        props.display ? "flex" : "hidden"
      } `}
      onClick={props.onCallReviewSchoolModal}
    >
      <div
        className="w-fit h-fit border rounded-2xl bg-white px-6 py-7 "
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
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          <p className="font-bold">Submit Review</p>
        </article>
        <div className="flex justify-center items-center mb-4">
          {/* <p className="flex text-lg">
            {Array(5)
              .fill()
              .map((_, index) => (
                <p className=" pr-2 cursor-pointer" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="#CFDBEA"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </p>
              ))}
          </p> */}
        </div>

        <form className="">
          <MessageModal
            message={formSubmitMessage}
            heading={formSubmitHeading}
            displayMessageModal={displayMessageModal}
            onCallDisplayMessageModal={() => setDisplayMessageModal(false)}
            status={formSubmitStatus}
            showBtn={false}
          />
          <div className="flex justify-center items-center mb-4">
            <article className="relative">
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
                id="userFullname"
                name="userFullname"
                className=" h-12 pl-12 border border-[#CFDBEA] text-base text-gray-900 rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-[260px]  xs:w-[320px] p-2.5 bg-[#fff]"
                placeholder="Name"
                required
                onChange={formik.handleChange}
                value={formik.values.userFullname}
                onBlur={formik.handleBlur}
              />
              {formik.touched.userFullname && formik.errors.userFullname && (
                <p className="text-xs text-red-600">
                  {formik.errors.userFullname}
                </p>
              )}
            </article>
          </div>
          <div className="mb-4">
            <div className="flex justify-center items-center ">
              <select
                type="text"
                id="category"
                name="category"
                className=" h-12 pl-4 border border-[#CFDBEA] text-base text-gray-400 rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-[260px]  xs:w-[320px] p-2.5 bg-[#fff]"
                placeholder="Name"
                required
                onChange={formik.handleChange}
                value={formik.values.category}
                onBlur={formik.handleBlur}
              >
                <option value="" selected disabled>
                  Select a category
                </option>
                <option value="Parent">Parent</option>
                <option value="Student">Student</option>
                <option value="Staff">Staff</option>
                <option value="Teacher">Teacher</option>
              </select>
            </div>
            {formik.touched.category && formik.errors.category && (
              <p className="text-xs text-red-600">{formik.errors.category}</p>
            )}
          </div>
          {/* <article className="flex w-full justify-center items-center mb-4">
          <p className="font-bold">Ugochukwu Matthew -&nbsp;</p>
          <p className="text-[#F44336] font-bold">(Parent)</p>
        </article> */}
          <article className="mb-6">
            <textarea
              type="text"
              id="message"
              name="message"
              className=" border py-5 px-4 border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none placeholder:flex placeholder:flex-wrap focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#fff]   "
              placeholder={`Share your experience you had with ${props.name.toLowerCase()}.
            Please be real and original`}
              rows="3"
              onChange={formik.handleChange}
              value={formik.values.message}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="text-xs text-red-600">{formik.errors.message}</p>
            )}
          </article>
        </form>

        {/* <div className="flex items-center mb-3">
          <input
            id="makeAnonymous"
            name="makeAnonymous"
            type="checkbox"
            className="h-4 w-4 text-[#5f9af2] focus:ring-transparent border-gray-300 rounded"
          />
          <label
            htmlFor="makeAnonymous"
            className="ml-2 font-[400] block text-sm text-gray-dark "
          >
            {" "}
            <p>Make my rewiew anonymous</p>
          </label>
        </div> */}
        <article
          className="w-full flex items-center justify-center"
          onClick={() => {
            formik.isValid && sendMessage();
            setInProgress(true);
          }}
        >
          <Button3
            borderRaduis="rounded-full"
            px="px-5 w-full xs:w-[200px]"
            py="py-3"
            customStyle={`${
              formik.isValid
                ? "bg-[#5f9af2] text-[#E7F0FB]"
                : "cursor-not-allowed bg-[#293b57] text-[#476697]"
            }`}
            disabled={!inProgress}
          >
            {inProgress ? "Please wait..." : "Submit Review"}
          </Button3>
        </article>
      </div>
    </section>
  );
}

export default ReviewSchoolModal;
