import React from "react";

function SchoolPersonalPageContact(props) {
  return (
    <article className="py-5 sm:py-14 px-0 xs:px-9 sm:px-12 sm:border-2 leading-8">
      <p className="text-base font-bold pl-2 mb-2 capitalize">
        Contact Information
      </p>
      <hr />
      <div className="pl-4">
        <p className="text-base flex my-3 align-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 object-contain"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#f44336"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <p className="flex flex-wrap w-52 sm:w-full">{props.phoneNumber}</p>
        </p>
        <p className="text-base flex my-3 align-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 object-contain"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#f44336"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <p className="flex flex-wrap w-[280px] sm:w-full break-words">
            {props.email}
          </p>
        </p>
        <p className="text-base flex my-3 align-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 object-contain"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#f44336"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
          <p className="flex flex-wrap w-52 sm:w-full">
            {"www.cloudnotte.com/schools/" + props.prefix}
          </p>
        </p>
      </div>
      <p className="text-base font-bold pl-2 pt-5 mb-2 capitalize">Address</p>
      <hr />
      <div className="pl-4">
        <p className="text-base flex align-center my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 object-contain"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#f44336"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>

          <p className="flex flex-wrap w-52 sm:w-full">{props.address}</p>
        </p>
      </div>
    </article>
  );
}

export default SchoolPersonalPageContact;
