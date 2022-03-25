import React from "react";
import Image from "next/image";
import TechBadgePageHero from "./TechBadgePageHero";

function TechBadgePage() {
  return (
    <section
      className={` bg-white relative inset-0 my-0 mx-auto h-auto w-full md:w-3/4 md2:w-1/2 mt-5 mb-14 md:px-6 transition-[display] duration-300 ease-in-out`}
    >
      <TechBadgePageHero />{" "}
      <div className="w-full h-fit flex item-center justify-center">
        <Image
          width={150}
          height={150}
          src="/assets/images/tech-school-icon.svg"
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <p className="text-center text-xl font-bold ">
          To get a tech badge your schools on Cloudnotte schools. Follow the
          steps{" "}
        </p>
      </div>
      <div className="flex flex-col items-start ml-5 sm:ml-14 mt-4">
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
            href="https://www.cloudnotte.com/register"
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
          className="text-center font-semibold text-[#F44336] "
        >
          Need help? Contact support
        </a>
      </div>
    </section>
  );
}

export default TechBadgePage;
