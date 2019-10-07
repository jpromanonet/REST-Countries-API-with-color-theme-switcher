import React from "react";
import Numeral from "numeral";
import { Link } from "react-router-dom";
import styles from "./CountryItem.module.scss";

const CountryItem = ({ capital, darkMode, name, population, region, flag }) => {
  // console.log("rest", rest);
  return (
    <Link to={`/${name}`}>
      <figure
        className={`${styles.countryItem} ${
          darkMode ? `dark darkElements` : `light lightElements`
        }`}
      >
        <img src={flag} alt={`${name} flag`} />
        <figcaption className={styles.textContainer}>
          <h2>{name}</h2>
          <div>
            Population : <span>{Numeral(population).format(0, 0)}</span>
          </div>
          <div>
            Region : <span>{region}</span>
          </div>
          <div>
            Capital : <span>{capital}</span>
          </div>
        </figcaption>
      </figure>
    </Link>
    /*   <div>hi</div> */
  );
};

export default CountryItem;
