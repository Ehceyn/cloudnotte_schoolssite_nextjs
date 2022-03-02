import gql from "graphql-tag";

export default GET_SCHOOLS = gql`
  query {
    getSchools(pagination: { afterId: "", limit: 100 }) {
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
