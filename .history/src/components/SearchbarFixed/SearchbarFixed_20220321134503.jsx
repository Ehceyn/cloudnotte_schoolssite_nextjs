import Image from "next/image";
import React, { useState, useEffect } from "react";
// import search_icon from "/assets/icons/search-icon.svg";

function SearchbarFixed(props) {
  const [show, setShow] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [displaySearchResultsDiv, setDisplaySearchResultsDiv] = useState(false);

  // Show Bottom Navbar only on scroll up
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // Function to Show Bottom Navbar only on scroll up
  const handleScroll = () => {
    const position = document.body.getBoundingClientRect().top;
    setScrollPos(position);
    setShow(position > scrollPos);
    console.log(show);
    console.log(scrollPos);
  };

  return (
    <section className="">
      <div
        className={`fixed z-20 top-0 left-0 right-0 container flex items-center flex-col justify-center transition-all duration-500 mt-0  w-full py-3 sm:py-5 px-auto border-b bg-[#F8FBFF] ${
          props.display === false ? "hidden" : "flex"
        } ${show ? "null" : " -translate-y-full"}`}
      >
        <label className="relative  rounded w-11/12 sm:w-3/5 ">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Image
              src="/assets/icons/search-icon.svg"
              width={20}
              height={20}
              className="w-5 h-5 "
              alt=""
            />
          </span>
          <input
            // className="placeholder:text-slate-400 flex bg-white w-full border border-slate-300 focus:rounded-t-3xl focus:rounded-b-none rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#F5F6F7] focus:ring-[#F5F6F7] focus:ring-1 sm:text-sm"
            placeholder="Search a school (Enter a keyword)"
            type="text"
            name="search"
            onFocus={() => setDisplaySearchResultsDiv(true)}
            onBlur={() => setDisplaySearchResultsDiv(false)}
          />
          <div
            className={`absolute z-10 inset-x-0 top-[38px] w-[inherit] ${
              displaySearchResultsDiv ? null : "hidden"
            } shadow-sm h-fit px-5 py-1 bg-white rounded-b-3xl`}
          >
            <article className="flex py-3 items-center cursor-pointer">
              <Image
                src="/assets/images/school-profile-img.png"
                width={30}
                height={30}
                objectFit="contain"
                className="w-5 h-5"
                alt=""
              />
              <p className="ml-2">Learners international school</p>
            </article>{" "}
            <article className="flex py-3 items-center cursor-pointer">
              <Image
                src="/assets/images/school-profile-img.png"
                width={30}
                height={30}
                objectFit="contain"
                className="w-5 h-5"
                alt=""
              />
              <p className="ml-2">Learners international school</p>
            </article>{" "}
            <article className="flex py-3 items-center cursor-pointer">
              <Image
                src="/assets/images/school-profile-img.png"
                width={30}
                height={30}
                objectFit="contain"
                className="w-5 h-5"
                alt=""
              />
              <p className="ml-2">Learners international school</p>
            </article>
          </div>
        </label>
      </div>
    </section>
  );
}

export default SearchbarFixed;
