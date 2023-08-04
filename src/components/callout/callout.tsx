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
  ariaLabel?: string | undefined;
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
    ariaLabel,
  } = props;

  const styles = classnames(
    "folio-callout",
    `folio-callout--${size}`,
    classname,
  );

  return (
    <section
      style={{ display: isClosed ? "none" : "", ...customStyles }}
      className={styles}
    >
      <div className="folio-callout-icon">{icon}</div>
      <div className="folio-callout-text">{children}</div>

      <div
        role="button"
        onClick={() => {
          setIsClosed(true);
          if (onClose) {
            onClose();
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setIsClosed(true);
            if (onClose) {
              onClose();
            }
          }
        }}
        className="folio-callout-close"
        tabIndex={0}
        aria-label={ariaLabel}
      >
        <Icon symbol="close" size={getIconSizeFromSize(size)} />
      </div>
    </section>
  );
};

Callout.defaultProps = {
  classname: "",
  customStyles: {},
  onClose: () => {},
  children: null,
  size: "medium",
  ariaLabel: undefined,
};

export default Callout;
