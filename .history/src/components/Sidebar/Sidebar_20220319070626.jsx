import React from "react";
import Button from "../Home/Button";
import Image from "next/image";
import Link from "next/link";

function Sidebar(props) {
  return (
    <>
      <div className="">
        <article className=" pt-10 pl-9 pb-5 ">
          <Image
            src="https://res.cloudinary.com/ugomatt/image/upload/v1647277984/cloudnotte_icon_soqc6y.png"
            width={120}
            height={120}
            alt=""
          />
        </article>
        <article
          className="bg-white pl-8 pr-8 pt-5 pb-2 w-full capitalize h-fit flex flex-col justify-between"
          onClick={props.onDisplayHomePage}
        >
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
          <div
            className="  w-full my-3 h-[30px] items-center bg-white flex cursor-pointer"
            onClick={props.onCallCheckAdmissionModal}
          >
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

            <p className="side-nav-paragraph">Check Admission status</p>
          </div>
          <div
            className="  w-full my-3 h-[30px] items-center bg-white flex cursor-pointer"
            onClick={props.onCallEntranceExamModal}
          >
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

            <p className="side-nav-paragraph">Take Entrance exam</p>
          </div>
          <div
            className="  w-full my-3 h-[30px] items-center bg-white flex cursor-pointer"
            onClick={props.onCallGetStudentDataModal}
          >
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
            <p className="side-nav-paragraph">Print Admission slip</p>
          </div>
          <div
            className="  w-full my-3 h-[30px] items-center bg-white flex cursor-pointer"
            onClick={props.onCallEntranceExamModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[22px] w-[22px] mr-3"
              viewBox="0 0 20 20"
              fill="#5F9AF2"
            >
              <path
                fillRule="evenodd"
                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                clipRule="evenodd"
              />
            </svg>

            <p className="side-nav-paragraph">Login School Portal</p>
          </div>{" "}
          <div
            className="  w-full my-3 h-[30px] items-center bg-white flex cursor-pointer"
            onClick={props.onCallEntranceExamModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[22px] w-[22px] mr-3"
              viewBox="0 0 20 20"
              fill="#5F9AF2"
            >
              <path
                fillRule="evenodd"
                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>

            <p className="side-nav-paragraph">About us</p>
          </div>{" "}
        </article>
        <div className="bg-white pl-8 pr-8 pb-5 w-full capitalize h-28 flex flex-col justify-end">
          <Link href="/schools/register" passHref>
            <article>
              <Button
                py="py-2"
                px="px-8"
                borderRaduis="rounded-full"
                height="h-[62px] bg-[#5f9af2] text-white"
              >
                List your school
              </Button>
            </article>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
