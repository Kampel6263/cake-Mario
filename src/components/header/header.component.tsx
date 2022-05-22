import Button from "../button/button.component";
import classes from "./header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div className={classes.content}>
          {/* <div className={classes.logo}>SweetDream</div> */}
          <img src={require("../../assets/footerimg/SD.png")} alt="" width="120" height="43" />
          <div className={classes.navigation}>
            <div>Себе</div>
            <div>Меню</div>
            <a href="https://www.google.com/maps/dir//49.4444157,24.0669822/@49.44365,24.0662212,17z/data=!4m2!4m1!3e0" target="_blank">location</a>
            <Button name="Contact us" type="primary" rounded />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
