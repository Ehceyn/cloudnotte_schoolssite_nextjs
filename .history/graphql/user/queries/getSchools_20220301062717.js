import gql from "graphql-tag";

export const GET_SCHOOLS = gql`
  query {
    getSchools($pagination) {
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
