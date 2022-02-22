import React, { useState, useEffect } from "react";
import Hero1 from "../Hero1/Hero1";
import SchoolsLocation from "../SchoolsLocation/SchoolsLocation";
import SchoolAdCard from "../SchoolAdCard/SchoolAdCard";
import Sidebar from "../Sidebar/Sidebar";
import RightBar from "../RightBar/RightBar";
import BottomNavbar from "../BottomNavbar/BottomNavbar";
import ChangeLocationModal from "../Modals/ChangeLocationModal";
import CheckAdmissionModal from "../Modals/CheckAdmissionModal";
import TakeEntranceModal from "../Modals/TakeEntranceModal";
import ReviewSchoolModal from "../Modals/ReviewSchoolModal";
import GetStudentDataModal from "../Modals/GetStudentDataModal";
import SearchbarFixed from "../SearchbarFixed/SearchbarFixed";

function Home() {
  const [displayEntranceExamModal, setDisplayEntranceExamModal] =
    useState(false);
  const [displayChangeLocationModal, setDisplayChangeLocationModal] =
    useState(false);

  const [searchbarFixed, setSearchbarFixed] = useState(false);

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

  function handleScroll() {
    if (window.scrollY > 70) {
      setSearchbarFixed(true);
    } else {
      setSearchbarFixed(false);
    }
  }

  return (
    <div>
      <section className="">
        <div className="w-full h-full flex justify-between relative  ">
          <div className="bg-white fixed  left-0 h-full w-1/4 border-r hidden md2:flex">
            <Sidebar />
          </div>
          <div className=" bg-white relative inset-0 my-0 mx-auto h-auto w-full md:w-3/4 md2:w-1/2 mt-5 md:px-6">
            <Hero1
              onCallChangeLocationModal={() =>
                setDisplayChangeLocationModal(!displayChangeLocationModal)
              }
            />
            <SchoolsLocation />
            <SchoolAdCard />
          </div>
          <div className="bg-white fixed right-0 h-full w-1/4  border-l hidden md2:flex">
            <RightBar />
          </div>
        </div>
        <BottomNavbar
          onCallEntrancExamModal={() =>
            setDisplayEntranceExamModal(!displayEntranceExamModal)
          }
        />
        <SearchbarFixed display={searchbarFixed} />

        {/* MODALS */}
        <ChangeLocationModal
          display={displayChangeLocationModal}
          onCallChangeLocationModal={() =>
            setDisplayChangeLocationModal(!displayChangeLocationModal)
          }
        />
        {/* <CheckAdmissionModal /> */}
        <TakeEntranceModal
          display={displayEntranceExamModal}
          onCallEntrancExamModal={() =>
            setDisplayEntranceExamModal(!displayEntranceExamModal)
          }
        />
        {/* <ReviewSchoolModal /> */}
        {/* <GetStudentDataModal /> */}
      </section>
    </div>
  );
}

export default Home;
