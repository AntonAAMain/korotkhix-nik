import cn from "classnames";

import cls from "./Button.module.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?:
    | "outlined-dark-1"
    | "outlined-dark-2"
    | "outlined-orange"
    | "outlined-orange-light";
}

export const Button = ({ ...props }: Props) => {
  return (
    <button className={cn(cls.button, props.className)}>
      {props.children}
    </button>
  );
};
