import React, { useState } from "react";
import Button from "../Home/Button";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";

function RightBar({ schools }) {
  const [imageLoaded, setImageLoaded] = useState({});

  return (
    <>
      <div className={styles.scrollbar}>
        <article className="bg-white px-5  pb-2 w-full capitalize h-fit flex flex-col justify-between">
          <Link href="/schools/tech_school_badge" passHref>
            <article className="bg-white w-full capitalize h-40 flex flex-col justify-center">
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
            </article>
          </Link>

          <div>
            <p className="font-bold">Tech Schools</p>
          </div>
          {schools
            ?.filter((i) => i.isSmartSchool)
            .map((smartSchool) => {
              console.log(smartSchool, "smart school");
              return (
                <div key={smartSchool.id}>
                  <Link
                    href="/schools/[schoolRoutePrefix]"
                    as={`/schools/${smartSchool.prefix}`}
                    passHref
                  >
                    <div className=" w-full my-3 h-fit items-start bg-white flex cursor-pointer">
                      <article className="h-[70px] w-[70px] min-h-[70px] min-w-[70px] object-contain rounded-full">
                        {" "}
                        <span
                          className={`${
                            imageLoaded[smartSchool.id] ? "hidden" : "flex"
                          }`}
                        >
                          <Image
                            src={
                              "https://res.cloudinary.com/ugomatt/image/upload/v1647277984/cloudnotte_icon_soqc6y.png"
                            }
                            onLoad={() => {
                              setImageLoaded((oldImageState) => ({
                                ...oldImageState,
                                [smartSchool.id]: false,
                              }));
                              console.log(imageLoaded, "image not loaded");
                            }}
                            alt={smartSchool.name.toLowerCase()}
                            width={70}
                            height={70}
                            objectFit="cover"
                            className={` w-[70px] h-[70px] border-2 border-gray bg-gray-400 rounded-full`}
                          />
                        </span>
                        <span
                          className={`${
                            imageLoaded[smartSchool.id] ? "flex" : "hidden"
                          }`}
                        >
                          <Image
                            src={
                              smartSchool.logoUrl
                                ? smartSchool.logoUrl
                                : "https://res.cloudinary.com/ugomatt/image/upload/v1647277984/cloudnotte_icon_soqc6y.png"
                            }
                            onLoad={() => {
                              setImageLoaded({
                                ...imageLoaded,
                                [smartSchool.id]: true,
                              });
                              console.log(imageLoaded, "image not loaded");
                            }}
                            alt={smartSchool.name.toLowerCase()}
                            width={70}
                            height={70}
                            objectFit="cover"
                            className={` w-[70px] h-[70px] border-2 border-gray bg-gray-400 rounded-full`}
                          />
                        </span>
                      </article>
                      <article className="">
                        <p className="font-semibold capitalize">
                          {smartSchool.name.toLowerCase()}
                        </p>
                        <p>
                          {smartSchool.state} - {smartSchool.country}
                        </p>
                      </article>
                    </div>
                  </Link>
                </div>
              );
            })}
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
