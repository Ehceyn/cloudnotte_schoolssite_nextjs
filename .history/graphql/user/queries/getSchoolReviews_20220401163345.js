import { gql } from "@apollo/client";

export const GET_SCHOOL_REVIEWS = gql`
  query GetSechoolReviews($afterId: String!, $limit: Int!, $schoolId: String) {
    getSchoolReviews(
      pagination: { afterId: $afterId, limit: $limit }
      schoolId: $schoolId
    ) {
      id
      userFullname
      category
      message
      starRating
    }
  }
`;
