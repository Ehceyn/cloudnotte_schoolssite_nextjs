import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button1 } from "./Button";
import { GiGraduateCap } from "react-icons/gi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import Navbar from "./SchoolPersonalPageNavbar";
import Link from "next/link";
import SchoolLandingPageNavbarFixed from "./SchoolLandingPageNavbarFixed";
import Image from "next/image";

function SchoolsPersonalLandingPage() {
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
    if (window.scrollY > 550) {
      setNavbarFixed(true);
    } else {
      setNavbarFixed(false);
    }
  }

  // REACT SLICK CAROUSEL
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className=" md2:px-40 h-fit w-full bg-[#F8FBFF]">
        <div>
          <div className="max-h-[700px] relative">
            {/* 
            width={1500}
            height={800}<Image
            src="/assets/images/school-ad-img-1.png"
            className="w-full max-h-[800px] aspect-video sm:rounded-br-md sm:rounded-bl-lg"
            alt=""
          /> */}
            {/* <div className="w-full  items-center justify-between absolute top-2/4 left-0 bg-black box-border hidden right-0 px-3 z-10">
            <article className="border  px-2 py-2 cursor-pointer rounded-full w-fit text-white bg-black bg-opacity-30 hover:brightness-75">
              <MdChevronLeft fontSize="20px" />
            </article>
            <article className="border  px-2 py-2 cursor-pointer rounded-full w-fit text-white bg-black bg-opacity-30 hover:brightness-75">
              <MdChevronRight fontSize="20px" />
            </article>
          </div> */}
            <Slider {...settings}>
              <div>
                <Image
                  width={1500}
                  height={800}
                  src="/assets/images/school-ad-img-1.png"
                  className="w-full max-h-[800px] aspect-video sm:rounded-br-md sm:rounded-bl-lg "
                  alt=""
                />
              </div>
              <div>
                <Image
                  width={1500}
                  height={800}
                  src="/assets/images/school-ad-img-1.png"
                  className="w-full max-h-[800px] aspect-video sm:rounded-br-md sm:rounded-bl-lg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  width={1500}
                  height={800}
                  src="/assets/images/school-ad-img-1.png"
                  className="w-full max-h-[800px] aspect-video sm:rounded-br-md sm:rounded-bl-lg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  width={1500}
                  height={800}
                  src="/assets/images/school-ad-img-1.png"
                  className="w-full max-h-[800px] aspect-video sm:rounded-br-md sm:rounded-bl-lg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  width={1500}
                  height={800}
                  src="/assets/images/school-ad-img-1.png"
                  className="w-full max-h-[800px] aspect-video sm:rounded-br-md sm:rounded-bl-lg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  width={1500}
                  height={800}
                  src="/assets/images/school-ad-img-1.png"
                  className="w-full max-h-[800px] aspect-video sm:rounded-br-md sm:rounded-bl-lg"
                  alt=""
                />
              </div>
            </Slider>
          </div>
          <div className="flex justify-between mb-5 sm:mb-0 h-fit items-center">
            <div className="flex pl-18 px-5 pt-5">
              <article>
                <img
                  src="/assets/images/school-profile-img.png"
                  className="w-[60px] h-[60px] sm:w-[150px]  sm:h-[150px] object-contain bg-gray-800 rounded-[50%] sm:-translate-y-12 border-white md:border-8 sm:border object-contain"
                  alt=""
                />
              </article>
              <article className=" pl-4 sm:leading-7 md:leading-9 ">
                <p className=" sm:text-[1.5em] md:text-[2.0em] font-semibold">
                  Royal Group of Schools
                </p>
                <p className=" sm:text-[0.9em] md:text-[1.2em]">
                  Port Harcourt, Nigeria
                </p>
                <p className="flex text-xs md:text-sm">
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <p className=" pr-1" key={index}>
                        <Image
                          width={20}
                          height={20}
                          src="/assets/icons/star-icon.svg"
                          className="w-5 h-5 sm:w-6 sm:h-6 "
                          alt=""
                        />
                      </p>
                    ))}
                </p>
                <p className=" text-base ">10,000 people loves our school</p>
              </article>
            </div>
            <article className="self-start  py-6">
              <Link href="/enrollment_page" passHref>
                <div className="hidden md3:block">
                  <Button1 py="py-4" bg="bg-[#5f9af2]">
                    <GiGraduateCap className="w-7 h-7 mr-1" />
                    Enroll for Admission
                  </Button1>
                </div>
              </Link>

              <div className="flex-col items-center w-fit h-fit mr-5 sm:mr-12 md2:mr-4 flex md3:hidden">
                <BsFillSuitHeartFill className="w-5 h-5 sm:w-7 sm:h-7 fill-[#f44336]" />
                <p className="text-base font-medium mt-2 text-[#f44336]">
                  Love
                </p>
              </div>
            </article>
          </div>
          <hr className="" />
          <div>
            <Navbar />
          </div>
        </div>
      </section>
      <SchoolLandingPageNavbarFixed display={navbarFixed} />
    </>
  );
}

export default SchoolsPersonalLandingPage;
