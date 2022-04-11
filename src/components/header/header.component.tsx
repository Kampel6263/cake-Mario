import Button from "../button/button.component";
import classes from "./header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.logo}>Miodis</div>
          <div className={classes.navigation}>
            <div className={classes.nav}>About</div>
            <div className={classes.nav}>Menu</div>
            <div className={classes.nav}>Location</div>
            <Button name="Contact us" type="primary" rounded />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
