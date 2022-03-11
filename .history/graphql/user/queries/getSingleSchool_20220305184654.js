import { gql } from '@apollo/client';

export const GET_SINGLE_SCHOOL = gql`
  query GetSingleSchool($schoolPrefix: String!) {
    school(schoolPrefix: $schoolPrefix) {
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
      # admissionProgrammes {
      #   id
      #   name
      #   admissionFee
      #   documents {
      #     name
      #     fileType
      #   }
      #   maxApplicants
      #   status
      # }
    }
  }
`;
