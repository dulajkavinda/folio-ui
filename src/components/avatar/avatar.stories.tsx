import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar } from "../../index";

export default {
  title: "Components/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
export const Square = Template.bind({});
export const Large = Template.bind({});

Primary.args = {
  className: "string",
  img: "https://via.placeholder.com/200x200",
  size: "5",
  shape: "circle",
};

Square.args = {
  className: "string",
  img: "https://via.placeholder.com/200x200",
  size: "5",
  shape: "square",
};

Large.args = {
  className: "string",
  img: "https://via.placeholder.com/200x200",
  size: "10",
  shape: "circle",
};
