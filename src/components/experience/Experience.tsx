import React, { useRef } from "react";
import classnames from "classnames";
import Icon, { IconSymbol } from "../icon/icon";
import WindowSize from "../types/window-size";
import useWindowSize from "../../lib/useWindowSize";
import useOnLoadImages from "../../lib/useImageLoader";

type ImageProp = {
  src: string;
  alt: string;
};

type DurationProp = {
  start: string;
  end: string | "Present";
};

type TechnologiesProp = {
  displayName: string;
  icon: IconSymbol;
};

export interface ExperienceProps {
  logo: ImageProp;
  position: string;
  company: string;
  duration: DurationProp;
  website: string;
  description: string;
  technologies: TechnologiesProp[];
  classname?: string;
  customStyles?: {};
}

const Experience: React.FC<ExperienceProps> = (props) => {
  const size = useWindowSize();

  const {
    classname,
    customStyles,
    logo,
    position,
    company,
    website,
    duration,
    description,
    technologies,
  } = props;

  const imgElm = useRef<HTMLImageElement>(null);

  const styles = classnames("folio-experience", classname);

  const loaded = useOnLoadImages(imgElm);

  const renderTechnologies = (technologiesItems: TechnologiesProp[]) => {
    return technologiesItems.map((technology: TechnologiesProp) => {
      return (
        <div
          key={technology.displayName}
          data-testid={`folio-experience-technology--${technology.icon}`}
          className="experience-header-technologies-item"
        >
          <Icon symbol={technology.icon} size="2" />
          {size !== WindowSize.MEDIUM && <span> {technology.displayName}</span>}
        </div>
      );
    });
  };

  return (
    <article
      style={{ ...customStyles }}
      className={styles}
      data-testid="folio-experience"
    >
      <div className="conatiner">
        <div className="experience-header">
          <div className="experience-header-container">
            <div
              ref={imgElm}
              className={
                loaded
                  ? "experience-header-image"
                  : "experience-header-image--gradient"
              }
            >
              {loaded && <img src={logo.src} alt={logo.alt} />}
            </div>
            <div className="experience-header-info">
              <div>
                <h3 className="experience-header-info-title">{position}</h3>
                <h4
                  className="experience-header-info-company"
                  data-testid="folio-experience-company"
                >
                  {website ? (
                    <a
                      href={website}
                      target="_blank"
                      rel="noreferrer"
                      data-testid="folio-experience-website"
                    >
                      {company}
                    </a>
                  ) : (
                    company
                  )}
                </h4>
              </div>
              <div className="experience-header-info-duration">
                {duration.start} - {duration.end}
              </div>
            </div>
          </div>

          {size !== WindowSize.MOBILE && (
            <div className="experience-header-technologies">
              <p className="experience-header-technologies-description">
                {description}
              </p>
              <div className="experience-header-technologies-items">
                {renderTechnologies(technologies)}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

Experience.defaultProps = {
  classname: "",
  customStyles: {},
};

export default Experience;
