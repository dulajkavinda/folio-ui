import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Project } from "../../index";

export default {
  title: "Components/Project",
  component: Project,
} as ComponentMeta<typeof Project>;

const Template: ComponentStory<typeof Project> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Project {...args} />
);

export const Primary = Template.bind({});
export const Small = Template.bind({});

Primary.args = {
  title: "SIDED",
  url: "sided.news",
  date: "07/21 - 09/21",
  stack: [
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
  ],
  disable: [],
  size: "medium",
  image: {
    src: "https://www.wallpapertip.com/wmimgs/237-2373103_information-technology-wallpaper.jpg",
    alt: "sided logo",
  },
  previews: [
    { src: "https://via.placeholder.com/300x200", alt: "sided logo" },
    { src: "https://via.placeholder.com/300x200", alt: "sided logo" },
    { src: "https://via.placeholder.com/300x200", alt: "sided logo" },
    { src: "https://via.placeholder.com/300x200", alt: "sided logo" },
  ],
  buttonPress: {
    onClickCaseStudy: action("onClickCaseStudy"),
    onClickLink: action("onClickLink"),
    onClickViewMore: action("onClickViewMore"),
  },
  category: "🗞 News",
  description:
    " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s industry",
};

Small.args = {
  title: "Silmarillions",
  url: "silmarillions.com",
  date: "07/21 - 09/21",
  stack: [
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
  ],
  disable: [],
  size: "small",
  image: { src: "https://via.placeholder.com/300x200", alt: "sided logo" },
  previews: [
    { src: "https://via.placeholder.com/300x200", alt: "sided logo" },
    { src: "https://via.placeholder.com/300x200", alt: "sided logo" },
    { src: "https://via.placeholder.com/300x200", alt: "sided logo" },
    { src: "https://via.placeholder.com/300x200", alt: "sided logo" },
  ],
  buttonPress: {
    onClickCaseStudy: action("onClickCaseStudy"),
    onClickGithub: action("onClickGithub"),
    onClickLink: action("onClickLink"),
    onClickViewMore: action("onClickViewMore"),
  },
  category: "🗞 News",
  description:
    " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s industry",
};
