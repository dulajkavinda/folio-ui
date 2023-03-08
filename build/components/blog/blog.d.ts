import React from "react";
import { ColorTypesDL } from "../types";
import { IconSymbol } from "../icon/icon";
import { SizeTypes } from "../../types";
export interface Props {
    title: string;
    description: string;
    category: string;
    date: string;
    link: string;
    stack?: IconSymbol[];
    color?: ColorTypesDL;
    size?: SizeTypes;
    classname?: string;
    customStyles?: React.CSSProperties;
}
declare const Blog: React.FunctionComponent<Props>;
export default Blog;
