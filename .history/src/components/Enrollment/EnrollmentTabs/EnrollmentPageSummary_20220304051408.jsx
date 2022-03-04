import React from "react";
import Button, { Button2, Button3 } from "../EnrollmentLandingPage/Button";
import { GiGraduateCap } from "react-icons/gi";
import styles from "../../../../styles/EnrollmentPage.module.css";
import { useEnrollmentTabsValue } from "../../../StateProviders/EnrollmentTabsProvider";

function EnrollmentPageSummary({ display }) {
  const [tab, dispatch] = useEnrollmentTabsValue();

  // DISPATCH ENROLLMENT TAB STATE
  const changeTab = (id) => {
    console.log("tab: " + id);
    dispatch({
      type: "TOGGLE_ENROLLMENT_TAB",
      item: id,
    });
  };

  return (
    <div
      className={`${
        display === 1 ? "block" : "hidden"
      } px-5 md:px-10 md2:px-28 md3:px-40 text-justify w-full xs:w-[85%] sm:w-[70%] mt-10 mb-14 mx-auto text-[0.8em] sm:text-base`}
    >
      <p>
        Welcome to the first stage of the Royal Group of Schools admission
        enrollment system for 2021/2022 Academic session. Availabe
        Class/Programmes are: JSS1, JSS2, JSS3, FACAULTY SCIENCE, Please
        complete the requested information to submit form. Upon submitting this
        information, an account will be opened for you and you will be able to
        begin the application process.
      </p>
      <br />
      <p>
        Please note that receipt of this application does not guarantee you
        admission in Royal Group of Schools. If do not apply for admission again
        if you have applied before. Please contact us at royalcollege@gmail.com
        if you need more information to continue with the application process.
      </p>
      <article className="flex w-full py-14 justify-center">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full">
            <Button2
              customStyle=" sm:w-[230px] border sm:border-0"
              py="py-2 mb-5 sm:mb-0 sm:mr-5"
              bg="bg-[#5f9af2] text-[#E7F0FB]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="#E7F0FB"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Admission status
            </Button2>
          </div>
          <div
            className="w-full"
            onClick={() => {
              changeTab(2);
            }}
          >
            <Button3
              customStyle="border"
              py="py-2"
              bg="bg-white text-[#8EA2BA]"
            >
              <GiGraduateCap className="w-5 h-5 mr-1" />
              Start application
            </Button3>
          </div>
        </div>{" "}
      </article>
    </div>
  );
}

export default EnrollmentPageSummary;
