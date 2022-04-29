import React from "react";
import classes from "./loader.module.scss";
import Spiner from "../../assets/animation2/Ripple-1s-220px.svg";
const Loader = () => {
  return (
    <div className={classes.loader}>
      <object type="image/svg+xml" data={Spiner}>
        svg-animation
      </object>
    </div>
  );
};

export default Loader;
