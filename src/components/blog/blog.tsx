import React from "react";
import classnames from "classnames";
import TechStack from "../techstack";
import Label from "../label";
import Button from "../button";
import Icon from "../icon";
import { ColorTypesDL } from "../types";
import { IconSymbol } from "../icon/icon";
import { SizeTypes } from "../../types";
import { openWebpage } from "../../utilities/common";

export interface Props {
  title: string;
  description: string;
  category: any;
  date: string;
  link: string;
  stack?: IconSymbol[];
  color?: ColorTypesDL;
  size?: SizeTypes;
  showStack?: boolean;
  views?: React.ReactNode;
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
    views,
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
      <article data-testid="folio-blog" style={customStyles} className={styles}>
        <div className="folio-blog_main">
          <div className="folio-blog_main__top">
            <h3 className="folio-blog_main__title">{title}</h3>
            {size === "large" && (
              <div className="folio-blog_main__views">
                <Icon symbol="eye" size="3" />
                <span className="folio-blog_main__views__count">{views}</span>
              </div>
            )}
          </div>
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
            <h4 className="folio-blog_main__date">{date}</h4>
            <Label
              customStyles={{
                paddingTop: "0.1rem",
              }}
            >
              {category}
            </Label>
            {size === "medium" && (
              <div
                style={{
                  marginLeft: "auto",
                }}
                className="folio-blog_main__views"
              >
                <Icon symbol="eye" size="3" />
                <span className="folio-blog_main__views__count">{views}</span>
              </div>
            )}
          </div>

          {description?.length > 0 && (
            <p
              data-testid="folio-blog-description"
              className="folio-blog_main__description"
            >
              {description}
            </p>
          )}

          {size === "large" && (
            <div className="folio-blog_main__footer">
              <Button
                onClick={() => openWebpage(link)}
                icon={<Icon size="4" symbol="book" />}
                color="dark"
              >
                Read More
              </Button>

              {stack?.length !== 0 && (
                <TechStack size="small" type="bar" icons={stack || []} />
              )}
            </div>
          )}
        </div>
      </article>
    </a>
  );
};

Blog.defaultProps = {
  color: "light",
  classname: "",
  stack: [],
  size: "small",
  views: null,
  customStyles: {},
  showStack: false,
};

export default Blog;
