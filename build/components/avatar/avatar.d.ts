import * as React from "react";
export declare type AvatarProps = {
    shape?: "circle" | "square";
    size?: AvatarSize;
    img: string;
    className?: string;
};
export declare type AvatarSize = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "15" | "20" | "25" | "30";
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
