import React from "react";
import StudentsAcademicInfo from "./StudentsAcademicInfo";
import StudentsParentInfo from "./StudentsParentInfo";
import StudentsPersonalInfo from "./StudentsPersonalInfo";
import Image from "next/image";

function StudentsCompleteInfo() {
  return (
    <>
      <section className="flex mt-8 flex-col w-[320px] xs:w-[450px] sm:w-[672px] mx-auto">
        <div className="w-full flex justify-end">
          <p className="flex cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#8EA2BA"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            Print Admission Slip
          </p>
        </div>
        {/* SCHOOL HEAD */}
        <div className="w-full flex flex-col justify-center items-center mt-3 mb-7">
          <Image
            width={150}
            height={150}
            src="/assets/images/school-profile-img.png"
            className="w-[60px] h-[60px] sm:w-[150px] sm:h-[150px] object-contain bg-gray-400 rounded-[50%] sm:border-8 border-white"
            alt=""
          />
          <p className="text-center text-2xl font-bold ">
            Royal Group of Schools
          </p>
          <p className="text-xs md:text-sm flex">
            {Array(5)
              .fill()
              .map((_, index) => (
                <p className=" " key={index}>
                  <Image
                    width={24}
                    height={24}
                    src="/assets/icons/star-icon.svg"
                    className="w-5 h-5 sm:w-6 sm:h-6 "
                    alt=""
                  />
                </p>
              ))}
          </p>
          <p className=" sm:text-[0.9em] md:text-[1.2em]">
            Port Harcourt, Nigeria
          </p>
        </div>
        {/* ADMISSION STATUS AND EXAM SCORE */}
        <div className=" flex w-full justify-between xs:justify-center">
          <article className="xs:px-4 mr-1 xs:mr-0  text-center">
            <p className="font-bold text-xs xs:text-sm">Admssion Number</p>
            <p className="font-normal text-base xs:text-lg">CL10384990084</p>
          </article>
          <article className="border-r-2 border-l-2 border-[#8EA2BA] px-1 xs:px-4 text-center">
            <p className="font-bold text-xs xs:text-sm">Admission Status</p>
            <p className="font-normal text-base xs:text-lg text-[#3BB8A3]">
              Admitted
            </p>
          </article>
          <article className="xs:px-4 ml-1 xs:ml-0  text-center">
            <p className="font-bold text-xs xs:text-sm">Exam Score</p>
            <p className="font-normal text-base xs:text-lg">100 of 250</p>
          </article>
        </div>

        {/* STUDENT COMPLETE INFO */}
        <div className="w-full h-fit flex flex-col justify-center items-center mt-3 mb-7 border-2 rounded-md py-5 px-6">
          <StudentsPersonalInfo />
          <div className="h-[1px] border-t w-full"></div>
          <StudentsParentInfo />
          <div className="h-[1px] border-t w-full"></div>
          <StudentsAcademicInfo />
        </div>
      </section>
    </>
  );
}

export default StudentsCompleteInfo;
