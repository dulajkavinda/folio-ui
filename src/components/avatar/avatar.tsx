import * as React from "react";
import * as classnames from "classnames";

export type AvatarProps = {
  img: string;
  shape?: "circle" | "square";
  size?: AvatarSize;
  className?: string;
  customStyle?: React.CSSProperties;
  alt?: string;
  ariaLabel?: string | undefined;
};

export type AvatarSize =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "15"
  | "20"
  | "25"
  | "30";

const Avatar: React.FC<AvatarProps> = (props) => {
  const { size, shape, img, className, customStyle, ariaLabel, alt } = props;

  const styles = classnames.default(
    "folio-avatar",
    `folio-avatar--${size}`,
    `folio-avatar--${shape}`,
    className,
  );

  return (
    <div
      role="img"
      data-testid="folio-avatar"
      aria-label={ariaLabel || undefined}
      style={customStyle}
      className={styles}
    >
      <img alt={ariaLabel} src={img} />
    </div>
  );
};

Avatar.defaultProps = {
  size: "5",
  shape: "circle",
  className: "",
  customStyle: {},
  alt: undefined,
  ariaLabel: undefined,
};

export default Avatar;
