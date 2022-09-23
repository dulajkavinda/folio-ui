import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Blog from "./blog";

export default {
  title: "Components/Blog",
  component: Blog,
} as ComponentMeta<typeof Blog>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Blog> = (args) => <Blog {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title:
    "How I Built a Multi-Player Online card game using React and WebSockets!",
  date: "14 Aug",
  description:
    "An overview of how I chose my stack, the resources that were helpful, and my design and content decisions. If you’re looking to build a website using Nextjs and MDX files you’ve come to the right place.",
  category: "🧳 News and Media",
  stack: ["graphql", "graphql", "graphql", "graphql", "graphql", "graphql"],
  link: "/get",
};
