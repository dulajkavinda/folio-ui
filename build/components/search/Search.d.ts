import React from "react";
export interface SearchProps {
    onChange?: Function;
    size?: string;
    classname?: string;
    customStyles?: {};
}
declare const Search: React.FC<SearchProps>;
export default Search;
