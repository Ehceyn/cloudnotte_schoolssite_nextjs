import React from "react";
import Image from "next/image";
import RegisterSchoolPageHero from "./RegisterSchoolPageHero";

function RegisterSchoolPage() {
  return (
    <section
      className={` bg-white relative inset-0 my-0 mx-auto h-auto w-full md:w-3/4 md2:w-1/2 mt-5 mb-14 md:px-6 transition-[display] duration-300 ease-in-out`}
    >
      <RegisterSchoolPageHero />{" "}
      <div className="w-full h-fit flex item-center justify-center mb-2">
        <Image
          width={350}
          height={200}
          src="https://res.cloudinary.com/zichygraphs/image/upload/v1650286100/register-school-image_bphjhn.svg"
          alt=""
        />
      </div>
      <div className="flex justify-center px-3 sm:px-5">
        <p className="text-center text-xl font-bold ">
          To add your school. Follow the steps
        </p>
      </div>
      <div className="flex flex-col items-start mx-5 sm:mx-5 sm:ml-14 mt-4 ">
        <article className="flex ">
          <p>1.</p>
          <p className=" ml-1 mb-2">Create an account on www.cloudnotte.com </p>
        </article>
        <article className="flex ">
          <p>2.</p>
          <p className=" ml-1 mb-2">
            Setup your school account. It&apos;s free{" "}
          </p>
        </article>
        <article className="flex ">
          <p>3.</p>
          <p className=" ml-1 mb-2">
            Navigate to admission module and setup your school page
          </p>
        </article>{" "}
        <article className="flex ">
          <p>4.</p>
          <p className=" ml-1 mb-2">
            And... That&apos;s it! Your school is live here.{" "}
          </p>
        </article>
      </div>
      <div className="flex justify-center w-full my-4">
        <button className="bg-[#5f9af2] hover:brightness-90 text-white font-bold py-2 px-4 rounded-[5px]">
          <a
            href="https://www.cloudnotte.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Get Started For Free{" "}
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

export default RegisterSchoolPage;
