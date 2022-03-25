import React, { useState, useEffect } from "react";
import { useSchoolPersonalPageTabsValue } from "../../../StateProviders/SchoolPersonalPageTabsProvider";
import SchoolPersonalPageContact from "./SchoolPersonalPageContact";
import SchoolPersonalPageHome from "./SchoolPersonalPageHome";
import SchoolPersonalPageReview from "./SchoolPersonalPageReview";

function SchoolPersonalPageTabs(props) {
  const [tab, _] = useSchoolPersonalPageTabsValue();
  const [mountedTab, setMountedTab] = useState(<SchoolPersonalPageHome />);

  const changeMounted = (tab) => {
    console.log("tabb: " + tab);
    switch (tab) {
      case 1:
        setMountedTab(
          <SchoolPersonalPageHome longDescription={props.longDescription} />
        );
        break;
      case 2:
        setMountedTab(
          <SchoolPersonalPageContact
            phoneNumber={props.phoneNumber}
            email={props.email}
            address={props.address}
            city={props.city}
            state={props.state}
            country={props.country}
            categories={prop.categories}
          />
        );
        break;
      case 3:
        setMountedTab(
          <SchoolPersonalPageReview
            onCallReviewSchoolModal={props.onCallReviewSchoolModal}
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
