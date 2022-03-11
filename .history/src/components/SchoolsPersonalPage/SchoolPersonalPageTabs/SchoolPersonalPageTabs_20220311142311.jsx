import React, { useState, useEffect } from "react";
import { useSchoolPersonalPageTabsValue } from "../../../StateProviders/SchoolPersonalPageTabsProvider";
import SchoolPersonalPageContact from "./SchoolPersonalPageContact";
import SchoolPersonalPageHome from "./SchoolPersonalPageHome";
import SchoolPersonalPageReview from "./SchoolPersonalPageReview";

function SchoolPersonalPageTabs({ onCallReviewSchoolModal }) {
  const [tab] = useSchoolPersonalPageTabsValue();
  const [mountedTab, setMountedTab] = useState(<SchoolPersonalPageHome />);

  const changeMounted = (tab) => {
    console.log("tabb: " + tab);
    switch (tab) {
      case 1:
        setMountedTab(<SchoolPersonalPageHome />);
        break;
      case 2:
        setMountedTab(<SchoolPersonalPageContact />);
        break;
      case 3:
        setMountedTab(
          <SchoolPersonalPageReview
            onCallReviewSchoolModal={onCallReviewSchoolModal}
          />
        );
        break;
      default:
        setMountedTab(<SchoolPersonalPageHome />);
    }
  };

  useEffect(() => {
    changeMounted(tab);
  }, [tab]);

  return (
    <>
      <div className="w-[85%] md2:w-[70%] mx-auto">{mountedTab}</div>
    </>
  );
}

export default SchoolPersonalPageTabs;
