import React from "react";
import Button from "./Button";
import styles from "../../../../../styles/AdmissionPage.module.css";

function EntranceExamStage() {
  return (
    <>
      <section className="flex flex-col items-center mt-5">
        <div className="flex flex-col items-center mb-10">
          <p className="font-normal text-base text-center">
            Your admission has been submitted successfully to
          </p>
          <p className="font-bold text-base">Royal College school.</p>
        </div>
        <div className="flex flex-col items-center mb-12">
          <p className="text-sm mb-1">Your admission number</p>
          <article className=" border rounded-[5px] items-center flex justify-center h-14 w-72">
            <p className="text-lg font-bold text-[#F44336]">CL28289399030</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-7 w-7 translate-x-5 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#8EA2BA"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
          </article>
          <p className=" italic text-xs ">
            Please copy it and Keep it safe for future purpose
          </p>
        </div>
        <div className="flex flex-col items-center mb-3">
          <p className="font-medium mb-2">One more thing for you,</p>
          <p className="font-normal">
            Kindly take your entrance exam to finish up your admission
          </p>
          <article className="mt-3">
            <Button
              style={styles.admission_status_btn_2}
              customStyle=" w-72"
              py="py-3"
              bg="bg-[#5f9af2] text-[#E7F0FB]"
            >
              Take entrance exam{" "}
            </Button>
          </article>
        </div>
        <div className="flex flex-col items-center mb-10">
          <p className="italic text-[#3BB8A3] font-medium">
            Exam Start Date and Time: 12th August 2022 - 10am
          </p>
          <p className="italic text-[#F44336] font-medium">
            Exam End date and Time: 12th August 2022 - 3pm
          </p>
        </div>
      </section>
    </>
  );
}

export default EntranceExamStage;
