import React from "react";
import { SizeTypes } from "../types";
import { IconSymbol } from "../icon/icon";
export declare type ProjectProps = {
    title: string;
    url: string;
    date: string;
    image: Image;
    stack?: IconSymbol[];
    disable?: IconSymbol[];
    size?: SizeTypes;
    description?: string;
    previews?: Image[];
    buttonPress?: {
        onClickCaseStudy?: Function;
        onClickGithub?: Function;
        onClickLink?: Function;
        onClickViewMore?: Function;
    };
    category?: string;
    showMedia?: boolean;
};
declare type Image = {
    src: string;
    alt?: string;
};
declare const Project: React.FC<ProjectProps>;
export default Project;
