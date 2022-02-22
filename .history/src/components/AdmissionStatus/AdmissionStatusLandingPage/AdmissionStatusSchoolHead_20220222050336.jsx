import React from "react";
import Image from "next/image";

function AdmissionStatusSchoolHead() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-7 mb-10">
      <Image
        src="/assets/images/school-profile-img.png"
        className="w-[60px] h-[60px] sm:w-[150px] sm:h-[150px] object-contain bg-gray-400 rounded-[50%] sm:border-8 border-white"
        alt=""
      />
      <p className="text-center text-2xl font-bold ">Royal Group of Schools</p>
      <p className="text-xs md:text-sm flex">
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
      </p>
      <p className=" sm:text-[0.9em] md:text-[1.2em]">Port Harcourt, Nigeria</p>
    </div>
  );
}

export default AdmissionStatusSchoolHead;
