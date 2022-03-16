import { gql } from "@apollo/client";

export const GET_SCHOOLS = gql`
  query {
    getSchools(pagination: { afterId: "", limit: 100 }) {
      id
      name
      country
      state
      city
      phoneNumber
      logoUrl
      prefix
      type
      admissionInfo {
        longDescription
        shortDescription
        anthemUrl
        assetsUrl
        status
      }
      isSmartSchool
    }
  }
`;
