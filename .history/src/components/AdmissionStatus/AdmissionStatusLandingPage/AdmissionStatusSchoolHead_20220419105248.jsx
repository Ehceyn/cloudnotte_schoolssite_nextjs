import React, { useState } from "react";
import Image from "next/image";

function AdmissionStatusSchoolHead({ data }) {
  const [imageLoaded, setImageLoaded] = useState();

  // COLORS TO MAP
  const colors = ["#ffd833", "#fc2d44", "#28a265", "#70a4f3"];

  return (
    //.log("brainy data: ", data),
    <div className="w-full flex flex-col justify-center items-center mt-7 mb-10">
      <article className="w-[60px] h-[60px] sm:w-[150px]  sm:h-[150px] object-contain rounded-full sm:border border-white relative">
        <span
          title="Tech School"
          className={`absolute z-[1] ${
            data.school.isSmartSchool ? "flex" : "hidden"
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
        <span
          className={`${
            imageLoaded ? "flex" : "hidden"
          } items-center justify-center w-[60px] h-[60px] sm:w-[150px]  sm:h-[150px] object-contain`}
        >
          {" "}
          <Image
            width={150}
            height={150}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(false)}
            objectFit="cover"
            src={
              data.school.logoUrl
                ? data.school.logoUrl
                : `https://res.cloudinary.com/ugomatt/image/upload/v1647277984/cloudnotte_icon_soq.png`
            }
            className="rounded-full"
            alt={data.school.name}
          />
        </span>
        {imageLoaded ? null : (
          <span
            className={`flex items-center justify-center min-w-full min-h-full bg-[#fff] rounded-full w-[60px] h-[60px] sm:w-[150px]  sm:h-[150px] object-contain border-white`}
            style={{
              color: colors[Math.floor(Math.random() * colors.length)],
            }}
          >
            {data.school.name.split(" ").map((word, index) => {
              return (
                <article className="text-3xl font-bold" key={index}>
                  {index <= 1 ? word.charAt(0).toUpperCase() : null}
                </article>
              );
            })}
          </span>
        )}
      </article>
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
      <p className=" sm:text-[0.9em] md:text-[1.2em] capitalize">
        {data.school.state.toLowerCase()}, {data.school.country.toLowerCase()}
      </p>
    </div>
  );
}

export default AdmissionStatusSchoolHead;
