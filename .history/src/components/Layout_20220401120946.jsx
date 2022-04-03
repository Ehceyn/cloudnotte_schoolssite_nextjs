import React from "react";

function Layout({ children }) {
  return (
    <>
      <section
        className="2xl:w-[1536px] 2xl:max-w-[1536px] 2xl:px-auto h-full"
        dangerouslySetInnerHTML={{ __html: "HTML" }}
      >
        {children}
      </section>
    </>
  );
}

export default Layout;
