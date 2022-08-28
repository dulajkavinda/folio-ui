import React from "react";
import { ColorTypesDL, SizeTypes } from "../types";
export declare type LabelProps = {
    classname?: string;
    children: React.ReactNode;
    color?: ColorTypesDL;
    size?: SizeTypes;
};
declare const Label: React.FC<LabelProps>;
export default Label;
