import classNames from "classnames";
import { useState } from "react";
import Slick from "react-slick";
import Button from "../../components/button/button.component";
import classes from "./albom.module.scss";

import Spiner from "../../assets/animation2/Ripple-1s-220px.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./slide/slide.component";
import Loader from "../../components/loader/loader.component";

export type ImgType = {
  number: string;
  format: ".jpg" | ".png";
};

export type TabsType = {
  name: string;
  value: string;
  img: ImgType[];
};

const Arrow: React.FC<{
  direction: "left" | "right";
  onClick?: () => void;
}> = ({ direction, onClick }) => {
  return (
    <button
      className={classNames(classes.slickButton, classes[direction])}
      onClick={onClick}
    >
      {direction === "left" ? "❮" : "❯"}
    </button>
  );
};

const Albom = () => {
  const tabs: TabsType[] = [
    {
      name: "Т",
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
        {
          number: "3",
          format: ".jpg",
        },
        {
          number: "4",
          format: ".jpg",
        },
        {
          number: "5",
          format: ".jpg",
        },
        {
          number: "6",
          format: ".jpg",
        },
        {
          number: "7",
          format: ".jpg",
        },
        {
          number: "8",
          format: ".jpg",
        },
        {
          number: "9",
          format: ".jpg",
        },
      ],
    },
    {
      name: "Рулети",
      value: "rulet",
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
      name: "Кенді-бар",
      value: "kendibar",
      img: [
        {
          number: "1",
          format: ".jpg",
        },
        
      ],
    },
    {
      name: "Пряники",
      value: "pjanuku",
      img: [
        {
          number: "1",
          format: ".jpg",
        },
        
      ],
    },
    {
      name: "Шоколад",
      value: "shokolad",
      img: [
        {
          number: "1",
          format: ".jpg",
        },
        
      ],
    },
    {
      name: "Макаронс",
      value: "makarons",
      img: [
        {
          number: "1",
          format: ".jpg",
        },
        
      ],
    },
    {
      name: "    Інше",
      value: "inshe",
      img: [
        {
          number: "1",
          format: ".jpg",
        },
        
      ],
    },
  ];

  const [activeSlide, setActiveSlide] = useState<number | null>(0);

  const [activeTab, setActiveTab] = useState<TabsType>(tabs[0]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,

    appendDots: (dots: any) => (
      <div style={{ marginBottom: "20px" }}>
        <ul className={classes.dots}> {dots} </ul>
      </div>
    ),
  };
  console.log("render");
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
                onClick={() => activeTab.value !== el.value && setActiveTab(el)}
              >
                <Button name={el.name} type={"secondary"} size={"small"} />
              </div>
            ))}
          </div>
          <div className={classes.slider}>
            <Slick className={classes.mainSlider} {...settings}>
              {activeTab.img.map((el, i) => (
                <Slide el={el} key={el.number + i} activeTab={activeTab} />
              ))}
            </Slick>
            <div className={classes.loader}>
              <Loader />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Albom;
