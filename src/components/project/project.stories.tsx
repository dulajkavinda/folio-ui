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
    src: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e0d398ad-6cff-4c02-95f4-b3c9c7e2000e/unnamed.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230111T070725Z&X-Amz-Expires=3600&X-Amz-Signature=74610371b793cb95b6cf957da2aabd3b5ac1f1d5f5625c630bc034aacbbdbf97&X-Amz-SignedHeaders=host&x-id=GetObject",
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
