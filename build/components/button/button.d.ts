import * as React from "react";
import { SizeTypes, ColorTypesDL } from "../types";
export interface Props {
    id?: string;
    onClick?: Function;
    color?: ColorTypesDL;
    size?: SizeTypes;
    disabled?: boolean;
    children: React.ReactNode;
    icon?: React.ReactNode;
}
declare const Button: React.FunctionComponent<Props>;
export default Button;
