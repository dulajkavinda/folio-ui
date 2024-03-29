import React, { useState } from "react";
import * as classnames from "classnames";
import { SizeTypes } from "../types";

export type DropdownProps = {
  data: DropdownData[];
  value?: Function;
  size?: SizeTypes;
  customStyles?: {};
};

export type DropdownData = {
  label: string;
  value: string;
};

const Dropdown: React.FC<DropdownProps> = (props) => {
  const [dropdownItems, setDropdownItems] = useState<DropdownData[]>([]);
  const [selectedItem, setSeltectedItem] = useState<DropdownData | null>(null);

  const { data, size, value, customStyles } = props;

  const styles = classnames.default(
    "folio-dropdown",
    `folio-dropdown--${size}`,
  );

  const openOrCloseDropdownMenu = (ddData: DropdownData[]) => {
    if (dropdownItems.length > 0) {
      setDropdownItems([]);
    } else {
      const dataCopy = [...ddData];
      if (selectedItem) {
        const index = ddData.findIndex(
          (item: DropdownData) => item.value === selectedItem.value,
        );
        dataCopy.splice(index, 1);
        setDropdownItems(dataCopy);
      } else {
        setDropdownItems(ddData);
      }
    }
  };

  return (
    <div
      data-testid="folio-dropdown"
      style={{
        ...customStyles,
        border: dropdownItems.length > 0 ? "1px dashed #7e8c9a" : "",
      }}
      className={styles}
    >
      <div
        role="button"
        tabIndex={0}
        id="dropdownMenu"
        aria-haspopup="true"
        aria-expanded="false"
        aria-label="Select Category"
        className="folio-dropdown-title"
        data-testid="folio-dropdown-title"
        onKeyDown={() => openOrCloseDropdownMenu(data)}
        onClick={() => openOrCloseDropdownMenu(data)}
      >
        {selectedItem ? selectedItem.label : "Select Category"}
      </div>

      {dropdownItems.map((item: DropdownData, index) => (
        // eslint-disable-next-line react/jsx-key
        <div
          role="menu"
          aria-labelledby="dropdownMenuButton"
          id="dropdownMenu"
          tabIndex={0}
          className="folio-dropdown-item"
          data-testid={`folio-dropdown-item--${index + 1}`}
          onClick={() => {
            if (value) {
              value(item.value);
            }

            setSeltectedItem(item);
            setDropdownItems([]);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (value) {
                value(item.value);
              }

              setSeltectedItem(item);
              setDropdownItems([]);
            }
          }}
        >
          <span role="menuitem">
            {`${item.label.split(" ")[0]}  ${item.label
              .split(" ")
              .slice(1)
              .join(" ")}`}
          </span>
        </div>
      ))}
      {dropdownItems.length > 0 && (
        <div
          role="menuitem"
          tabIndex={0}
          className="folio-dropdown-item folio-dropdown-item--close"
          data-testid="folio-dropdown-item--close"
          onClick={() => {
            if (value) {
              value(null);
            }

            setDropdownItems([]);
            setSeltectedItem(null);
          }}
          onKeyDown={() => {
            if (value) {
              value(null);
            }

            setDropdownItems([]);
            setSeltectedItem(null);
          }}
        >
          <span aria-label="Close dropdown">Clear</span>
        </div>
      )}
    </div>
  );
};

Dropdown.defaultProps = { value: () => {}, customStyles: {}, size: "small" };

export default Dropdown;
