import * as classes from "../styles/button.css.ts";
import type { FC } from "react";

export type ButtonType = "primary" | "danger" | "warning" | "transparent";

type HTMLButton = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">;
type ButtonProps = HTMLButton & {
  type: ButtonType;
  content?: string;
  value?: string[];
  style?: React.CSSProperties;
  submit?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { type, children, submit, content } = props;
  const classname =
    type === "primary"
      ? classes.primaryButton
      : type === "danger"
      ? classes.dangerButton
      : type === "warning"
      ? classes.warningButton
      : type === "transparent"
      ? classes.transparentButton
      : "";
  return (
    <button
      {...(props as HTMLButton)}
      type={submit ? "submit" : "button"}
      className={classname}
    >
      {children || content}
    </button>
  );
};

export default Button;
