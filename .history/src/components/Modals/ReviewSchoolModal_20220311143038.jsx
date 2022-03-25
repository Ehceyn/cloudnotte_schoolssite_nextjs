import React, { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import Button from "./Button";
import { useFormik } from "formik";

function ReviewSchoolModal(props) {
  // Formik initial state
  let initialValues = {
    review: "",
  };
  // USING FORMIK PACKAGE FOR FORM HANDLING
  const formik = useFormik({
    initialValues,
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
          <p className="flex text-lg">
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
          </p>
        </div>

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
              id="entranceNo"
              className="shadow-sm h-12 pl-12 border border-[#CFDBEA] text-base text-gray-900 rounded-full outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-[260px]  xs:w-[320px] p-2.5 bg-[#F8FBFF]"
              placeholder="Enter your CloudNotte User ID "
              required
            />
          </article>
        </div>
        <article className="flex w-full justify-center items-center mb-4">
          <p className="font-bold">Ugochukwu Matthew -&nbsp;</p>
          <p className="text-[#F44336] font-bold">(Parent)</p>
        </article>

        <form className="w-[260px]  xs:w-[320px] flex rounded-[5px] ">
          <textarea
            type="text"
            id="review"
            name="review"
            className="shadow-sm border py-5 px-4 mb-6 border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
            placeholder="Share your experience you had with Royal college school Asaba.
            Please be real and original"
            rows="3"
            onChange={formik.handleChange}
            value={formik.values.review}
            onBlur={formik.handleBlur}
          ></textarea>
        </form>

        <div className="flex items-center mb-3">
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
        </div>
        <article className="w-full flex items-center justify-center">
          <Button
            borderRaduis="rounded-full"
            px="px-5 w-full xs:w-[200px]"
            py="py-3"
          >
            {" "}
            Submit Review{" "}
          </Button>
        </article>
      </div>
    </section>
  );
}

export default ReviewSchoolModal;