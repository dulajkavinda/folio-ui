import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Contact, { ContactType } from "../contact";

describe("components/contact", () => {
  const contacts: ContactType[] = [
    {
      type: "linkedin",
      link: "tel:+1-123-456-7890",
    },
    {
      type: "linkedin",
      link: "tel:+1-123-456-7890",
    },
  ];

  it("renders contact", () => {
    const contact = renderer.create(<Contact contacts={contacts} />).toJSON();
    expect(contact).toMatchSnapshot();
  });

  it("renders contact with contacts", () => {
    render(<Contact contacts={contacts} />);
    const contact = screen.getByTestId("folio-contact");
    expect(contact).toBeInTheDocument();

    const contactItems = screen.getAllByTestId(/folio-contact--item/);
    expect(contactItems).toHaveLength(2);
  });

  it("renders contact with contacts and size", () => {
    render(<Contact contacts={contacts} size="3" />);
    const contact = screen.getByTestId("folio-contact");
    expect(contact).toHaveClass("folio-contact--3");
  });

  it("renders contact with contacts and className", () => {
    render(<Contact contacts={contacts} className="test-class" />);
    const contact = screen.getByTestId("folio-contact");
    expect(contact).toHaveClass("test-class");
  });

  it("renders contact with contacts and customStyles", () => {
    render(<Contact contacts={contacts} customStyles={{ color: "red" }} />);
    const contact = screen.getByTestId("folio-contact");
    expect(contact).toHaveStyle("color: red");
  });
});
