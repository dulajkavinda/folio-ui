import React from "react";
import { ColorTypesDL, SizeTypes } from "../types";
export declare type LabelProps = {
    children: React.ReactNode;
    color?: ColorTypesDL;
    size?: SizeTypes;
    classname?: string;
    customStyles?: React.CSSProperties;
};
declare const Label: React.FC<LabelProps>;
export default Label;
