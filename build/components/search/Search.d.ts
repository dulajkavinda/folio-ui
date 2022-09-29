import React from "react";
export interface SearchProps {
    classname: string;
    customStyles?: {};
    onChange?: Function;
}
declare const Search: React.FC<SearchProps>;
export default Search;
