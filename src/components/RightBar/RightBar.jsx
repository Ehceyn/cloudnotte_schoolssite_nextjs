import React, { useState } from "react";
import Button from "../Home/Button";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";

function RightBar({ schools }) {
  const [imageError, setImageError] = useState({});

  // COLORS TO MAP
  const colors = ["#ffd833", "#fc2d44", "#28a265", "#70a4f3"];

  return (
    <>
      <div className={styles.scrollbar}>
        <article className="bg-white px-5  pb-2 w-full capitalize h-fit flex flex-col justify-between">
          <Link href="/schools/tech_school_badge" passHref>
            <a className="bg-white w-full capitalize h-40 flex flex-col justify-center">
              <Button
                py="py-2"
                px="px-4"
                borderRaduis="rounded-[5px]"
                height="h-[90px] bg-[#5f9af2] text-white leading-5 text-left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                Get A Tech Badge For Your School
              </Button>
            </a>
          </Link>

          <div>
            <h2 className="font-bold">Tech Schools</h2>
          </div>
          <ul>
            {schools
              ?.filter((i) => i.isSmartSchool)
              .map((smartSchool) => {
                //.log(smartSchool, "smart school");
                return (
                  <li key={smartSchool.id}>
                    <Link
                      href="/schools/[schoolRoutePrefix]"
                      as={`/schools/${smartSchool.prefix}`}
                      passHref
                    >
                      <a className=" w-full my-3 h-fit items-start bg-white flex cursor-pointer">
                        <article className=" mr-3 h-[65px] w-[65px] min-h-[65px] min-w-[65px] object-contain rounded-full relative">
                          <span
                            title="Tech School"
                            className={`absolute z-[1] top-1 right-0 bg-white  border-[#5f9af2] text-red-500 rounded-full`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="#5f9af2"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>{" "}
                          <span
                            className={`${
                              imageError[smartSchool.id] ? "hidden" : "flex"
                            } border bg-white rounded-full`}
                          >
                            <Image
                              src={
                                smartSchool.logoUrl
                                  ? smartSchool.logoUrl
                                  : "https://res.cloudinary.com/ugomatt/image/upload/v1647277984/cloudnotte_icon_soq.png"
                              }
                              onError={() => {
                                setImageError({
                                  ...imageError,
                                  [smartSchool.id]: true,
                                });
                                //.log(imageError, "image error");
                              }}
                              // onLoad={() => {
                              //   setImageError({
                              //     ...imageError,
                              //     [smartSchool.id]: false,
                              //   })
                              // }}
                              alt={smartSchool.name.toLowerCase()}
                              width={70}
                              height={70}
                              objectFit="cover"
                              className={` w-[65px] h-[65px] rounded-full`}
                            />
                          </span>
                          {!imageError[smartSchool.id] ? null : (
                            <span
                              className={`flex items-center justify-center bg-[#fff] w-[65px] h-[65px]  border rounded-full`}
                              style={{
                                color:
                                  colors[
                                    Math.floor(Math.random() * colors.length)
                                  ],
                              }}
                            >
                              {smartSchool.name
                                .split(" ")
                                .map((word, index) => {
                                  return (
                                    <article
                                      className="text-lg font-bold"
                                      key={index}
                                    >
                                      {index <= 1
                                        ? word.charAt(0).toUpperCase()
                                        : null}
                                    </article>
                                  );
                                })}
                            </span>
                          )}
                        </article>
                        <article className="">
                          <h2
                            className="  font-bold capitalize"
                            dangerouslySetInnerHTML={{
                              __html: smartSchool.name.toLowerCase(),
                            }}
                          ></h2>
                          <p className="capitalize">
                            {smartSchool.state.toLowerCase()} -
                            {smartSchool.country.toLowerCase()}
                          </p>
                        </article>
                      </a>
                    </Link>
                  </li>
                );
              })}
          </ul>

          {/* If no smart school in that region */}
          {schools?.filter((i) => i.isSmartSchool).length === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-32 w-32"
                viewBox="0 0 20 20"
                fill="#5f9af2"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-center   font-bold mb-2">
                No Tech schools in this region
              </p>
              {/* Button to become a smart school */}
              <Link href="/schools/tech_school_badge" passHref>
                <Button
                  py="py-2"
                  px="px-4"
                  borderRaduis="rounded-[5px]"
                  height="h-[40px] bg-[#5f9af2] text-white leading-5 text-left"
                >
                  Become a Tech School
                </Button>
              </Link>
            </div>
          ) : null}
        </article>
        {/* <article className="bg-white pl-8 pr-8 pb-5 w-full capitalize flex flex-col justify-center">
          <Button
            py="py-2"
            px="px-4"
            borderRaduis="rounded-[5px] border"
            height="h-[50px] bg-white text-[#f44336]"
          >
            View All
          </Button>
        </article> */}
      </div>
    </>
  );
}

export default RightBar;
