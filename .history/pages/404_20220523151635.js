import React, { useState, useEffect } from "react";
import Hero1 from "../src/components/Hero1/Hero1";
import SchoolAdCard from "../src/components/SchoolAdCard/SchoolAdCard";
import Sidebar from "../src/components/Sidebar/Sidebar";
import RightBar from "../src/components/RightBar/RightBar";
import BottomNavbar from "../src/components/BottomNavbar/BottomNavbar";
import ChangeLocationModal from "../src/components/Modals/ChangeLocationModal";
import CheckAdmissionModal from "../src/components/Modals/CheckAdmissionModal";
import TakeEntranceModal from "../src/components/Modals/TakeEntranceModal";
import GetStudentDataModal from "../src/components/Modals/GetStudentDataModal";
import SearchbarFixed from "../src/components/SearchbarFixed/SearchbarFixed";
import Image from "next/image";
import { useRouter } from "next/router";

import Loader from "../src/components/Loader";

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
  const [loader, setLoader] = useState(false);

  // Initialize userouter
  const router = useRouter();

  setTimeout(() => {
    setLoader(false);
  }, 5000);

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

  // COLORS TO MAP
  const colors = ["#ffd833", "#fc2d44", "#28a265", "#70a4f3"];

  return (
    <section className="">
      <section className="   h-full">
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

          <div
            className={`bg-white relative inset-0 mb-14 mx-auto h-auto w-full md:w-3/4 md2:w-1/2 mt-5 max-w-[800px] md:px-6`}
          >
            <Hero1
              onCallChangeLocationModal={() =>
                setDisplayChangeLocationModal(!displayChangeLocationModal)
              }
            />
            {/* Create a funny 404 messsage page */}
            <div className="flex flex-col items-center justify-center  w-full px-3 md:px-0">
              {/* 404 not found svg */}
              <Image
                width="500"
                height="300"
                src="https://res.cloudinary.com/zichygraphs/image/upload/v1650209172/404stars_qkezne.jpg"
                alt="404 not found"
              />
              <h1 className="text-5xl text-center">404 not found</h1>
              <h2 className="text-xl text-center">
                I tried my best to get you there. But you know its not easy
                looking for a school that doesn&apos;t exist.
              </h2>
              <p className="text-xl text-center font-bold">
                {" "}
                You can use our search bar to find a school or go{" "}
                <span
                  onClick={() => {
                    setLoader(true);
                    router.push("/schools");
                  }}
                  className="text-xl cursor-pointer text-center text-[#5f9af2] font-bold"
                >
                  home
                </span>
                .
              </p>
            </div>
          </div>

          <div className="bg-white fixed right-0 h-full w-1/4 2xl:w-1/3  border-l hidden md2:flex">
            <RightBar schools={[]} />
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
        />

        <SearchbarFixed
          display={searchbarFixed}
          onCallChangeLocationModal={() =>
            setDisplayChangeLocationModal(!displayChangeLocationModal)
          }
        />

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
      <Loader display={loader} message="Please Wait..." />
    </section>
  );
}

//

export default Home;
