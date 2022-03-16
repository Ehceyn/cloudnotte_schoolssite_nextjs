import React from "react";
// import AdmissionStatusSchoolHead from "./AdmissionStatusSchoolHead";

function AdmissionStatusLandingPage({ data }) {
  console.log("my data ===>", data);
  return (
    <>
      <section className="w-full flex mt-8 flex-col">
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
        {/* <AdmissionStatusSchoolHead data={data} /> */}
      </section>
    </>
  );
}

export default AdmissionStatusLandingPage;
