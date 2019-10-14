import React from "react";

const Loading = ({ darkMode, homePage }) => (
  <img
    className="loadingGif"
    src={`./assets/pics/loading--${darkMode ? `dark` : `light`}.svg`}
    alt="loading"
  />
);
export default Loading;
