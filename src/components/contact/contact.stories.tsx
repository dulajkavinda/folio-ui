import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Contact } from "../../index";

export default {
  title: "Components/Contact",
  component: Contact,
} as ComponentMeta<typeof Contact>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Contact> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Contact {...args} />
);

export const Primary = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Primary.args = {
  className: "string",
  size: "2",
  contacts: [
    {
      type: "linkedin",
      link: "tel:+1-123-456-7890",
    },
    {
      type: "linkedin",
      link: "tel:+1-123-456-7890",
    },
  ],
};

Medium.args = {
  className: "string",
  size: "5",
  contacts: [
    {
      type: "linkedin",
      link: "tel:+1-123-456-7890",
    },
  ],
};

Large.args = {
  className: "string",
  size: "5",
  contacts: [
    {
      type: "linkedin",
      link: "tel:+1-123-456-7890",
    },
    {
      type: "github",
      link: "tel:+1-123-456-7890",
    },
    {
      type: "email",
      link: "tel:+1-123-456-7890",
    },
    {
      type: "instagram",
      link: "tel:+1-123-456-7890",
    },
    {
      type: "facebook",
      link: "tel:+1-123-456-7890",
    },
    {
      type: "twitter",
      link: "tel:+1-123-456-7890",
    },
  ],
};
