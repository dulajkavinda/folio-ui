import React from "react";
import { SizeTypes } from "../types";
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
declare const Modal: React.FC<ModalProps>;
export default Modal;
