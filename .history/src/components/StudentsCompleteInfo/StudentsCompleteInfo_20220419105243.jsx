import React, { useState } from "react";
import StudentsAcademicInfo from "../../../src/components/StudentsCompleteInfo/StudentsAcademicInfo";
import StudentsParentInfo from "../../../src/components/StudentsCompleteInfo/StudentsParentInfo";
import StudentsPersonalInfo from "../../../src/components/StudentsCompleteInfo/StudentsPersonalInfo";
import Image from "next/image";

function StudentsInfoPage({ theData }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // COLORS TO MAP
  const colors = ["#ffd833", "#fc2d44", "#28a265", "#70a4f3"];

  return (
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
        <article className="w-[60px] h-[60px] sm:w-[150px] sm:h-[150px] object-contain sm:border border-white rounded-full relative">
          <span
            title="Tech School"
            className={`absolute z-[1] ${
              theData.school.isSmartSchool ? "flex" : "hidden"
            } top-2 right-0 bg-white  border-[#5f9af2] text-red-500 rounded-full`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="#5f9af2"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span
            className={`${
              imageLoaded ? "flex" : "hidden"
            } items-center justify-center w-[60px] h-[60px] sm:w-[150px]  sm:h-[150px] object-contain`}
          >
            {" "}
            <Image
              width={150}
              height={150}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(false)}
              objectFit="cover"
              src={
                theData.school.logoUrl
                  ? theData.school.logoUrl
                  : `https://res.cloudinary.com/ugomatt/image/upload/v1647277984/cloudnotte_icon_soq.png`
              }
              className="rounded-full"
              alt={theData.school.name}
            />
          </span>
          {imageLoaded ? null : (
            <span
              className={`flex items-center justify-center min-w-full min-h-full bg-[#fff] rounded-full w-[60px] h-[60px] sm:w-[150px]  sm:h-[150px] object-contain border-white`}
              style={{
                color: colors[Math.floor(Math.random() * colors.length)],
              }}
            >
              {theData.school.name.split(" ").map((word, index) => {
                return (
                  <article className="text-3xl text-bold" key={index}>
                    {index <= 1 ? word.charAt(0).toUpperCase() : null}
                  </article>
                );
              })}
            </span>
          )}
        </article>
        <h2 className="text-center text-2xl font-bold capitalize">
          {theData.school.name.toLowerCase()}
        </h2>
        {/* <article className="text-xs md:text-sm flex">
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
        </article> */}
        <p className=" sm:text-[0.9em] md:text-[1.2em] capitalize">
          {theData.school.state.toLowerCase()},{" "}
          {theData.school.country.toLowerCase()}
        </p>
      </div>
      {/* ADMISSION STATUS AND EXAM SCORE */}
      <div className=" flex w-full justify-between xs:justify-center">
        <article className="xs:px-4 mr-1 xs:mr-0  text-center">
          <p className="font-bold text-xs xs:text-sm">Admssion Number</p>
          <p className="font-normal text-base xs:text-lg">
            {theData.applicationNumber}
          </p>
        </article>
        <article className="border-r-2 border-l-2 border-[#8EA2BA] px-1 xs:px-4 text-center">
          <p className="font-bold text-xs xs:text-sm ">Admission Status</p>
          <p
            className={`font-normal text-base xs:text-lg ${
              theData.admissionStatus === "REJECTED"
                ? "text-[#F44336]"
                : theData.admissionStatus === "ADMITTED"
                ? "text-[#3BB8A3]"
                : "text-blue-400"
            }`}
          >
            {theData.admissionStatus}
          </p>
        </article>
        <article className="xs:px-4 ml-1 xs:ml-0  text-center">
          <p className="font-bold text-xs xs:text-sm">Exam Score</p>
          <p className="font-normal text-base xs:text-lg">
            {theData.cbtSubmissions.score
              ? theData.cbtSubmissions.score
              : "N/A"}{" "}
            of{" "}
            {theData.cbtSubmissions.examTotalMarks
              ? theData.cbtSubmissions.examTotalMarks
              : "N/A"}
          </p>
        </article>
      </div>

      {/* STUDENT COMPLETE INFO */}
      <div className="w-full h-fit flex flex-col justify-center items-center mt-3 mb-7 border-y sm:border-2 sm:rounded-md py-5 sm:px-6">
        <StudentsPersonalInfo data={theData.studentDetails} />
        <div className="h-[1px] border-t w-full"></div>
        <StudentsParentInfo data={theData.parentDetails} />
        <div className="h-[1px] border-t w-full"></div>
        <StudentsAcademicInfo data={theData} />
      </div>
    </section>
  );
}

export default StudentsInfoPage;
