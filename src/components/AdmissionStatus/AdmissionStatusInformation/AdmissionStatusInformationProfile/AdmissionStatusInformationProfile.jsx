import Image from "next/image";
import React from "react";

function AdmissionStatusInformationProfile() {
  return (
    <>
      <section className="w-full flex  flex-col">
        <div className="w-full flex flex-col justify-center items-center mt-4 mb-4">
          <Image
            width={120}
            height={120}
            src="/assets/images/school-profile-img.png"
            className="w-[60px] h-[60px] sm:w-[120px] sm:h-[120px] object-contain bg-gray-400 rounded-[50%] sm:border ]"
            alt=""
          />
          <p className="font-bold text-base">Ugochukwu Matthew</p>
          <p className="font-normal text-base">Female</p>
        </div>
        <hr />
      </section>
    </>
  );
}

export default AdmissionStatusInformationProfile;
