import React, { useState, useEffect } from "react";
import Button from "./Button";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { useSchoolPersonalPageTabsValue } from "../../../StateProviders/SchoolPersonalPageTabsProvider";
import styles from "../../../../styles/SchoolPage.module.css";

function Navbar() {
  const [tab, dispatch] = useSchoolPersonalPageTabsValue();

  const changeTab = (id) => {
    console.log("tab: " + id);
    dispatch({
      type: "TOGGLE_TAB",
      item: id,
    });
  };

  return (
    <>
      <section className="">
        <div className="flex w-full justify-between items-center px-5 py-5">
          <article className="capitalize flex w-full sm:w-fit justify-between">
            <p
              className={`text-base cursor-pointer mr-2 sm:mr-6 ${
                tab === 1 ? "font-bold" : "font-medium"
              }`}
              onClick={() => {
                changeTab(1);
              }}
            >
              Home
            </p>
            <p
              className={`text-base cursor-pointer mr-2 sm:mr-6 ${
                tab === 2 ? "font-bold" : "font-medium"
              }`}
              onClick={() => {
                changeTab(2);
              }}
            >
              Contact us
            </p>
            <p
              className={`text-base font-medium cursor-pointer mr-2 sm:mr-6 ${
                tab === 3 ? "font-bold" : "font-medium"
              }`}
              onClick={() => {
                changeTab(3);
              }}
            >
              Reviews
            </p>
            <p
              className={`text-base cursor-pointer font-medium
              `}
            >
              School Portal
            </p>
          </article>
          <article className=" w-[20rem] justify-between hidden md2:flex ">
            <div>
              <Button
                customStyle="school_page_btn_2"
                bg="bg-[#f44336]"
                color="text-[#E7F0FB]"
                py="py-4"
              >
                <BsFillSuitHeartFill className="w-5 h-5 mr-1 " />
                Love us
              </Button>
            </div>
            <div>
              <Button
                style={styles.school_page_btn_2}
                customStyle=""
                bg="bg-[#E7F0FB]"
                color="text-[#8EA2BA]"
                py="py-4 "
              >
                <IoIosCall className="w-6 h-6 mr-1 fill-[#f44336]" />
                Call
              </Button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Navbar;