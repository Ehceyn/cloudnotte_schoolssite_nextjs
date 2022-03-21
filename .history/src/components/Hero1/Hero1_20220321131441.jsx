import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Hero.module.css";
import { useLazyQuery } from "@apollo/client";
import { GET_SEARCH_SCHOOLS } from "../../../graphql/user/queries/getSearchSchools";

function Hero_1(props) {
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

    getSearchSchools();
  }

  const [getSearchSchools, { data, loading, error }] = useLazyQuery(
    GET_SEARCH_SCHOOLS,
    {
      variables: { afterId: "", limit: 100, filter: input.searchInputs },
    }
  );
  if (loading) {
    console.log("loading search");
  }
  if (error) {
    console.log(error, "erron");
  }
  console.log(data, "search results");

  return (
    <>
      <section
        className={`${styles.hero_1_bg} mx-3 xs:h-[150px] xs:mx-6 md:mx-0 flex items-center flex-col  justify-center rounded-lg mb-4 bg-gray-300`}
      >
        <div className="container flex items-center flex-col justify-center w-full  rounded ">
          <label className="relative block ">
            <span className="absolute bottom-2 left-0 flex items-center pl-2">
              <Image
                src="/assets/icons/search-icon.svg"
                width={20}
                height={20}
                className="w-5 h-5 "
                alt=""
              />
            </span>
            <input
              className={`placeholder:text-slate-400 flex shrink bg-white w-[80vw] sm:w-[70vw] md:w-[40vw] border border-slate-300 focus:ring-[transparent]  focus:rounded-t-3xl focus:rounded-b-none rounded-full  py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm`}
              placeholder="Search a school (Enter a keyword)"
              type="text"
              name="searchInputs"
              onFocus={() => setDisplaySearchResultsDiv(true)}
              onBlur={() => setDisplaySearchResultsDiv(false)}
              onChange={handleChange}
              value={input.searchInputs}
            />

            {/* SEARCH RESULTS DIV */}
            <div
              className={`absolute z-10 inset-x-0 top-[38px] w-[inherit] ${
                displaySearchResultsDiv ? null : "hidden"
              } shadow-sm h-fit px-5 py-1 bg-white rounded-b-3xl`}
            >
              {loading && (
                <p className="text-xs text-center">loading results</p>
              )}
              {data?.getSchools.map((school) => {
                return (
                  <Link
                    href="/schools/[schoolRoutePrefix]"
                    as={`/schools/${prefix}`}
                    passHref
                    key={school.id}
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
                );
              })}
            </div>
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
