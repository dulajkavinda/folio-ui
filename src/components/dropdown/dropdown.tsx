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
      const dataCopy = [...data];
      if (selectedItem) {
        const index = data.findIndex(
          (item: DropdownData) => item.value === selectedItem.value,
        );
        dataCopy.splice(index, 1);
        setDropdownItems(dataCopy);
      } else {
        setDropdownItems(data);
      }
    }
  };

  const { data, value, customStyles } = props;

  return (
    <div
      data-testid="folio-dropdown"
      style={{ ...customStyles }}
      className={styles}
    >
      <div
        style={{
          border: dropdownItems.length > 0 ? "1px dashed #7e8c9a" : "",
        }}
        className="folio-dropdown_container"
      >
        <span
          role="presentation"
          className="folio-dropdown_title"
          data-testid="folio-dropdown--title"
          onKeyDown={() => openOrCloseDropdownMenu(data)}
          onClick={() => openOrCloseDropdownMenu(data)}
        >
          {selectedItem ? selectedItem.label : "Select Category"}
        </span>
        {dropdownItems.map((item: DropdownData, index) => (
          // eslint-disable-next-line react/jsx-key
          <div
            role="presentation"
            className="folio-dropdown_item"
            data-testid={`folio-dropdown--item-${index + 1}`}
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
              if (value) {
                value(null);
              }

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
