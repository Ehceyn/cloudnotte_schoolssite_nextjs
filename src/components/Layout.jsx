import React from "react";

function Layout({ children }) {
  return (
    <>
      <section className="max-w-[1536px] mx-auto h-full">{children}</section>
    </>
  );
}

export default Layout;
