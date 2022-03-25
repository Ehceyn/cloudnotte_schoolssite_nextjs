import React from "react";
import Image from "next/image";

import { Button2 } from "../../../src/components/AdmissionStatus/AdmissionStatusInformation/AdmissionStatusInformationUpdateTabs/Button";
import { GET_ADMISSION_APPLICANT } from "../../../graphql/user/queries/getAdmissionApplicant";
import { initializeApollo } from "../../../lib/apolloClient";
import AdmissionStatusLandingPage from "../../../src/components/AdmissionStatus/AdmissionStatusLandingPage/AdmissionStatusLandingPage";
import ClipboardCopy from "../../../src/components/ClipboardCopy";

function EntranceExamStage({ data }) {
  const theData = data.getAdmissionApplicant;

  return (
    <>
      <section className="flex flex-col bg-white w-[320px] xs:w-[400px] sm:w-[500px] md:w-[672px] max-w-2xl mx-auto">
        <AdmissionStatusLandingPage data={data.getAdmissionApplicant} />

        {/* Admission Information */}
        <section className="w-full h-fit flex border-2 rounded-md flex-col px-12 mb-20">
          <section className="w-full flex  flex-col">
            <div className="w-full flex flex-col justify-center items-center mt-4 mb-4">
              <Image
                width={120}
                height={120}
                src={
                  theData.studentDetails.passportUrl !== "" &&
                  theData.studentDetails.passportUrl.includes("http") === true
                    ? theData.studentDetails.passportUrl
                    : "/assets/images/school-profile-img.png"
                }
                className="w-[60px] h-[60px] sm:w-[120px] sm:h-[120px] object-contain bg-gray-400 rounded-[50%] sm:border ]"
                alt=""
              />
              <p className="font-bold text-base mt-2">
                {theData.studentDetails.firstName}{" "}
                {theData.studentDetails.lastName}
              </p>
              <p className="font-normal text-base">
                {theData.studentDetails.gender}
              </p>
            </div>
            <hr />
          </section>
          <section className="flex flex-col items-center mt-5">
            <div className="flex flex-col items-center mb-10">
              <p className="font-normal text-base text-center">
                Your admission has been submitted successfully to
              </p>
              <p className="font-bold text-base">{theData.school.name}</p>
            </div>
            <div className="flex flex-col items-center mb-12">
              <p className="text-sm mb-1">Your admission number</p>
              <article className=" border rounded-[5px] items-center flex justify-center h-14 w-72">
                {/* <ClipboardCopy copyText={theData.applicationNumber} /> */}
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
                <Button2
                  customStyle=" w-72"
                  py="py-3"
                  bg="bg-[#5f9af2] text-[#E7F0FB]"
                >
                  Take entrance exam{" "}
                </Button2>
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
        </section>
      </section>
    </>
  );
}

export default EntranceExamStage;

export async function getServerSideProps({ params }) {
  // Fetch data from external API

  const apolloClient = initializeApollo();
  const applicationNumber = params.applicationSuccess;

  const { data, loading, error } = await apolloClient.query({
    query: GET_ADMISSION_APPLICANT,
    variables: { applicationNumber: applicationNumber },
  });
  if (error) return console.log(JSON.stringify(error, null, 2));

  if (!data) {
    return {
      notFound: true,
    };
  }

  // Pass data to the page via props
  return {
    props: { initializeApolloState: apolloClient.cache.extract(), data },
  };
}
