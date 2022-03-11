import React from "react";
import Image from "next/image";
import RegisterSchoolPageHero from "./RegisterSchoolPageHero";

function RegisterSchoolPage({ display }) {
  return (
    <section
      className={`${
        display ? "block" : "hidden"
      } bg-white relative inset-0 my-0 mx-auto h-auto w-full md:w-3/4 md2:w-1/2 mt-5 mb-14 md:px-6 transition-all duration-300 ease-in-out`}
    >
      <RegisterSchoolPageHero />{" "}
      <div className="w-full h-fit flex item-center justify-center">
        <Image
          width={350}
          height={200}
          src="/assets/images/register-school-image.svg"
          alt=""
        />
      </div>
      <div className="flex justify-center">
        <p className="text-center text-xl font-bold ">
          To add your schools on earlynotte. Follow the steps
        </p>
      </div>
      <div className="flex flex-col items-start ml-14 mt-4">
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
            ... And, That&apos;s it! Your school is live here.{" "}
          </p>
        </article>
      </div>
      <div className="flex justify-center w-full mt-4">
        <button className="bg-blue-500 hover:brightness-90 text-white font-bold py-2 px-4 rounded-[5px]">
          <a href="https://www.cloudnotte.com/register" className="text-white">
            Get Started For Free{" "}
          </a>
        </button>
      </div>
    </section>
  );
}

export default RegisterSchoolPage;
