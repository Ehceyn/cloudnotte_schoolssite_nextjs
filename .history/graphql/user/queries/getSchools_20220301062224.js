import gql from "graphql-tag";

export const GET_SCHOOLS = gql`
  query {
    getSchools(pagination: { afterId: String!, limit: 100 }) {
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
