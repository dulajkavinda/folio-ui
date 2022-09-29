import React from "react";
import classnames from "classnames";

export interface TemplateProps {
  classname: string;
  customStyles?: {};
}

const Template: React.FC<TemplateProps> = (props) => {
  const { classname, customStyles } = props;

  const styles = classnames("folio-dropdown", classname);

  return (
    <div style={{ ...customStyles }} className={styles}>
      template
    </div>
  );
};

Template.defaultProps = {
  customStyles: {},
};

export default Template;
