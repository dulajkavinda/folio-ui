import React, { MouseEvent, useRef } from "react";
import * as classNames from "classnames";
import TechStack from "../techstack";
import Label from "../label";
import { SizeTypes } from "../types";
import Icon, { IconSymbol } from "../icon/icon";
import Button from "../button";
import { projectConstants, sizeConstants } from "../../common/constants";
import { shortenLabel, createLinkWithHttps } from "../../utilities/common";

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
    onClickCaseStudy?: Function | undefined;
    onClickGithub?: Function | undefined;
    onClickLink?: Function | undefined;
    onClickViewMore?: Function | undefined;
    onClickYoutube?: Function | undefined;
    onClickImages?: Function | undefined;
  };
  category?: any;
  showMedia?: boolean;
  users?: string;
  classname?: string;
  customStyles?: {};
  isYoutube?: boolean;
  isScreenshots?: boolean;
  isCaseStudy?: boolean;
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
    users,
    classname,
    customStyles,
    isYoutube,
    isScreenshots,
    isCaseStudy,
  } = props;

  const imgElm = useRef<HTMLImageElement>(null);

  const styles = classNames.default(
    "folio-project",
    `folio-project--${size}`,
    classname,
  );

  const onClickYoutube = (e: MouseEvent) => {
    if (buttonPress?.onClickYoutube) {
      buttonPress.onClickYoutube(e, props);
    }
  };

  const onClickImages = (e: MouseEvent) => {
    if (buttonPress?.onClickImages) {
      buttonPress.onClickImages(e, props);
    }
  };

  return (
    <article
      style={{ ...customStyles, border: "none" }}
      className={styles}
      data-testid="folio-project"
      aria-label={title}
    >
      <div className="folio-project-header">
        <div className="folio-project-header--left">
          <div ref={imgElm} className="folio-project-header--img">
            <img data-testid="folio-project-header--img" alt={alt} src={src} />
          </div>
          <div className="folio-project-header--detials">
            <h3 className="folio-project-header--detials--title">{title}</h3>
            <div className="folio-project-header--detials--url">
              <a
                data-testid="folio-project-header--detials--url"
                href={createLinkWithHttps(url)}
                target="_blank"
                rel="noreferrer"
              >
                {url.slice(0, 22)}
              </a>
              <Icon
                customStyles={{ marginLeft: "2px" }}
                symbol="link"
                size="2"
              />
            </div>
            <Label color="light" size={size}>
              {category}
            </Label>
            <span className="folio-project-header--detials--date">{date}</span>
          </div>
        </div>
        {size === sizeConstants.MEDIUM && (
          <div className="folio-project-header--stack">
            <TechStack
              icons={stack || []}
              disable={disable}
              size={size || sizeConstants.SMALL}
            />
          </div>
        )}
      </div>

      {size === sizeConstants.SMALL && (
        <div className="folio-project-header--stack--small">
          <TechStack
            type="bar"
            icons={stack || []}
            disable={disable}
            size={size || sizeConstants.MEDIUM}
            customStyles={{ width: "inherit" }}
          />
        </div>
      )}

      <p aria-label="Project description" className="folio-project-body">
        {description?.substring(0, projectConstants.MAX_CHARACTERS_DESCRIPTION)}
      </p>

      {showMedia && (
        <div className="folio-project-media" data-testid="folio-project-media">
          {previews && previews.length === 3 && renderPreviews(previews)}
          {previews && previews.length > 3 && (
            <>
              <button
                onClick={onClickYoutube}
                type="button"
                className={classNames.default(
                  "folio-project-media--button--main",
                  isYoutube && "folio-project-media--button--main--disabled",
                )}
              >
                <span className="folio-project-media--button--text">
                  <Icon size="6" symbol="youtube" />
                </span>
              </button>
              <button
                onClick={onClickImages}
                type="button"
                className={classNames.default(
                  "folio-project-media--button",
                  isScreenshots && "folio-project-media--button--disabled",
                )}
              >
                <span className="folio-project-media--button--text">
                  <Icon size="5" symbol="screenshots" />
                </span>
              </button>
              <div className="folio-project-media--button--users">
                <span className="folio-project-media--button--users--text--count">
                  {users}
                </span>
                <span className="folio-project-media--button--users--text">
                  users
                </span>
              </div>
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
            customStyles={{
              backgroundColor: "#1e262f",
              opacity: isCaseStudy ? 0.5 : 1,
              cursor: isCaseStudy ? "not-allowed" : "pointer",
            }}
          >
            {size === sizeConstants.SMALL &&
            projectConstants.PROJECT_CASE_BTN_TEXT.length > 10
              ? shortenLabel(projectConstants.PROJECT_CASE_BTN_TEXT)
              : projectConstants.PROJECT_CASE_BTN_TEXT}
          </Button>
        </div>
        <div className="folio-project-footer--button">
          {buttonPress?.onClickGithub ? (
            <Button
              color="dark"
              onClick={buttonPress?.onClickGithub}
              icon={<Icon size="3" symbol="github" />}
              size={size}
              customStyles={{ backgroundColor: "#1e262f" }}
            >
              {projectConstants.PROJECT_GITHUB_BTN_TEXT}
            </Button>
          ) : (
            <Button
              color="dark"
              onClick={buttonPress?.onClickGithub}
              icon={<Icon size="3" symbol="github" />}
              size={size}
              disabled
              customStyles={{ backgroundColor: "#1e262f", opacity: 0.5 }}
            >
              Private
            </Button>
          )}
        </div>
        <div className="folio-project-footer--button">
          <Button
            color="dark"
            onClick={buttonPress?.onClickLink}
            icon={<Icon size="3" symbol="link" />}
            size={size}
            customStyles={{ backgroundColor: "#1e262f" }}
          >
            {projectConstants.PROJECT_LINK_BTN_TEXT}
          </Button>
        </div>
      </div>
    </article>
  );
};

Project.defaultProps = {
  stack: [],
  disable: [],
  size: sizeConstants.SMALL,
  description: "",
  previews: [],
  buttonPress: {
    onClickCaseStudy: undefined,
    onClickGithub: undefined,
    onClickLink: undefined,
    onClickViewMore: undefined,
    onClickYoutube: undefined,
    onClickImages: undefined,
  },
  category: "",
  showMedia: true,
  users: "",
  customStyles: {},
  classname: "",
  isYoutube: false,
  isScreenshots: false,
  isCaseStudy: false,
};

export default Project;
