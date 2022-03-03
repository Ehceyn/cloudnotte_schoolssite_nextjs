import gql from "graphql-tag";

export const GET_SINGLE_SCHOOL = gql`
  query GetSingleSchool($schoolId: String!) {
    school(schoolId: $schoolId) {
      id
      name
      phoneNumber
      email
      country
      state
      city
      address
      prefix
      type
      categories
      motto
      logoUrl
    }
  }
`;