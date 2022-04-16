import React, { useState } from "react";
import Image from "next/image";
import styles from "../../../styles/Hero.module.css";
import { useRouter } from "next/router";

function Hero3() {
  const router = useRouter();
  return (
    <>
      <section
        className={`${styles.hero_1_bg} mx-3 xs:h-[150px] xs:mx-6 md:mx-0 flex items-center flex-col  justify-center rounded-lg mb-4 bg-gray-300`}
      >
        <div className="container flex items-center text-center flex-col justify-center w-full  rounded ">
          <p className="text-2xl font-bold text-white">
            Schools in {router.query.state}
          </p>
        </div>

        <p className="mt-2 font-medium text-slate-300 cursor-pointer text-center">
          Find best schools in {router.query.state}, {router.query.country}
        </p>
      </section>
    </>
  );
}

export default Hero3;
