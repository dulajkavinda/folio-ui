import React from "react";
import classnames from "classnames";

import Button from "../button";

export interface ModalProps {
  title: string;
  classname?: string;
  customStyles?: {};
  onClose?: Function;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { classname, customStyles, children, onClose, title } = props;

  const styles = classnames("folio-modal", classname);
  return (
    <div style={{ ...customStyles }} className={styles}>
      <div className="folio-modal__container">
        <div className="folio-modal__header">
          <div className="folio-modal__header__title">{title}</div>
        </div>
        <div className="folio-modal__body">{children}</div>
        {onClose && (
          <div className="folio-modal__footer">
            <Button onClick={() => onClose()} color="dark">
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  customStyles: {},
  onClose: () => {},
  classname: "",
  children: null,
};

export default Modal;
