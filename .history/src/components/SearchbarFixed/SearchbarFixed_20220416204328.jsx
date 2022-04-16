import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLazyQuery } from "@apollo/client";
import { GET_SEARCH_SCHOOLS } from "../../../graphql/user/queries/getSearchSchools";

function SearchbarFixed(props) {
  const [show, setShow] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [displaySearchResultsDiv, setDisplaySearchResultsDiv] = useState(false);
  const [imageLoaded, setImageLoaded] = useState();
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
    //.log(input);

    // call the query everytime the input field is changed
    getSearchSchools();
  }

  // Use lazy query hook to get search results
  const [getSearchSchools, { data, loading, error }] = useLazyQuery(
    GET_SEARCH_SCHOOLS,
    {
      variables: { afterId: "", limit: 7, filter: input.searchInputs },
    }
  );
  if (loading) {
    //.log("loading search");
  }
  if (error) {
    //.log(error, "erron");
  }
  //.log(data, "search results");

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
    //.log(show);
    //.log(scrollPos);
  };

  // COLORS TO MAP
  const colors = ["#ffd833", "#fc2d44", "#28a265", "#70a4f3"];

  return (
    <section className="">
      <div
        className={`fixed z-20 top-0 left-0 right-0 flex items-center flex-col justify-center transition-all duration-500 mt-0  w-full py-2 sm:py-5 px-auto border-b bg-[#F8FBFF] ${
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
            className="placeholder:text-slate-400 placeholder:text-xs flex bg-white w-full border border-slate-300 focus:rounded-t-3xl focus:rounded-b-none rounded-full py-1 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#F5F6F7] focus:ring-[#F5F6F7] focus:ring-1 sm:text-sm"
            placeholder="Search a school by name, state or country"
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
                      <article className="relative w-6 h-6 object-contain">
                        <span
                          title="Tech School"
                          className={`absolute z-[1] ${
                            school.isSmartSchool ? "flex" : "hidden"
                          } top-[2px] right-0 bg-white  border-[#5f9af2] text-red-500 rounded-full`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-2 w-2"
                            viewBox="0 0 20 20"
                            fill="#5f9af2"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className={`${imageLoaded ? "flex" : "hidden"}`}>
                          <Image
                            src={
                              school.logoUrl
                                ? school.logoUrl
                                : `https://res.cloudinary.com/ugomatt/image/upload/v1647277984/cloudnotte_icon_soqc6y.png`
                            }
                            onLoad={() => setImageLoaded(true)}
                            onError={() => setImageLoaded(false)}
                            width={30}
                            height={30}
                            objectFit="cover"
                            className="rounded-full"
                            alt={school.name.toLowerCase()}
                          />
                        </span>
                        {imageLoaded ? null : (
                          <span
                            className={`flex items-center justify-center min-w-full min-h-full bg-[#fff] rounded-full object-cover border-white`}
                            style={{
                              color:
                                colors[
                                  Math.floor(Math.random() * colors.length)
                                ],
                            }}
                          >
                            {school.name.split(" ").map((word, index) => {
                              return (
                                <article
                                  className="font-bold text-xs"
                                  key={index}
                                >
                                  {index <= 1
                                    ? word.charAt(0).toUpperCase()
                                    : null}
                                </article>
                              );
                            })}
                          </span>
                        )}
                      </article>
                      <article className="ml-2">
                        <h3
                          className="capitalize"
                          dangerouslySetInnerHTML={{
                            __html: school.name.toLowerCase(),
                          }}
                        ></h3>
                        <p className="text-xs capitalize">
                          {school.city.toLowerCase()},{" "}
                          {school.state.toLowerCase()},{" "}
                          {school.country.toLowerCase()}
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
