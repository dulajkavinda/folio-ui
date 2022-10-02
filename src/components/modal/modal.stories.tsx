import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal } from "../../index";

export default {
  title: "Components/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Modal {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  classname: "text-red-500",
  title: "Modal Title",
  children: <div>Hello there</div>,
};
