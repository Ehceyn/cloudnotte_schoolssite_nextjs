import React, { useState, useEffect } from "react";
import { Button1, Button2 } from "./Button";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { useSchoolPersonalPageTabsValue } from "../../../StateProviders/SchoolPersonalPageTabsProvider";
import Link from "next/link";
import { GiGraduateCap } from "react-icons/gi";

function SchoolLandingPageNavbarFixed(props) {
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
    console.log(show);
    console.log(scrollPos);
  };

  const [tab, dispatch] = useSchoolPersonalPageTabsValue();

  const changeTab = (id) => {
    console.log("tab: " + id);
    dispatch({
      type: "TOGGLE_TAB",
      item: id,
    });
  };

  return (
    <section className="">
      <div
        className={`fixed z-20 top-0 left-0 right-0 transition-all duration-500 mt-0 items-center justify-center w-full py-2 sm:py-4 px-auto border-b bg-[#F8FBFF] ${
          props.display === false ? "hidden" : "flex"
        } ${show ? "null" : " -translate-y-full"}`}
      >
        <div className="flex w-full justify-between items-center px-5 py-3 xs:py-6 md3:py-0">
          <article className="capitalize flex w-full sm:w-fit justify-between">
            <p
              className={`text-base cursor-pointer mr-2 sm:mr-6 ${
                tab === 1 ? "font-[700]" : "font-medium"
              }`}
              onClick={() => {
                changeTab(1);
              }}
            >
              Home
            </p>
            <p
              className={`text-base cursor-pointer mr-2 sm:mr-6 ${
                tab === 2 ? "font-[700]" : "font-medium"
              }`}
              onClick={() => {
                changeTab(2);
              }}
            >
              Contact us
            </p>
            <p
              className={`text-base font-medium cursor-pointer mr-2 sm:mr-6 ${
                tab === 3 ? "font-[700]" : "font-medium"
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
              <a
                href="https://cloudnotte.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8ea2ba]"
              >
                School Portal
              </a>
            </p>
          </article>
          <article className=" w-fit justify-between hidden md2:flex ">
            <div>
              <Link
                href="/schools/[schoolRoutePrefix]/apply"
                as={`/schools/${props.prefix}/apply`}
                passHref
              >
                <div className="hidden md3:block mr-3">
                  <Button1 customStyle="" py="py-3" bg="bg-[#5f9af2]">
                    <GiGraduateCap className="w-7 h-7 mr-1" />
                    Enroll for Admission
                  </Button1>
                </div>
              </Link>
            </div>
            <div className="hidden mr-3">
              <Button2
                customStyle=""
                bg="bg-[#E7F0FB]"
                color="text-[#8EA2BA]"
                py="py-[14px] "
              >
                <IoIosCall className="w-6 h-6 mr-1 fill-[#f44336]" />
                Call
              </Button2>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default SchoolLandingPageNavbarFixed;
