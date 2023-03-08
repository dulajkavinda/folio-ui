import React from "react";
import classnames from "classnames";
import Icon from "../icon";
import { IconSize } from "../icon/icon";

export interface SearchProps {
  onChange?: Function;
  size?: string;
  classname?: string;
  customStyles?: {};
}

const getIconSize = (_size: string | undefined): IconSize => {
  switch (_size) {
    case "small":
      return "2";
    case "medium":
      return "3";
    default:
      return "2";
  }
};

const Search: React.FC<SearchProps> = (props) => {
  const { size, onChange, classname, customStyles } = props;

  const onChangeText = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value: newValue } = event.target;

    console.log("newValue", newValue);

    if (onChange) {
      onChange(event, newValue.trim(), props);
    }
  };

  const styles = classnames("folio-search", `folio-search--${size}`, classname);

  return (
    <div
      style={{ ...customStyles }}
      className={styles}
      data-testid="folio-search"
    >
      <div className="folio-search-container">
        <Icon symbol="search" size={getIconSize(size)} />
        <input
          onChange={onChangeText}
          placeholder="Search"
          className="folio-search-input"
          type="text"
        />
      </div>
    </div>
  );
};

Search.defaultProps = {
  customStyles: {},
  onChange: () => {},
  classname: "",
  size: "small",
};

export default Search;
