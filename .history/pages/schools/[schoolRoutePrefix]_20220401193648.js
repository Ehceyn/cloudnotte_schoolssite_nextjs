import React, { useState } from "react";
import Link from "next/link";
import { SchoolPersonalPageTabsProvider } from "../../src/StateProviders/SchoolPersonalPageTabsProvider";
import reducer, {
  initialState,
} from "../../src/Reducers/SchoolPersonalPageTabsReducer";
import ReviewSchoolModal from "../../src/components/Modals/ReviewSchoolModal";
import { GiGraduateCap } from "react-icons/gi";
import { CardButton } from "../../src/components/Home/Button";
import SchoolsPersonalLandingPage from "../../src/components/SchoolsPersonalPage/SchoolsPersonalLandingPage/SchoolsPersonalLandingPage";
import SchoolPersonalPageTabs from "../../src/components/SchoolsPersonalPage/SchoolPersonalPageTabs/SchoolPersonalPageTabs";
import { IoIosCall } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import { BsFillPlayFill } from "react-icons/bs";
import { initializeApollo } from "../../lib/apolloClient";
import { GET_SCHOOLS } from "../../graphql/user/queries/getSchools";
import { GET_SINGLE_SCHOOL } from "../../graphql/user/queries/getSingleSchool";
import SEO from "../../src/components/SEO";
import CheckAdmissionModal from "../../src/components/Modals/CheckAdmissionModal";
import TakeEntranceModal from "../../src/components/Modals/TakeEntranceModal";
import GetStudentDataModal from "../../src/components/Modals/GetStudentDataModal";
import AudioModal from "../../src/components/Modals/AudioModal";

