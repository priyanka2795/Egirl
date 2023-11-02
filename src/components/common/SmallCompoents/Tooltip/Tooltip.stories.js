import { Tooltip } from ".";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    direction: {
      options: [
        "right",
        "right_2",
        "bottom_1",
        "left_1",
        "left_2",
        "bottom",
        "left",
        "bottom_2",
        "right_1",
        "top_1",
        "top",
        "top_2",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    direction: "right",
    className: {},
    text: "Tooltip",
    assets: "/img/assets.svg",
  },
};
