import React, { useState, useEffect } from "react";
// import Button from "./Button";

import { useEnrollmentTabsValue } from "../../../StateProviders/EnrollmentTabsProvider";

function EnrollmentNavbarFixed({ display }) {
  const [show, setShow] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  // Show  Searchbar only on scroll up
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // Function to Show  Searchbar only on scroll up
  const handleScroll = () => {
    const position = document.body.getBoundingClientRect().top;
    setScrollPos(position);
    setShow(position > scrollPos);
    //.log(show);
    //.log(scrollPos);
  };

  const [tab, dispatch] = useEnrollmentTabsValue();

  const changeTab = (id) => {
    //.log("tab: " + id);
    dispatch({
      type: "TOGGLE_ENROLLMENT_TAB",
      item: id,
    });
  };

  return (
    <section className="">
      <div
        className={`fixed z-20 top-0 left-0 right-0 transition-all duration-150 mt-0 items-center justify-center w-full py-2 sm:py-4 px-auto border-b bg-[#5f9af2] ${
          display === false ? "hidden" : "flex"
        } ${show ? "null" : " -translate-y-full"}`}
      >
        {" "}
        <div className=" h-10 sm:h-14 w-full flex items-center px-3 md:px-10 md2:px-28 md3:px-40">
          <ul className="flex w-full justify-between sm:justify-start">
            <li
              className={`hidden text-[#E7F0FB] font-medium mr-2 sm:mr-7 cursor-pointer text-[0.82em] sm:text-base ${
                tab === 1 ? "font-[800]" : "font-medium"
              }`}
            >
              Summary
            </li>
            <li
              className={`text-[#E7F0FB] font-medium mr-2 sm:mr-7 cursor-pointer text-[0.82em] sm:text-base ${
                tab === 2 ? "font-[800]" : "font-medium"
              }`}
            >
              Student&apos;s details
            </li>
            <li
              className={`text-[#E7F0FB] font-medium mr-2 sm:mr-7 cursor-pointer text-[0.82em] sm:text-base ${
                tab === 3 ? "font-[800]" : "font-medium"
              }`}
            >
              Parent&apos;s details
            </li>
            <li
              className={`text-[#E7F0FB] font-medium mr-2 sm:mr-7 cursor-pointer text-[0.82em] sm:text-base ${
                tab === 4 ? "font-[800]" : "font-medium"
              }`}
            >
              Academic details
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default EnrollmentNavbarFixed;
