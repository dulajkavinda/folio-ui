/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { screen, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Project from "../project";

describe("components/project", () => {
  const props = {
    title: "title",
    url: "url",
    date: "date",
    image: {
      src: "src",
      alt: "alt",
    },
    showmedia: true,
  };

  it("renders correctly", () => {
    const project = renderer.create(<Project {...props} />).toJSON();
    expect(project).toMatchSnapshot();
  });

  it("renders media if show media is true", () => {
    render(<Project {...props} />);
    expect(screen.getByTestId("folio-project-media")).toBeInTheDocument();
  });

  it("renders title", () => {
    render(<Project {...props} />);
    expect(screen.getByText("title")).toBeInTheDocument();
  });

  it("renders url", () => {
    render(<Project {...props} />);

    const project = screen.getByTestId("folio-project-header--detials--url");
    expect(project).toHaveAttribute("href", "https://url");
  });

  it("renders date", () => {
    render(<Project {...props} />);
    expect(screen.getByText("date")).toBeInTheDocument();
  });

  it("renders image", () => {
    render(<Project {...props} />);
    expect(screen.getByTestId("folio-project-header--img")).toBeInTheDocument();
  });
});
