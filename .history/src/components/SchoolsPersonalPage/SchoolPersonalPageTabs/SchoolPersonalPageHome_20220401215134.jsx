import React from "react";

function SchoolPersonalPageHome(props) {
  return (
    <>
      {props.longDescription !== "" ? (
        <p
          className=" py-5 sm:py-14 px-0 xs:px-7 sm:px-10 sm:border-2 "
          dangerouslySetInnerHTML={{
            __html: `
             
              <span style="color: green;">
              </span>
              ${props.longDescription}
              
            `,
          }}
        ></p>
      ) : (
        <article
          dangerouslySetInnerHTML={{
            __html: `
            Our school is a co-educational and multi-cultural institution, admitting
          students both nationally and internationally. It is strictly boarding
          and has standard living, learning and recreational facilities. It is
          recognized and celebrated for the strength of its programs, its warm
          and nurturing culture, and its strong sense of community. We are an
          established school that has worked hard over a number of years to
          provide good education to all our students and provide them with
          opportunities to develop. Our commitment is to know every student as
          an individual. Through strong leadership supported by governance we
          seek to foster the principles of team spirit, responsibility, and care
          for others. 
          `,
          }}
        ></article>
      )}
    </>
  );
}

export default SchoolPersonalPageHome;
