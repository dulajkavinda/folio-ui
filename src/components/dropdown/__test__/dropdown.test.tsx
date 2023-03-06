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

  it("dropdown should be closed by defult", () => {
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

    const dropdownTitle = screen.getByTestId("folio-dropdown--title");

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

    const dropdownTitle = screen.getByTestId("folio-dropdown--title");

    fireEvent.click(dropdownTitle);

    expect(dropdownTitle).toHaveTextContent("Select Category");

    const dropdownItem = screen.getByTestId("folio-dropdown--item-1");
    expect(dropdownItem).toHaveTextContent("💼 News and Media");

    const dropdownItem2 = screen.getByTestId("folio-dropdown--item-2");

    expect(dropdownItem2).toHaveTextContent("🦊 NPM Packages");

    const dropdownItem3 = screen.getByTestId("folio-dropdown--item-3");

    expect(dropdownItem3).toHaveTextContent("👛 Case Studies");
  });
});
