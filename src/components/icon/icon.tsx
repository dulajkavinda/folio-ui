import * as React from "react";
import * as classnames from "classnames";

import GraphQL from "../../assets/icons/graphql.svg";
import Github from "../../assets/icons/github.svg";
import Link from "../../assets/icons/link.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Email from "../../assets/icons/email.svg";
import Dark from "../../assets/icons/dark.svg";
import { ColorTypesDL } from "../../types";

export type IconSize =
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

export type IconSymbol =
  | "graphql"
  | "github"
  | "link"
  | "linkedin"
  | "email"
  | "dark";

export interface Props {
  id?: string;
  className?: string;
  size?: IconSize;
  color?: ColorTypesDL;
  symbol: IconSymbol;
}

const images = {
  graphql: GraphQL,
  github: Github,
  link: Link,
  linkedin: LinkedIn,
  email: Email,
  dark: Dark,
};

const Icon: React.FC<Props> = (props) => {
  const { id, className, size, color, symbol } = props;
  const styles = classnames.default(
    "folio-icon",
    `folio-icon--${size}`,
    `folio-icon--${color}`,
    className,
  );

  const Image = images[symbol];

  return <img alt={symbol} id={id} className={styles} src={Image} />;
};

Icon.defaultProps = {
  size: "6",
  color: "light",
  className: "",
  id: "",
};

export default Icon;
