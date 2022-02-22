import React from "react";
import search_icon from "../../assets/icons/search-icon.svg";

function Hero_1(props) {
  return (
    <>
      <section className="hero_1_bg mx-3  xs:h-[150px] xs:mx-6 md:mx-0 flex items-center flex-col  justify-center rounded-lg mb-4 bg-gray-300">
        <div className="container flex items-center justify-center w-full  rounded ">
          <label class="relative block ">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <img src={search_icon} className="w-5 h-5 " alt="" />
            </span>
            <input
              class="placeholder:text-slate-400 flex shrink bg-white w-[80vw] sm:w-[70vw] md:w-[40vw] border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#2b6cb0] focus:ring-[#2b6cb0] focus:ring-1 sm:text-sm"
              placeholder="Search a school (Enter a keyword)"
              type="text"
              name="search"
            />
          </label>
        </div>
        <p
          className="mt-2 font-medium text-slate-300 cursor-pointer"
          onClick={props.onCallChangeLocationModal}
        >
          Change my location
        </p>
      </section>
    </>
  );
}

export default Hero_1;
