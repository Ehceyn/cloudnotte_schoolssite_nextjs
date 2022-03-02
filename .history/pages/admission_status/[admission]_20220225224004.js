import React from "react";
import AdmissionStatusLandingPage from "../../src/components/AdmissionStatus/AdmissionStatusLandingPage/AdmissionStatusLandingPage";
import AdmissionStatusInformation from "../../../src/components/AdmissionStatus/AdmissionStatusInformation/AdmissionStatusInformation";
import { AdmissionStatusTabsProvider } from "../../../src/StateProviders/AdmissionStatusTabsProvider";
import reducer, {
  initialState,
} from "../../src/Reducers/AdmissionStatusTabsReducer";

function AdmissionStatusPage() {
  return (
    <>
      <AdmissionStatusTabsProvider
        initialState={initialState}
        reducer={reducer}
      >
        <section className="flex flex-col bg-white w-[320px] xs:w-[400px] sm:w-[500px] md:w-[672px] max-w-2xl mx-auto">
          <AdmissionStatusLandingPage />
          <AdmissionStatusInformation />
        </section>
      </AdmissionStatusTabsProvider>
    </>
  );
}

export default AdmissionStatusPage;
