import React from "react";
import { screen, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Modal from "../modal";

describe("components/modal", () => {
  it("renders modal", () => {
    const modal = renderer.create(<Modal title="Test" />).toJSON();
    expect(modal).toMatchSnapshot();
  });

  it("renders modal with title", () => {
    render(<Modal title="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("renders modal with subtitle", () => {
    render(<Modal title="Test" subtitle="Test2" />);
    expect(screen.getByText("Test2")).toBeInTheDocument();
  });

  it("renders modal with children", () => {
    render(<Modal title="Test">Test3</Modal>);
    expect(screen.getByText("Test3")).toBeInTheDocument();
  });

  it("renders modal with close button", () => {
    render(<Modal title="Test" showCloseButton />);
    expect(screen.getByTestId("folio-modal-footer")).toBeInTheDocument();
  });
});
