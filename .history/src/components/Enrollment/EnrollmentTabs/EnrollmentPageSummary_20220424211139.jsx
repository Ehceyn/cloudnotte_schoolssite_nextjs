import React, { useState } from "react";
import Button, { Button2, Button3 } from "../EnrollmentLandingPage/Button";
import { GiGraduateCap } from "react-icons/gi";
import { useEnrollmentTabsValue } from "../../../StateProviders/EnrollmentTabsProvider";
import CheckAdmissionModal from "../../Modals/CheckAdmissionModal";
import MessageModal from "../../Modals/MessageModal";

function EnrollmentPageSummary({
  display,
  name,
  admissionProgrammes,
  email,
  phoneNumber,
}) {
  const [tab, dispatch] = useEnrollmentTabsValue();
  const [displayCheckAdmissionModal, setDisplayCheckAdmissionModal] =
    useState(false);
  const [displayMessageModal, setDisplayMessageModal] = useState(false);

  //.log(admissionProgrammes, "admissionProgrammes");

  // DISPATCH ENROLLMENT TAB STATE
  const changeTab = (id) => {
    //.log("tab: " + id);
    dispatch({
      type: "TOGGLE_ENROLLMENT_TAB",
      item: id,
    });
  };

  return (
    <div
      className={`${
        display === 1 ? "block" : "hidden"
      } px-5 md:px-10 md2:px-28 md3:px-40 w-full xs:w-[85%] sm:w-[70%] mt-10 mb-14 mx-auto `}
    >
      <p>
        Welcome to the first stage of the{" "}
        <span className="text-bold text-[#5f9af2] capitalize">{name}</span>{" "}
        admission enrollment system. Available Class/Programmes are:{" "}
        <span className="text-bold text-[#5f9af2]">
          {admissionProgrammes?.map((programme, index) => {
            return (
              <span key={index} className="text-[#5f9af2]">
                {programme.name + ", "}
              </span>
            );
          })}
        </span>
        Please complete the requested information to submit the form.
      </p>
      <br />
      <p className="flex flex-wrap">
        Please note that receipt of this application does not guarantee
        admission into
        <span className="text-bold text-[#5f9af2] capitalize"> {name}</span>. Do
        not apply for admission again if you have applied before. Please contact
        us at{" "}
        <span className="text-bold text-[#5f9af2] w-[310px] break-words">
          {email}, {phoneNumber}
        </span>{" "}
        if you need more information to continue with the application process.{" "}
        <br />
        Regards, Administrator.
      </p>
      <p>Note: DO NOT PERFORM ANY TRANSACTION OUTSIDE THIS PLATFORM</p>
      <MessageModal
        displayMessageModal={displayMessageModal}
        status="error"
        heading={"Enrollment not available"}
        showBtn={false}
        onCallDisplayMessageModal={() => setDisplayMessageModal(false)}
        message={`You cannot apply for admission at the moment, contact the school admin via ${phoneNumber} or ${(
          <span className="text-bold text-[#5f9af2]  "></span>
        )}  to enable online admission access.`}
      />
      <article className="flex w-full py-14 justify-center">
        <div className="flex flex-col sm:flex-row">
          <div
            className="w-full mr-1"
            onClick={() => {
              admissionProgrammes.length === 0
                ? setDisplayMessageModal(true)
                : changeTab(2);
            }}
          >
            <Button2
              customStyle="border w-[230px] sm:w-[230px]"
              py="py-2 sm:px-0 mb-5"
              bg=" bg-[#5f9af2] text-[#E7F0FB]"
            >
              <GiGraduateCap className="w-5 h-5 mr-1" />
              Start application
            </Button2>
          </div>
          <div
            className="w-full"
            onClick={() => {
              setDisplayCheckAdmissionModal(!displayCheckAdmissionModal);
            }}
          >
            <Button3
              customStyle="w-[230px] sm:w-[230px] border "
              py="py-2 mb-5 sm:mb-0 sm:mr-5 sm:px-0"
              bg="bg-white text-[#8EA2BA]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="#8EA2BA"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Check Admission status
            </Button3>
          </div>
        </div>
        <CheckAdmissionModal
          display={displayCheckAdmissionModal}
          onCallCheckAdmissionModal={() =>
            setDisplayCheckAdmissionModal(!displayCheckAdmissionModal)
          }
        />
      </article>
    </div>
  );
}

export default EnrollmentPageSummary;
