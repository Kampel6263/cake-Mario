import classNames from "classnames";
import classes from "./button.module.scss";

type ButtonProps = {
  name: string;
  type: "primary" | "secondary" | "default";
  rounded?: boolean;
  size?: "small";
  color?: "red" | "white";
};

const Button: React.FC<ButtonProps> = ({
  name,
  type,
  rounded,
  size,
  color,
}) => {
  return (
    <button
      className={classNames(
        classes.button,
        classes[type],
        rounded && classes.rounded,
        size && classes[size],
        color && classes[color]
      )}
    >
      {name}
    </button>
  );
};

export default Button;
