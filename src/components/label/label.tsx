import React from "react";
import * as classnames from "classnames";
import { ColorTypesDL, SizeTypes } from "../types";

export type LabelProps = {
  classname?: string;
  children: React.ReactNode;
  color?: ColorTypesDL;
  size?: SizeTypes;
};

const Label: React.FC<LabelProps> = (props) => {
  const { classname, children, color, size } = props;

  const styles = classnames.default(
    "folio-label",
    `folio-label--${color}`,
    `folio-label--${size}`,
    classname,
  );

  return (
    <div data-testid="folio-label" className={styles}>
      {children}
    </div>
  );
};

Label.defaultProps = {
  classname: "",
  color: "light",
  size: "medium",
};

export default Label;
