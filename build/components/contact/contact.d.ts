import * as React from "react";
import { IconSymbol, IconSize } from "../icon/icon";
export declare type ContactType = {
    type: IconSymbol;
    link: string;
};
export declare type ContactProps = {
    contacts: ContactType[];
    size?: IconSize;
    className?: string;
};
declare const Contact: React.FC<ContactProps>;
export default Contact;
