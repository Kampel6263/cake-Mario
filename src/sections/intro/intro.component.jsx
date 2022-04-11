// import React from "react";
import classes from "./intro.module.scss";
import IntroImg from '../../assets/img/intro.jpg'
import Button from "../../components/button/button.component";

const Intro = () => {
  return <div className={classes.intro}>
    <div className={classes.background}>
      <img src={IntroImg} alt="" />
    </div>
    <div className={classes.content}>
      <h1>Miodis cakes are baked in heaven</h1>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa</p>
      <div className={classes.buttons}>
        <Button name="Contact us" type="secondary"/>
        <Button name="Order Now" type="default"/>
      </div>
    </div>
  </div>;
};
 
export default Intro;
