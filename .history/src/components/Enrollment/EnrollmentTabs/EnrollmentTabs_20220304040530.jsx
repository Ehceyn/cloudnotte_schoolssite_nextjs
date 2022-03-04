import React, { useState, useEffect } from "react";
import EnrollmentAcademicDetails from "./EnrollmentAcademicDetails";
import EnrollmentPageParentDetails from "./EnrollmentPageParentDetails";
import EnrollmentPageStudentDetails from "./EnrollmentPageStudentDetails";
import EnrollmentPageSummary from "./EnrollmentPageSummary";
import { useEnrollmentTabsValue } from "../../../StateProviders/EnrollmentTabsProvider";

function EnrollmentTabs({ onEnroll }) {
  const [tab] = useEnrollmentTabsValue();
  const [mountedTab, setMountedTab] = useState(1);

  const changeMounted = (tab) => {
    console.log("tabb: " + tab);
    switch (tab) {
      case 1:
        setMountedTab(1);
        break;
      case 2:
        setMountedTab(2);
        break;
      case 3:
        setMountedTab(3);
        break;
      case 4:
        setMountedTab(4);
        break;
      default:
        setMountedTab(1);
    }
  };

  useEffect(() => {
    changeMounted(tab);
  }, [tab]);

  return (
    <>
      <div>
        <EnrollmentPageSummary display={mounted} />
        <EnrollmentPageStudentDetails display={mounted} />
        <EnrollmentPageParentDetails display={mounted} />
        <EnrollmentAcademicDetails onEnroll={onEnroll} display={mounted} />
      </div>
    </>
  );
}

export default EnrollmentTabs;
