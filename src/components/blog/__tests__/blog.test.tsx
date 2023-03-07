import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Blog from "../blog";

describe("components/blog", () => {
  it("should render blog", () => {
    const blog = renderer
      .create(
        <Blog
          title="title"
          description="description"
          category="category"
          date="date"
          link="link"
        />,
      )
      .toJSON();
    expect(blog).toMatchSnapshot();
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

  it("should not render description if not provided", () => {
    render(
      <Blog
        title="title"
        description=""
        category="category"
        date="date"
        link="link"
      />,
    );

    expect(screen.queryByTestId("folio-blog-description")).toBeNull();
  });

  it("should render description if provided", () => {
    render(
      <Blog
        title="title"
        description="description"
        category="category"
        date="date"
        link="link"
      />,
    );

    const blogDescription = screen.getByTestId("folio-blog-description");
    expect(blogDescription).toHaveClass("folio-blog_main__description");
  });

  it("should render a tech stack and a button if size is large if provided", () => {
    render(
      <Blog
        title="title"
        description="description"
        category="category"
        date="date"
        link="link"
        stack={["reactjs", "ts"]}
        size="large"
      />,
    );

    const blog = screen.getByTestId("folio-blog");
    expect(blog).toContainElement(screen.getByTestId("folio-tstack"));
    expect(blog).toContainElement(screen.getByTestId("folio-button"));
    expect(screen.getByText("Read More")).toBeInTheDocument();
  });

  it("should not render a tech stack if stack is not provided", () => {
    render(
      <Blog
        title="title"
        description="description"
        category="category"
        date="date"
        link="link"
        stack={[]}
        size="large"
      />,
    );

    expect(screen.queryByTestId("folio-tstack")).toBeNull();
  });

  it("should get classname and custom styles if provided", () => {
    render(
      <Blog
        title="title"
        description="description"
        category="category"
        date="date"
        link="link"
        classname="custom-class"
        customStyles={{ color: "red" }}
      />,
    );

    const blog = screen.getByTestId("folio-blog");
    expect(blog).toHaveClass("custom-class");
    expect(blog).toHaveStyle("color: red");
  });

  it("should set the provided link as href", () => {
    render(
      <Blog
        title="title"
        description="description"
        category="category"
        date="date"
        link="link"
      />,
    );

    const blog = screen.getByRole("link");
    expect(blog).toHaveAttribute("href", "link");
  });
});
