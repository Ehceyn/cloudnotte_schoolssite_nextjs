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
      <article className="bg-[#F8FBFF] border border-[#E7F0FB]  py-2 px-3 sm:py-5 w-full rounded-t-2xl capitalize h-fit flex items-center justify-between">
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
          <Image
            src="{vector_side_bar_trending}"
            alt=""
            className="w-6 h-6 sm:w-8 sm:h-8"
          />

          <p className="side-nav-paragraph text-[10px] whitespace-nowrap overflow-hidden truncate sm:text-base pt-2 sm:pt-0  ">
            Top Tech schools
          </p>
        </div>
        <div className="overflow-hidden truncate w-16 sm:w-fit sm:items-center ">
          <Link href="/my_school_page/admission_status/1" passHref>
            <div className="  flex flex-col mr-2  justify-center cursor-pointer sm:w-fit sm:items-center">
              <Image
                src="{vector_side_bar_admission}"
                alt=""
                className="w-6 h-6 sm:w-8 sm:h-8"
              />

              <p className="side-nav-paragraph text-[10px] whitespace-nowrap overflow-hidden truncate sm:text-base pt-2 sm:pt-0 ">
                Admission status
              </p>
            </div>
          </Link>
        </div>
        <div
          className=" flex flex-col mr-2 overflow-hidden w-16 sm:w-fit sm:items-center truncate justify-center cursor-pointer"
          onClick={props.onCallEntrancExamModal}
        >
          <Image
            src="{vector_side_bar_add}"
            alt=""
            className="w-6 h-6 sm:w-8 sm:h-8"
          />

          <p className="side-nav-paragraph text-[10px] whitespace-nowrap overflow-hidden truncate sm:text-base pt-2 sm:pt-0 ">
            Entrance exam
          </p>
        </div>
        <div className=" overflow-hidden truncate w-12 sm:w-fit sm:items-center">
          <Link href="/my_school_page/students_info/1" passHref>
            <div className="  flex flex-col mr-2 justify-center cursor-pointer sm:w-fitsm: items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" w-7 h-7 sm:w-9 sm:h-9"
                viewBox="0 0 20 20"
                fill="#5f9af2"
              >
                <path
                  fillRule="evenodd"
                  d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="side-nav-paragraph text-[10px] whitespace-nowrap overflow-hidden truncate sm:text-base pt-1 sm:pt-0 ">
                Print slip
              </p>{" "}
            </div>
          </Link>
        </div>
      </article>
    </div>
  );
}

export default BottomNavbar;
