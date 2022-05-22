
import React from "react";
import Button from "../button/button.component";
import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <h2>Some text in footer</h2>
        <div className={classes.buttons}>
          <Button name="Contact us" type="primary" />
          <Button name="Purchase now" type="default" color="red" />
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.container}>
          <div className={classes.content}>
            <div>© 2022 All right reserved</div>

            <div className={classes.nav}>
              <a href="http://www.facebook.com/profile.php?id=100016606356671" target="_blank" >
               <img src={require("../../assets/footerimg/Facebook.jpg")} alt="" width="45" height="45" />
              </a>
              <a href="https://instagram.com/stories/irakozhomina/2742200425757592619?utm_medium=share_sheet" target="_blank" >
              <img src={require("../../assets/footerimg/Instagram.jpg")} alt="" width="45" height="45" /> 
              </a>
              <a href="https://www.google.com/maps/dir//49.4444157,24.0669822/@49.44365,24.0662212,17z/data=!4m2!4m1!3e0" target="_blank" >
              <img src={require("../../assets/footerimg/map.JPG")} alt="" width="75" height="45" />  
              </a>
            </div>
          </div>
          </div>
        </div>
    </div>
  );
};

export default Footer;
