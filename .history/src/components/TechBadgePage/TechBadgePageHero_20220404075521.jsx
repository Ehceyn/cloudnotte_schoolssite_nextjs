import React, { useState } from "react";
import Image from "next/image";
import styles from "../../../styles/Hero.module.css";

function TechBadgePageHero() {
  return (
    <>
      <section
        className={`${styles.hero_1_bg} mx-3 xs:h-[150px] xs:mx-6 md:mx-0 flex items-center flex-col  justify-center rounded-lg mb-4 bg-gray-300`}
      >
        <div className="container flex items-center text-center flex-col justify-center w-full  rounded ">
          <p className="text-lg sm:text-2xl font-bold text-white">
            Get a Tech Badge For Your School
          </p>
        </div>

        <p className="mt-2 font-medium text-slate-300 cursor-pointer text-center">
          We are on a mission to digitizing education{" "}
        </p>
      </section>
    </>
  );
}

export default TechBadgePageHero;
