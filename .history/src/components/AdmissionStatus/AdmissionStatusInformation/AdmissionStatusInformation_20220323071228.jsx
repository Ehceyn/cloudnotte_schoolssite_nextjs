import React from "react";
import AdmissionStatusInformationProfile from "./AdmissionStatusInformationProfile/AdmissionStatusInformationProfile";
import AdmissionStatusInformationUpdateTabs from "./AdmissionStatusInformationUpdateTabs/AdmissionStatusInformationUpdateTabs";

function AdmissionStatusInformation({ data }) {
  return (
    <>
      <section className="w-full h-fit flex border-t border-b sm:border-2 sm:rounded-md flex-col px-7 sm:px-12 mb-20">
        <AdmissionStatusInformationProfile data={data} />
        <AdmissionStatusInformationUpdateTabs data={data} />
      </section>
    </>
  );
}

export default AdmissionStatusInformation;
