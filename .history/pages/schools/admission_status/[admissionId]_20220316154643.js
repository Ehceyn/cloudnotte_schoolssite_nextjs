// import React from "react";
// import AdmissionStatusLandingPage from "../../../src/components/AdmissionStatus/AdmissionStatusLandingPage/AdmissionStatusLandingPage";
// import AdmissionStatusInformation from "../../../src/components/AdmissionStatus/AdmissionStatusInformation/AdmissionStatusInformation";
// import { AdmissionStatusTabsProvider } from "../../../src/StateProviders/AdmissionStatusTabsProvider";
// import reducer, {
//   initialState,
// } from "../../../src/Reducers/AdmissionStatusTabsReducer";
// import { GET_ADMISSION_APPLICANT } from "../../../graphql/user/queries/getAdmissionApplicant";
// import { initializeApollo } from "../../../lib/apolloClient";

// function AdmissionStatusPage({ data }) {
//   // console.log(data, "data here");

//   return (
//     <>
//       <AdmissionStatusTabsProvider
//         initialState={initialState}
//         reducer={reducer}
//       >
//         <section className="flex flex-col bg-white w-[320px] xs:w-[400px] sm:w-[500px] md:w-[672px] max-w-2xl mx-auto">
//           <AdmissionStatusLandingPage data={data.getAdmissionApplicant} />
//           <AdmissionStatusInformation data={data.getAdmissionApplicant} />
//         </section>
//       </AdmissionStatusTabsProvider>
//     </>
//   );
// }

// export default AdmissionStatusPage;

// export async function getServerSideProps({ params }) {
//   // Fetch data from external API

//   const apolloClient = initializeApollo();
//   const applicationNumber = params.admissionId;

//   const { data, loading, error } = await apolloClient.query({
//     query: GET_ADMISSION_APPLICANT,
//     variables: { applicationNumber: applicationNumber },
//   });
//   if (error) return console.log(JSON.stringify(error, null, 2));

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   // Pass data to the page via props
//   return {
//     props: { initializeApolloState: apolloClient.cache.extract(), data },
//   };
// }
