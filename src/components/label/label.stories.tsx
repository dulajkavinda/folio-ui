import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Label } from "../../index";

export default {
  title: "Components/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Primary = Template.bind({});
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Primary.args = {
  children: "🐶 Labels",
  size: "medium",
  color: "light",
};

Small.args = {
  children: "🐶 Label Small",
  size: "small",
  color: "light",
};

Medium.args = {
  children: "🐶 Label Medium",
  size: "medium",
  color: "light",
};

Large.args = {
  children: "🐶 Label Large",
  size: "large",
  color: "light",
};
