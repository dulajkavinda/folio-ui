import * as React from "react";
import * as classnames from "classnames";
import Icon, { IconSymbol, IconSize } from "../icon/icon";

export type TechStackProps = {
  className?: string;
  icons: IconSymbol[];
  size: TechStackSize;
  disable?: IconSymbol[];
  type?: TechStackType;
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
    >
      <Icon size={getIconSize(size)} symbol={icon} />
    </div>
  ));
};

const TechStack: React.FC<TechStackProps> = (props) => {
  const { className, size, type, icons, disable } = props;
  const styles = classnames.default(
    "folio-tstack",
    `folio-tstack--${size}`,
    `folio-tstack--${type}`,
    className,
  );
  return (
    <div data-testid="folio-tstack" className={styles}>
      {renderIcons(icons, size, disable)}
    </div>
  );
};

TechStack.defaultProps = {
  disable: [],
  type: "grid",
  className: "",
};

export default TechStack;
