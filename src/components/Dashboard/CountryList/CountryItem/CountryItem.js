import React from "react";
import Numeral from "numeral";
import { Link } from "react-router-dom";
import styles from "./CountryItem.module.scss";

const CountryItem = ({
  capital,
  alpha2Code,
  darkMode,
  name,
  population,
  region,
  flag,
  homePage
}) => {
  // console.log("rest", rest);
  return (
    <Link to={`${homePage + name}`}>
      <figure
        className={`${styles.countryItem} ${
          darkMode ? `dark darkElements` : `light lightElements`
        }`}
      >
        <div
          className={styles.background}
          style={{
            background: `url(https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/${alpha2Code.toLowerCase()}.svg)`
          }}
        ></div>
        <figcaption className={styles.textContainer}>
          <h2>{name}</h2>
          <div>
            Population :
            <span
              className={darkMode ? styles.darkCaption : styles.lightCaption}
            >
              {Numeral(population).format(0, 0)}
            </span>
          </div>
          <div>
            Region :
            <span
              className={darkMode ? styles.darkCaption : styles.lightCaption}
            >
              {region}
            </span>
          </div>
          <div>
            Capital :
            <span
              className={darkMode ? styles.darkCaption : styles.lightCaption}
            >
              {capital || "-"}
            </span>
          </div>
        </figcaption>
      </figure>
    </Link>
    /*   <div>hi</div> */
  );
};

export default CountryItem;
