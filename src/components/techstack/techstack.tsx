import React from "react";
import * as classnames from "classnames";
import Icon, { IconSymbol, IconSize } from "../icon/icon";

export type TechStackProps = {
  icons: IconSymbol[];
  size: TechStackSize;
  disable?: IconSymbol[];
  type?: TechStackType;
  className?: string;
  customStyles?: React.CSSProperties;
};

export type TechStackSize = "medium" | "large" | "small";

export type TechStackType = "grid" | "bar";

const getIconSize = (size: TechStackSize): IconSize => {
  switch (size) {
    case "medium":
      return "4";
    case "large":
      return "7";
    case "small":
      return "2";
    default:
      return "4";
  }
};

const renderIcons = (
  icons: IconSymbol[],
  size: TechStackSize,
  disable?: IconSymbol[],
) => {
  return icons.map((icon: IconSymbol, index: number) => (
    <div
      key={icon}
      className={classnames.default(
        "folio-tstack-item",
        `folio-tstack-item--${size}`,
        `folio-tstack-item-icon--${index}`,
        {
          "folio-tstack-item--disabled": disable?.includes(icon),
        },
      )}
      data-testid={`folio-tstack-item--${icon}`}
    >
      <Icon size={getIconSize(size)} symbol={icon} />
    </div>
  ));
};

const TechStack: React.FC<TechStackProps> = (props) => {
  const { size, type, icons, disable, customStyles, className } = props;
  const styles = classnames.default(
    "folio-tstack",
    `folio-tstack--${size}`,
    `folio-tstack--${type}`,
    className,
  );
  return (
    <div
      data-testid="folio-tstack"
      style={{ ...customStyles }}
      className={styles}
    >
      {renderIcons(icons, size, disable)}
    </div>
  );
};

TechStack.defaultProps = {
  disable: [],
  type: "grid",
  className: "",
  customStyles: {},
};

export default TechStack;
