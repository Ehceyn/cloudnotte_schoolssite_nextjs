import React, { useState } from "react";
import Image from "next/image";
import styles from "../../../styles/Hero.module.css";

function RegisterSchoolPageHero() {
  return (
    <>
      <section
        className={`${styles.hero_1_bg} mx-3 xs:h-[150px] xs:mx-6 md:mx-0 flex items-center flex-col  justify-center rounded-lg mb-4 bg-gray-300`}
      >
        <div className="container flex items-center flex-col justify-center w-full  rounded "></div>

        <p className="mt-2 font-medium text-slate-300 cursor-pointer">
          Change my location
        </p>
      </section>
    </>
  );
}

export default RegisterSchoolPageHero;
