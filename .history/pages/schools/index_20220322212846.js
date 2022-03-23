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
import { initializeApollo } from "../../lib/apolloClient";
import { GET_SCHOOLS } from "../../graphql/user/queries/getSchools";
import SEO from "../../src/components/SEO";
import { states } from "../../src/exApi/states";
import { countries } from "../../src/exApi/countries";

function Home({ data }) {
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

  const schools = data;
  console.log(schools, "here --------<-");

  return (
    <div>
      <SEO
        title="Schools"
        keywords={`Best school in ${states.map((state) => {
          return state.name + ",";
        })}, Best school in ${countries.map((country) => {
          return country.name + ",";
        })}, Best school in ${schools?.getSchools.map((school) => {
          return school.city + ",";
        })},
Best schools in ${states.map((state) => {
          return state.name + ",";
        })}, Best schools in ${countries.map((country) => {
          return country.name + ",";
        })}, Best schools in ${schools?.getSchools.map((school) => {
          return school.city + ",";
        })}, Schools in ${states.map((state) => {
          return state.name + ",";
        })}, Schools in ${countries.map((country) => {
          return country.name + ",";
        })}, Schools in ${schools?.getSchools.map((school) => {
          return school.city + ",";
        })}, School in ${states.map((state) => {
          return state.name + ",";
        })}, School in ${countries.map((country) => {
          return country.name + ",";
        })}, School in ${schools?.getSchools.map((school) => {
          return school.city + ",";
        })}, private schools in ${schools?.getSchools.map((school) => {
          return school.city + ",";
        })}, private schools in ${states.map((state) => {
          return state.name + ",";
        })}, private schools in ${countries.map((country) => {
          return country.name + ",";
        })},  Best private schools in ${schools?.getSchools.map((school) => {
          return school.city + ",";
        })}, Best private schools in ${states.map((state) => {
          return state.name + ",";
        })}, Best private schools in ${countries.map((country) => {
          return country.name + ",";
        })}, Smart schools, cloudnotte schools, admission-ongoing, schools admitting, schools nearby, school with best facities, secured schools.
`}
        description="Cloudnotte schools - Find schools nearby"
      />{" "}
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

          <div
            className={`bg-white relative inset-0 mb-14 mx-auto h-auto w-full md:w-3/4 md2:w-1/2 mt-5 md:px-6`}
          >
            <Hero1
              onCallChangeLocationModal={() =>
                setDisplayChangeLocationModal(!displayChangeLocationModal)
              }
            />
            {/* <SchoolsLocation /> */}

            {/*MAP THE RETURNED SCHOOLS AND DISPLAY THEM  */}
            {schools.getSchools.map((school) => {
              return (
                <SchoolAdCard
                  key={school.id}
                  id={school.id}
                  name={school.name}
                  country={school.country}
                  state={school.state}
                  city={school.city}
                  logoUrl={school.logoUrl}
                  prefix={school.prefix}
                  type={school.type}
                  isSmartSchool={school.isSmartSchool}
                  longDescription={school.admissionInfo.longDescription}
                  shortDescription={school.admissionInfo.shortDescription}
                  assetsUrl={school.admissionInfo.assetsUrl}
                />
              );
            })}
          </div>

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

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  const { data, error, loading } = await apolloClient.query({
    query: GET_SCHOOLS,
    variables: { afterId: "", limit: 100, filter: "" },
  });

  if (loading) return <h2>Loading...</h2>;
  if (error) return console.log(JSON.stringify(error, null, 2));

  return {
    props: { initializeApolloState: apolloClient.cache.extract(), data },
  };
};

//

export default Home;
