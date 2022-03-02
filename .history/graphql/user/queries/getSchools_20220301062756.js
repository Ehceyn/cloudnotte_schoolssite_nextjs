import gql from "graphql-tag";

export const GET_SCHOOLS = gql`
  query {
    getSchools(pagination: PaginationInput) {
      id
      name
      country
      state
      city
      logoUrl
      prefix
      type
    }
  }
`;
