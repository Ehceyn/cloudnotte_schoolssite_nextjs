import Image from "next/image";
import React from "react";
import { Button2 } from "../EnrollmentLandingPage/Button";

function EnrollmentAcademicDetails() {
  return (
    <section className="flex px-5 md:px-10 md2:px-28 md3:px-40 text-justify w-full mt-6 sm:mt-10 mb-14 mx-auto text-[0.8em] sm:text-base">
      <div className="w-full bg-white">
        <p className="font-bold mb-3">Academic details</p>

        <form className="flex flex-col sm:flex-row w-full">
          <div className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-3">
              <div className="flex flex-col items-center w-full mr-0 sm:mr-14">
                <div className="mb-6 w-full ">
                  <select className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF] ">
                    <option disabled="disabled" selected="selected">
                      Select class/program of entry{" "}
                    </option>
                    <option>telekinesis</option>
                    <option>time travel</option>
                    <option>invisibility</option>
                  </select>
                </div>
                <div className="mb-6 w-full ">
                  <input
                    type="text"
                    id="prevSchool"
                    className="shadow-sm h-12 pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                    placeholder="Name of previous school (optional)"
                    required
                  />
                </div>
                <div className="mb-6 w-full">
                  <textarea
                    type="text"
                    id="Address"
                    className="shadow-sm pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                    placeholder="Reason for leaving school (optional)"
                    required
                    rows="3"
                  ></textarea>
                </div>
                <div className="mb-6 w-full">
                  <textarea
                    type="text"
                    id="Address"
                    className="shadow-sm pl-7 border border-[#CFDBEA] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] block w-full p-2.5 bg-[#F8FBFF]   "
                    placeholder="Any health challenges? Please specify it here"
                    required
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col items-center w-full">
                <p className="text-base font-medium mb-8">Documents required</p>
                <div className=" w-full bg-[#F8FBFF] px-10 py-14">
                  <div className="mb-6 w-full ">
                    <label htmlFor="uploadResult">
                      <input
                        type="file"
                        id="uploadResult"
                        className="hidden"
                        placeholder="Upload LGA Identification"
                        required
                      />
                      <article className="shadow-sm flex items-center justify-center h-20 pl-7 border border-[#E7F0FB] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] w-full p-2.5 bg-[#FFF] cursor-pointer">
                        <p className="flex flex-col justify-center items-center">
                          <Image
                            src="/assets/icons/Vector-upload-icon.svg"
                            className="w-7 h-7"
                            alt="upload icon"
                          />
                          Upload result
                        </p>
                      </article>
                    </label>
                  </div>
                  <div className="mb-6 w-full ">
                    <label htmlFor="lgaId">
                      <input
                        type="file"
                        id="lgaId"
                        className="hidden"
                        placeholder="Upload LGA Identification"
                        required
                      />
                      <article className="shadow-sm flex items-center justify-center h-20 pl-7 border border-[#E7F0FB] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] w-full p-2.5 bg-[#FFF] cursor-pointer">
                        <p className="flex flex-col justify-center items-center">
                          <Image
                            src="/assets/icons/Vector-upload-icon.svg"
                            className="w-7 h-7"
                            alt="upload icon"
                          />
                          Upload LGA Identification
                        </p>
                      </article>
                    </label>
                  </div>
                  <div className=" w-full">
                    <label htmlFor="fslc">
                      <input
                        type="file"
                        id="fslc"
                        className="hidden"
                        placeholder="Upload LGA Identification"
                        required
                      />
                      <article className="shadow-sm flex items-center justify-center h-20 pl-7 border border-[#E7F0FB] text-gray-900 text-sm rounded-[5px] outline-none focus:ring-[#5f9af2] focus:border-[#5f9af2] w-full p-2.5 bg-[#FFF] cursor-pointer">
                        <p className="flex flex-col justify-center items-center ">
                          <Image
                            src="/assets/icons/Vector-upload-icon.svg"
                            className="w-7 h-7"
                            alt="upload icon"
                          />
                          First school leaving certificate
                        </p>
                      </article>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-end">
              <Button2
                customStyle="w-full sm:w-[250px]"
                py="py-3"
                bg="bg-[#5F9AF2] text-[#E7F0FB]"
              >
                Proceed to Payment
              </Button2>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EnrollmentAcademicDetails;
