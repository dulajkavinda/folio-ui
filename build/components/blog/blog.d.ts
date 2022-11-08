import React from "react";
import { ColorTypesDL } from "../types";
import { IconSymbol } from "../icon/icon";
import { SizeTypes } from "../../types";
export interface Props {
    title: string;
    description: string;
    category: string;
    date: string;
    stack?: IconSymbol[];
    color?: ColorTypesDL;
    classname?: string;
    link: string;
    size?: SizeTypes;
    customStyles?: React.CSSProperties;
}
declare const Blog: React.FunctionComponent<Props>;
export default Blog;
