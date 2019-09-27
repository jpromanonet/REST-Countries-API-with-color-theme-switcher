import React from "react";
import { Link } from "react-router-dom";
import styles from "./CountryItem.module.scss";

const CountryItem = ({ name }) => {
  // console.log("rest", rest);
  return (
    /*   <div>hi</div> */
    <Link to={`/${name}`}>
      <div>this is {name}</div>
    </Link>
  );
};

export default CountryItem;
