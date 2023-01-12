import * as React from "react";
import * as classnames from "classnames";

import GraphQL from "../../assets/icons/graphql.svg";
import Github from "../../assets/icons/github.svg";
import Link from "../../assets/icons/link.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";
import Email from "../../assets/icons/email.svg";
import Dark from "../../assets/icons/dark.svg";
import Read from "../../assets/icons/read.svg";
import Search from "../../assets/icons/search.svg";
import Close from "../../assets/icons/close.svg";
import Eye from "../../assets/icons/eye.svg";
import Resume from "../../assets/icons/resume.svg";
import Projects from "../../assets/icons/projects.svg";
import Blog from "../../assets/icons/blog.svg";
import Career from "../../assets/icons/career.svg";
import Contact from "../../assets/icons/contact.svg";
import Source from "../../assets/icons/source.svg";
import RSS from "../../assets/icons/rss.svg";
import Uses from "../../assets/icons/uses.svg";
import Credits from "../../assets/icons/credits.svg";
import Changelog from "../../assets/icons/changelog.svg";
import Dashboard from "../../assets/icons/dashboard.svg";
import Sunny from "../../assets/icons/sunny.svg";
import Account from "../../assets/icons/account.svg";
import Home from "../../assets/icons/home.svg";
import Dots from "../../assets/icons/dots.svg";
import DotsCircle from "../../assets/icons/dots-circle.svg";
import DotsGrid from "../../assets/icons/dots-grid.svg";
import DotsHexagon from "../../assets/icons/dots-hexagon.svg";
import DotsSquare from "../../assets/icons/dots-square.svg";
import DotsTriangle from "../../assets/icons/dots-triangle.svg";
import DotsVertical from "../../assets/icons/dots-vertical.svg";
import Send from "../../assets/icons/send.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Scss from "../../assets/icons/scss.svg";
import Docker from "../../assets/icons/docker.svg";
import Python from "../../assets/icons/python.svg";
import ReactJS from "../../assets/icons/react.svg";
import NextJS from "../../assets/icons/nextjs.svg";
import Node from "../../assets/icons/nodejs.svg";
import Mocha from "../../assets/icons/mocha.svg";
import Jest from "../../assets/icons/jest.svg";
import Aws from "../../assets/icons/aws.svg";

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
  | "dark"
  | "read"
  | "search"
  | "close"
  | "eye"
  | "resume"
  | "projects"
  | "blog"
  | "career"
  | "contact"
  | "source"
  | "rss"
  | "uses"
  | "credits"
  | "changelog"
  | "dashboard"
  | "sunny"
  | "account"
  | "home"
  | "dots"
  | "dotscircle"
  | "dotsgrid"
  | "dotshexagon"
  | "dotssquare"
  | "dotstriangle"
  | "dotsvertical"
  | "send"
  | "youtube"
  | "scss"
  | "docker"
  | "python"
  | "reactjs"
  | "nextjs"
  | "node"
  | "mocha"
  | "jest"
  | "aws";

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
  read: Read,
  search: Search,
  close: Close,
  eye: Eye,
  resume: Resume,
  projects: Projects,
  blog: Blog,
  career: Career,
  contact: Contact,
  source: Source,
  rss: RSS,
  uses: Uses,
  credits: Credits,
  changelog: Changelog,
  dashboard: Dashboard,
  sunny: Sunny,
  account: Account,
  home: Home,
  dots: Dots,
  dotscircle: DotsCircle,
  dotsgrid: DotsGrid,
  dotshexagon: DotsHexagon,
  dotssquare: DotsSquare,
  dotstriangle: DotsTriangle,
  dotsvertical: DotsVertical,
  send: Send,
  youtube: Youtube,
  scss: Scss,
  docker: Docker,
  python: Python,
  reactjs: ReactJS,
  nextjs: NextJS,
  node: Node,
  mocha: Mocha,
  jest: Jest,
  aws: Aws,
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
  color: "dark",
  className: "",
  id: "",
};

export default Icon;
