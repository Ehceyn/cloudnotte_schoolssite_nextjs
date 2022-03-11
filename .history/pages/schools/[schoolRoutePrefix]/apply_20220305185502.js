import React from 'react';
import { EnrollmentTabsProvider } from '../../../src/StateProviders/EnrollmentTabsProvider';
import EnrollmentLandingPage from '../../../src/components/Enrollment/EnrollmentLandingPage/EnrollmentLandingPage';
import EnrollmentTabs from '../../../src/components/Enrollment/EnrollmentTabs/EnrollmentTabs';
import reducer, {
  initialState,
} from '../../../src/Reducers/EnrollmentTabsReducer';
import formReducer, {
  formInitialState,
} from '../../../src/Reducers/FormDetailsReducer';
import { initializeApollo } from '../../../lib/apolloClient';
import { GET_SINGLE_SCHOOL } from '../../../graphql/user/queries/getSingleSchool';
import { GET_SCHOOLS } from '../../../graphql/user/queries/getSchools';
import { useMutation } from '@apollo/client';
import { CREATE_NEW_ADMISSION_APPLICATION } from '../../../graphql/user/mutations/createNewAdmissionApplication';
import { FormDetailsProvider } from '../../../src/StateProviders/FormDetailsProvider';

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
    },
  },
}) {
  // USEMUTATION HOOK TO CREATE NEW ENROLLMENT
  const [createEnrollment, { data, loading, error }] = useMutation(
    CREATE_NEW_ADMISSION_APPLICATION
  );

  if (error) return console.log(error, 'Enrollment Error');
  if (loading) return <p>Loading...</p>;
  console.log(admissionProgrammes, 'Enrollment Data');

  return (
    <>
      <FormDetailsProvider
        initialState={formInitialState}
        reducer={formReducer}
      >
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
          <EnrollmentTabs admissionProgrammes={admissionProgrammes} />
        </EnrollmentTabsProvider>
      </FormDetailsProvider>
    </>
  );
}

export const getStaticProps = async (context) => {
  const apolloClient = initializeApollo();
  console.log(context, 'here');
  const schoolRoutePrefix = context.params.schoolRoutePrefix;
  console.log(schoolRoutePrefix, 'schoolId');

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

  console.log(paths, 'paths');

  return {
    paths: paths || [],
    fallback: false,
  };
}

export default EnrollmentPage;
