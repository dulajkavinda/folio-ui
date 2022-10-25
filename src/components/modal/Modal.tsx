import React from "react";
import classnames from "classnames";
import { SizeTypes } from "../types";
import Button from "../button";
import Icon from "../icon";

export interface ModalProps {
  title: string;
  size?: SizeTypes | "max";
  subtitle?: string;
  classname?: string;
  customStyles?: {};
  onClose?: Function;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { classname, customStyles, children, onClose, title, subtitle, size } =
    props;

  const styles = classnames(
    "folio-modal__container",
    `folio-modal__container--${size}`,
    classname,
  );
  return (
    <div className="folio-modal" role="presentation">
      <div style={{ ...customStyles }} className={styles}>
        <div className="folio-modal__header__close">
          <div
            role="presentation"
            onClick={onClose ? () => onClose() : () => null}
          >
            <Icon size="5" symbol="close" />
          </div>
        </div>
        <div className="folio-modal__header">
          <div className="folio-modal__header__title">{title}</div>
          <div className="folio-modal__header__subtitle">{subtitle}</div>
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
  subtitle: "",
  size: "medium",
};

export default Modal;
