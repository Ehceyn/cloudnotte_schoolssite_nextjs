import Image from "next/image";
import React from "react";

function AdmissionStatusInformationProfile({ data }) {
  return (
    <>
      <section className="w-full flex  flex-col">
        <div className="w-full flex flex-col justify-center items-center mt-4 mb-4">
          <Image
            width={120}
            height={120}
            src={
              data.studentDetails.passportUrl !== "" &&
              data.studentDetails.passportUrl.includes("http") === true
                ? data.studentDetails.passportUrl
                : "https://res.cloudinary.com/ugomatt/image/upload/v1650132345/profile_head_nwwxuu.png"
            }
            className="w-[60px] h-[60px] sm:w-[120px] sm:h-[120px] object-contain bg-gray-400 rounded-[50%] sm:border ]"
            alt={
              data.studentDetails.firstName +
              ", " +
              data.studentDetails.lastName
            }
          />
          <p className="font-bold text-base mt-2">
            {data.studentDetails.firstName} {data.studentDetails.lastName}
          </p>
          <p className="font-normal text-base">{data.studentDetails.gender}</p>
        </div>
        <hr />
      </section>
    </>
  );
}

export default AdmissionStatusInformationProfile;
