import React, { useState } from "react";
import * as classnames from "classnames";

export type DropdownProps = {
  data: DropdownData[];
  value?: Function;
  customStyles?: {};
};

export type DropdownData = {
  label: string;
  value: string;
};

const Dropdown: React.FC<DropdownProps> = (props) => {
  const [dropdownItems, setDropdownItems] = useState<DropdownData[]>([]);
  const [selectedItem, setSeltectedItem] = useState<DropdownData | null>(null);
  const styles = classnames.default("folio-dropdown");

  const openOrCloseDropdownMenu = (data: DropdownData[]) => {
    if (dropdownItems.length > 0) {
      setDropdownItems([]);
    } else {
      setDropdownItems(data);
    }
  };

  const { data, value, customStyles } = props;

  return (
    <div style={{ ...customStyles }} className={styles}>
      <div
        style={{
          border: dropdownItems.length > 0 ? "1px dashed #7e8c9a" : "",
        }}
        className="folio-dropdown_container"
      >
        <span
          role="presentation"
          className="folio-dropdown_title"
          onKeyDown={() => openOrCloseDropdownMenu(data)}
          onClick={() => openOrCloseDropdownMenu(data)}
        >
          {selectedItem ? selectedItem.label : "Select Category"}
        </span>
        {dropdownItems.map((item: DropdownData) => (
          // eslint-disable-next-line react/jsx-key
          <div
            role="presentation"
            className="folio-dropdown_item"
            onClick={() => {
              if (value) {
                value(item.value);
              }

              setSeltectedItem(item);
              setDropdownItems([]);
            }}
          >
            {`${item.label.split(" ")[0]}  ${item.label
              .split(" ")
              .slice(1)
              .join(" ")}`}
          </div>
        ))}
        {dropdownItems.length > 0 && (
          <div
            role="presentation"
            className="folio-dropdown_item folio-dropdown_item__close"
            onClick={() => {
              setDropdownItems([]);
              setSeltectedItem(null);
            }}
          >
            Clear
          </div>
        )}
      </div>
    </div>
  );
};

Dropdown.defaultProps = { value: () => {}, customStyles: {} };

export default Dropdown;
