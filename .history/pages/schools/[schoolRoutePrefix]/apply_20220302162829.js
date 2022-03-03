import React from "react";
import { EnrollmentTabsProvider } from "../../../src/StateProviders/EnrollmentTabsProvider";
import EnrollmentLandingPage from "../../../src/components/Enrollment/EnrollmentLandingPage/EnrollmentLandingPage";
import EnrollmentTabs from "../../../src/components/Enrollment/EnrollmentTabs/EnrollmentTabs";
import reducer, {
  initialState,
} from "../../../src/Reducers/EnrollmentTabsReducer";
import { initializeApollo } from "../../../lib/apolloClient";
import { GET_SINGLE_SCHOOL } from "../../../graphql/user/queries/getSingleSchool";
import { GET_SCHOOLS } from "../../../graphql/user/queries/getSchools";

function EnrollmentPage({
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
    },
  },
}) {
  return (
    <>
      <EnrollmentTabsProvider initialState={initialState} reducer={reducer}>
        <EnrollmentLandingPage
          id={id}
          name={name}
          country={country}
          state={state}
          type={type}
          categories={categories}
          motto={motto}
          logoUrl={logoUrl}
        />
        <EnrollmentTabs />
      </EnrollmentTabsProvider>
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
    fallback: false,
  };
}

export default EnrollmentPage;
