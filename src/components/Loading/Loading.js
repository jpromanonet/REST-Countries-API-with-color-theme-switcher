import React from "react";

const Loading = ({ darkMode ,homePage}) => (
  <img
    className="loadingGif"
    src={`${homePage===`/`?`../../../`:`https://raw.githubusercontent.com/sinamoraddar/REST-Countries-API-with-color-theme-switcher/gh-pages/assets/pics/`}assets/pics/loading--${darkMode ? `dark` : `light`}.svg`}
    alt="loading"
  />
);
export default Loading;
