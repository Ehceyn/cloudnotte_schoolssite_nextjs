import React, { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
// import Button from "./Button";

function ReviewSchoolModal() {
  const [display, setDisplay] = useState(true);

  return (
    <section
      className={`w-full h-screen bg-[#00000065] fixed top-0 bottom-0 z-30 flex items-center  justify-center ${
        display === false && "hidden"
      } `}
      onClick={() => setDisplay(false)}
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
              .map((_) => (
                <p className=" pr-2 cursor-pointer">
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
        <article className=" w-[260px]  xs:w-[320px] flex border rounded-[5px] py-5 px-4 mb-6">
          <p>
            Share your experience you had with Royal college school Asaba.
            Please be real and original
          </p>
        </article>
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
