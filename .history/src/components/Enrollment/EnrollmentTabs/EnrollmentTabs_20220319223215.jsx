import React, { useState, useEffect } from "react";
import EnrollmentAcademicDetails from "./EnrollmentAcademicDetails";
import EnrollmentPageParentDetails from "./EnrollmentPageParentDetails";
import EnrollmentPageStudentDetails from "./EnrollmentPageStudentDetails";
import EnrollmentPageSummary from "./EnrollmentPageSummary";
import { useEnrollmentTabsValue } from "../../../StateProviders/EnrollmentTabsProvider";

function EnrollmentTabs({
  admissionProgrammes,
  schoolId,
  prefix,
  name,
  email,
  phoneNumber,
}) {
  const [tab] = useEnrollmentTabsValue();

  return (
    <>
      <div>
        <EnrollmentPageSummary
          display={tab}
          name={name}
          admissionProgrammes={admissionProgrammes}
          email={email}
          phoneNumber={phoneNumber}
        />
        <EnrollmentPageStudentDetails display={tab} />
        <EnrollmentPageParentDetails display={tab} />
        <EnrollmentAcademicDetails
          admissionProgrammes={admissionProgrammes}
          schoolId={schoolId}
          prefix={prefix}
          name={name}
          display={tab}
          admissionSubAccountId={admissionSubAccountId}
        />
      </div>
    </>
  );
}

export default EnrollmentTabs;
