import React from "react";

function Layout({ children }) {
  return (
    <>
      <section className="max-w-4/5 h-full">{children}</section>
    </>
  );
}

export default Layout;
