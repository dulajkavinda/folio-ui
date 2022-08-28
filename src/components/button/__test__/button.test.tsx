import { render, screen } from "@testing-library/react";
import React from "react";
import Button from "../button";

describe("components/button", () => {
  // eslint-disable-next-line jest/expect-expect
  it("should render a button", () => {
    render(<Button>Hello</Button>);
    const primaryButton = screen.getByRole("button");
    expect(primaryButton).toHaveClass("folio-button");
  });
});
