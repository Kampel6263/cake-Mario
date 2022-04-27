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
              <div>About</div>
              <div>Menu</div>
              <div>Location</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
