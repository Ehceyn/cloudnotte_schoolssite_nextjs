import gql from "graphql-tag";

export const GET_SCHOOLS = gql`
  query {
    getSchools(pagination: {$afterId,$limit }) {
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
