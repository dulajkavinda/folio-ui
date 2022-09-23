import React from "react";
import { ColorTypesDL } from "../types";
import { IconSymbol } from "../icon/icon";
export interface Props {
    title: string;
    description: string;
    category: string;
    date: string;
    stack?: IconSymbol[];
    color?: ColorTypesDL;
    classname?: string;
    link: string;
}
declare const Blog: React.FunctionComponent<Props>;
export default Blog;
