import { gql } from "@apollo/client";

export const GET_ADMISSION_APPLICANT = gql`
  query GetAdmissionApplicant($applicationNumber: String!) {
    getAdmissionApplicant(applicationNumber: $applicationNumber) {
      id
      applicationNumber
      studentDetails {
        firstName
        lastName
        middleName
        phoneNumber
        email
        gender
        dateOfBirth
        country
        state
        lga
        address
        passportUrl
      }
      parentDetails {
        firstName
        lastName
        middleName
        phoneNumber
        email
        relationship
        occupation
        country
        state
        lga
        address
        passportUrl
      }
      school {
        id
        name
        logoUrl
        state
        country
      }
      class {
        id
        category
        name
      }
      cbtSubmissions {
        score
        subjectName
        examTotalMarks
        timeAdded
      }
      previousSchoolName
      previousSchoolLeaveReason
      healthIssues
      timeAdded
      admissionStatus
    }
  }
`;
