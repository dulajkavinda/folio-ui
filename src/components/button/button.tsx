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
}

const Button: React.FunctionComponent<Props> = (props: Props) => {
  const { onClick, color, size, disabled, children, icon, id } = props;

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
  );

  return (
    <button
      disabled={disabled}
      type="button"
      id={id}
      onClick={buttonPress}
      className={styles}
    >
      {icon && <div className="folio-button__icon">{icon}</div>}
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
};

export default Button;
