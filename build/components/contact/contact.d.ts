import * as React from "react";
import { IconSymbol, IconSize } from "../icon/icon";
export declare type ContactType = {
    type: IconSymbol;
    link: string;
    customStyles?: React.CSSProperties;
};
export declare type ContactProps = {
    contacts: ContactType[];
    size?: IconSize;
    className?: string;
    customStyles?: React.CSSProperties;
};
declare const Contact: React.FC<ContactProps>;
export default Contact;
