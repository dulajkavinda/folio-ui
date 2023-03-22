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
  link: string;
  stack?: IconSymbol[];
  color?: ColorTypesDL;
  size?: SizeTypes;
  showStack?: boolean;
  classname?: string;
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
    showStack,
    customStyles,
  } = props;

  const styles = classnames(
    "folio-blog",
    `folio-blog--${color}`,
    `folio-blog--${size}`,
    classname,
  );

  return (
    <a style={{ textDecoration: "none" }} href={link}>
      <div data-testid="folio-blog" style={customStyles} className={styles}>
        <div className="folio-blog_main">
          <div className="folio-blog_main__title">{title}</div>
          {(size === "small" || size === "medium") && showStack && (
            <TechStack
              customStyles={{
                marginTop: "0.6rem",
                marginBottom: "0.8rem",
              }}
              size="small"
              type="bar"
              icons={stack || []}
            />
          )}
          <div className="folio-blog_main__info">
            <div className="folio-blog_main__date">{date}</div>
            <Label
              customStyles={{
                paddingTop: "0.1rem",
              }}
            >
              {category}
            </Label>
          </div>

          {description?.length > 0 && (
            <div
              data-testid="folio-blog-description"
              className="folio-blog_main__description"
            >
              {description}
            </div>
          )}

          {size === "large" && (
            <div className="folio-blog_main__footer">
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
    </a>
  );
};

Blog.defaultProps = {
  color: "light",
  classname: "",
  stack: [],
  size: "small",
  customStyles: {},
  showStack: false,
};

export default Blog;
