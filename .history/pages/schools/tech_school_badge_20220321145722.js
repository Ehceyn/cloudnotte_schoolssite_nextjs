import React, { useState, useEffect } from "react";
import Hero1 from "../../src/components/Hero1/Hero1";
import SchoolAdCard from "../../src/components/SchoolAdCard/SchoolAdCard";
import Sidebar from "../../src/components/Sidebar/Sidebar";
import RightBar from "../../src/components/RightBar/RightBar";
import BottomNavbar from "../../src/components/BottomNavbar/BottomNavbar";
import ChangeLocationModal from "../../src/components/Modals/ChangeLocationModal";
import CheckAdmissionModal from "../../src/components/Modals/CheckAdmissionModal";
import TakeEntranceModal from "../../src/components/Modals/TakeEntranceModal";
import GetStudentDataModal from "../../src/components/Modals/GetStudentDataModal";
import SearchbarFixed from "../../src/components/SearchbarFixed/SearchbarFixed";

import RegisterSchoolPage from "../../src/components/RegisterSchoolPage/RegisterSchoolPage";
import SEO from "../../src/components/SEO";

function Home() {
  const [displayEntranceExamModal, setDisplayEntranceExamModal] =
    useState(false);
  const [displayChangeLocationModal, setDisplayChangeLocationModal] =
    useState(false);
  const [displayGetStudentDataModal, setDisplayGetStudentDataModal] =
    useState(false);
  const [displayCheckAdmissionModal, setDisplayCheckAdmissionModal] =
    useState(false);
  const [searchbarFixed, setSearchbarFixed] = useState(false);

  //LISTENS FOR THE EVENTS IN THE ARRAY BELOW AND CALLS HANDLESCROLL FUNCTION
  useEffect(() => {
    ["load", "scroll", "resize"].forEach((e) =>
      window.addEventListener(e, handleScroll)
    );
    return () =>
      ["load", "scroll", "resize"].forEach((e) =>
        window.removeEventListener(e, handleScroll)
      );
    // eslint-disable-next-line
  }, []);

  // SETS DISPLAY OF THE SEARCHBAR
  function handleScroll() {
    if (window.scrollY > 70) {
      setSearchbarFixed(true);
    } else {
      setSearchbarFixed(false);
    }
  }

  return (
    <div>
      <SEO title="Get a tech badge" />
      <section className="2xl:w-[1536px] 2xl:max-w-[1536px] 2xl:px-auto h-full">
        <div className="w-full h-full flex justify-between relative  ">
          <div className="bg-white fixed  left-0 h-full w-1/4 border-r hidden md2:flex">
            <Sidebar
              onCallEntranceExamModal={() =>
                setDisplayEntranceExamModal(!displayEntranceExamModal)
              }
              onCallCheckAdmissionModal={() =>
                setDisplayCheckAdmissionModal(!displayCheckAdmissionModal)
              }
              onCallGetStudentDataModal={() =>
                setDisplayGetStudentDataModal(!displayGetStudentDataModal)
              }
            />
          </div>

          <RegisterSchoolPage />

          <div className="bg-white fixed right-0 h-full w-1/4  border-l hidden md2:flex">
            <RightBar schools={schools.getSchools} />
          </div>
        </div>
        <BottomNavbar
          onCallEntranceExamModal={() =>
            setDisplayEntranceExamModal(!displayEntranceExamModal)
          }
          onCallCheckAdmissionModal={() =>
            setDisplayCheckAdmissionModal(!displayCheckAdmissionModal)
          }
          onCallGetStudentDataModal={() =>
            setDisplayGetStudentDataModal(!displayGetStudentDataModal)
          }
          onDisplayRegisterSchoolPage={() => setDisplayRegisterSchoolPage(true)}
          onDisplayHomePage={() => setDisplayRegisterSchoolPage(false)}
        />

        <SearchbarFixed display={searchbarFixed} />

        {/* ========================================== MODALS ===================================== */}
        {/* Change your location */}
        <ChangeLocationModal
          display={displayChangeLocationModal}
          onCallChangeLocationModal={() =>
            setDisplayChangeLocationModal(!displayChangeLocationModal)
          }
        />
        {/* Check Admission */}
        <CheckAdmissionModal
          display={displayCheckAdmissionModal}
          onCallCheckAdmissionModal={() =>
            setDisplayCheckAdmissionModal(!displayCheckAdmissionModal)
          }
        />
        {/* Take Entrance Exam */}
        <TakeEntranceModal
          display={displayEntranceExamModal}
          onCallEntranceExamModal={() =>
            setDisplayEntranceExamModal(!displayEntranceExamModal)
          }
        />
        {/* Get Student Data */}
        <GetStudentDataModal
          display={displayGetStudentDataModal}
          onCallGetStudentDataModal={() =>
            setDisplayGetStudentDataModal(!displayGetStudentDataModal)
          }
        />
      </section>
    </div>
  );
}

export default Home;