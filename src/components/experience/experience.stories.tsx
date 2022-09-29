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
};
