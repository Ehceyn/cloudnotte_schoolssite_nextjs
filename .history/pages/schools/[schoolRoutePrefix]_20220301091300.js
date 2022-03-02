import React from "react";
import { SchoolPersonalPageTabsProvider } from "../../src/StateProviders/SchoolPersonalPageTabsProvider";
import reducer, {
  initialState,
} from "../../src/Reducers/SchoolPersonalPageTabsReducer";
import { GiGraduateCap } from "react-icons/gi";
import { CardButton } from "../../src/components/Home/Button";
import SchoolsPersonalLandingPage from "../../src/components/SchoolsPersonalPage/SchoolsPersonalLandingPage/SchoolsPersonalLandingPage";
import SchoolPersonalPageTabs from "../../src/components/SchoolsPersonalPage/SchoolPersonalPageTabs/SchoolPersonalPageTabs";
import { IoIosCall } from "react-icons/io";
import { BsFillPlayFill } from "react-icons/bs";
import { initializeApollo } from "../../lib/apolloClient";
import { GET_SINGLE_SCHOOL } from "../../graphql/user/queries/getSingleSchool";

function SchoolsPersonalPage({ query }) {
  console.log(query, "see query");
  return (
    <>
      <section>
        <SchoolPersonalPageTabsProvider
          initialState={initialState}
          reducer={reducer}
        >
          <div>
            <section className="h-fit w-full bg-white mb-32">
              <SchoolsPersonalLandingPage />
              <section>
                <div className="bg-white h-full md:px-14 pt-10">
                  <SchoolPersonalPageTabs />
                </div>
              </section>
              <div
                className="fixed md3:hidden z-20 bottom-0 right-0 left-0 h-fit 
       flex transition-all duration-500 mb-0"
              >
                <article className="bg-[#FFF] border border-[#E7F0FB] pl-0 pr-0 py-3 sm:py-5 w-full capitalize h-fit flex justify-between">
                  <div className=" w-full flex items-center justify-between px-5 md:px-14 ">
                    <div className="w-full cursor-pointer">
                      <CardButton
                        py=" xs:h-[70px] py-2 xs:py-8 w-full "
                        px="xs:text-base sm:text-lg text-[13px] px-2 xs:px-14"
                        customStyle="bg-[#5f9af2] text-white"
                      >
                        <GiGraduateCap className="w-5 h-5 mr-1" />
                        Enroll For Admission
                      </CardButton>
                    </div>{" "}
                    <article className="border rounded-sm px-1 sm:px-2 py-1 sm:py-2 ml-2 h-fit">
                      <IoIosCall className="w-7 h-7 sm:w-14 sm:h-14 fill-[#f44336]" />
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
      </section>
    </>
  );
}

export async function getStaticProps({ params }) {
  const apolloClient = initializeApollo();
  // const query = params.id;
  console.log(params, "see params");

  // await apolloClient.query({
  //   query: GET_SINGLE_SCHOOL,
  //   variables: { schoolId: query },
  // });

  // return {
  //   props: {
  //     initializeApolloState: apolloClient.cache.extract(),
  //     query,
  //   },
  // };
}

export async function getStaticPaths({ params }) {
  const apolloClient = initializeApollo();
  // const query = params.id;
  console.log(params, "see params");

  // const { loading, error, data } = await apolloClient.query({
  //   query: GET_SINGLE_SCHOOL,
  //   variables: { schoolId: query },
  // });
  // const paths = data.school.map((school) => ({
  //   params: { slug: school.prefix },
  // }));

  // return {
  //   paths: paths || [],
  //   fallback: false,
  // };
}

export default SchoolsPersonalPage;
