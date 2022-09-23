import React from "react";
import classnames from "classnames";
import TechStack from "../techstack";
import Label from "../label";
import Button from "../button";
import Icon from "../icon";
import { ColorTypesDL } from "../types";
import { IconSymbol } from "../icon/icon";

export interface Props {
  title: string;
  description: string;
  category: string;
  date: string;
  stack?: IconSymbol[];
  color?: ColorTypesDL;
  classname?: string;
  link: string;
}

const Blog: React.FunctionComponent<Props> = (props: Props) => {
  const { classname, color, title, description, category, date, stack, link } =
    props;

  const styles = classnames(
    "blogpost_container",
    `blogpost_container--${color}`,
    classname,
  );

  return (
    <div className={styles}>
      <div className="blogpost_main">
        <div className="blogpost_main__title">{title}</div>
        <div className="blogpost_main__info">
          <div className="blogpost_main__date">{date}</div>
          <Label>{category}</Label>
        </div>

        <div className="blogpost_main__description">{description}</div>
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
      </div>
    </div>
  );
};

Blog.defaultProps = {
  color: "light",
  classname: "",
  stack: [],
};

export default Blog;
