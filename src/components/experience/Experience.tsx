import React from "react";
import classnames from "classnames";

export interface ExperienceProps {
  classname?: string;
  customStyles?: {};
}

const Experience: React.FC<ExperienceProps> = (props) => {
  const { classname, customStyles } = props;

  const styles = classnames("folio-experience", classname);
  return (
    <div style={{ ...customStyles }} className={styles}>
      <div className="conatiner">
        <div className="experience_header">
          <div className="experience_header__container">
            <div className="experience_header__image">
              <img
                alt="alt"
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQG7pPQLZgMiIQ/company-logo_200_200/0/1634631707525?e=2147483647&v=beta&t=jM8utsbp83fFpExWDqzBvX3Ib6KqFGr36F0ZlscsVKA"
              />
            </div>
            <div className="experience_header__info">
              <div className="experience_header__info__title">
                Software Engineer
              </div>
              <div className="experience_header__info__company">:Different</div>
              <div className="experience_header__info__company__link">
                different.com.au
              </div>
              <div className="experience_header__info__duration">
                01/21 - 02/22
              </div>
            </div>
          </div>

          {/* <div className="experience_header__technologies">
            <div>Used Technologies</div>
          </div> */}
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
