import React, { useState, useEffect } from "react";
import { useAdmissionStatusTabsValue } from "../../../../StateProviders/AdmissionStatusTabsProvider";
import AdmittedStage from "./AdmittedStage";
import DeclinedStage from "./DeclinedStage";
import EntranceExamStage from "./EntranceExamStage";
import PendingStage from "./PendingStage";

function AdmissionStatusInformationUpdateTabs() {
  const [tab, dispatch] = useAdmissionStatusTabsValue();
  const [mountedTab, setMountedTab] = useState(<EntranceExamStage />);

  const [isActive, setIsActive] = useState(tab);

  const changeTab = () => {
    console.log("tab: " + isActive);
    dispatch({
      type: "TOGGLE_ADMISSION_STATUS_TAB",
      item: isActive,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive((tab) => tab < 4 && tab + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    changeTab(isActive);
  }, [isActive]);

  const changeMounted = (tab) => {
    console.log("tabb: " + tab);
    switch (tab) {
      case 1:
        setMountedTab(<EntranceExamStage />);

        break;
      case 2:
        setMountedTab(<AdmittedStage />);

        break;
      case 3:
        setMountedTab(<DeclinedStage />);

        break;
      case 4:
        setMountedTab(<PendingStage />);

        break;
      default:
        setMountedTab(<EntranceExamStage />);
    }
  };

  useEffect(() => {
    changeMounted(tab);
  }, [tab]);

  return (
    <>
      <div className="">{mountedTab}</div>
    </>
  );
}

export default AdmissionStatusInformationUpdateTabs;
