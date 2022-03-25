import React, { useState, useEffect } from "react";
import { useAdmissionStatusTabsValue } from "../../../../StateProviders/AdmissionStatusTabsProvider";
import AdmittedStage from "./AdmittedStage";
import DeclinedStage from "./DeclinedStage";
import EntranceExamStage from "./EntranceExamStage";
import PendingStage from "./PendingStage";

function AdmissionStatusInformationUpdateTabs({ data }) {
  const [tab, dispatch] = useAdmissionStatusTabsValue();

  console.log("datab: ", data);

  return (
    <>
      <div className="">
        {/* <article
          className={`${data.admissionStatus === "" ? "flex" : "hidden"}`}
        >
          <EntranceExamStage data={data} />
        </article> */}
        <section
          className={`${
            data.admissionStatus === "PENDING" ? "flex" : "hidden"
          } flex-col items-center mt-5`}
        >
          <PendingStage data={data} />
        </section>

        <section
          className={`${
            data.admissionStatus === "ADMITTED" ? "flex" : "hidden"
          } flex-col items-center justify-center mt-8`}
        >
          <AdmittedStage data={data} />
        </section>

        <section
          className={`${
            data.admissionStatus === "REJECTED" ? "flex" : "hidden"
          } flex-col items-center mt-5`}
        >
          <DeclinedStage data={data} />
        </section>
      </div>
    </>
  );
}

export default AdmissionStatusInformationUpdateTabs;
