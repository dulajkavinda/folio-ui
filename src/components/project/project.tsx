import React, { MouseEvent } from "react";
import * as classNames from "classnames";
import TechStack from "../techstack";
import Label from "../label";
import { SizeTypes } from "../types";
import Icon, { IconSymbol } from "../icon/icon";
import Button from "../button";
import { projectConstants, sizeConstants } from "../../common/constants";
import { shortenLabel } from "../../utilities/common";

export type ProjectProps = {
  title: string;
  url: string;
  date: string;
  image: Image;
  stack?: IconSymbol[];
  disable?: IconSymbol[];
  size?: SizeTypes;
  description?: string;
  previews?: Image[];
  buttonPress?: {
    onClickCaseStudy?: Function;
    onClickGithub?: Function;
    onClickLink?: Function;
    onClickViewMore?: Function;
  };
  category?: string;
  showMedia?: boolean;
};

type Image = {
  src: string;
  alt?: string;
};

const renderPreviews = (previews: Image[]) => {
  return previews.map((preview) => {
    const { src, alt } = preview;
    return (
      <div key={src} className="folio-project-media--img">
        <img alt={alt} src={src} />
      </div>
    );
  });
};

const Project: React.FC<ProjectProps> = (props) => {
  const {
    title,
    url,
    date,
    stack,
    disable,
    size,
    image: { src, alt },
    description,
    previews,
    buttonPress,
    category,
    showMedia,
  } = props;
  const styles = classNames.default("folio-project", `folio-project--${size}`);

  const onClickViewMore = (e: MouseEvent) => {
    if (buttonPress?.onClickViewMore) {
      buttonPress.onClickViewMore(e, props);
    }
  };

  return (
    <div style={{ border: "none" }} className={styles}>
      <div className="folio-project-header">
        <div className="folio-project-header--img">
          <img alt={alt} src={src} />
        </div>
        <div className="folio-project-header--detials">
          <div className="folio-project-header--detials--title">{title}</div>
          <div className="folio-project-header--detials--url">
            <a href="https://google.lk">{url}</a>
          </div>
          <Label color="light" size={size}>
            {category}
          </Label>
          <div className="folio-project-header--detials--date">{date}</div>
        </div>
        <div className="folio-project-header--stack">
          <TechStack
            icons={stack || []}
            disable={disable}
            size={size || sizeConstants.SMALL}
          />
        </div>
      </div>
      <div className="folio-project-body">
        {description?.substring(0, projectConstants.MAX_CHARACTERS_DESCRIPTION)}
      </div>
      {showMedia && (
        <div className="folio-project-media">
          {previews && previews.length === 3 && renderPreviews(previews)}
          {previews && previews.length > 3 && (
            <>
              {renderPreviews(previews.slice(0, 2))}
              <button
                onClick={onClickViewMore}
                type="button"
                className="folio-project-media--button"
              >
                <span className="folio-project-media--button--count">
                  {previews.length - 2}
                </span>
                <span className="folio-project-media--button--text">
                  {projectConstants.PROJECT_VIEW_MORE_TEXT}
                </span>
              </button>
            </>
          )}
        </div>
      )}
      <div className="folio-project-footer">
        <div className="folio-project-footer--button">
          <Button
            color="dark"
            onClick={buttonPress?.onClickCaseStudy}
            size={size}
          >
            {size === sizeConstants.SMALL &&
            projectConstants.PROJECT_CASE_BTN_TEXT.length > 10
              ? shortenLabel(projectConstants.PROJECT_CASE_BTN_TEXT)
              : projectConstants.PROJECT_CASE_BTN_TEXT}
          </Button>
        </div>
        <div className="folio-project-footer--button">
          <Button
            color="dark"
            onClick={buttonPress?.onClickGithub}
            icon={<Icon size="3" symbol="github" />}
            size={size}
          >
            {projectConstants.PROJECT_GITHUB_BTN_TEXT}
          </Button>
        </div>
        <div className="folio-project-footer--button">
          <Button
            color="dark"
            onClick={buttonPress?.onClickLink}
            icon={<Icon size="3" symbol="link" />}
            size={size}
          >
            {projectConstants.PROJECT_LINK_BTN_TEXT}
          </Button>
        </div>
      </div>
    </div>
  );
};

Project.defaultProps = {
  stack: [],
  disable: [],
  size: sizeConstants.SMALL,
  description: "",
  previews: [],
  buttonPress: {
    onClickCaseStudy: () => {},
    onClickGithub: () => {},
    onClickLink: () => {},
  },
  category: "",
  showMedia: true,
};

export default Project;
