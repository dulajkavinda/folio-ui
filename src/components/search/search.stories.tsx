import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Search } from "../../index";

export default {
  title: "Components/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Search> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Search {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  classname: "text-red-500",
};
