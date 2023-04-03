import React from "react";
import classnames from "classnames";
import { SizeTypes } from "../types";

export interface ITooltipProps {
  description: string;
  direction?: Direction;
  classname?: string;
  size?: SizeTypes;
  customStyles?: {};
  children?: React.ReactNode;
}

export type Direction = "top" | "right";

const Tooltip: React.FC<ITooltipProps> = (props) => {
  const { description, direction, children, classname, size, customStyles } =
    props;

  const styles = classnames("folio-tooltip", direction, size, classname);

  return (
    <div style={{ ...customStyles }} className={styles}>
      {children}
      <div className="description">{description}</div>
    </div>
  );
};

Tooltip.defaultProps = {
  customStyles: {},
  classname: "",
  direction: "top",
  size: "medium",
  children: null,
};

export default Tooltip;
