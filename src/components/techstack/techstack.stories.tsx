import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TechStack } from "../../index";

export default {
  title: "Components/TechStack",
  component: TechStack,
} as ComponentMeta<typeof TechStack>;

const Template: ComponentStory<typeof TechStack> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <TechStack {...args} />
);

export const Primary = Template.bind({});
export const Large = Template.bind({});
export const Small = Template.bind({});
export const Bar = Template.bind({});

Primary.args = {
  className: "string",
  icons: [
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
  ],
  size: "medium",
  disable: [],
  type: "grid",
};

Large.args = {
  className: "string",
  icons: [
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
  ],
  size: "large",
};

Small.args = {
  className: "string",
  icons: [
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
  ],
  size: "small",
};

Bar.args = {
  className: "string",
  icons: [
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
    "graphql",
  ],
  size: "medium",
  type: "bar",
};