function SchoolsPersonalPage({
  data: {
    school: {
      id,
      name,
      phoneNumber,
      email,
      country,
      state,
      city,
      address,
      prefix,
      type,
      categories,
      motto,
      logoUrl,
      admissionInfo: {
        longDescription,
        shortDescription,
        anthemUrl,
        assetsUrl,
        status,
      },
    },
  },
}) {
  const singleSchool = name;
  console.log(singleSchool, "Single cosread here --------<-");
  const [displayReviewSchoolModal, setDisplayReviewSchoolModal] =
    useState(false);

  const [displayEntranceExamModal, setDisplayEntranceExamModal] =
    useState(false);
  const [displayCheckAdmissionModal, setDisplayCheckAdmissionModal] =
    useState(false);
  const [displayGetStudentDataModal, setDisplayGetStudentDataModal] =
    useState(false);
  const [displayAudioModal, setDisplayAudioModal] = useState(false);

  return (
    <>
      <SEO
        title={`${name.toUpperCase()}, ${state},${country}`}
        keywords={`Best school in ${state}, Best school in ${country}, Best school in ${city},
Best schools in ${state}, Best schools in ${country}, Best schools in ${city}, Schools in ${state}, Schools in ${country}, Schools in ${city}, School in ${state}, School in ${country}, School in ${city}, private schools in ${city}, private schools in ${state}, private schools in ${country},  Best private schools in ${city}, Best private schools in ${state}, Best private schools in ${country}, Smart schools, cloudnotte schools, admission-ongoing, schools admitting, schools nearby, school with best facilities, secured schools, automated schools, tech schools.
`}
        description={shortDescription}
        url={`https://cloudnotte.com/schools/${prefix}`}
        image={logoUrl}
      />
      <section>
        <SchoolPersonalPageTabsProvider
          initialState={initialState}
          reducer={reducer}
        >
          <div>
            <section className="h-fit w-full bg-white mb-32">
              <SchoolsPersonalLandingPage
                id={id}
                name={name}
                phoneNumber={phoneNumber}
                email={email}
                country={country}
                state={state}
                city={city}
                address={address}
                prefix={prefix}
                type={type}
                categories={categories}
                motto={motto}
                logoUrl={logoUrl}
                assetsUrl={assetsUrl}
                anthemUrl={anthemUrl}
                status={status}
              />
              <section>
                <div className="bg-white h-full md:px-14 pt-10">
                  <SchoolPersonalPageTabs
                    schoolId={id}
                    onCallReviewSchoolModal={() =>
                      setDisplayReviewSchoolModal(!displayReviewSchoolModal)
                    }
                    onCallEntranceExamModal={() =>
                      setDisplayEntranceExamModal(!displayEntranceExamModal)
                    }
                    onCallCheckAdmissionModal={() =>
                      setDisplayCheckAdmissionModal(!displayCheckAdmissionModal)
                    }
                    onCallGetStudentDataModal={() =>
                      setDisplayGetStudentDataModal(!displayGetStudentDataModal)
                    }
                    longDescription={longDescription}
                    phoneNumber={phoneNumber}
                    email={email}
                    address={address}
                    city={city}
                    state={state}
                    country={country}
                    categories={categories}
                    prefix={prefix}
                  />
                </div>
              </section>
              <div
                className="fixed md3:hidden z-20 bottom-0 right-0 left-0 h-fit 
       flex transition-all duration-500 mb-0"
              >
                <article className="bg-[#FFF] border border-[#E7F0FB] pl-0 pr-0 py-3 sm:py-5 w-full capitalize h-fit flex justify-between">
                  <div className=" w-full flex items-center justify-between px-5 md:px-14 ">
                    <Link
                      href="/schools/[schoolRoutePrefix]/apply"
                      as={`/schools/${prefix}/apply`}
                      passHref
                    >
                      <div className="w-full cursor-pointer">
                        <CardButton
                          py=" xs:h-[70px] py-2 xs:py-8 w-full "
                          px="xs:text-base sm:text-lg text-[13px] px-2 xs:px-14"
                          customStyle="bg-[#5f9af2] text-white"
                        >
                          <GiGraduateCap className="w-5 h-5 mr-1" />
                          Enroll For Admission
                        </CardButton>
                      </div>
                    </Link>

                    <article className="border rounded-sm px-1 sm:px-2 py-1 sm:py-2 ml-2 h-fit">
                      <a
                        href={`tel:${phoneNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IoIosCall className="sm:hidden w-7 h-7 sm:w-14 sm:h-14 fill-[#f44336]" />
                      </a>
                    </article>
                    <article className="border rounded-sm px-1 sm:px-2 py-1 sm:py-2 ml-2 h-fit">
                      <a
                        href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hi%20${name},%20I%20came%20across%20your%20school%20on%20Schools.cloudnotte.com.%20I'd%20like%20to%20make%20more%20enquiries`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <RiWhatsappFill className="w-7 h-7 sm:w-14 sm:h-14 fill-[#02a556]" />
                      </a>
                    </article>
                    <article className="border rounded-sm px-1 sm:px-2 py-1 sm:py-2 ml-2 h-fit">
                      <BsFillPlayFill className="w-7 h-7 sm:w-14 sm:h-14 fill-[#8EA2BA]" />
                    </article>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </SchoolPersonalPageTabsProvider>
        {/* Modal for School Review */}
        <ReviewSchoolModal
          display={displayReviewSchoolModal}
          name={name}
          schoolId={id}
          onCallReviewSchoolModal={() =>
            setDisplayReviewSchoolModal(!displayReviewSchoolModal)
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
        {/* Print admission slip */}
        <GetStudentDataModal
          display={displayGetStudentDataModal}
          onCallGetStudentDataModal={() =>
            setDisplayGetStudentDataModal(!displayGetStudentDataModal)
          }
        />
        {/* Audio */}
        <AudioModal
          display={displayAudioModal}
          onCallAudioModal={() => setDisplayAudioModal(!displayAudioModal)}
        />
      </section>
    </>
  );
}

export const getStaticProps = async (context) => {
  const apolloClient = initializeApollo();
  console.log(context, "here");
  const schoolRoutePrefix = context.params.schoolRoutePrefix;

  console.log(schoolRoutePrefix, "schoolId");

  const { data, loading, error } = await apolloClient.query({
    query: GET_SINGLE_SCHOOL,
    variables: { schoolPrefix: schoolRoutePrefix },
  });

  return {
    props: { initializeApolloState: apolloClient.cache.extract(), data },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  const apolloClient = initializeApollo();

  const { loading, error, data } = await apolloClient.query({
    query: GET_SCHOOLS,
    variables: { afterId: "", limit: 100, filter: "" },
  });

  // if (loading) return { paths: [], fallback: true };
  if (error) return console.log(JSON.stringify(error, null, 2));

  const prefix = data.getSchools.map((school) => {
    return {
      schoolRoutePrefix: school.prefix,
    };
  });

  const paths = prefix.map(({ schoolRoutePrefix }) => {
    return {
      params: { schoolRoutePrefix },
    };
  });

  console.log(paths, "paths");

  return {
    paths: paths || [],
    fallback: true,
  };
}

export default SchoolsPersonalPage;
