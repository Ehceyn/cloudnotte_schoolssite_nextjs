import React, { useState, useEffect } from "react";
import EnrollmentAcademicDetails from "./EnrollmentAcademicDetails";
import EnrollmentPageParentDetails from "./EnrollmentPageParentDetails";
import EnrollmentPageStudentDetails from "./EnrollmentPageStudentDetails";
import EnrollmentPageSummary from "./EnrollmentPageSummary";
import { useEnrollmentTabsValue } from "../../../StateProviders/EnrollmentTabsProvider";

function EnrollmentTabs() {
  const [tab] = useEnrollmentTabsValue();
  const [mountedTab, setMountedTab] = useState(<EnrollmentPageSummary />);

  const changeMounted = (tab) => {
    console.log("tabb: " + tab);
    switch (tab) {
      case 1:
        setMountedTab(<EnrollmentPageSummary />);
        break;
      case 2:
        setMountedTab(<EnrollmentPageStudentDetails />);
        break;
      case 3:
        setMountedTab(<EnrollmentPageParentDetails />);
        break;
      case 4:
        setMountedTab(<EnrollmentAcademicDetails />);
        break;
      default:
        setMountedTab(<EnrollmentPageSummary />);
    }
  };

  useEffect(() => {
    changeMounted(tab);
  }, [tab]);

  return (
    <>
      <div>{mountedTab} </div>
    </>
  );
}

export default EnrollmentTabs;
