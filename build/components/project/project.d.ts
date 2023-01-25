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
        onClickCaseStudy?: Function | undefined;
        onClickGithub?: Function | undefined;
        onClickLink?: Function | undefined;
        onClickViewMore?: Function | undefined;
        onClickYoutube?: Function | undefined;
        onClickImages?: Function | undefined;
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
