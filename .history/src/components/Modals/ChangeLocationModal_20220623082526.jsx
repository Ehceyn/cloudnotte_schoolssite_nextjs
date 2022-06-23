import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { countries } from "../../exApi/countries.js";
import { states } from "../../exApi/states.js";
import Loader from "../Loader";
import * as Yup from "yup";

function ChangeLocationModal(props) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loader, setLoader] = useState(false);
  const [location, setLocation] = useState(null);

  // Get location from url
  useEffect(() => {
    fetch(
      "https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708"
    )
      .then((resp) => resp.json())
      .catch(() => {
        return {
          country: "ng",
        };
      })
      .then((resp) => {
        setLocation(resp);
        setSelectedCountry(resp.country_name);
        formik.setFieldValue("country", resp.country_name);
      });
  }, []);

  //log(location && location, "location");

  // Initialize router
  const router = useRouter();

  // Set loader false
  loader &&
    setTimeout(() => {
      setLoader(false);
      props.onCallChangeLocationModal();
    }, 3000);

  // INITIAL FORM VALUES
  let initialValues = {
    country: "",
    state: "",
  };

  // FORMIK ONSUBMIT

  // Yup validation
  const validationSchema = Yup.object({
    country: Yup.string().required("This field is required"),
  });

  // USING FORMIK PACKAGE FOR FORM HANDLING
  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  // log
  //log("formik: ", formik);

  return (
    <section
      className={`w-full h-screen bg-[#00000065] fixed inset-0 z-30 flex items-center  justify-center ${
        props.display ? "flex" : "hidden"
      } `}
      onClick={props.onCallChangeLocationModal}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
      >
        <div
          className="h-[100vh] w-[100vw] md:h-[70vh] md:min-w-[70vw] md:w-[70vw] mx-auto overflow-scroll overflow-x-hidden md:border md:rounded-2xl bg-white mx-6 py-6 transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <article className="w-full flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#F44336"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h2 className="font-bold ">Search by location</h2>
          </article>

          <article className="py-3 flex items-center">
            <button
              className="group border mr-5 border-[#5f9af2] rounded-full py-1 px-5 text-[#5f9af2] cursor-pointer"
              onClick={() => {
                formik.setFieldValue("country", "");
                !formik.values.country && props.onCallChangeLocationModal();
              }}
            >
              <p className="transform transition duration-300 text-[#5f9af2] group-hover:-translate-x-2 font-bold">
                &larr;
              </p>
            </button>
            <h2 className="font-bold text-[#5f9af2]">
              {formik.values.country
                ? `States in ${formik.values.country}`
                : "Countries"}
            </h2>
          </article>

          <div
            className={`${
              formik.values.country ? "flex" : "hidden"
            } py-1 px-3 mb-3 bg-[#5f9af2] hover:brightness-90 cursor-pointer rounded-full w-fit`}
            onClick={props.onCallChangeLocationModal}
          >
            <h2 className=" text-[#fff]">
              <Link
                href={`/schools/location/${formik.values.country}`}
                passHref
              >
                <a className="text-[#fff] group-hover:text-[#fff]">
                  See all schools in {formik.values.country}
                </a>
              </Link>
            </h2>
          </div>

          <div
            className={`${
              !formik.values.country ? "grid" : "hidden"
            } grid-cols-1 md:grid-cols-3 gap-3 w-full sm:mr-5 sm:mb-0`}
          >
            {countries.map((country) => {
              return (
                <button
                  type="button"
                  className="group flex justify-between items-center text-[#0c121a] h-fit mb-3 p-3  border hover:border-[#5f9af2] cursor-pointer rounded-md break-words"
                  key={country.name}
                  value={country.name}
                  onClick={(e) => {
                    formik.setFieldValue("country", e.currentTarget.value);
                  }}
                >
                  <a
                    className="text-[#8ea2ba] group-hover:text-[#5f9af2]"
                    key={country.name}
                  >
                    {country.name}
                  </a>
                  <p className="text-[20px] group-hover:text-[#5f9af2] hover:font-bold">
                    &gt;
                  </p>
                </button>
              );
            })}
          </div>
          <div
            className={`${
              formik.values.country ? "grid" : "hidden"
            } grid-cols-1 md:grid-cols-3 gap-3 w-full sm:mr-5 sm:mb-0`}
          >
            {states
              .filter((i) => i.country_name === formik.values.country)
              .map((state) => {
                console.log(state);
                return (
                  <button
                    type="button"
                    className=""
                    key={state.name}
                    value={state.name}
                    onClick={(e) => {
                      formik.setFieldValue("state", e.currentTarget.value);
                      props.onCallChangeLocationModal();
                    }}
                  >
                    <Link
                      href={`/schools/location/${state.country_name}/${state.name}`}
                      passHref
                    >
                      <a
                        className="text-[#8ea2ba] active:text-[#5f9af2] hover:text-[#5f9af2] group flex justify-between items-center h-fit mb-3 p-3  border active:border-[#5f9af2] hover:border-[#5f9af2] cursor-pointer rounded-md break-words"
                        key={state.name}
                      >
                        {state.name}
                        <p className="text-[20px] group-active:text-[#5f9af2] group-hover:text-[#5f9af2] hover:font-bold">
                          &gt;
                        </p>
                      </a>
                    </Link>
                  </button>
                );
              })}
          </div>
          {/* {formik.isValid ? (
            formik.values.state === "" ? (
              <Link
                href="/schools/location/[country]"
                as={`/schools/location/${formik.values.country}`}
                passHref
              >
                <a
                  className="w-full flex items-center justify-center"
                  onClick={() =>
                    formik.values.country !== "" &&
                    formik.isValid &&
                    selectedCountry &&
                    setLoader(true)
                  }
                >
                  <Button
                    borderRaduis="rounded-full"
                    px="px-5 w-full sm:w-[200px]"
                    py="py-3"
                    bg={`${
                      formik.isValid && selectedCountry
                        ? "bg-[#5f9af2] text-[#E7F0FB]"
                        : "cursor-not-allowed bg-[#293b57] text-[#476697]"
                    }`}
                  >
                    {" "}
                    Proceed
                  </Button>
                </a>
              </Link>
            ) : (
              <Link
                href="/schools/location/[country]/[state]"
                as={`/schools/location/${formik.values.country}/${formik.values.state}`}
                passHref
              >
                <a
                  className="w-full flex items-center justify-center"
                  onClick={() =>
                    formik.values.country !== "" &&
                    formik.isValid &&
                    selectedCountry &&
                    setLoader(true)
                  }
                >
                  <Button
                    borderRaduis="rounded-full"
                    px="px-5 w-full sm:w-[200px]"
                    py="py-3"
                    bg={`${
                      formik.isValid && selectedCountry
                        ? "bg-[#5f9af2] text-[#E7F0FB]"
                        : "cursor-not-allowed bg-[#293b57] text-[#476697]"
                    }`}
                  >
                    {" "}
                    Proceed
                  </Button>
                </a>
              </Link>
            )
          ) : (
            <a
              className="w-full flex items-center justify-center"
              onClick={() =>
                formik.values.country !== "" &&
                formik.isValid &&
                selectedCountry &&
                setLoader(true)
              }
            >
              <Button
                borderRaduis="rounded-full"
                px="px-5 w-full sm:w-[200px]"
                py="py-3"
                bg={`${
                  formik.isValid && selectedCountry
                    ? "bg-[#5f9af2] text-[#E7F0FB]"
                    : "cursor-not-allowed bg-[#293b57] text-[#476697]"
                }`}
              >
                {" "}
                Proceed
              </Button>
            </a>
          )} */}
        </div>
      </form>
      <Loader
        display={loader}
        message={"Fetching Schools from your location"}
      />
    </section>
  );
}

export default ChangeLocationModal;
