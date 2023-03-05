import React from "react";
import { render, screen } from "@testing-library/react";
import Blog from "../blog";

describe("components/blog", () => {
  it("should render", () => {
    const { asFragment } = render(
      <Blog
        title="title"
        description="description"
        category="category"
        date="date"
        link="link"
      />,
    );
    expect(screen.getByTestId("folio-blog")).toBeInTheDocument();
    expect(screen).toBeDefined();
    expect(asFragment).toMatchSnapshot();
  });

  it("should render with a given required text props", () => {
    render(
      <Blog
        title="title"
        description="description"
        category="category"
        date="date"
        link="link"
      />,
    );
    expect(screen.getByText("title")).toBeInTheDocument();
    expect(screen.getByText("description")).toBeInTheDocument();
    expect(screen.getByText("date")).toBeInTheDocument();
  });

  it("should render a Label with category", () => {
    render(
      <Blog
        title="title"
        description="description"
        category="category"
        date="date"
        link="link"
      />,
    );

    const blog = screen.getByTestId("folio-blog");

    expect(blog).toContainElement(screen.getByTestId("folio-label"));
    expect(screen.getByText("category")).toBeInTheDocument();
  });
});
