import React from "react";
import Image from "next/image";
import RegisterSchoolPageHero from "./RegisterSchoolPageHero";

function RegisterSchoolPage({ display }) {
  return (
    <section
      className={`${
        display ? "block" : "hidden"
      } bg-white relative inset-0 my-0 mx-auto h-auto w-full md:w-3/4 md2:w-1/2 mt-5 md:px-6 transition-all duration-300 ease-in-out`}
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
    </section>
  );
}

export default RegisterSchoolPage;
