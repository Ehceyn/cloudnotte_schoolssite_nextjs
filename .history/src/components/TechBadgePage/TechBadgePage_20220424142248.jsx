import React from "react";
import Image from "next/image";
import TechBadgePageHero from "./TechBadgePageHero";

function TechBadgePage() {
  return (
    <section
      className={` bg-white relative inset-0 my-0 mx-auto h-auto w-full md:w-3/4 md2:w-1/2 mt-5 mb-14 md:px-6 transition-[display] duration-300 ease-in-out`}
    >
      <TechBadgePageHero />{" "}
      <div className="w-full h-fit flex item-center justify-center p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-32 w-32"
          viewBox="0 0 20 20"
          fill="#5f9af2"
        >
          <path
            fillRule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex justify-center mx-3 sm:px-5">
        <p className="text-center text-xl font-bold ">
          To get your school tech badge on School Search Engine. Follow the
          steps
        </p>
      </div>
      <div className="flex flex-col items-start ml-5 sm:ml-14 mt-4 px-3 sm:px-5">
        <article className="flex ">
          <p>1.</p>
          <p className=" ml-1 mb-2">
            Your school should be using 80% of cloudnotte modules{" "}
          </p>
        </article>
        <article className="flex ">
          <p>2.</p>
          <p className=" ml-1 mb-2">
            Ensure your school is actively using cloudnotte{" "}
          </p>
        </article>
        <article className="flex ">
          <p>3.</p>
          <p className=" ml-1 mb-2">
            Complete school growth course as an admin from your account.{" "}
          </p>
        </article>{" "}
        <article className="flex ">
          <p>4.</p>
          <p className=" ml-1 mb-2">
            And... That&apos;s it! Your school is a Tech School
          </p>
        </article>
      </div>
      <div className="flex justify-center w-full my-4">
        <button className="bg-[#5f9af2] hover:brightness-90 text-white font-bold py-2 px-4 rounded-[5px]">
          <a
            href="https://cloudnotte.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Login to your school account{" "}
          </a>
        </button>
      </div>
      <div className="flex justify-center w-full my-6">
        <a
          href="https://cloudnotte.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center   font-bold text-[#F44336] "
        >
          Need help? Contact support
        </a>
      </div>
    </section>
  );
}

export default TechBadgePage;
