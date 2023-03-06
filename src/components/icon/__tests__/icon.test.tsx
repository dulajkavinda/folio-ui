import React from "react";
import { render, screen } from "@testing-library/react";
import Icon from "../icon";

describe("components/icon", () => {
  it("should render a icon", () => {
    const { asFragment } = render(<Icon symbol="ts" />);
    const icon = screen.getByRole("img");

    expect(icon).toHaveClass("folio-icon");
    expect(asFragment).toMatchSnapshot();
  });

  it("icon should have a size of 6 by default", () => {
    render(<Icon symbol="ts" />);
    const icon = screen.getByRole("img");
    expect(icon).toHaveClass("folio-icon--6");
  });

  it("icon should have a size of 10", () => {
    render(<Icon symbol="ts" size="10" />);
    const icon = screen.getByRole("img");
    expect(icon).toHaveClass("folio-icon--10");
  });

  it("icon should have a custom class", () => {
    render(<Icon symbol="ts" className="custom-class" />);
    const icon = screen.getByRole("img");
    expect(icon).toHaveClass("custom-class");
  });

  it("icon should have a custom style", () => {
    render(<Icon symbol="ts" customStyles={{ color: "red" }} />);
    const icon = screen.getByTestId("folio-icon");
    expect(icon).toHaveStyle("color: red");
  });

  it("icon should have a dark color by default", () => {
    render(<Icon symbol="ts" />);
    const icon = screen.getByRole("img");
    expect(icon).toHaveClass("folio-icon--dark");
  });

  it("icon should have a light color", () => {
    render(<Icon symbol="ts" color="light" />);
    const icon = screen.getByRole("img");
    expect(icon).toHaveClass("folio-icon--light");
  });
});
