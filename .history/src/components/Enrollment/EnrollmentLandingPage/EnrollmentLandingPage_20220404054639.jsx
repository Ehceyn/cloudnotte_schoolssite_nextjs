import React, { useState, useEffect } from "react";
import Button from "./Button";
import EnrollmentNavbar from "./EnrollmentNavbar";
import EnrollmentNavbarFixed from "./EnrollmentNavbarFixed";
import { GiGraduateCap } from "react-icons/gi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

function EnrollmentLandingPage({
  id,
  name,
  country,
  state,
  type,
  categories,
  motto,
  logoUrl,
  prefix,
  isSmartSchool,
}) {
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    ["load", "scroll", "resize"].forEach((e) =>
      window.addEventListener(e, handleScroll)
    );
    return () =>
      ["load", "scroll", "resize"].forEach((e) =>
        window.removeEventListener(e, handleScroll)
      );
    // eslint-disable-next-line
  }, []);

  function handleScroll() {
    if (window.scrollY > 240) {
      setNavbarFixed(true);
    } else {
      setNavbarFixed(false);
    }
  }

  return (
    <>
      <div className="px-5 md:px-10 md2:px-28 md3:px-40 mt-6 sm:mt-14 mb-5">
        <div className="flex justify-between mb-5 sm:mb-0 h-fit items-start">
          <div className="flex items-center ">
            <article className="flex items-center justify-center w-[70px] h-[70px] sm:w-[150px] sm:h-[150px] object-contain bg-white rounded-full sm:border border-gray-300 relative">
              <span
                title="Tech School"
                className={`absolute z-[1] ${
                  isSmartSchool ? "flex" : "hidden"
                } top-3 right-2 bg-white  border-[#5f9af2] text-red-500 rounded-full`}
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
              </span>
              <span
                className={`${
                  imageLoaded ? "flex" : "hidden"
                }  bg-white rounded-full`}
              >
                <Image
                  width={100}
                  height={100}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    console.log("error");
                    setImageLoaded(false);
                  }}
                  objectFit="cover"
                  src={`${
                    logoUrl
                      ? logoUrl
                      : `https://res.cloudinary.com/ugomatt/image/upload/v1647277984/cloudnotte_icon_soqc6y.png`
                  }`}
                  className="w-[70px] h-[70px] rounded-full "
                  alt=""
                />
              </span>
              {imageLoaded ? null : (
                <span
                  className={`flex items-center justify-center min-w-full min-h-full bg-[#5f9af2] rounded-full object-cover border-white`}
                >
                  {name.split(" ").map((word, index) => {
                    return (
                      <span className=" text-bold text-white" key={index}>
                        {index <= 1 ? word.charAt(0).toUpperCase() : null}
                      </span>
                    );
                  })}
                </span>
              )}
            </article>
            <article className=" pl-4 sm:leading-7 md:leading-9 ">
              <div className="flex items-center">
                <h2
                  className=" sm:text-[1.5em] md:text-[2.0em] font-bold mr-3 capitalize"
                  dangerouslySetInnerHTML={{ __html: name.toLowerCase() }}
                ></h2>
                {/* <p className="text-xs md:text-sm hidden sm:flex">
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <p className=" pr-1" key={index}>
                        <Image
                          width={24}
                          height={24}
                          src="/assets/icons/star-icon.svg"
                          className="w-5 h-5 sm:w-6 sm:h-6 "
                          alt=""
                        />
                      </p>
                    ))}
                </p> */}
              </div>
              <p className=" sm:text-[0.9em] md:text-[1.2em] capitalize">
                {state.toLowerCase()}, {country.toLowerCase()}
              </p>
              {/* <p className="text-xs md:text-sm flex sm:hidden">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <p className=" pr-1" key={index}>
                      <Image
                        width={24}
                        height={24}
                        src="/assets/icons/star-icon.svg"
                        className="w-5 h-5 sm:w-6 sm:h-6 "
                        alt=""
                      />
                    </p>
                  ))}
              </p> */}
              {/* <div className=" md:text-base flex">
                <p className="text-[0.9em] md:text-base font-semibold">
                  Application Fee:&nbsp;
                </p>
                <p>Required</p>
              </div> */}
            </article>
          </div>
          <Link
            href="/schools/[schoolRoutePrefix]"
            as={`/schools/${prefix}`}
            passHref
          >
            <article className="">
              <div className="hidden md3:block">
                <Button py="py-4" bg="bg-[#5f9af2]">
                  <GiGraduateCap className="w-7 h-7 mr-1" />
                  About us
                </Button>
              </div>
            </article>
          </Link>
        </div>
      </div>
      <EnrollmentNavbar />
      <EnrollmentNavbarFixed display={navbarFixed} />
    </>
  );
}

export default EnrollmentLandingPage;
