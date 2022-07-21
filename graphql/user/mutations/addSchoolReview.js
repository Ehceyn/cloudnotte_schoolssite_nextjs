import { gql } from "@apollo/client";

export const ADD_NEW_SCHOOL_REVIEW = gql`
  mutation AddSchoolReview($reviewVar: NewSchoolReview!) {
    addSchoolReview(input: $reviewVar) {
      id
      userFullname
      category
      message
      starRating
    }
  }
`;
