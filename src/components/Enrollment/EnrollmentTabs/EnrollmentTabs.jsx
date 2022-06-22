import React, { useState, useEffect } from "react";
import EnrollmentAcademicDetails from "./EnrollmentAcademicDetails";
import EnrollmentPageParentDetails from "./EnrollmentPageParentDetails";
import EnrollmentPageStudentDetails from "./EnrollmentPageStudentDetails";
import EnrollmentPageSummary from "./EnrollmentPageSummary";
import { useEnrollmentTabsValue } from "../../../StateProviders/EnrollmentTabsProvider";
import { AnimatePresence } from "framer-motion";

function EnrollmentTabs({
  admissionProgrammes,
  schoolId,
  prefix,
  name,
  email,
  phoneNumber,
  admissionSubAccountId,
  logoUrl,
  location,
}) {
  const [tab] = useEnrollmentTabsValue();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <div>
          <EnrollmentPageSummary
            display={tab}
            name={name}
            admissionProgrammes={admissionProgrammes}
            email={email}
            phoneNumber={phoneNumber}
          />
          <EnrollmentPageStudentDetails location={location} display={tab} />
          <EnrollmentPageParentDetails location={location} display={tab} />
          <EnrollmentAcademicDetails
            admissionProgrammes={admissionProgrammes}
            schoolId={schoolId}
            prefix={prefix}
            name={name}
            display={tab}
            admissionSubAccountId={admissionSubAccountId}
            logoUrl={logoUrl}
          />
        </div>
      </AnimatePresence>
    </>
  );
}

export default EnrollmentTabs;
