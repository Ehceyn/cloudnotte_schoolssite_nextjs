import React from "react";
import { states } from "../../src/exApi/states";
import { countries } from "../../src/exApi/countries";
import Link from "next/link";

export default function pre() {
  return (
    <>
      <ul>
        {countries.map((country) => {
          return (
            <a
              key={country}
              className="bg-white pl-8 pr-8 pb-5 w-full capitalize h-[100px] flex flex-col justify-end"
            >
              <Link href="/schools/location/" passHref>
                <a>{country}</a>
              </Link>
            </a>
          );
        })}
      </ul>
    </>
  );
}
