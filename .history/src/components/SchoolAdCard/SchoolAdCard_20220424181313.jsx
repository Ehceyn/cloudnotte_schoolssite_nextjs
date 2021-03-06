import React, { useState, useEffect } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

import { BsFillSuitHeartFill } from "react-icons/bs";
import { MdOutlineReviews } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";

import { CardButton } from "../Home/Button";
import DOMPurify from "isomorphic-dompurify";
import Loader from "../Loader";

function SchoolAdCard({
  name,
  country,
  state,

  logoUrl,
  prefix,

  shortDescription,
  assetsUrl,
  isSmartSchool,
  textColor,
}) {
  const [newShortDescription, setNewShortDescription] = useState();
  // loader state
  const [loader, setLoader] = useState(false);

  // PArse text from server to html
  function htmlDecode(content) {
    var doc =
      process.browser && new DOMParser().parseFromString(content, "text/html");
    return process.browser && doc.documentElement.textContent;
  }

  useEffect(() => {
    if (shortDescription) {
      setNewShortDescription(htmlDecode(DOMPurify.sanitize(shortDescription)));
    }
  }, [shortDescription]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [imageError, setImageError] = useState(false);
  const [displayText, setDisplayText] = useState(false);

  return (
    <>
      <section className=" border mt-8 md:rounded-lg">
        <Link
          href="/schools/[schoolRoutePrefix]"
          as={`/schools/${prefix}`}
          passHref
        >
          <div className="cursor-pointer" onClick={() => setLoader(true)}>
            <div className="flex px-3 xs:px-5 py-5">
              <article className="h-[85px] w-[85px] relative min-h-[85px] min-w-[85px] object-contain rounded-full">
                <span
                  title="Tech School"
                  className={`absolute z-[1] ${
                    isSmartSchool ? "flex" : "hidden"
                  } top-2 right-0 bg-white  border-[#5f9af2] rounded-full`}
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
                  className={`flex
                  border bg-white rounded-full`}
                >
                  <Image
                    loading="lazy"
                    onError={() => {
                      //.log("error");
                      setImageError(false);
                    }}
                    src={() =>
                      imageError
                        ? `https://res.cloudinary.com/ugomatt/image/upload/v1647277984/cloudnotte_icon_soq.png`
                        : logoUrl
                    }
                    width={85}
                    height={85}
                    objectFit="cover"
                    className={` w-[85px] h-[85px]  rounded-full`}
                    alt={name.toLowerCase()}
                  />
                </span>
                {!displayText ? null : (
                  <span
                    className={`flex
                     items-center justify-center bg-[#fff] w-[85px] h-[85px]  border rounded-full`}
                  >
                    {name.split(" ").map((word, index) => {
                      return (
                        <span
                          className={`text-2xl font-bold`}
                          style={{ color: textColor }}
                          key={index}
                        >
                          {index <= 1 ? word.charAt(0).toUpperCase() : null}
                        </span>
                      );
                    })}
                  </span>
                )}
              </article>
              <article className="pl-2 xs:pl-4">
                <p
                  className="font-bold capitalize"
                  dangerouslySetInnerHTML={{ __html: name.toLowerCase() }}
                ></p>
                <p className=" text-sm capitalize">
                  {state.toLowerCase()}, {country.toLowerCase()}
                </p>
                {/* <article className="flex text-sm">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <p className=" pr-1" key={index}>
                    <Image
                      loading="lazy"
                      src="/assets/icons/star-icon.svg"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                      alt=""
                    />
                  </p>
                ))}
            </article> */}
              </article>
            </div>

            <div className=" flex px-4 xs:px-7 pt-2 pb-4 flex-wrap cursor-pointer">
              <p
                className={`${
                  newShortDescription ? "flex" : "hidden"
                } w-[100vh]`}
                dangerouslySetInnerHTML={{
                  __html: newShortDescription && newShortDescription,
                }}
              ></p>
              <p
                className={`${
                  newShortDescription ? "hidden" : "flex"
                } w-[100vh]`}
                dangerouslySetInnerHTML={{
                  __html: `Welcome to ${name}, We are a thriving educational community of
                students whose parents and guardians have made a decision for
                their children/wards to study here for specific reasons:
                well-trained staff, an intensive curriculum, and a stimulating
                learning environment.`,
                }}
              ></p>
            </div>

            <div className="max-h-[475px] relative">
              <Slider {...settings}>
                {assetsUrl.length > 0 ? (
                  assetsUrl.map((asset, index) => {
                    return (
                      <div key={index}>
                        <Image
                          loading="lazy"
                          src={
                            asset
                              ? asset
                              : `https://res.cloudinary.com/zichygraphs/image/upload/v1648834278/school-ad-img-1_qkjvwh.png`
                          }
                          width={1000}
                          height={600}
                          objectFit="cover"
                          className="w-full max-h-[475px] aspect-video "
                          alt={name}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div>
                    <Image
                      loading="lazy"
                      src={`https://res.cloudinary.com/ugomatt/image/upload/v1649021058/bg_y5vhzp.jpg`}
                      width={1000}
                      height={600}
                      className="w-full max-h-[475px] aspect-video "
                      alt={name}
                    />
                  </div>
                )}
              </Slider>
            </div>
          </div>
        </Link>

        <div className=" flex flex-col px-4 xs:px-7 pt-0 pb-4 flex-wrap w-full justify-between">
          {/* <article className="flex w-full justify-between py-3 xs:py-5">
            <p className="text-[14px] xs:text-base">
              1500 people loves this school
            </p>
            <p className="cursor-pointer text-[14px] xs:text-base">5 reviews</p>
          </article> */}

          {/* <hr /> */}
        </div>
        <div className="flex h-fit pb-4 xs:pb-7 w-full px-4 md:px-7 justify-between items-center">
          <article className="cursor-pointer flex items-center text-[14px] xs:text-base">
            <BsFillSuitHeartFill className="h-5 w-5 fill-[#f44336]" />
            <p className="pl-[2px] xs:pl-2">Love</p>
          </article>
          <article className="cursor-pointer flex  text-[14px] xs:text-base">
            <MdOutlineReviews className="h-5 w-5 text-[#8EA2BA]" />
            <p className="pl-[2px] xs:pl-2">Reviews</p>
          </article>
          <Link
            href="/schools/[schoolRoutePrefix]/apply"
            as={`/schools/${prefix}/apply`}
            passHref
          >
            <article
              className="cursor-pointer flex items-center"
              onClick={() => setLoader(true)}
            >
              <CardButton
                py=" xs:h-[50px] py-2 xs:py-2"
                px="xs:text-base text-[13px] px-2 xs:px-4  bg-[#5f9af2] text-white "
              >
                <GiGraduateCap className="w-5 h-5 mr-1" />
                Enroll For Admission
              </CardButton>
            </article>
          </Link>
        </div>
        <Loader display={loader} message="Please wait..." />
      </section>
    </>
  );
}

export default SchoolAdCard;
