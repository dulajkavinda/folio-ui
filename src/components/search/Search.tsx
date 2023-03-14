import React, { useEffect, useState } from "react";
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

    if (onChange) {
      onChange(event, newValue.trim(), props);
    }
  };

  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const styles = classnames(
    "folio-search",
    `folio-search--${size}`,
    classname,
    focused && "folio-search--dashed",
  );

  useEffect(() => {
    setFocused(focused);
  }, [focused]);

  return (
    <div
      style={{ ...customStyles }}
      className={styles}
      data-testid="folio-search"
    >
      <div className="folio-search-container">
        <Icon symbol="search" size={getIconSize(size)} />
        <input
          onBlur={onBlur}
          onFocus={onFocus}
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
