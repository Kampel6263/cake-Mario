import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Loader from "../../../components/loader/loader.component";
import { ImgType, TabsType } from "../albom.component";
import classes from "./slide.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
type SlideProps = {
  el: ImgType;
  activeTab: TabsType;
};

const Slide: React.FC<SlideProps> = ({ el, activeTab }) => {
  const [imgLoading, setImgLoading] = useState<boolean>(true);
  useEffect(() => {
    setImgLoading(true);
  }, [activeTab]);
  // console.log(imgLoading, "hhhh", el.number);
  return (
    <div className={classes.slide}>
      <LazyLoadImage
        className={imgLoading ? classes.blur : ""}
        alt={""}
        onLoad={() => setImgLoading(false)}
        onLoadStart={() => {
          console.log("load start");
        }}
        src={require("../../../assets/albom/" +
          activeTab.value +
          el.number +
          el.format)}
      />
      <div className={classNames(classes.loader, imgLoading && classes.active)}>
        <Loader />
      </div>
    </div>
  );
};

export default Slide;
