import React, { useState, useEffect } from "react";
import Button from "./Button";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { states } from "../../../src/exApi/states";
import { countries } from "../../../src/exApi/countries";
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
  const onSubmit = (values) => {
    if (values.country !== "" && formik.isValid) {
      //log("values: ", values.state);
      if (values.state !== "") {
        router.push(`/schools/location/${values.country}/${values.state}`);
      } else {
        router.push(`/schools/location/${values.country}`);
      }
    }
  };

  // Yup validation
  const validationSchema = Yup.object({
    country: Yup.string().required("This field is required"),
  });

  // USING FORMIK PACKAGE FOR FORM HANDLING
  const formik = useFormik({
    initialValues,
    onSubmit,
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
          className="w-fit h-fit border rounded-2xl bg-white px-6 py-6 "
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
                strokeWidth={1}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="font-bold">Change my location</p>
          </article>

          <div className="flex flex-col sm:flex-row justify-center items-center mb-6">
            <article className="sm:mr-5 mb-4 sm:mb-0">
              <select
                className="shadow-sm mb-1 h-12 pl-3 border border-[#CFDBEA] text-gray-900 text-sm rounded-full outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block p-2.5 w-[250px] bg-[#F8FBFF] "
                id="country"
                name="country"
                // onLoad={() => {
                //   location?.country && setSelectedCountry(location.country);
                // }}
                onChange={(e) => {
                  formik.handleChange(e);
                  setSelectedCountry(e.target.value);
                }}
                onBlur={formik.handleBlur}
                required
                value={formik.values.country}
              >
                <option
                  selected="selected"
                  value={selectedCountry ? selectedCountry : "Country"}
                >
                  {selectedCountry ? selectedCountry : "Country"}
                </option>
                {countries.map((country) => {
                  return <option key={country.name}>{country.name}</option>;
                })}
              </select>
              {formik.touched.country && formik.errors.country && (
                <p className="text-xs text-red-600">{formik.errors.country}</p>
              )}
            </article>
            <article className="sm:mr-5 mb-5 sm:mb-0">
              <select
                className="shadow-sm h-12 pl-3 border border-[#CFDBEA] text-gray-900 text-sm rounded-full outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block p-2.5 w-[250px] bg-[#F8FBFF] "
                id="state"
                name="state"
                onChange={formik.handleChange}
                value={formik.values.state}
              >
                <option selected="selected">State</option>
                {states
                  .filter((i) => i.country_name === selectedCountry)
                  ?.map((state) => {
                    return (
                      <option key={state.id + state.name}>{state.name}</option>
                    );
                  })}
              </select>
              {formik.touched.state && formik.errors.state && (
                <p className="text-xs text-red-600">{formik.errors.state}</p>
              )}
            </article>
            {/* <article>
              <select
                className="shadow-sm h-12 pl-3 border border-[#CFDBEA] text-gray-900 text-sm rounded-full outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block p-2.5 w-[250px] bg-[#F8FBFF] "
                id="city"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
              >
                <option selected="selected"></option>
                <option>telekinesis</option>
                <option>time travel</option>
                <option>invisibility</option>
              </select>
            </article> */}
          </div>
          <article
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
          </article>
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
