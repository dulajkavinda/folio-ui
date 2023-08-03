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
  showCloseButton?: boolean;
}

const Modal: React.FC<ModalProps> = (props) => {
  const {
    classname,
    customStyles,
    children,
    onClose,
    title,
    subtitle,
    size,
    showCloseButton,
  } = props;

  const styles = classnames(
    "folio-modal-container",
    `folio-modal-container--${size}`,
    classname,
  );
  return (
    <div
      onClick={onClose ? () => onClose() : () => null}
      className="folio-modal"
      role="presentation"
      data-testid="folio-modal"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ ...customStyles }}
        className={styles}
        role="presentation"
      >
        <div className="folio-modal-header-close">
          <div
            role="presentation"
            onClick={onClose ? () => onClose() : () => null}
          >
            <Icon size="5" symbol="close" />
          </div>
        </div>
        <div className="folio-modal-header">
          <div
            data-testid="folio-modal-header-title"
            className="folio-modal-header-title"
          >
            {title}
          </div>
          <div
            data-testid="folio-modal-header-subtitle"
            className="folio-modal-header-subtitle"
          >
            {subtitle}
          </div>
        </div>
        <div className="folio-modal-body">{children}</div>
        {onClose && showCloseButton && (
          <div data-testid="folio-modal-footer" className="folio-modal-footer">
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
  showCloseButton: true,
};

export default Modal;
