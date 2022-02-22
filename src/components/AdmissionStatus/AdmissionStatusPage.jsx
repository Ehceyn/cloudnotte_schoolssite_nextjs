import React from "react";
import AdmissionStatusLandingPage from "./AdmissionStatusLandingPage/AdmissionStatusLandingPage";
import AdmissionStatusInformation from "./AdmissionStatusInformation/AdmissionStatusInformation";
import { AdmissionStatusTabsProvider } from "../../StateProviders/AdmissionStatusTabsProvider";
import reducer, {
  initialState,
} from "../../Reducers/AdmissionStatusTabsReducer";
import GoToTop from "../GoToTop";

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
      <GoToTop />
    </>
  );
}

export default AdmissionStatusPage;
