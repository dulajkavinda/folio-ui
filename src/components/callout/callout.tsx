import React, { useState } from "react";
import classnames from "classnames";
import Icon from "../icon";
import { SizeTypes } from "../types";
import { getIconSizeFromSize } from "../../utilities/common";

export interface CalloutProps {
  icon: string;
  size?: SizeTypes;
  onClose?: () => void;
  classname?: string;
  customStyles?: {};
  children?: React.ReactNode;
}

const Callout: React.FC<CalloutProps> = (props) => {
  const [isClosed, setIsClosed] = useState(false);

  const {
    icon,
    onClose,
    classname,
    customStyles,
    children,
    size = "medium",
  } = props;

  const styles = classnames(
    "folio-callout",
    `folio-callout--${size}`,
    classname,
  );

  return (
    <div
      style={{ display: isClosed ? "none" : "", ...customStyles }}
      className={styles}
    >
      <div className="folio-callout-icon">{icon}</div>
      <div className="folio-callout-text">{children}</div>

      <div
        role="presentation"
        onClick={() => {
          setIsClosed(true);
          if (onClose) {
            onClose();
          }
        }}
        className="folio-callout-close"
      >
        <Icon symbol="close" size={getIconSizeFromSize(size)} />
      </div>
    </div>
  );
};

Callout.defaultProps = {
  classname: "",
  customStyles: {},
  onClose: () => {},
  children: null,
  size: "medium",
};

export default Callout;
