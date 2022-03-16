import React, { useState, useEffect } from "react";
import EnrollmentAcademicDetails from "./EnrollmentAcademicDetails";
import EnrollmentPageParentDetails from "./EnrollmentPageParentDetails";
import EnrollmentPageStudentDetails from "./EnrollmentPageStudentDetails";
import EnrollmentPageSummary from "./EnrollmentPageSummary";
import { useEnrollmentTabsValue } from "../../../StateProviders/EnrollmentTabsProvider";

function EnrollmentTabs({ admissionProgrammes, schoolId }) {
  const [tab] = useEnrollmentTabsValue();

  return (
    <>
      <div>
        <EnrollmentPageSummary display={tab} />
        <EnrollmentPageStudentDetails display={tab} />
        <EnrollmentPageParentDetails display={tab} />
        <EnrollmentAcademicDetails
          admissionProgrammes={admissionProgrammes}
          schoolId={schoolId}
          display={tab}
        />
      </div>
    </>
  );
}

export default EnrollmentTabs;
