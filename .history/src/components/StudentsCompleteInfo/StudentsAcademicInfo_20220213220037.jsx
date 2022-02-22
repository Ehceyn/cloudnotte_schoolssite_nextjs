import React from "react";

function StudentsAcademicInfo() {
  return (
    <section className="w-full">
      <div className="flex h-fit items-center justify-center my-5">
        <p className="text-sm font-bold border-2 border-[#F44336] px-6 py-3">
          Academic Information
        </p>
      </div>
      <div className="flex flex-col sm:flex-row h-fit items-start justify-between w-full">
        <article className=" flex flex-col w-full justify-center">
          <article className="w-full  mb-3">
            <p className="text-sm font-bold">Class/Programme</p>
            <p>Jss1</p>
          </article>
          <article className="w-full  mb-3">
            <p className="text-sm font-bold">Name of Previous School</p>
            <p>Learners academy High school</p>
          </article>
          <article className="w-full  mb-3">
            <p className="text-sm font-bold">
              Reason for leaving Previous School
            </p>
            <p>N/A</p>
          </article>
          <article className="w-full  mb-3">
            <p className="text-sm font-bold">Any Health challeges?</p>
            <p>N/A</p>
          </article>
        </article>
        <article className=" flex flex-col w-full justify-center">
          <article className="w-full  mb-3">
            <p className="text-sm font-bold mb-2">Documents</p>
            <article className="mb-2">
              <p>First School leaving certificate</p>
              <p className="text-xs text-[#F44336] cursor-pointer">View docs</p>
            </article>
            <article className="mb-2">
              <p>O'level Result</p>
              <p className="text-xs text-[#F44336] cursor-pointer">View docs</p>
            </article>
            <article className="mb-2">
              <p>Health Report</p>
              <p className="text-xs text-[#F44336] cursor-pointer">View docs</p>
            </article>
          </article>
        </article>
      </div>
    </section>
  );
}

export default StudentsAcademicInfo;
