import React from "react";
import { Link } from "react-router-dom";
import styles from "./CountryItem.module.scss";

const CountryItem = ({ name, population, region, flag }) => {
  // console.log("rest", rest);
  return (
    <Link to={`/${name}`}>
      <div className={`${styles.countryItem}`}>
        <img src={flag} alt={`${name} flag`} />
        <div>Name:{name}</div>
        <div>Population:{population}</div>
        <div>Region:{region}</div>
      </div>
    </Link>
    /*   <div>hi</div> */
  );
};

export default CountryItem;
