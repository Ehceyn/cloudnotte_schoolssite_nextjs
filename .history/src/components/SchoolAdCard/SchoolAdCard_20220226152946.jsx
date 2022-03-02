import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";

import { BsFillSuitHeartFill } from "react-icons/bs";
import { MdOutlineReviews } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";

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
  admissionInfo: { assetsUrl },
}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(schools, "na school");
  console.log(
    id,
    name,
    country,
    state,
    city,
    logoUrl,
    prefix,
    type,
    assetsUrl,
    "see them"
  );

  return (
    <>
      <section className=" border mt-8 rounded-0 md:rounded-lg bg-red-500">
        <div className="flex px-3 xs:px-5 py-5">
          <article>
            <Image
              loading="lazy"
              src="/assets/images/school-profile-img.png"
              width={85}
              height={85}
              className=" w-[85px] h-[85px] object-contain"
              alt=""
            />
          </article>
          <article className="pl-2 xs:pl-4">
            <p className="font-bold">{school.name}</p>
            <p className=" text-sm">Port Harcourt, Nigeria</p>
            <article className="flex text-sm">
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
            </article>
          </article>
        </div>
        <Link href="/my_school_page/schoolPage" passHref>
          <div className=" flex px-4 xs:px-7 pt-2 pb-4 flex-wrap cursor-pointer">
            <p className=" w-[100vh]">
              Science practicals are not as scary as you think, Cloudnotte
              virtual laboratory gives you that assurance. Science practicals
              are not as scary as you think, Cloudnotte virtual laboratory gives
              you that assurance.
            </p>
          </div>
        </Link>

        <div className="max-h-[475px] relative">
          <Slider {...settings}>
            <div>
              <Image
                loading="lazy"
                src="/assets/images/school-ad-img-1.png"
                width={1000}
                height={600}
                className="w-full max-h-[475px] aspect-video "
                alt=""
              />
            </div>
            <div>
              <Image
                loading="lazy"
                src="/assets/images/school-ad-img-1.png"
                width={1000}
                height={600}
                className="w-full max-h-[475px] aspect-video"
                alt=""
              />
            </div>
            <div>
              <Image
                loading="lazy"
                src="/assets/images/school-ad-img-1.png"
                width={1000}
                height={600}
                className="w-full max-h-[475px] aspect-video"
                alt=""
              />
            </div>
            <div>
              <Image
                loading="lazy"
                src="/assets/images/school-ad-img-1.png"
                width={1000}
                height={600}
                className="w-full max-h-[475px] aspect-video"
                alt=""
              />
            </div>
            <div>
              <Image
                loading="lazy"
                src="/assets/images/school-ad-img-1.png"
                width={1000}
                height={600}
                className="w-full max-h-[475px] aspect-video"
                alt=""
              />
            </div>
            <div>
              <Image
                loading="lazy"
                src="/assets/images/school-ad-img-1.png"
                width={1000}
                height={600}
                className="w-full max-h-[475px] aspect-video"
                alt=""
              />
            </div>
          </Slider>
        </div>
        <div className=" flex flex-col px-4 xs:px-7 pt-0 pb-4 flex-wrap w-full justify-between">
          <article className="flex w-full justify-between py-3 xs:py-5">
            <p className="text-[14px] xs:text-base">
              1500 people loves this school
            </p>
            <p className="cursor-pointer text-[14px] xs:text-base">5 reviews</p>
          </article>

          <hr />
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
          <article className="cursor-pointer flex items-center">
            <Link href="/my_school_page/enrollment/1" passHref>
              <CardButton
                py=" xs:h-[50px] py-2 xs:py-2"
                px="xs:text-base text-[13px] px-2 xs:px-4  bg-[#5f9af2] text-white "
              >
                <GiGraduateCap className="w-5 h-5 mr-1" />
                Enroll For Admission
              </CardButton>
            </Link>
          </article>
        </div>
      </section>
      ;
    </>
  );
}

export default SchoolAdCard;
