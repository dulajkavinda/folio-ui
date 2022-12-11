import * as React from "react";
import { ColorTypesDL } from "../../types";
export declare type IconSize = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "15" | "20" | "25" | "30";
export declare type IconSymbol = "graphql" | "github" | "link" | "linkedin" | "email" | "dark" | "read" | "search" | "close" | "eye" | "resume" | "projects" | "blog" | "career" | "contact" | "source" | "rss" | "uses" | "credits" | "changelog" | "dashboard" | "sunny" | "account" | "home" | "dots" | "dotscircle" | "dotsgrid" | "dotshexagon" | "dotssquare" | "dotstriangle" | "dotsvertical" | "send";
export interface Props {
    id?: string;
    className?: string;
    size?: IconSize;
    color?: ColorTypesDL;
    symbol: IconSymbol;
}
declare const Icon: React.FC<Props>;
export default Icon;
