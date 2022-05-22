import React from "react";
import Link from "next/link";

import { countries } from "../../exApi/countries.js";
import { states } from "../../exApi/states.js";

export default function links() {
  return (
    <>
      <ul className="py-3 ">
        {countries.map((country, index) => {
          return (
            <li key={country.name + index} className="">
              <Link href={`/schools/location/${country.name}`} passHref>
                <a className="text-[#8ea2ba] ">{country.name}</a>
              </Link>
            </li>
          );
        })}
        {states.map((state, index) => {
          return (
            <li key={state.name + index} className="">
              <Link
                href={`/schools/location/${state.country_name}/${state.name}`}
                passHref
              >
                <a className="text-[#8ea2ba] ">{state.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
