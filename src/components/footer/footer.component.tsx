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
              {/* <a> - це посилання, у нього я засунув фотку(img) і текст загорнув у span(можна було не загортати, потім поясню чому я так зробив) */}
              <a
                href={"https://www.facebook.com/profile.php?id=100014767145446"}
              >
                {/* шлях до фотки записуэмо ось так src={require("../../assets/img/intro.jpg")} */}
                {/* тут поки я ввів шлях до нашої титульної фотки, тому що там немає фотки фейсбуку, якщо ти її туди положив, то вкажи шлях до неї */}
                <img src={require("../../assets/img/intro.jpg")} alt="" />
                <span>Facebook</span>
              </a>

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
