import React, { useState } from "react";
import { useEnrollmentTabsValue } from "../../../StateProviders/EnrollmentTabsProvider";

function EnrollmentNavbar() {
  const [tab, dispatch] = useEnrollmentTabsValue();

  const changeTab = (id) => {
    console.log("tab: " + id);
    dispatch({
      type: "TOGGLE_ENROLLMENT_TAB",
      item: id,
    });
  };

  return (
    <>
      <div className="hidden bg-[#5F9AF2] text-[#E7F0FB] h-10 sm:h-20 w-full flex items-center px-3 md:px-10 md2:px-28 md3:px-40">
        <article className="flex w-full justify-between sm:justify-start">
          <p
            className={`text-[#E7F0FB] font-medium mr-2 sm:mr-7 cursor-pointer text-[0.65em] sm:text-base ${
              tab === 1 ? "font-bold" : "font-medium"
            }`}
            onClick={() => {
              changeTab(1);
            }}
          >
            Summary
          </p>
          <p
            className={`text-[#E7F0FB] font-medium mr-2 sm:mr-7 cursor-pointer text-[0.65em] sm:text-base ${
              tab === 2 ? "font-bold" : "font-medium"
            }`}
            onClick={() => {
              changeTab(2);
            }}
          >
            Student&apos;s details
          </p>
          <p
            className={`text-[#E7F0FB] font-medium mr-2 sm:mr-7 cursor-pointer text-[0.65em] sm:text-base ${
              tab === 3 ? "font-bold" : "font-medium"
            }`}
            onClick={() => {
              changeTab(3);
            }}
          >
            Parent&apos;s details
          </p>
          <p
            className={`text-[#E7F0FB] font-medium mr-2 sm:mr-7 cursor-pointer text-[0.65em] sm:text-base ${
              tab === 4 ? "font-bold" : "font-medium"
            }`}
            onClick={() => {
              changeTab(4);
            }}
          >
            Academic details
          </p>
        </article>
      </div>
    </>
  );
}

export default EnrollmentNavbar;
