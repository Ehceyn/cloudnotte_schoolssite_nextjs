import React, { useEffect, useState } from "react";
// import vector_side_bar_home from "/assets/icons/Vector-home-icon.svg";
// import vector_side_bar_add from "/assets/icons/Vector-add-icon.svg";
// import vector_side_bar_admission from "/assets/icons/Vector-admit-status-icon.svg";
// import vector_side_bar_trending from "/assets/icons/Vector-trending-icon.svg";
import Link from "next/link";
import Image from "next/image";

function BottomNavbar(props) {
  const [show, setShow] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [moreNavItems, setMoreNavItems] = useState(false);

  // Show Bottom Navbar only on scroll up
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  // Function to Show Bottom Navbar only on scroll up
  const handleScroll = () => {
    const position = document.body.getBoundingClientRect().top;
    setScrollPos(position);
    setShow(position > scrollPos);
    console.log(show);
    console.log(scrollPos);
  };

  return (
    <div
      className={`fixed md2:hidden z-20 bottom-0 right-0 left-0 ${
        show ? "translate-y--[100%] h-fit " : "translate-y-[100%] h-0"
      } flex transition-all duration-500 shrink mb-0`}
    >
      <div
        className={`bg-[#F8FBFF] border ${
          moreNavItems ? "hidden" : null
        } border-[#E7F0FB]  py-2 px-3 sm:py-5 w-full rounded-t-2xl capitalize h-fit flex items-center justify-between`}
      >
        <div className="  flex flex-col mr-2 overflow-hidden w-12 sm:w-fit sm:items-center truncate justify-center cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" w-7 h-7 sm:w-9 sm:h-9"
            viewBox="0 0 20 20"
            fill="#5f9af2"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <p className="side-nav-paragraph text-[10px] whitespace-nowrap overflow-hidden truncate sm:text-base pt-1 sm:pt-0 ">
            Home
          </p>
        </div>
        <div className="  flex flex-col mr-2 overflow-hidden w-16 sm:w-fit sm:items-center truncate justify-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" w-7 h-7 sm:w-9 sm:h-9"
            viewBox="0 0 20 20"
            fill="#5f9af2"
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>

          <p className="side-nav-paragraph text-[10px] whitespace-nowrap overflow-hidden truncate sm:text-base pt-2 sm:pt-0  ">
            Top Tech schools
          </p>
        </div>
        <div
          className="overflow-hidden truncate w-16 sm:w-fit sm:items-center "
          onClick={props.onCallCheckAdmissionModal}
        >
          {/* <Link href="/my_school_page/admission_status/1" passHref> */}
          <div className="  flex flex-col mr-2  justify-center cursor-pointer sm:w-fit sm:items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" w-7 h-7 sm:w-9 sm:h-9"
              viewBox="0 0 20 20"
              fill="#5f9af2"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>

            <p className="side-nav-paragraph text-[10px] whitespace-nowrap overflow-hidden truncate sm:text-base pt-2 sm:pt-0 ">
              Admission status
            </p>
          </div>
          {/* </Link> */}
        </div>
        <div
          className=" flex flex-col mr-2 overflow-hidden w-16 sm:w-fit sm:items-center truncate justify-center cursor-pointer"
          onClick={props.onCallEntranceExamModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" w-7 h-7 sm:w-9 sm:h-9"
            viewBox="0 0 20 20"
            fill="#5f9af2"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clipRule="evenodd"
            />
          </svg>

          <p className="side-nav-paragraph text-[10px] whitespace-nowrap overflow-hidden truncate sm:text-base pt-2 sm:pt-0 ">
            Entrance exam
          </p>
        </div>
        <div
          className=" overflow-hidden truncate w-12 sm:w-fit sm:items-center"
          onClick={() => setMoreNavItems(true)}
        >
          <div className="  flex flex-col mr-2 justify-center cursor-pointer sm:w-fitsm: items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" w-7 h-7 sm:w-9 sm:h-9"
              viewBox="0 0 20 20"
              fill="#5f9af2"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
            <p className="side-nav-paragraph text-[10px] whitespace-nowrap overflow-hidden truncate sm:text-base pt-1 sm:pt-0 ">
              More{" "}
            </p>{" "}
          </div>
        </div>
      </div>
      {/* MORE NAVITEMS DIV */}
      <div
        className={`bg-[#F8FBFF] border border-[#E7F0FB] ${
          moreNavItems ? "block" : "hidden"
        }  py-2 px-3 sm:py-5 w-full rounded-t-2xl capitalize h-fit flex items-center justify-between`}
      >
        <div className="flex w-full justify-center">
          <p className="font-semibold">More Options</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 self-end"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default BottomNavbar;
