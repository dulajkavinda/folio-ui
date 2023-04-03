import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Callout from "./callout";

export default {
  title: "Components/Callout",
  component: Callout,
} as ComponentMeta<typeof Callout>;

// eslint-disable-next-line react/jsx-props-no-spreading
const CalloutComponent: ComponentStory<typeof Callout> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Callout {...args} />
);

export const Primary = CalloutComponent.bind({});
export const Small = CalloutComponent.bind({});
export const Large = CalloutComponent.bind({});

Primary.args = {
  classname: "primary",
  icon: "👋",
  children: "Hello World",
};

Small.args = {
  classname: "primary",
  icon: "👋",
  children: "Hello World",
  size: "small",
};

Large.args = {
  classname: "primary",
  icon: "👋",
  children: "Hello World",
  size: "large",
};
