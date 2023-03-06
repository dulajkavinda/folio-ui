import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "../avatar";

describe("components/avatar", () => {
  const img = "https://avatars.githubusercontent.com/u/25279263?v=4";

  it("should render a avatar", () => {
    const { asFragment } = render(<Avatar img={img} />);
    const primaryButton = screen.getByTestId("folio-avatar");

    expect(primaryButton).toHaveClass("folio-avatar");
    expect(asFragment).toMatchSnapshot();
  });

  it("avatar should have a circle shape by default", () => {
    render(<Avatar img={img} />);
    const primaryButton = screen.getByTestId("folio-avatar");
    expect(primaryButton).toHaveClass("folio-avatar--circle");
  });

  it("avatar should have a square shape", () => {
    render(<Avatar img={img} shape="square" />);
    const primaryButton = screen.getByTestId("folio-avatar");
    expect(primaryButton).toHaveClass("folio-avatar--square");
  });

  it("avatar should have a size of 5 by default", () => {
    render(<Avatar img={img} />);
    const primaryButton = screen.getByTestId("folio-avatar");
    expect(primaryButton).toHaveClass("folio-avatar--5");
  });

  it("avatar should have a size of 10", () => {
    render(<Avatar img={img} size="10" />);
    const primaryButton = screen.getByTestId("folio-avatar");
    expect(primaryButton).toHaveClass("folio-avatar--10");
  });

  it("avatar should have a custom class", () => {
    render(<Avatar img={img} className="custom-class" />);
    const primaryButton = screen.getByTestId("folio-avatar");
    expect(primaryButton).toHaveClass("custom-class");
  });

  it("avatar should have a custom style", () => {
    render(<Avatar img={img} customStyle={{ color: "red" }} />);
    const primaryButton = screen.getByTestId("folio-avatar");
    expect(primaryButton).toHaveStyle("color: red");
  });
});
