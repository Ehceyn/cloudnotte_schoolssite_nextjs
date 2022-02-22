import React from "react";
// import vector_side_bar_head from "../../assets/icons/Vector-side-bar-icon.svg";
// import vector_side_bar_home from "../../assets/icons/Vector-home-icon.svg";
// import vector_side_bar_add from "../../assets/icons/Vector-add-icon.svg";
// import vector_side_bar_admission from "../../assets/icons/Vector-admit-status-icon.svg";
// import vector_side_bar_trending from "../../assets/icons/Vector-trending-icon.svg";
// import vector_side_bar_print from "../../assets/icons/Vector-print-icon.svg";

// import cloudnotte_logo_text from "../../assets/images/cloudnotte-logo-text.svg";
import Button from "../Home/Button";
import Image from "next/image";

function Sidebar() {
  return (
    <>
      <div className="">
        <article className=" pt-10 pl-9 pb-5 ">
          <Image
            src="{vector_side_bar_head}"
            alt=""
            width="50px"
            height="50px"
          />
        </article>
        <article className="bg-white pl-8 pr-8 pt-5 pb-2 w-full capitalize h-fit flex flex-col justify-between">
          <div className=" w-full my-3 h-[30px] items-center bg-white flex cursor-pointer">
            {/* <Image
              src={vector_side_bar_home}
              alt=""
              width="20px"
              height="20px"
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
            <Image
              src="{vector_side_bar_trending}"
              alt=""
              width="20px"
              height="20px"
              className="mr-3"
            />

            <p className="side-nav-paragraph">Top tech schools</p>
          </div>
          <div className="  w-full my-3 h-[30px] items-center bg-white flex cursor-pointer">
            <Image
              src="{vector_side_bar_admission}"
              alt=""
              width="20px"
              height="20px"
              className="mr-3"
            />

            <p className="side-nav-paragraph">Admission status</p>
          </div>
          <div className="  w-full my-3 h-[30px] items-center bg-white flex cursor-pointer">
            <Image
              src="{vector_side_bar_add}"
              alt=""
              width="20px"
              height="20px"
              className="mr-3"
            />

            <p className="side-nav-paragraph">Entrance exam</p>
          </div>
          {/* <Link to="students_info"> */}
          <div className="  w-full my-3 h-[30px] items-center bg-white flex cursor-pointer">
            {/* <Image
                src={vector_side_bar_print}
                alt=""
                width="20px"
                height="20px"
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
          {/* </Link> */}
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
              src="{cloudnotte_logo_text}"
              alt=""
              width="124px"
              height="20px"
            />
          </div>
        </article>
      </div>
    </>
  );
}

export default Sidebar;
