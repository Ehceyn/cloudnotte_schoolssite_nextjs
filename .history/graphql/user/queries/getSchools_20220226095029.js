import gql from "graphql-tag";

export const GET_SCHOOLS = gql`
  query {
    launchesPast(limit: 60) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`;
