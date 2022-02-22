import React, { useState, useEffect } from "react";
import Button from "./Button";
import styles from "../../../../styles/EnrollmentPage.module.css";
import EnrollmentNavbar from "./EnrollmentNavbar";
import EnrollmentNavbarFixed from "./EnrollmentNavbarFixed";
import { GiGraduateCap } from "react-icons/gi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import Image from "next/image";

function EnrollmentLandingPage() {
  const [navbarFixed, setNavbarFixed] = useState(false);

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
        <div className="flex justify-between mb-5 sm:mb-0 h-fit items-center">
          <div className="flex items-center ">
            <Image
              width={100}
              height={100}
              src="/assets/images/school-profile-img.png"
              className="w-[70px] h-[70px] sm:w-[150px] sm:h-[150px] object-contain bg-gray-400 rounded-[50%] sm:border-8 border-white"
              alt=""
            />
            <article className=" pl-4 sm:leading-7 md:leading-9 ">
              <div className="flex items-center">
                <p className=" sm:text-[1.5em] md:text-[2.0em] font-semibold mr-3">
                  Royal Group of Schools
                </p>
                <p className="text-xs md:text-sm hidden sm:flex">
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
                </p>
              </div>
              <p className=" sm:text-[0.9em] md:text-[1.2em]">
                Port Harcourt, Nigeria
              </p>
              <p className="text-xs md:text-sm flex sm:hidden">
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
              </p>
              <p className=" md:text-base flex ">
                <p className="text-[0.9em] md:text-base font-bold">
                  Application Fee:&nbsp;{" "}
                </p>
                Required
              </p>
            </article>
          </div>
          <article className="">
            <div className="hidden md3:block">
              <Button py="py-4" bg="bg-[#5f9af2]">
                <GiGraduateCap className="w-7 h-7 mr-1" />
                About us
              </Button>
            </div>
          </article>
        </div>
      </div>
      <EnrollmentNavbar />
      <EnrollmentNavbarFixed display={navbarFixed} />
    </>
  );
}

export default EnrollmentLandingPage;
