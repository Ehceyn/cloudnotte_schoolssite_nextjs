import React, { useState, useEffect } from "react";
import DOMPurify from "isomorphic-dompurify";

function SchoolPersonalPageHome(props) {
  const [newLongDescription, setNewLongDescription] = useState();

  // PArse text from server to html
  function htmlDecode(content) {
    var doc =
      process.browser && new DOMParser().parseFromString(content, "text/html");
    return process.browser && doc.documentElement.textContent;
  }

  useEffect(() => {
    if (props.longDescription) {
      setNewLongDescription(
        htmlDecode(DOMPurify.sanitize(props.longDescription))
      );
    }
  }, [props.longDescription]);
  return (
    <>
      <article className="py-5 sm:py-14 px-0 xs:px-7 sm:px-10 sm:border-2 ">
        <p
          className={`${newLongDescription ? "flex" : "hidden"}`}
          dangerouslySetInnerHTML={{
            __html: newLongDescription,
          }}
        ></p>
        <p
          className={`${newLongDescription ? "hidden" : "flex"}`}
          dangerouslySetInnerHTML={{
            __html: `Welcome to ${props.name}, We are a thriving educational community of
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
