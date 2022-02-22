import React from "react";
import { EnrollmentTabsProvider } from "../../../src/StateProviders/EnrollmentTabsProvider";
import EnrollmentLandingPage from "./EnrollmentLandingPage/EnrollmentLandingPage";
import EnrollmentTabs from "./EnrollmentTabs/EnrollmentTabs";
import reducer, {
  initialState,
} from "../../../src/Reducers/EnrollmentTabsReducer";

function EnrollmentPage() {
  return (
    <>
      <EnrollmentTabsProvider initialState={initialState} reducer={reducer}>
        <EnrollmentLandingPage />
        <EnrollmentTabs />
      </EnrollmentTabsProvider>
    </>
  );
}

export default EnrollmentPage;
