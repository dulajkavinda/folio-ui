import React from "react";
import classnames from "classnames";
import Icon from "../icon";

export interface SearchProps {
  classname: string;
  customStyles?: {};
  onChange?: Function;
}

const Search: React.FC<SearchProps> = (props) => {
  const { classname, customStyles } = props;

  const onChangeText = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value: newValue } = event.target;
    const { onChange } = props;

    if (onChange) {
      onChange(event, newValue.trim(), props);
    }
  };

  const styles = classnames("folio-search", classname);
  return (
    <div style={{ ...customStyles }} className={styles}>
      <div className="folio-search__container">
        <Icon color="light" symbol="search" size="2" />
        <input
          onChange={onChangeText}
          placeholder="Search"
          className="folio-search__input"
          type="text"
        />
      </div>
    </div>
  );
};

Search.defaultProps = {
  customStyles: {},
  onChange: () => {},
};

export default Search;
