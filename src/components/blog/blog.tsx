import React from "react";
import classnames from "classnames";
import TechStack from "../techstack";
import Label from "../label";
import Button from "../button";
import Icon from "../icon";
import { ColorTypesDL } from "../types";
import { IconSymbol } from "../icon/icon";
import { SizeTypes } from "../../types";

export interface Props {
  title: string;
  description: string;
  category: string;
  date: string;
  stack?: IconSymbol[];
  color?: ColorTypesDL;
  classname?: string;
  link: string;
  size?: SizeTypes;
  customStyles?: React.CSSProperties;
}

const Blog: React.FunctionComponent<Props> = (props: Props) => {
  const {
    classname,
    color,
    title,
    description,
    category,
    date,
    stack,
    link,
    size,
    customStyles,
  } = props;

  const styles = classnames(
    "blogpost_container",
    `blogpost_container--${color}`,
    `blogpost_container--${size}`,
    classname,
  );

  return (
    <div style={customStyles} className={styles}>
      <div className="blogpost_main">
        <div className="blogpost_main__title">{title}</div>
        <div className="blogpost_main__info">
          <div className="blogpost_main__date">{date}</div>
          <Label>{category}</Label>
        </div>

        {description?.length > 0 && (
          <div className="blogpost_main__description">{description}</div>
        )}

        {size === "large" && (
          <div className="blogpost_main__footer">
            <a style={{ textDecoration: "none" }} href={link}>
              <Button icon={<Icon size="4" symbol="read" />} color="dark">
                Read More
              </Button>
            </a>

            {stack?.length !== 0 && (
              <TechStack size="small" type="bar" icons={stack || []} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

Blog.defaultProps = {
  color: "light",
  classname: "",
  stack: [],
  size: "small",
  customStyles: {},
};

export default Blog;
