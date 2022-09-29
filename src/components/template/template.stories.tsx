import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Template from "./template";

export default {
  title: "Components/Template",
  component: Template,
} as ComponentMeta<typeof Template>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Templ: ComponentStory<typeof Template> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Template {...args} />
);

export const Primary = Templ.bind({});

Primary.args = {
  classname: "primary",
};
