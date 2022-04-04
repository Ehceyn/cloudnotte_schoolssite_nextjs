import React, { useState } from "react";
import Image from "next/image";

function AdmissionStatusSchoolHead({ data }) {
  const [imageLoaded, setImageLoaded] = useState();

  return (
    console.log("brainy data: ", data),
    (
      <div className="w-full flex flex-col justify-center items-center mt-7 mb-10">
        <span className={`${imageLoaded ? "flex" : "hidden"}`}>
          <Image
            width={150}
            height={150}
            onLoad={() => setImageLoaded(true)}
            src={
              data.school.logoUrl
                ? data.school.logoUrl
                : `https://res.cloudinary.com/ugomatt/image/upload/v1647277984/cloudnotte_icon_soqc6y.png`
            }
            className="w-[60px] h-[60px] sm:w-[150px]  sm:h-[150px] object-contain sm:border-8 border-white"
            alt={data.school.name}
          />
        </span>
        <span className={`${imageLoaded ? "hidden" : "flex"}`}>
          <Image
            width={150}
            height={150}
            src={`https://res.cloudinary.com/ugomatt/image/upload/v1647277984/cloudnotte_icon_soqc6y.png`}
            className="w-[60px] h-[60px] sm:w-[150px]  sm:h-[150px] object-contain sm:border-8 border-white"
            alt={data.school.name}
          />
        </span>
        <h2
          className="text-center text-2xl font-bold mt-2 capitalize"
          dangerouslySetInnerHTML={{ __html: data.school.name.toLowerCase() }}
        ></h2>
        {/* <p className="text-xs md:text-sm flex">
          {Array(5)
            .fill()
            .map((_, index) => (
              <p className=" " key={index}>
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
        <p className=" sm:text-[0.9em] md:text-[1.2em]">
          {data.school.state}, {data.school.country}
        </p>
      </div>
    )
  );
}

export default AdmissionStatusSchoolHead;
