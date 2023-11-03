import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["primary", "danger", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "x-small", "medium", "small"],
      control: { type: "select" },
    },
    class1: {
      options: ["outlined", "soft", "solid", "ghost"],
      control: { type: "select" },
    },
    state: {
      options: ["disabled", "hover", "focus", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: true,
    showLeftIcon: false,
    showRightIcon: false,
    type: "primary",
    size: "large",
    class1: "outlined",
    state: "disabled",
    className: {},
    text1: "Button",
  },
};
