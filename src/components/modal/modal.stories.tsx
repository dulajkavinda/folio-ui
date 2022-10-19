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
export const Small = Template.bind({});
export const Large = Template.bind({});
export const Max = Template.bind({});

Primary.args = {
  classname: "text-red-500",
  title: "Modal Title",
  children: <div>Hello there</div>,
  subtitle:
    "These are the app settings that are used to configure the app. These are the app settings that are used to configure the app.",
};

Small.args = {
  classname: "text-red-500",
  size: "small",
  title: "Modal Title",
  children: <div>Hello there</div>,
  subtitle:
    "These are the app settings that are used to configure the app. These are the app settings that are used to configure the app.",
};

Large.args = {
  classname: "text-red-500",
  size: "large",
  title: "Modal Title",
  children: <div>Hello there</div>,
  subtitle:
    "These are the app settings that are used to configure the app. These are the app settings that are used to configure the app.",
};

Max.args = {
  classname: "text-red-500",
  size: "max",
  title: "Modal Title",
  children: <div>Hello there</div>,
  subtitle:
    "These are the app settings that are used to configure the app. These are the app settings that are used to configure the app.",
};
