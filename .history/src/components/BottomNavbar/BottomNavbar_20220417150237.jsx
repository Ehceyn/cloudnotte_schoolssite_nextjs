import React, { useEffect, useState } from "react";
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
    //.log(show);
    //.log(scrollPos);
  };

  return (
    <div
      className={`fixed md2:hidden z-[20] bottom-0 right-0 left-0 ${
        show ? "translate-y--[100%] h-fit " : "translate-y-[100%] h-0"
      } flex transition-all duration-500 shrink mb-0`}
    >
      <div
        className={`bg-[#F8FBFF] border ${
          moreNavItems ? "hidden" : null
        } border-[#E7F0FB]  py-1 px-3 sm:py-5 w-full rounded-t-2xl capitalize h-fit flex items-center justify-between`}
      >
        <Link href="/schools" passHref>
          <div className="  flex flex-col mr-2 overflow-hidden w-fit sm:w-fit items-center  justify-center cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" w-5 h-5 sm:w-9 sm:h-9"
              viewBox="0 0 20 20"
              fill="#5f9af2"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <p className="side-nav-paragraph text-[10px]  sm:text-base pt-1 sm:pt-0 ">
              Home
            </p>
          </div>
        </Link>
        <div
          className="  flex flex-col mr-2  justify-center cursor-pointer sm:w-fit items-center"
          onClick={props.onCallCheckAdmissionModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" w-5 h-5 sm:w-9 sm:h-9"
            viewBox="0 0 20 20"
            fill="#5f9af2"
          >
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>

          <p className="side-nav-paragraph text-[10px]  sm:text-base pt-1 sm:pt-0 ">
            Admission status
          </p>
        </div>
        <div
          className=" flex flex-col mr-2 overflow-hidden w-fit sm:w-fit items-center  justify-center cursor-pointer"
          onClick={props.onCallEntranceExamModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" w-5 h-5 sm:w-9 sm:h-9"
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

          <p className="side-nav-paragraph text-[10px]  sm:text-base pt-1 sm:pt-0 ">
            Entrance exam
          </p>
        </div>
        <div
          className=" overflow-hidden w-fit sm:w-fit items-center"
          onClick={() => setMoreNavItems(true)}
        >
          <div className="  flex flex-col mr-2 justify-center cursor-pointer sm:w-fit sm: items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" w-5 h-5 sm:w-9 sm:h-9"
              viewBox="0 0 20 20"
              fill="#5f9af2"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
            <p className="side-nav-paragraph text-[10px]  sm:text-base pt-1 sm:pt-0 ">
              More{" "}
            </p>{" "}
          </div>
        </div>
      </div>
      {/* ===================== MORE NAVITEMS DIV ======================== */}
      <div
        className={`bg-[#F8FBFF] border border-[#E7F0FB] ${
          moreNavItems ? "block" : "hidden"
        }  py-4 px-4 sm:py-5 w-full rounded-t-2xl capitalize h-fit flex flex-col`}
      >
        <div className="flex w-full justify-between mb-6">
          <p className="  font-bold flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mr-2"
              viewBox="0 0 20 20"
              fill="#F44336"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>{" "}
            More Options
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => setMoreNavItems(false)}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="w-full ">
          <article
            className="border-b py-5"
            onClick={props.onCallGetStudentDataModal}
          >
            <p className="flex justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                viewBox="0 0 20 20"
                fill="#5f9af2"
              >
                <path
                  fillRule="evenodd"
                  d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                  clipRule="evenodd"
                />
              </svg>
              Print Admission Slip
            </p>
          </article>
          {/* <article className="border-b py-5">
            <p className="flex justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" w-5 h-5 sm:w-9 sm:h-9"
                viewBox="0 0 20 20"
                fill="#5f9af2"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              Tech schools{" "}
            </p>
          </article>{" "} */}
          <Link href="/schools/tech_school_badge" passHref>
            <article className="border-b py-5">
              <p className="flex justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  viewBox="0 0 20 20"
                  fill="#5f9af2"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Tech school badge{" "}
              </p>
            </article>
          </Link>
          <a
            href="https://cloudnotte.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8ea2ba]"
          >
            <article className="border-b py-5">
              <p className="flex justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  viewBox="0 0 20 20"
                  fill="#5f9af2"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                    clipRule="evenodd"
                  />
                </svg>
                Login School Portal{" "}
              </p>
            </article>
          </a>
          <a
            href="https://cloudnotte.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8ea2ba]"
          >
            <article className="border-b py-5">
              <p className="flex justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  viewBox="0 0 20 20"
                  fill="#5f9af2"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                About us{" "}
              </p>
            </article>
          </a>
          <div className="flex justify-center my-5">
            <Link href="/schools/register" passHref>
              <button
                className="bg-[#5f9af2] hover:brightness-90 text-white font-bold py-3 px-5 rounded-full"
                onClick={props.onDisplayRegisterSchoolPage}
              >
                List Your School
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNavbar;
