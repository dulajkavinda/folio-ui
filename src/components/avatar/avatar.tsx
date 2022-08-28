import * as React from "react";
import * as classnames from "classnames";

export type AvatarProps = {
  shape?: "circle" | "square";
  size?: AvatarSize;
  img: string;
  className?: string;
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
  const { size, shape, img, className } = props;

  const styles = classnames.default(
    "folio-avatar",
    `folio-avatar--${size}`,
    `folio-avatar--${shape}`,
    className,
  );

  return (
    <div className={styles}>
      <img alt="avatar" src={img} />
    </div>
  );
};

Avatar.defaultProps = {
  size: "5",
  shape: "circle",
  className: "",
};

export default Avatar;
