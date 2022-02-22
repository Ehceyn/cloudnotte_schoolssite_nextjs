import React from "react";
import AdmissionStatusInformationProfile from "./AdmissionStatusInformationProfile/AdmissionStatusInformationProfile";
import AdmissionStatusInformationUpdateTabs from "./AdmissionStatusInformationUpdateTabs/AdmissionStatusInformationUpdateTabs";

function AdmissionStatusInformation() {
  return (
    <>
      <section className="w-full h-fit flex border-2 rounded-md flex-col px-12 mb-20">
        <AdmissionStatusInformationProfile />
        <AdmissionStatusInformationUpdateTabs />
      </section>
    </>
  );
}

export default AdmissionStatusInformation;
