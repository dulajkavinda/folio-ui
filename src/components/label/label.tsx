import React from "react";
import * as classnames from "classnames";
import { ColorTypesDL, SizeTypes } from "../types";

export type LabelProps = {
  children: React.ReactNode;
  color?: ColorTypesDL;
  size?: SizeTypes;
  classname?: string;
  customStyles?: React.CSSProperties;
};

const Label: React.FC<LabelProps> = (props) => {
  const { children, color, size, classname, customStyles } = props;

  const styles = classnames.default(
    "folio-label",
    `folio-label--${color}`,
    `folio-label--${size}`,
    classname,
  );

  return (
    <div
      data-testid="folio-label"
      className={styles}
      style={{ ...customStyles }}
      aria-label="Label"
    >
      {children}
    </div>
  );
};

Label.defaultProps = {
  classname: "",
  color: "light",
  size: "medium",
  customStyles: {},
};

export default Label;
