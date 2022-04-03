import React from "react";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { GET_SCHOOL_REVIEWS } from "../../../../graphql/user/queries/getSchoolReviews";

function SchoolPersonalPageReview(props) {
  const { data, loading, error } = useQuery(GET_SCHOOL_REVIEWS, {
    variables: { schoolId: props.schoolId, limit: 100, afterId: "" },
  });
  loading && console.log("loading");
  if (error) return console.log(JSON.stringify(error, null, 2));

  console.log(data, "reviews");
  const reviews = data.getSchoolReviews;
  return (
    <article className="py-5 sm:py-9 px-0 xs:px-9 sm:px-12 sm:border-2 leading-8 ">
      <div className="flex justify-between">
        <p className="text-base font-bold  mb-2 capitalize">Reviews</p>
        <p
          className="text-sm font-bold text-[#5f9af2] pl-2 mb-5 sm:mb-12 capitalize cursor-pointer"
          onClick={props.onCallReviewSchoolModal}
        >
          Submit Review
        </p>
      </div>
      {reviews && reviews.length > 0 ? (
        reviews.map((review) => {
          return (
            <div className="mt-5 px-5 py-5 border rounded-md" key={review.id}>
              {/* <p className="flex text-xs md:text-sm">
          {Array(3)
            .fill()
            .map((_, index) => (
              <p className="pr-1" key={index}>
                <Image
                  width={18}
                  height={18}
                  src="/assets/icons/star-icon.svg"
                  className="w-3 h-3 sm:w-4 sm:h-4 "
                  alt=""
                />
              </p>
            ))}
        </p> */}
              <p className="mt-1 leading-7">{review.message}</p>
              <article className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <Image
                    width={32}
                    height={32}
                    src="/assets/images/school-profile-img.png"
                    className="w-8 h-8 object-contain"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="font-bold">{review.userFullname}</p>
                    <p className="text-sm">{review.category}</p>
                  </div>
                </div>
                {/* <p className="text-sm">27/5/2022</p> */}
              </article>
            </div>
          );
        })
      ) : (
        <div>There are no reviews for this School</div>
      )}
    </article>
  );
}

export default SchoolPersonalPageReview;
