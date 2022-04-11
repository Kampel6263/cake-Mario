import classNames from "classnames";
import classes from "./button.module.scss";

type ButtonProps = {
  name: string;
  type: "primary" | "secondary" | "default";
  rounded?: boolean;
  size?: "small";
};

const Button: React.FC<ButtonProps> = ({ name, type, rounded, size }) => {
  return (
    <button
      className={classNames(
        classes.button,
        classes[type],
        rounded && classes.rounded,
        size && classes[size]
      )}
    >
      {name}
    </button>
  );
};

export default Button;
