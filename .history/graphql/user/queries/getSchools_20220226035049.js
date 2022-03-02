import { gql } from "@apollo/client";

export const GET_SCHOOLS = gql`
  query {
    getSchools(pagination: { afterId: $var, limit: 100 }) {
      id
      name
      country
      state
      city
      logoUrl
      prefix
      type
      admissionInfo {
        assetsUrl
      }
    }
  }
`;
