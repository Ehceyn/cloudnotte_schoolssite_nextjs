import React from "react";
import Image from "next/image";
import RegisterSchoolPageHero from "./RegisterSchoolPageHero";

function RegisterSchoolPage({ display }) {
  return (
    <section
      className={`${
        display ? "block" : "hidden"
      } bg-white relative inset-0 my-0 mx-auto h-auto w-full md:w-3/4 md2:w-1/2 mt-5 md:px-6`}
    >
      <RegisterSchoolPageHero />{" "}
      <div>
        <Image
          width={180}
          height={60}
          src="/images/register-school-image.svg"
          alt=""
        />
      </div>
    </section>
  );
}

export default RegisterSchoolPage;
