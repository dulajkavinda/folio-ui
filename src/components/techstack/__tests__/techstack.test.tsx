import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import TechStack from "../techstack";
import { IconSymbol } from "../../icon/icon";

describe("components/techstack", () => {
  const sampelStack: IconSymbol[] = ["reactjs", "ts"];

  it("renders techstack", () => {
    const stack = renderer
      .create(<TechStack icons={sampelStack} size="large" />)
      .toJSON();

    expect(stack).toMatchSnapshot();
  });

  it("renders techstack with disable", () => {
    render(
      <TechStack icons={sampelStack} size="large" disable={["reactjs"]} />,
    );

    expect(screen.getByTestId("folio-tstack-item--reactjs")).toHaveClass(
      "folio-tstack-item--disabled",
    );
  });

  it("icons renders correctly", () => {
    render(<TechStack icons={sampelStack} size="large" />);

    expect(screen.getAllByTestId(/folio-tstack-item/)).toHaveLength(2);
  });

  it("renders techstack with bar type", () => {
    render(<TechStack icons={sampelStack} size="large" type="bar" />);

    expect(screen.getByTestId("folio-tstack")).toHaveClass("folio-tstack--bar");
  });

  it("renders techstack with grid type", () => {
    render(<TechStack icons={sampelStack} size="large" type="grid" />);

    expect(screen.getByTestId("folio-tstack")).toHaveClass(
      "folio-tstack--grid",
    );
  });
});
