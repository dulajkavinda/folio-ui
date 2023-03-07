import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Button from "../button";
import Icon from "../../icon";

describe("components/button", () => {
  const btnText = "Hello";

  it("should render a button", () => {
    const button = renderer.create(<Button>{btnText}</Button>).toJSON();
    expect(button).toMatchSnapshot();
  });

  it("button should be rendered with a given text", () => {
    render(<Button>{btnText}</Button>);
    const primaryButton = screen.getByRole("button");

    expect(primaryButton).toHaveClass("folio-button");
    expect(primaryButton).toHaveTextContent(btnText);
  });

  it("by default button should be rendered with light color", () => {
    render(<Button>{btnText}</Button>);
    const primaryButton = screen.getByRole("button");

    expect(primaryButton).toHaveClass("folio-button--light");
  });

  it("button should be rendered with a given color", () => {
    render(<Button color="dark">{btnText}</Button>);
    const primaryButton = screen.getByRole("button");

    expect(primaryButton).toHaveClass("folio-button--dark");
  });

  it("by default button should be rendered with medium size", () => {
    render(<Button color="dark">{btnText}</Button>);
    const primaryButton = screen.getByRole("button");

    expect(primaryButton).toHaveClass("folio-button--medium");
  });

  it("button should be rendered with a given size", () => {
    render(
      <Button color="dark" size="small">
        {btnText}
      </Button>,
    );
    const primaryButton = screen.getByRole("button");

    expect(primaryButton).toHaveClass("folio-button--small");
  });

  it("by default button should not be disabled", () => {
    const primaryButton = render(<Button disabled={false}>{btnText}</Button>);
    const btn = primaryButton.getByTestId("folio-button") as HTMLButtonElement;
    expect(btn.disabled).toBe(false);
    expect(btn).not.toHaveClass("folio-button--disabled");
  });

  it("button should be disabled if disabled prop is true", () => {
    render(<Button disabled>{btnText}</Button>);
    const primaryButton = screen.getByRole("button");

    expect(primaryButton).toBeDisabled();
    expect(primaryButton).toHaveClass("folio-button--disabled");
  });

  it("button should be rendered with a given icon", () => {
    render(<Button icon={<Icon symbol="node" />}>{btnText}</Button>);
    const primaryButton = screen.getByRole("button");

    expect(primaryButton).toContainElement(screen.getByTestId("folio-icon"));
  });

  it("button should be clickable", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>{btnText}</Button>);
    const primaryButton = screen.getByRole("button");

    primaryButton.click();
    expect(onClick).toHaveBeenCalled();
  });

  it("button shouldn't be clickable if it is disabled", () => {
    const onClick = jest.fn();
    render(
      <Button disabled onClick={onClick}>
        {btnText}
      </Button>,
    );
    const primaryButton = screen.getByRole("button");

    primaryButton.click();
    expect(onClick).not.toHaveBeenCalled();
  });

  it("button should show given custom styles", () => {
    render(
      <Button customStyles={{ backgroundColor: "red" }}>{btnText}</Button>,
    );
    const primaryButton = screen.getByRole("button");

    expect(primaryButton).toHaveStyle("background-color: red");
  });

  it("button should have a given classname", () => {
    render(<Button classname="my-classname">{btnText}</Button>);
    const primaryButton = screen.getByRole("button");

    expect(primaryButton).toHaveClass("my-classname");
  });

  it("button should have a given id", () => {
    render(<Button id="my-id">{btnText}</Button>);
    const primaryButton = screen.getByRole("button");
    expect(primaryButton).toHaveAttribute("id", "my-id");
  });
});
