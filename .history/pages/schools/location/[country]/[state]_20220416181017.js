import React, { useState, useEffect } from "react";
import Hero3 from "../../../../src/components/Hero3/Hero3";
import SchoolAdCard from "../../../../src/components/SchoolAdCard/SchoolAdCard";
import Sidebar from "../../../../src/components/Sidebar/Sidebar";
import RightBar from "../../../../src/components/RightBar/RightBar";
import SchoolsLocation from "../../../../src/components/SchoolsLocation/SchoolsLocation";
import BottomNavbar from "../../../../src/components/BottomNavbar/BottomNavbar";
import ChangeLocationModal from "../../../../src/components/Modals/ChangeLocationModal";
import CheckAdmissionModal from "../../../../src/components/Modals/CheckAdmissionModal";
import TakeEntranceModal from "../../../../src/components/Modals/TakeEntranceModal";
import GetStudentDataModal from "../../../../src/components/Modals/GetStudentDataModal";
import SearchbarFixed from "../../../../src/components/SearchbarFixed/SearchbarFixed";
import { initializeApollo } from "../../../../lib/apolloClient";
import { GET_SCHOOLS } from "../../../../graphql/user/queries/getSchools";
import { useRouter } from "next/router";
import SEO from "../../../../src/components/SEO";

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
  // location details state
  const [location, setLocation] = useState(null);
  const router = useRouter();

  // Get location from url
  function getUserGeoLocation() {
    fetch(
      "https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708"
    )
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
      });
  }

  // Call get user location
  useEffect(() => {
    getUserGeoLocation();
    console.log(location);
  }, []);

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

  const schools = data;
  //.log(schools, "here --------<-");

  return (
    <section className="">
      <SEO
        title={`Best Schools in, ${router.query.state}, ${router.query.country}`}
        keywords={`Best school in ${router.query.state}, Best school in ${router.query.country},
Best schools in ${router.query.state}, Best schools in ${router.query.country}y}, School in ${router.query.state}, School in ${router.query.country}, private schools in ${router.query.state}, private schools in ${router.query.country}, Best private schools in ${router.query.state}, Best private schools in ${router.query.country}, Smart schools, cloudnotte schools, admission-ongoing, schools admitting, schools nearby, school with best facilities, secured schools, automated schools, tech schools.
`}
        description={`These schools stand out in the poll of thousands of other schools operating in ${router.query.state}. Below are the list of best schools in ${router.query.state}, ${router.query.country}`}
        url={`https://cloudnotte.com/schools/location/${router.query.country}/${router.query.state}`}
        image={`https://res.cloudinary.com/ugomatt/image/upload/v1647277984/cloudnotte_icon_soqc6y.png`}
      />
      <section className="   h-full">
        <div className="w-full h-full flex justify-between relative  ">
          <div className=" fixed grow justify-end bg-white left-0 h-full w-1/4 2xl:w-1/3 border-r hidden md2:flex">
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
            className={`bg-white relative inset-0 mb-14 mx-auto h-auto w-full md:w-3/4 md2:w-1/2 mt-5 max-w-[600px] md:px-6`}
          >
            <Hero3
              onCallChangeLocationModal={() =>
                setDisplayChangeLocationModal(!displayChangeLocationModal)
              }
            />
            <div className="flex flex-wrap mx-3 text-sm sm:text-base sm:mx-0 my-5 rounded-[5px] bg-blue-50 border-blue-400 p-3 ">
              <h3 className="  font-bold text-blue-500">
                These schools stand out in the poll of thousands of other
                schools operating in {router.query.state}. Below are the list of
                best schools in {router.query.state}, {router.query.country}.
              </h3>
            </div>
            <SchoolsLocation
              onCallChangeLocationModal={() =>
                setDisplayChangeLocationModal(!displayChangeLocationModal)
              }
            />

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
                  textColor={colors[Math.floor(Math.random() * colors.length)]}
                />
              );
            })}
          </div>

          <div className="bg-white fixed right-0 h-full w-1/4 2xl:w-1/3  border-l hidden md2:flex">
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
    </section>
  );
}

export async function getServerSideProps({ params }) {
  // Fetch data from external API
  console.log(params, "params.prefix");
  const apolloClient = initializeApollo();
  const country = params.country;
  const state = params.state;

  const { data, loading, error } = await apolloClient.query({
    query: GET_SCHOOLS,
    variables: {
      afterId: "",
      limit: 100,
      country: country,
      state: state,
    },
  });
  if (error) return; //.log(JSON.stringify(error, null, 2));

  if (!data) {
    return {
      notFound: true,
    };
  }

  // Pass data to the page via props
  return {
    props: { initializeApolloState: apolloClient.cache.extract(), data },
  };
}

//

export default Home;
