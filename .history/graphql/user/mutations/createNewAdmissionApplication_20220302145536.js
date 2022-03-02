import { gql } from "@apollo/client";

export const CREATE_NEW_ADMISSION_APPLICATION = gql`
  mutation CreateNewAdmissionApplication() {
    createNewAdmissionApplication(
      input: {
        studentDetails: {
          firstName: "60cb43bb3d161c3740uurui"
          lastName: "jaka"
          middleName: "School"
          phoneNumber: "String"
          email: "Nigeria"
          gender: "Nigeria"
          dateOfBirth: "2002-04-12"
          country: "asa"
          state: "moto!"
          lga: "String!"
          address: "moto"
          passportUrl: "No 33 Eliozu"
        }
        parentDetails: {
          firstName: "60cb43bb3d161c3740uurui"
          lastName: "jaka"
          middleName: "School"
          phoneNumber: "String"
          email: "Nigeria"
          relationship: "Nigeria"
          occupation: "moto"
          country: "asa"
          state: "moto!"
          lga: "String!"
          address: "moto"
          passportUrl: "fgghhh"
        }
        programmeId: "dddjjj"
        schoolId: "hh"
        previousSchoolName: "dhh"
        previousSchoolLeaveReason: "shhhh"
        healthIssues: "ggggs"
        documents: { name: "dhhd", fileUrl: "djhd", fileType: PDF }
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
