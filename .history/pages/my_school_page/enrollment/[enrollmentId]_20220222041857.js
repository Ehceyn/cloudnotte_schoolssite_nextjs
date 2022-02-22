import React from "react";
import { EnrollmentTabsProvider } from "../../StateProviders/EnrollmentTabsProvider";
import EnrollmentLandingPage from "./EnrollmentLandingPage/EnrollmentLandingPage";
import EnrollmentTabs from "./EnrollmentTabs/EnrollmentTabs";
import reducer, { initialState } from "../../Reducers/EnrollmentTabsReducer";
import GoToTop from "../GoToTop";

function EnrollmentPage() {
  return (
    <>
      <EnrollmentTabsProvider initialState={initialState} reducer={reducer}>
        <EnrollmentLandingPage />
        <EnrollmentTabs />
      </EnrollmentTabsProvider>
      <GoToTop />
    </>
  );
}

export default EnrollmentPage;
