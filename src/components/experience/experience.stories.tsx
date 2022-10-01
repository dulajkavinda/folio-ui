import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Experience } from "../../index";

export default {
  title: "Components/Experience",
  component: Experience,
} as ComponentMeta<typeof Experience>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Experience> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Experience {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  classname: "text-red-500",
  logo: {
    alt: "alt",
    src: "https://media-exp1.licdn.com/dms/image/C4D0BAQG7pPQLZgMiIQ/company-logo_200_200/0/1634631707525?e=2147483647&v=beta&t=jM8utsbp83fFpExWDqzBvX3Ib6KqFGr36F0ZlscsVKA",
  },
  position: "Software Engineer",
  company: "Different",
  website: "https://different.com",
  duration: {
    start: "01/2021",
    end: "Present",
  },
  description:
    "There are tons of screens and devices with different heights and widths, so it is hard to create an exact breakpoint for each device. To keep things simple you could target five common groups:",
  technologies: [
    {
      displayName: "React",
      icon: "graphql",
    },
    {
      displayName: "Javascript",
      icon: "graphql",
    },
    {
      displayName: "Typescript",
      icon: "graphql",
    },
  ],
};
