import React from "react";
import { EnrollmentTabsProvider } from "../../../src/StateProviders/EnrollmentTabsProvider";
import EnrollmentLandingPage from "../../../src/components/Enrollment/EnrollmentLandingPage/EnrollmentLandingPage";
import EnrollmentTabs from "../../../src/components/Enrollment/EnrollmentTabs/EnrollmentTabs";
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
