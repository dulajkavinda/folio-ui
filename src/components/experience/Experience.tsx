import React from "react";
import classnames from "classnames";
import Icon, { IconSymbol } from "../icon/icon";
import WindowSize from "../types/window-size";
import useWindowSize from "../../lib/useWindowSize";

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

  const styles = classnames("folio-experience", classname);

  const renderTechnologies = (technologiesItems: TechnologiesProp[]) => {
    return technologiesItems.map((technology: TechnologiesProp) => {
      return (
        <div
          key={technology.displayName}
          className="experience_header__technologies__item"
        >
          <Icon symbol={technology.icon} size="2" />
          {size !== WindowSize.MEDIUM && <span> {technology.displayName}</span>}
        </div>
      );
    });
  };

  return (
    <div style={{ ...customStyles }} className={styles}>
      <div className="conatiner">
        <div className="experience_header">
          <div className="experience_header__container">
            <div className="experience_header__image">
              <img src={logo.src} alt={logo.alt} />
            </div>
            <div className="experience_header__info">
              <div className="experience_header__info__title">{position}</div>
              <div className="experience_header__info__company">{company}</div>
              <div className="experience_header__info__company__link">
                {website}
              </div>
              <div className="experience_header__info__duration">
                {duration.start} - {duration.end}
              </div>
            </div>
          </div>

          {size !== WindowSize.MOBILE && (
            <div className="experience_header__technologies">
              <div className="experience_header__technologies__description">
                {description}
              </div>
              <div className="experience_header__technologies__items">
                {renderTechnologies(technologies)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Experience.defaultProps = {
  classname: "",
  customStyles: {},
};

export default Experience;
