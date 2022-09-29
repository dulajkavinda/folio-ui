import React from "react";
export declare type DropdownProps = {
    data: DropdownData[];
    value?: Function;
};
export declare type DropdownData = {
    label: string;
    value: string;
};
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
