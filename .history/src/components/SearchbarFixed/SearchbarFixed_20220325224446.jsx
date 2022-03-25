import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLazyQuery } from "@apollo/client";
import { GET_SEARCH_SCHOOLS } from "../../../graphql/user/queries/getSearchSchools";

function SearchbarFixed(props) {
  const [show, setShow] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [displaySearchResultsDiv, setDisplaySearchResultsDiv] = useState(false);
  const [input, setInput] = useState({
    searchInputs: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInputs) => {
      return {
        ...prevInputs,
        [name]: value,
      };
    });
    console.log(input);

    // call the query everytime the input field is changed
    getSearchSchools();
  }

  // Use lazy query hook to get search results
  const [getSearchSchools, { data, loading, error }] = useLazyQuery(
    GET_SEARCH_SCHOOLS,
    {
      variables: { afterId: "", limit: 20, filter: input.searchInputs },
    }
  );
  if (loading) {
    console.log("loading search");
  }
  if (error) {
    console.log(error, "erron");
  }
  console.log(data, "search results");

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
        className={`fixed z-20 top-0 left-0 right-0 flex items-center flex-col justify-center transition-all duration-500 mt-0  w-full py-3 sm:py-5 px-auto border-b bg-[#F8FBFF] ${
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
            className="placeholder:text-slate-400 flex bg-white w-full border border-slate-300 focus:rounded-t-3xl focus:rounded-b-none rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#F5F6F7] focus:ring-[#F5F6F7] focus:ring-1 sm:text-sm"
            placeholder="Search a school (Enter a keyword)"
            type="text"
            name="searchInputs"
            onFocus={() => setDisplaySearchResultsDiv(true)}
            onBlur={() =>
              setTimeout(() => {
                setDisplaySearchResultsDiv(false);
              }, 200)
            }
            onChange={handleChange}
            value={input.searchInputs}
          />
          <div
            className={`absolute z-10 inset-x-0 top-[38px] ${
              displaySearchResultsDiv ? null : "hidden"
            } shadow-sm h-fit px-5 py-1 bg-white rounded-b-3xl overflow-y-scroll scrollbar-hide`}
          >
            {loading && <p className="text-xs text-center">loading results</p>}
            {data?.getSchools.map((school) => {
              return (
                <div key={school.id}>
                  <Link
                    href="/schools/[schoolRoutePrefix]"
                    as={`/schools/${school.prefix}`}
                    passHref
                  >
                    <article className="flex py-3 items-center cursor-pointer">
                      <Image
                        src={
                          school.logoUrl
                            ? school.logoUrl
                            : `/assets/images/school-profile-img.png`
                        }
                        width={30}
                        height={30}
                        objectFit="contain"
                        className="w-5 h-5"
                        alt=""
                      />
                      <article className="ml-2">
                        <h3>{school.name}</h3>
                        <p className="text-xs">
                          {school.city}, {school.state}, {school.country}
                        </p>
                      </article>
                    </article>
                  </Link>
                </div>
              );
            })}
          </div>
        </label>
      </div>
    </section>
  );
}

export default SearchbarFixed;
