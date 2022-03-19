import React from "react";
import Image from "next/image";

function AdmittedStage({ data }) {
  return (
    <>
      <div className="flex flex-col items-center mb-5">
        <p className="font-bold text-2xl text-[#3BB8A3] uppercase">
          Congratulations!
        </p>
        <p className="text-center">
          You have been admitted into{" "}
          <span className="font-bold text-[#8EA2BA]">
            {data.amissionProgrammes}
          </span>{" "}
          in
        </p>
        <p className="font-bold">Royal Group of Schools</p>
      </div>
      <div className="h-[1px] border-t w-full"></div>
      <div className="flex flex-col items-center mt-5 mb-5">
        <p className="text-center">Your school account has been created </p>
        <p className="text-center">Below are your credentials</p>
      </div>
      <div className="flex flex-col items-center mb-5">
        <article className="flex">
          <p className="font-bold">Username:&nbsp;</p>
          <p>
            {data.studentDetails.firstName} {data.studentDetails.lastName}
          </p>
        </article>
        <article className="flex">
          <p className="font-bold">Password:&nbsp;</p>
          <p>123456</p>
        </article>
      </div>
      <div className="h-[1px] border-t w-full"></div>
      <div className="flex flex-col items-center mt-5 mb-5">
        <p className="font-medium mb-2">Download School App</p>
        <article className="w-fit flex items-center justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=app.cloudnotte"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5f9af2] font-bold"
          >
            <Image
              width={170}
              height={80}
              className=" object-contain h-40px w-120 cursor-pointer"
              src="/assets/images/google-play-card.png"
              alt=""
            />
          </a>
          <Image
            width={170}
            height={44}
            className="object-contain h-30px w-140 cursor-pointer"
            src="/assets/images/apple-store-card.svg"
            alt=""
          />
        </article>
      </div>
    </>
  );
}

export default AdmittedStage;
