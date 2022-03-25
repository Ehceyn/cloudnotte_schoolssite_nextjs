import React, { useState, useEffect } from "react";
import { Button2 } from "./Button";
import { BsFillSuitHeartFill, BsFillPlayFill } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import { useSchoolPersonalPageTabsValue } from "../../../StateProviders/SchoolPersonalPageTabsProvider";

function Navbar({ phoneNumber, anthemUrl }) {
  const [tab, dispatch] = useSchoolPersonalPageTabsValue();

  const changeTab = (id) => {
    console.log("tab: " + id);
    dispatch({
      type: "TOGGLE_TAB",
      item: id,
    });
  };

  return (
    <>
      <section className="">
        <div className="flex w-full justify-between items-center px-5 py-5">
          <article className="capitalize flex w-full sm:w-fit justify-between">
            <p
              className={`text-base cursor-pointer mr-2 sm:mr-6 ${
                tab === 1 ? "font-[700]" : "font-medium"
              }`}
              onClick={() => {
                changeTab(1);
              }}
            >
              Home
            </p>
            <p
              className={`text-base cursor-pointer mr-2 sm:mr-6 ${
                tab === 2 ? "font-[700]" : "font-medium"
              }`}
              onClick={() => {
                changeTab(2);
              }}
            >
              Contact us
            </p>
            <p
              className={`text-base font-medium cursor-pointer mr-2 sm:mr-6 ${
                tab === 3 ? "font-[700]" : "font-medium"
              }`}
              onClick={() => {
                changeTab(3);
              }}
            >
              Reviews
            </p>
            <p
              className={`text-base cursor-pointer font-medium
              `}
            >
              <a
                href="www.cloudnotte.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                School Portal
              </a>
            </p>
          </article>
          <article className=" justify-between hidden md2:flex ">
            {/* <div>
              <Button2
                bg="bg-[#f44336]"
                color="text-[#E7F0FB]"
                px="px-3 mr-3"
                py="py-[12px] "
              >
                <BsFillSuitHeartFill className="w-5 h-5 " />
              </Button2>
            </div> */}
            <div>
              <Button2
                customStyle="sm:hidden"
                bg="bg-[#E7F0FB]"
                color="text-[#8EA2BA]"
                py="py-[10px] "
                px="px-3 mr-3"
              >
                <IoIosCall className="w-6 h-6 mr-1 fill-[#f44336]" />
                Call
              </Button2>
            </div>
            <div>
              <Button2
                customStyle=""
                bg="bg-[#E7F0FB]"
                color="text-[#8EA2BA]"
                py="py-[10px] "
                px="px-3 mr-3"
              >
                <a
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiWhatsappFill className="w-6 h-6 fill-[#02a556]" />
                </a>
              </Button2>
            </div>
            <div>
              <Button2
                customStyle=""
                bg="bg-[#E7F0FB]"
                color="text-[#8EA2BA]"
                py="py-[10px] "
                px="px-3 mr-3"
              >
                <BsFillPlayFill className="w-6 h-6  fill-[#8EA2BA]" />
              </Button2>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Navbar;
