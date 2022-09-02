import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button, Icon } from "../../index";

export default {
  title: "Components/Button",
  component: Button,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Disabled = Template.bind({});
export const Large = Template.bind({});
export const Small = Template.bind({});
export const IconButton = Template.bind({});
export const IconButtonTransparent = Template.bind({});
export const IconButtonTransparentSmall = Template.bind({});

Primary.args = {
  id: "string",
  onClick: action("onClick"),
  color: "light",
  size: "medium",
  disabled: false,
  children: "Send Email",
};

Large.args = {
  id: "string",
  onClick: action("onClick"),
  color: "light",
  size: "large",
  disabled: false,
  children: "Send Email",
};

Disabled.args = {
  id: "string",
  onClick: action("onClick"),
  color: "light",
  size: "medium",
  disabled: true,
  children: "Send Email",
};

Small.args = {
  id: "string",
  onClick: action("onClick"),
  color: "light",
  size: "small",
  disabled: true,
  children: "Send Email",
};

IconButton.args = {
  id: "string",
  onClick: action("onClick"),
  color: "light",
  size: "medium",
  disabled: false,
  children: "Send Email",
  icon: <Icon symbol="graphql" size="4" />,
};

IconButtonTransparent.args = {
  id: "string",
  onClick: action("onClick"),
  color: "dark",
  size: "medium",
  disabled: false,
  children: "Send Email",
  icon: <Icon symbol="graphql" size="4" />,
};

IconButtonTransparentSmall.args = {
  id: "string",
  onClick: action("onClick"),
  color: "dark",
  size: "small",
  disabled: false,
  children: "Send Email",
  icon: <Icon symbol="graphql" size="3" />,
};
