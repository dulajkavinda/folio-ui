import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Dropdown from "../dropdown";

describe("components/dropdown", () => {
  it("should render a dropdown", () => {
    const { asFragment } = render(
      <Dropdown
        data={[
          {
            label: "💼 News and Media",
            value: "category-1",
          },
          {
            label: "🦊 NPM Packages",
            value: "category-2",
          },
          {
            label: "👛 Case Studies",
            value: "category-3",
          },
        ]}
      />,
    );
    const primaryButton = screen.getByTestId("folio-dropdown");

    expect(primaryButton).toHaveClass("folio-dropdown");
    expect(asFragment).toMatchSnapshot();
  });

  it("dropdown should be closed by default", () => {
    render(
      <Dropdown
        data={[
          {
            label: "💼 News and Media",
            value: "category-1",
          },
          {
            label: "🦊 NPM Packages",
            value: "category-2",
          },
          {
            label: "👛 Case Studies",
            value: "category-3",
          },
        ]}
      />,
    );

    const dropdownTitle = screen.getByTestId("folio-dropdown-title");

    expect(dropdownTitle).toHaveTextContent("Select Category");
  });

  it("dropdown should be opened when clicked", () => {
    render(
      <Dropdown
        data={[
          {
            label: "💼 News and Media",
            value: "category-1",
          },
          {
            label: "🦊 NPM Packages",
            value: "category-2",
          },
          {
            label: "👛 Case Studies",
            value: "category-3",
          },
        ]}
      />,
    );

    const dropdownTitle = screen.getByTestId("folio-dropdown-title");

    fireEvent.click(dropdownTitle);

    expect(dropdownTitle).toHaveTextContent("Select Category");

    const dropdownItem = screen.getByTestId("folio-dropdown-item--1");
    expect(dropdownItem).toHaveTextContent("💼 News and Media");

    const dropdownItem2 = screen.getByTestId("folio-dropdown-item--2");
    expect(dropdownItem2).toHaveTextContent("🦊 NPM Packages");

    const dropdownItem3 = screen.getByTestId("folio-dropdown-item--3");
    expect(dropdownItem3).toHaveTextContent("👛 Case Studies");
  });

  it("dropdown should be closed when clicked again", () => {
    render(
      <Dropdown
        data={[
          {
            label: "💼 News and Media",
            value: "category-1",
          },
          {
            label: "🦊 NPM Packages",
            value: "category-2",
          },
          {
            label: "👛 Case Studies",
            value: "category-3",
          },
        ]}
      />,
    );

    // Open dropdown by clicking title
    const dropdownTitle = screen.getByTestId("folio-dropdown-title");
    fireEvent.click(dropdownTitle);

    // Select an item
    const dropdownItem = screen.getByTestId("folio-dropdown-item--1");
    fireEvent.click(dropdownItem);

    // Click dropdown title again
    fireEvent.click(dropdownTitle);

    // Click 'Clear' button
    const clearButton = screen.getByTestId("folio-dropdown-item--close");
    fireEvent.click(clearButton);

    expect(dropdownTitle).toHaveTextContent("Select Category");
  });

  it("dropdown should remove selected item from the options", () => {
    render(
      <Dropdown
        data={[
          {
            label: "💼 News and Media",
            value: "category-1",
          },
          {
            label: "🦊 NPM Packages",
            value: "category-2",
          },
          {
            label: "👛 Case Studies",
            value: "category-3",
          },
        ]}
      />,
    );

    const dropdownTitle = screen.getByTestId("folio-dropdown-title");
    fireEvent.click(dropdownTitle);

    const dropdownItem = screen.getByTestId("folio-dropdown-item--1");
    fireEvent.click(dropdownItem);

    fireEvent.click(dropdownTitle);

    expect(dropdownItem).not.toBeInTheDocument();
  });

  it("dropdown should have all options after 'clear' selected", () => {
    render(
      <Dropdown
        data={[
          {
            label: "💼 News and Media",
            value: "category-1",
          },
          {
            label: "🦊 NPM Packages",
            value: "category-2",
          },
          {
            label: "👛 Case Studies",
            value: "category-3",
          },
        ]}
      />,
    );

    const dropdownTitle = screen.getByTestId("folio-dropdown-title");
    fireEvent.click(dropdownTitle);

    const dropdownItem = screen.getByTestId("folio-dropdown-item--1");
    fireEvent.click(dropdownItem);

    fireEvent.click(dropdownTitle);

    const clearButton = screen.getByTestId("folio-dropdown-item--close");
    fireEvent.click(clearButton);

    fireEvent.click(dropdownTitle);

    const dropdownItem1 = screen.getByTestId("folio-dropdown-item--1");
    expect(dropdownItem1).toHaveTextContent("💼 News and Media");

    const dropdownItem2 = screen.getByTestId("folio-dropdown-item--2");
    expect(dropdownItem2).toHaveTextContent("🦊 NPM Packages");

    const dropdownItem3 = screen.getByTestId("folio-dropdown-item--3");
    expect(dropdownItem3).toHaveTextContent("👛 Case Studies");
  });
});
