import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from "../../index";

export default {
  title: "Components/Icon",
  component: Icon,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Icon>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  id: "string",
  className: "string",
  color: "light",
  symbol: "graphql",
  size: "8",
};
