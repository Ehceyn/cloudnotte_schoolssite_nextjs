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

function SchoolAdCard({
  id,
  name,
  country,
  state,
  city,
  logoUrl,
  prefix,
  type,
  shortDescription,
  assetsUrl,
  isSmartSchool,
}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [imageLoaded, setImageLoaded] = useState();

  function checkImage(url) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();
    request.onload = function () {
      let status = request.status;
      if (status == 200) {
        //if(statusText == OK)
        console.log("image exists");
        return url;
      } else {
        console.log("image doesn't exist");
        return "https://res.cloudinary.com/ugomatt/image/upload/v1647277984/cloudnotte_icon_soqc6y.png";
      }
    };
  }

  console.log(checkImage(logoUrl), "upload");

  return (
    <>
      <section className=" border mt-8 md:rounded-lg">
        <Link
          href="/schools/[schoolRoutePrefix]"
          as={`/schools/${prefix}`}
          passHref
        >
          <div className="cursor-pointer">
            <div className="flex px-3 xs:px-5 py-5">
              <article className="h-[85px] w-[85px] relative min-h-[85px] min-w-[85px] object-contain rounded-full">
                <span
                  title="Tech School"
                  className={`absolute z-[1] ${
                    isSmartSchool ? "flex" : "hidden"
                  } top-2 right--1 bg-white border border-[#5f9af2] text-red-500 p-1 rounded-full`}
                >
                  <GrTechnology fontSize="14px" />
                </span>
                {/* <span className={`${imageLoaded ? "flex" : "hidden"}`}> */}
                <Image
                  loading="lazy"
                  onLoad={() => {
                    console.log("loaded");
                    setTimeout(() => {
                      setImageLoaded(true);
                    });
                  }}
                  src={checkImage(logoUrl)}
                  width={85}
                  height={85}
                  objectFit="cover"
                  className={` w-[85px] h-[85px] border-2 border-gray bg-gray-400 rounded-full`}
                  alt={name}
                />
                {/* </span> */}
                {/* <span className={`${imageLoaded ? "hidden" : "flex"}`}>
                  <Image
                    loading="lazy"
                    src={`https://res.cloudinary.com/ugomatt/image/upload/v1647277984/cloudnotte_icon_soqc6y.png`}
                    width={85}
                    height={85}
                    objectFit="cover"
                    className={` w-[85px] h-[85px] border-2 border-gray bg-gray-400 rounded-full`}
                    alt={name}
                  />
                </span> */}
              </article>
              <article className="pl-2 xs:pl-4">
                <p className="font-bold capitalize">{name.toLowerCase()}</p>
                <p className=" text-sm">
                  {state}, {country}
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

            <div
              className=" flex px-4 xs:px-7 pt-2 pb-4 flex-wrap cursor-pointer"
              dangerouslySetInnerHTML={{
                __html: ` <p className=" w-[100vh]">
                    ${
                      shortDescription !== ""
                        ? shortDescription
                        : `Science practicals are not as scary as you think, Cloudnotte
              virtual laboratory gives you that assurance. Science practicals
              are not as scary as you think, Cloudnotte virtual laboratory gives
              you that assurance.`
                    }
                  </p>`,
              }}
            ></div>

            <div className="max-h-[475px] relative">
              <Slider {...settings}>
                {assetsUrl.length > 0 ? (
                  assetsUrl.map((asset, index) => {
                    return (
                      <div key={index}>
                        <Image
                          loading="lazy"
                          src={
                            asset !== undefined
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
                      src={`https://res.cloudinary.com/zichygraphs/image/upload/v1648834278/school-ad-img-1_qkjvwh.png`}
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
            <article className="cursor-pointer flex items-center">
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
      </section>
    </>
  );
}

export default SchoolAdCard;
