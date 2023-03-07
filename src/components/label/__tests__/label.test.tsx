import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Label from "../label";

describe("conponents/Label", () => {
  it("should render the label", () => {
    const label = renderer.create(<Label>Test</Label>).toJSON();
    expect(label).toMatchSnapshot();
  });

  it("should render the label with the correct text", () => {
    render(<Label>Test</Label>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should render the label with the default color light", () => {
    render(<Label>Test</Label>);
    expect(screen.getByTestId("folio-label")).toHaveClass("folio-label--light");
  });

  it("should render the label with the defualt size medium", () => {
    render(<Label>Test</Label>);
    expect(screen.getByTestId("folio-label")).toHaveClass(
      "folio-label--medium",
    );
  });

  it("should render the label with the correct color", () => {
    render(<Label color="dark">Test</Label>);
    expect(screen.getByTestId("folio-label")).toHaveClass("folio-label--dark");
  });

  it("should render the label with the correct size", () => {
    render(<Label size="small">Test</Label>);
    expect(screen.getByTestId("folio-label")).toHaveClass("folio-label--small");
  });

  it("should render the label with the correct classname", () => {
    render(<Label classname="test">Test</Label>);
    expect(screen.getByTestId("folio-label")).toHaveClass("test");
  });

  it("should render the label with the correct custom styles", () => {
    render(<Label customStyles={{ color: "red" }}>Test</Label>);
    expect(screen.getByTestId("folio-label")).toHaveStyle("color: red");
  });
});
