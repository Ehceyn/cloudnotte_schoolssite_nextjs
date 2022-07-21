import React from "react";
import StudentsCompleteInfo from "../../../src/components/StudentsCompleteInfo/StudentsCompleteInfo";

import { GET_ADMISSION_APPLICANT } from "../../../graphql/user/queries/getAdmissionApplicant";
import { initializeApollo } from "../../../lib/apolloClient";
import SEO from "../../../src/components/SEO";

function StudentsInfo({ data }) {
  const theData = data.getAdmissionApplicant;

  return (
    <>
      <SEO title={`${theData.school.name} Students' Data`} />
      <StudentsCompleteInfo theData={theData} />
    </>
  );
}

export default StudentsInfo;

export async function getServerSideProps({ params }) {
  // Fetch data from external API

  const apolloClient = initializeApollo();
  const applicationNumber = params.studentId;

  const { data, loading, error } = await apolloClient.query({
    query: GET_ADMISSION_APPLICANT,
    variables: { applicationNumber: applicationNumber },
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
