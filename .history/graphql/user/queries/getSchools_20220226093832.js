import gql from "graphql-tag";

export const GET_SCHOOLS = gql`
  query {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      ships {
        image
      }
    }
  }
`;
