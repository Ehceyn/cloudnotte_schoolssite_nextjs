import { gql } from "@apollo/client";

export const GET_SCHOOLS = gql`
  query GetSchools($afterId: String!, $limit: Int!, $filter: String) {
    getSchools(
      pagination: { afterId: $afterId, limit: $limit }
      filter: { searchText: $filter }
    ) {
      id
      name
      country
      state
      city
      prefix
      logoUrl
    }
  }
`;
