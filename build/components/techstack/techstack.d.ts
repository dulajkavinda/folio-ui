import * as React from "react";
import { IconSymbol } from "../icon/icon";
export declare type TechStackProps = {
    className?: string;
    icons: IconSymbol[];
    size: TechStackSize;
    disable?: IconSymbol[];
    type?: TechStackType;
};
export declare type TechStackSize = "medium" | "large" | "small";
export declare type TechStackType = "grid" | "bar";
declare const TechStack: React.FC<TechStackProps>;
export default TechStack;
