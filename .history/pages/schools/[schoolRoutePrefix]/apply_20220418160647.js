import React, { useState, useEffect } from "react";
import { EnrollmentTabsProvider } from "../../../src/StateProviders/EnrollmentTabsProvider";
import EnrollmentLandingPage from "../../../src/components/Enrollment/EnrollmentLandingPage/EnrollmentLandingPage";
import EnrollmentTabs from "../../../src/components/Enrollment/EnrollmentTabs/EnrollmentTabs";
import reducer, {
  initialState,
} from "../../../src/Reducers/EnrollmentTabsReducer";
import formReducer, {
  formInitialState,
} from "../../../src/Reducers/FormDetailsReducer";
import docReducer, {
  docInitialState,
} from "../../../src/Reducers/DocUploadReducer";
import { initializeApollo } from "../../../lib/apolloClient";
import { GET_SINGLE_SCHOOL } from "../../../graphql/user/queries/getSingleSchool";
import { GET_SCHOOLS } from "../../../graphql/user/queries/getSchools";
import { FormDetailsProvider } from "../../../src/StateProviders/FormDetailsProvider";
import { DocUploadProvider } from "../../../src/StateProviders/DocUploadProvider";
import { useRouter } from "next/router";
import Loader from "../../../src/components/Loader";
import SEO from "../../../src/components/SEO";

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
      admissionProgrammes,
      admissionSubAccountId,
      isSmartSchool,
    },
  },
}) {
  //.log(admissionProgrammes, "Enrollment Data");
  const [loader, setLoader] = useState(false);
  const [location, setLocation] = useState(null);

  // Get location from url
  useEffect(() => {
    fetch(
      "https://ipfind.co/?ip=197.210.78.141&auth=64520cef-a4fa-4f19-9ca6-420483cadf6e"
    )
      .then((resp) => resp.json())
      .catch(() => {
        return {
          country: "ng",
        };
      })
      .then((resp) => {
        setLocation(resp);
      });
  }, []);

  // initialize router
  const router = useRouter();

  // Check fallback and generate page
  if (router.isFallback) {
    return <Loader display={true} message="Please wait..." />;
  }

  return (
    <>
      <SEO title={`Apply for admission into ${name.toUpperCase()}`} />
      <FormDetailsProvider
        initialState={formInitialState}
        reducer={formReducer}
      >
        <DocUploadProvider initialState={docInitialState} reducer={docReducer}>
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
              prefix={prefix}
              isSmartSchool={isSmartSchool}
            />
            <EnrollmentTabs
              admissionProgrammes={admissionProgrammes}
              schoolId={id}
              prefix={prefix}
              name={name}
              email={email}
              phoneNumber={phoneNumber}
              admissionSubAccountId={admissionSubAccountId}
              logoUrl={logoUrl}
              location={location}
            />
          </EnrollmentTabsProvider>
        </DocUploadProvider>
      </FormDetailsProvider>
      <Loader display={loader} message="Please wait..." />
    </>
  );
}

export const getStaticProps = async (context) => {
  const apolloClient = initializeApollo();
  //.log(context, "here");
  const schoolRoutePrefix = context.params.schoolRoutePrefix;
  //.log(schoolRoutePrefix, "schoolId");

  const { data, loading, error } = await apolloClient.query({
    query: GET_SINGLE_SCHOOL,
    variables: { schoolPrefix: schoolRoutePrefix },
  });

  if (error) return; //.log(JSON.stringify(error, null, 2));
  //.log(data, "why error");
  if (!data) {
    return { notfound: true };
  }

  return {
    props: {
      initializeApolloState: apolloClient.cache.extract(),
      data: data || null,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  const apolloClient = initializeApollo();
  const { loading, error, data } = await apolloClient.query({
    query: GET_SCHOOLS,
    variables: { afterId: "", limit: 100, filter: "" },
  });

  // if (loading) return { paths: [], fallback: true };
  if (error) return; //.log(JSON.stringify(error, null, 2));

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

  //.log(paths, "paths");

  return {
    paths: paths || [],
    fallback: true,
  };
}

export default EnrollmentPage;
