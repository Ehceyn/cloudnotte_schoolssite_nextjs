import React from "react";
import DOMPurify from "isomorphic-dompurify";

function SchoolPersonalPageHome(props) {
  function htmlDecode(content) {
    var doc =
      process.browser && new DOMParser().parseFromString(content, "text/html");
    return process.browser && doc.documentElement.textContent;
  }

  return (
    <>
      <article className="py-5 sm:py-14 px-0 xs:px-7 sm:px-10 sm:border-2 ">
        <p
          dangerouslySetInnerHTML={{
            __html: htmlDecode(DOMPurify.sanitize(props?.longDescription)),
          }}
        ></p>
        <p
          className={`${props.longDescription ? "hidden" : "flex"}`}
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
