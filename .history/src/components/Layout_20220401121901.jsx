import React from "react";

function Layout(props) {
  return (
    <>
      <section className="2xl:w-[1536px] 2xl:max-w-[1536px] 2xl:px-auto h-full">
        {props.html}{" "}
      </section>
    </>
  );
}

export default Layout;
