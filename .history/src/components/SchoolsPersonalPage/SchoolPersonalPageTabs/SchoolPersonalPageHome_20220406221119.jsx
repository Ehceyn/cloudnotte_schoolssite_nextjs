import React from "react";
import DOMPurify from "dompurify";

function SchoolPersonalPageHome(props) {
  let cleanDesc = DOMPurify.sanitize(props.longDescription);

  return (
    <>
      <article className="py-5 sm:py-14 px-0 xs:px-7 sm:px-10 sm:border-2 ">
        <p
          dangerouslySetInnerHTML={{
            __html: cleanDesc,
          }}
        ></p>
        <p
          className={`${cleanDesc ? "hidden" : "flex"}`}
          dangerouslySetInnerHTML={{
            __html: `  Welcome to ${props.name}, We are a thriving educational community of
          students whose parents and guardians have made a decision for their
          children/wards to study here for specific reasons: well-trained staff,
          an intensive curriculum, and a stimulating learning environment.`,
          }}
        ></p>
      </article>
    </>
  );
}

export default SchoolPersonalPageHome;
