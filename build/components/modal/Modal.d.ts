import React from "react";
export interface ModalProps {
    title: string;
    classname?: string;
    customStyles?: {};
    onClose?: Function;
    children?: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
