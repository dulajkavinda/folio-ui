import React from "react";
import { IconSymbol } from "../icon/icon";
declare type ImageProp = {
    src: string;
    alt: string;
};
declare type DurationProp = {
    start: string;
    end: string | "Present";
};
declare type TechnologiesProp = {
    displayName: string;
    icon: IconSymbol;
};
export interface ExperienceProps {
    logo: ImageProp;
    position: string;
    company: string;
    duration: DurationProp;
    website: string;
    description: string;
    technologies: TechnologiesProp[];
    classname?: string;
    customStyles?: {};
}
declare const Experience: React.FC<ExperienceProps>;
export default Experience;
