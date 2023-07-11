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
import TS from "../../assets/icons/ts.svg";
import JS from "../../assets/icons/js.svg";
import Images from "../../assets/icons/images.svg";
import Plus from "../../assets/icons/plus.svg";
import Minus from "../../assets/icons/minus.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Webpack from "../../assets/icons/webpack.svg";
import Babel from "../../assets/icons/babel.svg";
import MongoDB from "../../assets/icons/mongodb.svg";
import Postgres from "../../assets/icons/postgres.svg";
import Prisma from "../../assets/icons/prisma.svg";
import Screenshots from "../../assets/icons/screenshots.svg";
import Book from "../../assets/icons/book.svg";
import Redux from "../../assets/icons/redux.svg";
import Redis from "../../assets/icons/redis.svg";
import TS2 from "../../assets/icons/ts2.svg";
import Chakra from "../../assets/icons/chakra.svg";
import Express from "../../assets/icons/express.svg";
import Java from "../../assets/icons/java.svg";
import Spring from "../../assets/icons/spring.svg";
import Socket from "../../assets/icons/socket.svg";
import Swift from "../../assets/icons/swift.svg";

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
  | "aws"
  | "ts"
  | "js"
  | "images"
  | "plus"
  | "minus"
  | "instagram"
  | "facebook"
  | "twitter"
  | "webpack"
  | "babel"
  | "mongodb"
  | "postgres"
  | "prisma"
  | "screenshots"
  | "book"
  | "redux"
  | "redis"
  | "ts2"
  | "chakra"
  | "express"
  | "java"
  | "spring"
  | "socket"
  | "swift";

export interface Props {
  symbol: IconSymbol;
  size?: IconSize;
  color?: ColorTypesDL;
  className?: string;
  customStyles?: React.CSSProperties;
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
  ts: TS,
  js: JS,
  images: Images,
  plus: Plus,
  minus: Minus,
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  webpack: Webpack,
  babel: Babel,
  mongodb: MongoDB,
  postgres: Postgres,
  prisma: Prisma,
  screenshots: Screenshots,
  book: Book,
  redux: Redux,
  redis: Redis,
  ts2: TS2,
  chakra: Chakra,
  express: Express,
  java: Java,
  spring: Spring,
  socket: Socket,
  swift: Swift,
};

const Icon: React.FC<Props> = (props) => {
  const { symbol, size, color, className, customStyles } = props;

  const styles = classnames.default(
    "folio-icon",
    `folio-icon--${size}`,
    `folio-icon--${color}`,
    className,
  );

  const Image = images[symbol];

  return (
    <img
      data-testid="folio-icon"
      alt={symbol}
      className={styles}
      src={Image}
      style={{ ...customStyles }}
    />
  );
};

Icon.defaultProps = {
  size: "6",
  color: "dark",
  className: "",
  customStyles: {},
};

export default Icon;
