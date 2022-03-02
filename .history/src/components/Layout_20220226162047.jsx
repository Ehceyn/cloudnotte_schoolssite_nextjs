import React from "react";
import styles from "../../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <section className={styles.layout}>{children}</section>;
    </>
  );
}

export default Layout;
