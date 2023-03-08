import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Search from "../search";

describe("components/search", () => {
  it("renders search", () => {
    const search = renderer.create(<Search />).toJSON();
    expect(search).toMatchSnapshot();
  });

  it("renders with correct size search", () => {
    render(<Search size="medium" />);
    const search = screen.getByTestId("folio-search");
    expect(search).toHaveClass("folio-search--medium");
  });
});
