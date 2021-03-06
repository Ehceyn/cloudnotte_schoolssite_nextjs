import { gql } from "@apollo/client";

export const GET_SCHOOLS = gql`
  query GetSchools(
    $afterId: String!
    $limit: Int!
    $filter: String
    $country: String
    $state: String
  ) {
    getSchools(
      pagination: { afterId: $afterId, limit: $limit }
      filter: { searchText: $filter, country: $country, state: $state }
    ) {
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
      admissionSubAccountId
    }
  }
`;
