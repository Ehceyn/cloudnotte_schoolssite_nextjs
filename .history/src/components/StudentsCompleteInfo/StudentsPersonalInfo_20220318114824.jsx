import Image from "next/image";
import React from "react";

function StudentsPersonalInfo({ data }) {
  return (
    <section className="w-full">
      <div className="flex h-fit items-center justify-center  mb-5">
        <p className="text-sm font-bold border-2 border-[#F44336] px-6 py-3">
          Student&apos;s Information
        </p>
      </div>
      <div className="flex flex-col sm:flex-row h-fit  items-start  justify-between w-full">
        <article className="flex mr-5 mb-4 sm:mb-0 ">
          <div className="border rounded-md px-2 py-2">
            <Image
              width={120}
              height={120}
              src={
                data.passportUrl
                  ? data.passportUrl
                  : "/assets/images/school-profile-img.png"
              }
              className="w-[60px] h-[60px] sm:w-[120px] sm:h-[120px] object-contain rounded-[50%] "
              alt=""
            />
          </div>
        </article>
        <article className=" flex flex-col w-full justify-center">
          <div className="flex w-full justify-between sm:mb-3 flex-col sm:flex-row">
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">Full Name</p>
              <p>
                {data.firstName} {data.lastName}
              </p>
            </article>
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">Phone Number</p>
              <p>{data.phoneNumber ? data.phoneNumber : "N/A"}</p>
            </article>{" "}
          </div>
          <div className="flex w-full justify-between sm:mb-3 flex-col sm:flex-row">
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">Email Address</p>
              <p>{data.email ? data.email : "N/A"}</p>
            </article>
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">Date of Birth</p>
              <p>{data.dateOfBirth ? data.dateOfBirth.split("T")[0] : "N/A"}</p>
            </article>{" "}
          </div>
          <div className="flex w-full justify-between sm:mb-3 flex-col sm:flex-row">
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">Country</p>
              <p>{data.country}</p>
            </article>
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">State</p>
              <p>{data.state}</p>
            </article>{" "}
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">LGA</p>
              <p>{data.lga}</p>
            </article>{" "}
          </div>
          <div className="flex w-full justify-between sm:mb-3 flex-col sm:flex-row">
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">Sex</p>
              <p>{data.gender}</p>
            </article>
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">Address</p>
              <p>{data.Address}</p>
            </article>{" "}
          </div>
        </article>
      </div>
    </section>
  );
}

export default StudentsPersonalInfo;
