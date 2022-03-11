import { gql } from "@apollo/client";

export const CREATE_NEW_ADMISSION_APPLICATION = gql`
  mutation CreateNewAdmissionApplication(
    $studentFirstName: String!
    $studentLastName: String!
    $studentMiddleName: String!
    $studentPhoneNumber: String!
    $studentEmail: String!
    $studentGender: String!
    $studentDateOfBirth: Time!
    $studentCountry: String!
    $studentState: String!
    $studentLga: String!
    $studentAddress: String!
    $studentPassportUrl: String
    $parentFirstName: String!
    $parentLastName: String!
    $parentMiddleName: String!
    $parentPhoneNumber: String!
    $parentEmail: String!
    $parentRelationship: String!
    $parentOccupation: Time!
    $parentCountry: String!
    $parentState: String!
    $parentLga: String!
    $parentAddress: String!
    $parentPassportUrl: String
    $programmeId: String!
    $schoolId: String!
    $previousSchoolName: String!
    $previousSchoolLeaveReason: String!
    $healthIssues: String!
    $docs: [AdmissionDocumentType!]!
  ) {
    createNewAdmissionApplication(
      input: {
        studentDetails: {
          firstName: $studentFirstName
          lastName: $studentLastName
          middleName: $studentMiddleName
          phoneNumber: $studentPhoneNumber
          email: $studentEmail
          gender: $studentGender
          dateOfBirth: $studentDateOfBirth
          country: $studentCountry
          state: $studentState
          lga: $studentLga
          address: $studentAddress
          passportUrl: $studentPassportUrl
        }
        parentDetails: {
          firstName: $parentFirstName
          lastName: $parentLastName
          middleName: $parentMiddleName
          phoneNumber: $parentPhoneNumber
          email: $parentEmail
          relationship: $parentRelationship
          occupation: $parentOccupation
          country: $parentCountry
          state: $parentState
          lga: $parentLga
          address: $parentAddress
          passportUrl: $parentPassportUrl
        }
        programmeId: $programmeId
        schoolId: $schoolId
        previousSchoolName: $previousSchoolName
        previousSchoolLeaveReason: $previousSchoolLeaveReason
        healthIssues: $healthIssues
        documents: [$docs]
      }
    ) {
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
