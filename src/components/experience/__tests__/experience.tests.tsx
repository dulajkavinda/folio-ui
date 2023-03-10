import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Experience, { ExperienceProps } from "../experience";

describe("components/experience", () => {
  const props: ExperienceProps = {
    logo: {
      src: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      alt: "Google Logo",
    },
    position: "Software Engineer",
    company: "Google",
    website: "https://www.google.com",
    duration: {
      start: "2020",
      end: "Present",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: [
      {
        displayName: "React",
        icon: "reactjs",
      },
      {
        displayName: "TypeScript",
        icon: "ts",
      },
      {
        displayName: "NodeJS",
        icon: "node",
      },
      {
        displayName: "GraphQL",
        icon: "graphql",
      },
      {
        displayName: "Docker",
        icon: "docker",
      },
    ],
  };

  it("renders experience component", () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const experience = renderer.create(<Experience {...props} />).toJSON();

    expect(experience).toMatchSnapshot();
  });

  it("renders experience component with custom styles", () => {
    const customStyles = {
      backgroundColor: "red",
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<Experience {...props} customStyles={customStyles} />);
    const experience = screen.getByTestId("folio-experience");

    expect(experience).toHaveStyle(customStyles);
  });

  it("renders website as a link if its is available", () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<Experience {...props} />);
    const website = screen.getByTestId("folio-experience-website");

    expect(website).toHaveAttribute("href", props.website);
  });

  it("renders website as a text if its is available", () => {
    props.website = "";
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<Experience {...props} />);
    const website = screen.getByTestId("folio-experience-company");

    expect(
      screen.queryByTestId("folio-experience-website"),
    ).not.toBeInTheDocument();
    expect(website).toHaveTextContent(props.company);
  });

  it("renders technologies", () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<Experience {...props} />);
    const technologies = screen.getAllByTestId(/folio-experience-technology/);

    expect(technologies).toHaveLength(props.technologies.length);
  });
});
