import Image from "next/image";
import React from "react";

function StudentsParentInfo() {
  return (
    <section className="w-full">
      <div className="flex h-fit items-center justify-center my-5">
        <p className="text-sm font-bold border-2 border-[#F44336] px-6 py-3">
          Parent&apos;s Information
        </p>
      </div>
      <div className="flex flex-col sm:flex-row h-fit  items-start  justify-between w-full">
        <article className="flex mr-5 mb-4 sm:mb-0 ">
          <div className="border rounded-md px-2 py-2">
            <Image
              width={120}
              height={120}
              src="/assets/images/school-profile-img.png"
              className="w-[60px] h-[60px] sm:w-[120px] sm:h-[120px] object-contain rounded-[50%] "
              alt=""
            />
          </div>
        </article>
        <article className=" flex flex-col w-full justify-center">
          <div className="flex w-full justify-between sm:mb-3 flex-col sm:flex-row">
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">Full Name</p>
              <p>Ugochukwu Matthew</p>
            </article>
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">Phone Number</p>
              <p>+234903589093</p>
            </article>{" "}
          </div>
          <div className="flex w-full justify-between sm:mb-3 flex-col sm:flex-row">
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">Email Address</p>
              <p>talk2ugomatt@gmail.com</p>
            </article>
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">Relationship to Student</p>
              <p>Father</p>
            </article>{" "}
          </div>
          <div className="flex w-full justify-between sm:mb-3 flex-col sm:flex-row">
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">Country</p>
              <p>Nigeria</p>
            </article>
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">State</p>
              <p>Rivers State</p>
            </article>{" "}
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">LGA</p>
              <p>Obio-Akpor</p>
            </article>{" "}
          </div>
          <div className="flex w-full justify-between sm:mb-3 flex-col sm:flex-row">
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">Sex</p>
              <p>Male</p>
            </article>
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">Occupation</p>
              <p>Banker</p>
            </article>
            <article className="w-full mb-2 sm:mb-0">
              <p className="text-sm font-bold">Address</p>
              <p>110 East west Road, Rumuodara</p>
            </article>{" "}
          </div>
        </article>
      </div>
    </section>
  );
}

export default StudentsParentInfo;