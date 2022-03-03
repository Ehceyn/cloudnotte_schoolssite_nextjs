import Image from "next/image";
import React, { useState } from "react";
import { Button2 } from "../EnrollmentLandingPage/Button";

function EnrollmentPageStudentDetails() {
  const [studentFormData, setStudentFormData] = useState({
    firstname: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    sex: "",
    dob: "",
    country: "",
    state: "",
    lga: "",
    address: "",
  });

  //FUNCTION TO COLLECT FORM INPUT VALUES ONCHANGE
  function handleChange(event) {
    const { name, value } = event.target;
    console.log(studentFormData, "The student form data");

    setStudentFormData((prevInputs) => {
      return {
        ...prevInputs,
        [name]: value,
      };
    });
    console.log(formValue);
  }

  return (
    <section className="flex px-5 md:px-10 md2:px-28 md3:px-40 text-justify w-full mt-6 sm:mt-10 mb-14 mx-auto text-[0.8em] sm:text-base">
      <div className="w-full bg-white">
        <p className="font-bold mb-3">Student&apos;s details</p>
        {/* <p className="text-xs sm:text-sm font-medium ">
          Do you have a CloudNotte Student ID/Username? <span>Click here</span>
        </p>
        <p className="text-xs font-normal sm:font-medium mb-5">
          This won&apos;t require you entering your information again.
        </p> */}
        <form className="flex flex-col sm:flex-row w-full">
          <div className="flex flex-col items-center justify-center sm:justify-start mr-0 mt-5 sm:mr-10 sm:mt-7  w-full  sm:w-[200px] mb-7 sm:mb-0">
            <label htmlFor="studentPassport">
              <Image
                width={100}
                height={100}
                src="/assets/images/school-profile-img.png"
                objectFit="contain"
                className="w-[100px] h-[100px] mb-3 sm:w-[150px] sm:h-[150px] cursor-pointer object-contain bg-gray-400 rounded-[50%] sm:border"
                alt=""
              />
            </label>
            {/* IMAGE INPUT */}
            <input
              type="file"
              id="studentPassport"
              name="studentPassport"
              className="hidden"
              required
            />
            <label htmlFor="studentPassport">
              <span className="cursor-pointer">Upload Passport</span>
            </label>
          </div>
          <div className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="First name"
                  onChange={handleChange}
                  value={studentFormData.firstname}
                  required
                />
              </div>
              <div className="mb-6 w-full sm:w-1/2">
                <input
                  type="text"
                  id="mName"
                  name="mName"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Middle name"
                  onChange={handleChange}
                  value={studentFormData.middleName}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="text"
                  id="lName"
                  name="lName"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Last name"
                  onChange={handleChange}
                  value={studentFormData.lastName}
                  required
                />
              </div>
              <div className=" w-full mb-6 sm:w-1/2">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Phone number"
                  onChange={handleChange}
                  value={studentFormData.phoneNumber}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Email address"
                  onChange={handleChange}
                  value={studentFormData.email}
                  required
                />
              </div>
              <div className="mb-6 w-full sm:w-1/2">
                <input
                  type="text"
                  id="sex"
                  name="sex"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Sex"
                  onChange={handleChange}
                  value={studentFormData.sex}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Date of birth"
                  onChange={handleChange}
                  value={studentFormData.dob}
                  required
                />
              </div>
              <div className="mb-6 w-full sm:w-1/2">
                <input
                  type="name"
                  id="country"
                  name="country"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="Country"
                  onChange={handleChange}
                  value={studentFormData.country}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-6 w-full sm:w-1/2 mr-0 sm:mr-10">
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="State"
                  onChange={handleChange}
                  value={studentFormData.state}
                  required
                />
              </div>
              <div className="mb-6 w-full sm:w-1/2">
                <input
                  type="text"
                  id="lga"
                  name="lga"
                  className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                  placeholder="LGA"
                  onChange={handleChange}
                  value={studentFormData.lga}
                  required
                />
              </div>
            </div>
            <div className="mb-6 w-full">
              <textarea
                type="text"
                id="address"
                name="address"
                className="shadow-sm pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                placeholder="Address"
                onChange={handleChange}
                value={studentFormData.address}
                required
                rows="3"
              ></textarea>
            </div>
            <div className="w-full flex justify-end">
              <Button2
                customStyle="w-full sm:w-[250px]"
                py="py-3"
                bg="bg-[#5F9AF2] text-[#E7F0FB]"
              >
                Proceed to Parent&apos;s details
              </Button2>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EnrollmentPageStudentDetails;
