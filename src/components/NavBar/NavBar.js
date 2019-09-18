import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = ({ darkMode, page, appModeChanger }) => (
  <>
    <nav
      className={`${styles.container} ${styles.navBar} ${darkMode ? styles.dark : styles.light}`}
    >
      <span className={styles.bold}>Where in the world?</span>
      <button
        className={`${styles.semiBold} ${
          darkMode ? styles.dark : styles.light
        }`}
        onClick={appModeChanger}
      >
        {darkMode ? (
          <>
            <i className="fas fa-moon"></i> Light Mode
          </>
        ) : (
          <>
            <i className="far fa-moon"></i> Dark Mode
          </>
        )}
      </button>
    </nav>
  </>
);

export default NavBar;
