import React from "react";
import { useRouter } from "next/router";

function SchoolsLocation(props) {
  const router = useRouter();

  return (
    <>
      <section className=" h-fit py-1  w-full justify-between items-center flex px-3 xs:px-6 md:px-0">
        <h2 className="font-bold w-fit max-w-[300px] text-base flex flex-wrap">
          Schools in{" "}
          {router.query.state
            ? `${router.query.state}, ${router.query.country}`
            : router.query.country}
        </h2>
        <button
          onClick={props.onCallChangeLocationModal}
          className="text-xs sm:text-sm whitespace-nowrap font-bold text-[#F44336] cursor-pointer"
        >
          Change search location
        </button>
      </section>
    </>
  );
}

export default SchoolsLocation;
