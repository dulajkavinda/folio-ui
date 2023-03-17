import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Dropdown } from "../../index";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Dropdown> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Dropdown {...args} />
);

export const Primary = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Primary.args = {
  customStyles: { width: "200px" },
  data: [
    {
      label: "💼 News and Media",
      value: "category-1",
    },
    {
      label: "🦊 NPM Packages",
      value: "category-2",
    },
    {
      label: "👛 Case Studies",
      value: "category-3",
    },
  ],
};

Medium.args = {
  data: [
    {
      label: "💼 News and Media",
      value: "category-1",
    },
  ],
  size: "medium",
};
