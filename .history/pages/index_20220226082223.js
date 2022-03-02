import React, { useState, useEffect } from "react";
import Hero1 from "../src/components/Hero1/Hero1";
import SchoolsLocation from "../src/components/SchoolsLocation/SchoolsLocation";
import SchoolAdCard from "../src/components/SchoolAdCard/SchoolAdCard";
import Sidebar from "../src/components/Sidebar/Sidebar";
import RightBar from "../src/components/RightBar/RightBar";
import BottomNavbar from "../src/components/BottomNavbar/BottomNavbar";
import ChangeLocationModal from "../src/components/Modals/ChangeLocationModal";
import CheckAdmissionModal from "../src/components/Modals/CheckAdmissionModal";
import TakeEntranceModal from "../src/components/Modals/TakeEntranceModal";
import ReviewSchoolModal from "../src/components/Modals/ReviewSchoolModal";
import GetStudentDataModal from "../src/components/Modals/GetStudentDataModal";
import SearchbarFixed from "../src/components/SearchbarFixed/SearchbarFixed";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../lib/apolloClient";
import { GET_SCHOOLS } from "../graphql/user/queries/getSchools";

function Home({ schools }) {
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

  // GET SCHOOLS FROM SERVER
  const { data, error, loading } = useQuery(GET_SCHOOLS);

  if (loading) return <h2>Loading...</h2>;
  if (error) return console.log(error.networkError.result.errors);
  if (data) return console.log(data, "na them");
  console.log(schools);

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
            <SchoolAdCard schools={schools} />
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

// export const getStaticProps = async ({ schools }) => {
//   const apolloClient = initializeApollo();
//   await apolloClient.query({
//     query: GET_SCHOOLS,
//     // variables: { pagination: { afterId: "" } },
//   });
//   console.log(error.networkError.result.errors);

//   return {
//     props: { initializeApolloState: apolloClient.cache.extract(), schools },
//   };
// };

export default Home;
