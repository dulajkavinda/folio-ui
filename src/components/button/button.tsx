import * as React from "react";
import * as classnames from "classnames";

import { SizeTypes, ColorTypesDL } from "../types";

export interface Props {
  id?: string;
  onClick?: Function;
  color?: ColorTypesDL;
  size?: SizeTypes;
  disabled?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  customStyles?: React.CSSProperties;
  classname?: string;
}

const Button: React.FunctionComponent<Props> = (props: Props) => {
  const {
    onClick,
    color,
    size,
    disabled,
    children,
    icon,
    id,
    customStyles,
    classname,
  } = props;

  const buttonPress = (e: React.MouseEvent) => {
    if (!onClick) return;
    onClick(e, props);
  };

  const styles = classnames.default(
    "folio-button",
    `folio-button--${color}`,
    `folio-button--${size}`,
    {
      "folio-button--disabled": disabled,
    },
    classname,
  );

  return (
    <button
      disabled={disabled}
      type="button"
      id={id}
      onClick={buttonPress}
      className={styles}
      style={{ ...customStyles }}
      data-testid="folio-button"
    >
      {icon && <div className="folio-button--icon">{icon}</div>}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "light",
  size: "medium",
  disabled: false,
  id: "0",
  onClick: () => null,
  icon: null,
  customStyles: {},
  classname: "",
};

export default Button;
