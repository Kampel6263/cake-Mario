import classNames from "classnames";
import { useState } from "react";
import Slick from "react-slick";
import Button from "../../components/button/button.component";
import classes from "./albom.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ImgType = {
  number: string;
  format: ".jpg" | ".png";
};

type TabsType = {
  name: string;
  value: string;
  img: ImgType[];
};

const Albom = () => {
  const tabs: TabsType[] = [
    {
      name: "Торти",
      value: "tort",
      img: [
        {
          number: "1",
          format: ".jpg",
        },
        {
          number: "2",
          format: ".jpg",
        },
        {
          number: "3",
          format: ".jpg",
        },
      ],
    },
    {
      name: "Зефір",
      value: "zefir",
      img: [
        {
          number: "1",
          format: ".jpg",
        },
        {
          number: "2",
          format: ".jpg",
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState<TabsType>(tabs[0]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={classes.albom}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.tabs}>
            {tabs.map((el, i) => (
              <div
                className={classNames(
                  classes.tab,
                  el.value === activeTab.value ? classes.active : ""
                )}
                key={el.value + i}
                onClick={() => setActiveTab(el)}
              >
                <Button name={el.name} type={"secondary"} size={"small"} />
              </div>
            ))}
          </div>
          <div className={classes.slider}>
            <Slick className={classes.mainSlider} {...settings}>
              {activeTab.img.map((el, i) => (
                <div key={el.number + i}>
                  <img
                    src={require("../../assets/albom/" +
                      activeTab.value +
                      el.number +
                      el.format)}
                    alt=""
                  />
                </div>
              ))}
            </Slick>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Albom;
