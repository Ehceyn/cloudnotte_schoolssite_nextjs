import gql from "graphql-tag";

export const GET_SCHOOLS = gql`
  query getSchools(afterId:!String){
    getSchools(pagination: { afterId: $afterId , limit: 100 }) {
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
