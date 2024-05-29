import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "../components/Button/Button";
import { FaBeer, FaCoffee, FaAnchor } from "react-icons/fa";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const icons = {
  beer: <FaBeer />,
  coffee: <FaCoffee />,
  anchor: <FaAnchor />,
  none: null,
};
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    startIcon: {
      options: Object.keys(icons),
      control: { type: "select" },
      mapping: icons,
    },
    endIcon: {
      options: Object.keys(icons),
      control: { type: "select" },
      mapping: icons,
    },
    fullWidth: {
      active: { control: "boolean" },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Button",
    variant: "primary",
    disabled: false,
    fullWidth: false,
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    variant: "secondary",
    disabled: false,
    fullWidth: false,
  },
};
