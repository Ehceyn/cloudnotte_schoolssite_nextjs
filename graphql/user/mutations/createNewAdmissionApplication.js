import { gql } from "@apollo/client";

export const CREATE_NEW_ADMISSION_APPLICATION = gql`
  mutation CreateNewAdmissionApplication($submitVar: NewAdmissionApplicant!) {
    createNewAdmissionApplication(input: $submitVar) {
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
      previousSchoolName
      previousSchoolLeaveReason
      healthIssues
      documents {
        name
        fileUrl
        fileType
      }
      timeAdded
      admissionStatus
    }
  }
`;
