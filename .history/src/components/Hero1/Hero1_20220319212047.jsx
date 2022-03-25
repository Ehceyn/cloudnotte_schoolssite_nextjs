import React, { useState } from "react";
import Image from "next/image";
import styles from "../../../styles/Hero.module.css";

function Hero_1(props) {
  const [displaySearchResultsDiv, setDisplaySearchResultsDiv] = useState(false);
  const [input, setInput] = useState({
    searchInputs: "",
  });

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
              onChange={(e) => {
                setInput({ ...input, [e.target.name]: e.target.value });
                console.log(input, "input me");
              }}
            />

            {/* SEARCH RESULTS DIV */}
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

export async function getServerSideProps({ params }) {
  // Fetch data from external API

  const apolloClient = initializeApollo();
  // const applicationNumber = params.applicationSuccess;

  const { data, loading, error } = await apolloClient.query({
    query: GET_SCHOOLS,
    variables: { afterId: "", limit: 100, filter: { searchInputs } },
  });
  if (error) return console.log(JSON.stringify(error, null, 2));

  if (!data) {
    return {
      notFound: true,
    };
  }

  // Pass data to the page via props
  return {
    props: { initializeApolloState: apolloClient.cache.extract(), data },
  };
}
