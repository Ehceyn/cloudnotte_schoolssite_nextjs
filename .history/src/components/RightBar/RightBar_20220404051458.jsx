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
                            imageLoaded[smartSchool.id] ? "flex" : "hidden"
                          } border bg-white rounded-full`}
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
                              console.log(imageLoaded, "image loaded");
                            }}
                            onError={() => {
                              setImageLoaded({
                                ...imageLoaded,
                                [smartSchool.id]: false,
                              });
                              console.log(imageLoaded, "image error");
                            }}
                            alt={smartSchool.name.toLowerCase()}
                            width={70}
                            height={70}
                            objectFit="cover"
                            className={` w-[65px] h-[65px] rounded-full`}
                          />
                        </span>
                        {imageLoaded[smartSchool.id] ? null : (
                          <span
                            className={`flex items-center justify-center bg-[#5f9af2] w-[65px] h-[65px]  border rounded-full`}
                          >
                            {smartSchool.name.split(" ").map((word, index) => {
                              return (
                                <span
                                  className=" text-bold text-white"
                                  key={index}
                                >
                                  {index <= 1
                                    ? word.charAt(0).toUpperCase()
                                    : null}
                                </span>
                              );
                            })}
                          </span>
                        )}
                      </article>
                      <article className="">
                        <h2
                          className="font-semibold capitalize"
                          dangerouslySetInnerHTML={{
                            __html: smartSchool.name.toLowerCase(),
                          }}
                        ></h2>
                        <p className="capitalize">
                          {smartSchool.state.toLowerCase()} -
                          {smartSchool.country.toLowerCase()}
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
