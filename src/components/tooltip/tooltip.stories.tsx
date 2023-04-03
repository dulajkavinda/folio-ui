import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tooltip from "./tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

// eslint-disable-next-line react/jsx-props-no-spreading
const TooltipComponent: ComponentStory<typeof Tooltip> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...args} />
);

export const Primary = TooltipComponent.bind({});
export const Small = TooltipComponent.bind({});
export const Large = TooltipComponent.bind({});

Primary.args = {
  classname: "primary",
  description: "Postgress",
  children: <div>Hover me</div>,
  direction: "top",
};
Small.args = {
  classname: "primary",
  description: "NextJS",
  children: <div>Hover me</div>,
  direction: "top",
  size: "small",
};
Large.args = {
  classname: "primary",
  description: "NextJS",
  children: <div>Hover me</div>,
  direction: "top",
  size: "large",
};
