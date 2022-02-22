import React from "react";
import Button from "../Home/Button";
import Image from "next/image";
import Link from "next/link";

function Sidebar() {
  return (
    <>
      <div className="">
        <article className=" pt-10 pl-9 pb-5 ">
          <Image
            src="/assets/icons/Vector-side-bar-icon.svg"
            width={50}
            height={50}
            alt=""
          />
        </article>
        <article className="bg-white pl-8 pr-8 pt-5 pb-2 w-full capitalize h-fit flex flex-col justify-between">
          <div className=" w-full my-3 h-[30px] items-center bg-white flex cursor-pointer">
            {/* <Image
              src={vector_side_bar_home}
              alt=""
              width={20}
              height={20}
              className="mr-3"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[22px] w-[22px] mr-3"
              viewBox="0 0 20 20"
              fill="#5f9af2"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>

            <p className="side-nav-paragraph">Home</p>
          </div>
          <div className="  w-full my-3 h-[30px] items-center bg-white flex cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[22px] w-[22px] mr-3"
              viewBox="0 0 20 20"
              fill="#5f9af2"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>

            <p className="side-nav-paragraph">Top tech schools</p>
          </div>
          <div className="  w-full my-3 h-[30px] items-center bg-white flex cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[22px] w-[22px] mr-3"
              viewBox="0 0 20 20"
              fill="#5f9af2"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>

            <p className="side-nav-paragraph">Admission status</p>
          </div>
          <div className="  w-full my-3 h-[30px] items-center bg-white flex cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[22px] w-[22px] mr-3"
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

            <p className="side-nav-paragraph">Entrance exam</p>
          </div>
          <Link href="my_school_page/students_info/1" passHref>
            <div className="  w-full my-3 h-[30px] items-center bg-white flex cursor-pointer">
              {/* <Image
                src={vector_side_bar_print}
                alt=""
                width={20}
                height={20}
                className="mr-3"
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[22px] w-[22px] mr-3"
                viewBox="0 0 20 20"
                fill="#5f9af2"
              >
                <path
                  fillRule="evenodd"
                  d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="side-nav-paragraph">Print slip</p>
            </div>
          </Link>
        </article>
        <article className="bg-white pl-8 pr-8 pt-5 pb-5 w-full capitalize h-40 flex flex-col justify-end">
          <Button
            py="py-2"
            px="px-8"
            borderRaduis="rounded-full"
            height="h-[62px] bg-[#5f9af2] text-white"
          >
            Register your school
          </Button>
        </article>
        <article className="bg-white h-fit flex justify-center">
          <div className="flex">
            <p className="side-nav-paragraph text-sm font-medium ">From</p>
            <Image
              src="/assets/images/cloudnotte-logo-text.svg"
              alt=""
              width={124}
              height={20}
            />
          </div>
        </article>
      </div>
    </>
  );
}

export default Sidebar;
