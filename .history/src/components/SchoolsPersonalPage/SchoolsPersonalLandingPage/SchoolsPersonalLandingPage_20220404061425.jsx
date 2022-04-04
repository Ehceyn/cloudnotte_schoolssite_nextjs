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

function SchoolsPersonalLandingPage({
  id,
  name,
  phoneNumber,
  email,
  country,
  state,
  city,
  address,
  prefix,
  type,
  categories,
  motto,
  logoUrl,
  assetsUrl,
  longDescription,
  anthemUrl,
  status,
  isSmartSchool,
  displayAudioModal,
  onCallAudioModal,
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
          <Slider {...settings}>
            {assetsUrl.length > 0 ? (
              assetsUrl.map((asset, index) => {
                return (
                  <div key={index}>
                    <div className=" shadow-sm shadow-[#63f7f044] rounded-b-[5px] bg-gray-300 flex justify-center border-bl-[5px] border-br-[5px] object-contain h-[200px] xs:h-[300px] sm:h-[350px] md:h-[400px] ">
                      <img
                        src={
                          asset
                            ? asset
                            : `https://res.cloudinary.com/zichygraphs/image/upload/v1648834278/school-ad-img-1_qkjvwh.png`
                        }
                        className="object-cover aspect-video"
                        alt={name + " " + asset}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <div className=" shadow-sm shadow-[#63f7f044] bg-gray-300 rounded-b-[5px] flex justify-center border-bl-[5px] border-br-[5px] object-contain h-[200px] xs:h-[300px] sm:h-[350px] md:h-[400px] ">
                  <img
                    src={`https://res.cloudinary.com/ugomatt/image/upload/v1649021058/bg_y5vhzp.jpg`}
                    className="object-cover aspect-video"
                    alt={name}
                  />
                </div>
              </div>
            )}
          </Slider>

          <div className="flex justify-between mb-5 sm:mb-0 h-fit items-center ">
            <div className="flex pl-18 px-5 pt-5">
              <article className=" w-[70px] h-[70px] sm:w-[150px]  sm:h-[150px] object-contain bg-white rounded-[50%] sm:-translate-y-12 border-white md:border-8 sm:border relative">
                <span
                  title="Tech School"
                  className={`absolute z-[1] ${
                    isSmartSchool ? "flex" : "hidden"
                  } top-2 right-0 bg-white  border-[#5f9af2] text-red-500 rounded-full`}
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
                <span className={`${imageLoaded ? "flex" : "hidden"}`}>
                  <img
                    src={
                      logoUrl
                        ? logoUrl
                        : `https://res.cloudinary.com/ugomatt/image/upload/v1647277984/cloudnotte_icon_soqc6y.png`
                    }
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageLoaded(false)}
                    className=" object-cover rounded-full"
                    alt={name}
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
                <h2
                  className=" sm:text-[1.5em] md:text-[2.0em] font-semibold capitalize"
                  dangerouslySetInnerHTML={{ __html: name.toLowerCase() }}
                ></h2>
                <p className=" sm:text-[0.9em] md:text-[1.2em] capitalize">
                  {state.toLowerCase()}, {country.toLowerCase()}
                </p>
                {/* <article className="flex text-xs md:text-sm">
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
                </article>
                <p className=" text-base ">10,000 people loves our school</p> */}
              </article>
            </div>
            <article className="self-start  py-6">
              <Link
                href="/schools/[schoolRoutePrefix]/apply"
                as={`/schools/${prefix}/apply`}
                passHref
              >
                <div className="hidden md3:block">
                  <Button1 py="py-4" bg="cursor-pointer bg-[#5f9af2]">
                    <GiGraduateCap className="w-7 h-7 mr-1" />
                    Enroll for Admission
                  </Button1>
                </div>
              </Link>

              {/* <div className="flex-col items-center w-fit h-fit mr-5 sm:mr-12 md2:mr-4 flex md3:hidden">
                <BsFillSuitHeartFill className="w-5 h-5 sm:w-7 sm:h-7 fill-[#f44336]" />
                <p className="text-base font-medium mt-2 text-[#f44336]">
                  Love
                </p>
              </div> */}
            </article>
          </div>
          <hr className="" />
          <div>
            <Navbar
              phoneNumber={phoneNumber}
              anthemUrl={anthemUrl}
              name={name}
              displayAudioModal={displayAudioModal}
              onCallAudioModal={onCallAudioModal}
            />
          </div>
        </div>
      </section>
      <SchoolLandingPageNavbarFixed
        display={navbarFixed}
        prefix={prefix}
        name={name}
      />
    </>
  );
}

export default SchoolsPersonalLandingPage;
