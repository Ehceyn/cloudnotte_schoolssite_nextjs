import { data } from "autoprefixer";
import React from "react";

function StudentsAcademicInfo({ data }) {
  console.log(data, "academic");

  return (
    <section className="w-full">
      <div className="flex h-fit items-center justify-center my-5">
        <h2 className="text-sm font-bold border-2 border-[#F44336] px-6 py-3">
          Academic Information
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row h-fit items-start justify-between w-full">
        <article className=" flex flex-col w-full justify-center">
          <article className="w-full  mb-3">
            <p className="text-sm font-bold">Class/Programme</p>
            <p>{data.class.name ? data.class.name : "N/A"}</p>
          </article>
          <article className="w-full  mb-3">
            <p className="text-sm font-bold">Name of Previous School</p>
            <p>{data.previousSchoolName ? data.previousSchoolName : "N/A"}</p>
          </article>
          <article className="w-full  mb-3">
            <p className="text-sm font-bold">
              Reason for leaving Previous School
            </p>
            <p>
              {data.previousSchoolLeaveReason
                ? data.previousSchoolLeaveReason
                : "N/A"}
            </p>
          </article>
          <article className="w-full  mb-3">
            <p className="text-sm font-bold">Any Health challeges?</p>
            <p>{data.healthIssues ? data.healthIssues : "N/A"}</p>
          </article>
        </article>
        <article className=" flex flex-col w-full justify-center">
          <article className="w-full  mb-3">
            <p className="text-sm font-bold mb-2">Documents</p>
            {data.documents?.map((doc, index) => {
              return (
                <article className="mb-2" key={index}>
                  <p>{doc.name}</p>
                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#F44336] cursor-pointer"
                  >
                    View docs
                  </a>
                </article>
              );
            })}
          </article>
        </article>
      </div>
    </section>
  );
}

export default StudentsAcademicInfo;
