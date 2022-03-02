import gql from "graphql-tag";

export default GET_SINGLE_SCHOOL = gql`
  query school($schoolId: ID!) {
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
