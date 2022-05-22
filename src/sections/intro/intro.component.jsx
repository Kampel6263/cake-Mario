// import React from "react";
import classes from "./intro.module.scss";
import IntroImg from '../../assets/img/intro2.jpg'
import Button from "../../components/button/button.component";

const Intro = () => {
  return <div className={classes.intro}>
    <div className={classes.background}>
      <img src={IntroImg} alt="" />
    </div>
    <div className={classes.content}>
      <h1>Sweet Dreams</h1>
      <p>Все готується з Любов'ю, та з якісних інгредієнтів. Сьогодні Солодка Мрія стає рєальністю.</p>
      <div className={classes.buttons}>
        <Button name="Con. us" type="secondary"/>
        <Button name="Order Now" type="default"/>
      </div>
    </div>
  </div>;
};
 
export default Intro;
