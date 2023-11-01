/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  text?: boolean;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  type: "primary" | "danger" | "secondary";
  size: "large" | "x-small" | "medium" | "small";
  class1: "outlined" | "soft" | "solid" | "ghost";
  state: "disabled" | "hover" | "focus" | "default";
  className: any;
  text1: string;
}

export const Button = ({
  text = true,
  showLeftIcon = false,
  showRightIcon = false,
  type,
  size,
  class1,
  state,
  className,
  text1 = "Button",
}: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex items-center relative ${
        state === "focus" && ["outlined", "soft", "solid"].includes(class1)
          ? "border-2 border-solid"
          : class1 === "outlined" && ["default", "disabled", "hover"].includes(state)
          ? "border border-solid"
          : ""
      } ${
        (class1 === "outlined" && state === "default" && type === "primary") ||
        (class1 === "outlined" && state === "hover" && type === "primary") ||
        (class1 === "solid" && state === "focus" && type === "primary")
          ? "border-primary-400"
          : ["outlined", "solid"].includes(class1) &&
            (class1 === "outlined" || state === "focus") &&
            (class1 === "outlined" || type === "danger") &&
            (class1 === "solid" || state === "hover") &&
            (class1 === "solid" || type === "secondary") &&
            ["hover", "focus"].includes(state) &&
            (state === "hover" || type === "danger") &&
            (state === "focus" || type === "secondary") &&
            ["secondary", "danger"].includes(type)
          ? "border-basic-alfa48"
          : (class1 === "outlined" && state === "disabled" && type === "primary") ||
            (class1 === "outlined" && state === "focus" && type === "primary") ||
            (class1 === "solid" && state === "focus" && type === "secondary")
          ? "border-primary-alfa48"
          : state === "focus" && ["outlined", "soft"].includes(class1) && (class1 === "soft" || type === "secondary")
          ? "border-basic-alfa16"
          : state === "default" && type === "secondary" && class1 === "outlined"
          ? "border-basic-alfa32"
          : class1 === "outlined" && type === "secondary" && state === "disabled"
          ? "border-text-icon-colorsgrey"
          : state === "default" && class1 === "outlined" && type === "danger"
          ? "border-error-500"
          : class1 === "outlined" && type === "danger" && ["disabled", "focus"].includes(state)
          ? "border-error-alfa32"
          : class1 === "outlined" && type === "danger" && state === "hover"
          ? "border-error-400"
          : ""
      } ${state === "disabled" && class1 === "ghost" ? "opacity-[0.32]" : ""} ${
        size === "large" && ["outlined", "soft", "solid"].includes(class1)
          ? "gap-[10px]"
          : size === "medium"
          ? "gap-[8px]"
          : class1 === "ghost" || size === "small" || size === "x-small"
          ? "gap-[6px]"
          : ""
      } ${
        size === "large" && ["outlined", "soft", "solid"].includes(class1)
          ? "px-[24px] py-[16px]"
          : size === "medium"
          ? "px-[20px] py-[13px]"
          : size === "small"
          ? "px-[16px] py-[10px]"
          : size === "x-small"
          ? "px-[12px] py-[7px]"
          : ""
      } ${
        size === "large" && ["outlined", "soft", "solid"].includes(class1)
          ? "rounded-[16px]"
          : size === "medium"
          ? "rounded-[14px]"
          : size === "small"
          ? "rounded-[12px]"
          : size === "x-small"
          ? "rounded-[10px]"
          : ""
      } ${["outlined", "soft", "solid"].includes(class1) ? "justify-center" : ""} ${
        class1 === "solid" && type === "primary" && ["default", "focus"].includes(state)
          ? "bg-primary-500"
          : class1 === "solid" && state === "disabled" && type === "primary"
          ? "bg-primary-alfa32"
          : class1 === "solid" && state === "hover" && type === "primary"
          ? "bg-primary-700"
          : class1 === "solid" && type === "danger" && ["default", "focus"].includes(state)
          ? "bg-error-500"
          : class1 === "solid" && state === "disabled" && type === "danger"
          ? "bg-error-alfa32"
          : class1 === "solid" && type === "danger" && state === "hover"
          ? "bg-error-700"
          : (class1 === "solid" && state === "default" && type === "secondary") ||
            (class1 === "solid" && state === "disabled" && type === "secondary") ||
            (class1 === "solid" && state === "focus" && type === "secondary")
          ? "bg-backgroundslight-100"
          : type === "secondary" && state === "hover" && class1 === "solid"
          ? "bg-backgroundslight-300"
          : class1 === "soft" && ["default", "disabled", "focus"].includes(state)
          ? "bg-basic-alfa8"
          : state === "hover" && class1 === "soft"
          ? "bg-basic-alfa16"
          : ""
      } ${className}`}
    >
      {text && (
        <div
          className={`w-fit whitespace-nowrap relative ${
            size === "large" && ["outlined", "soft", "solid"].includes(class1)
              ? "font-button-giant"
              : size === "medium"
              ? "font-button-large"
              : class1 === "ghost" || size === "small"
              ? "font-button-medium"
              : size === "x-small"
              ? "font-button-small"
              : ""
          } ${state === "focus" && ["outlined", "soft", "solid"].includes(class1) ? "mt-[-2.00px]" : "mt-[-1.00px]"} ${
            size === "large" && ["outlined", "soft", "solid"].includes(class1)
              ? "tracking-[var(--button-giant-letter-spacing)]"
              : size === "medium"
              ? "tracking-[var(--button-large-letter-spacing)]"
              : class1 === "ghost" || size === "small"
              ? "tracking-[var(--button-medium-letter-spacing)]"
              : size === "x-small"
              ? "tracking-[var(--button-small-letter-spacing)]"
              : ""
          } ${
            size === "large" && ["outlined", "soft", "solid"].includes(class1)
              ? "text-[length:var(--button-giant-font-size)]"
              : size === "medium"
              ? "text-[length:var(--button-large-font-size)]"
              : class1 === "ghost" || size === "small"
              ? "text-[length:var(--button-medium-font-size)]"
              : size === "x-small"
              ? "text-[length:var(--button-small-font-size)]"
              : ""
          } ${
            size === "large" && ["outlined", "soft", "solid"].includes(class1)
              ? "[font-style:var(--button-giant-font-style)]"
              : size === "medium"
              ? "[font-style:var(--button-large-font-style)]"
              : class1 === "ghost" || size === "small"
              ? "[font-style:var(--button-medium-font-style)]"
              : size === "x-small"
              ? "[font-style:var(--button-small-font-style)]"
              : ""
          } ${
            class1 === "solid" && state === "disabled" && type === "primary"
              ? "text-basic-alfa32"
              : class1 === "solid" && state === "disabled" && type === "danger"
              ? "text-text-icon-colorslight-grey"
              : (class1 === "solid" && state === "default" && type === "secondary") ||
                (class1 === "solid" && state === "focus" && type === "secondary") ||
                (class1 === "solid" && state === "hover" && type === "secondary")
              ? "text-text-icon-colorsdark"
              : type === "secondary" && state === "disabled" && class1 === "solid"
              ? "text-black-alfa32"
              : state === "disabled" &&
                ["outlined", "soft"].includes(class1) &&
                (class1 === "soft" || type === "secondary")
              ? "text-text-icon-colorsgrey"
              : (class1 === "outlined" && state === "default" && type === "primary") ||
                (class1 === "outlined" && state === "focus" && type === "primary") ||
                (class1 === "outlined" && state === "hover" && type === "primary")
              ? "text-primary-400"
              : class1 === "outlined" && type === "primary" && state === "disabled"
              ? "text-primary-alfa48"
              : class1 === "outlined" && type === "danger" && ["default", "focus"].includes(state)
              ? "text-error-500"
              : class1 === "outlined" && state === "disabled" && type === "danger"
              ? "text-error-alfa32"
              : class1 === "outlined" && type === "danger" && state === "hover"
              ? "text-error-400"
              : "text-text-icon-colorslight"
          } ${
            size === "large" && ["outlined", "soft", "solid"].includes(class1)
              ? "font-[number:var(--button-giant-font-weight)]"
              : size === "medium"
              ? "font-[number:var(--button-large-font-weight)]"
              : class1 === "ghost" || size === "small"
              ? "font-[number:var(--button-medium-font-weight)]"
              : size === "x-small"
              ? "font-[number:var(--button-small-font-weight)]"
              : ""
          } ${
            size === "large" && ["outlined", "soft", "solid"].includes(class1)
              ? "leading-[var(--button-giant-line-height)]"
              : size === "medium"
              ? "leading-[var(--button-large-line-height)]"
              : class1 === "ghost" || size === "small"
              ? "leading-[var(--button-medium-line-height)]"
              : size === "x-small"
              ? "leading-[var(--button-small-line-height)]"
              : ""
          }`}
        >
          {["outlined", "soft", "solid"].includes(class1) && <>{text1}</>}

          {class1 === "ghost" && <>New Category</>}
        </div>
      )}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.bool,
  showLeftIcon: PropTypes.bool,
  showRightIcon: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "danger", "secondary"]),
  size: PropTypes.oneOf(["large", "x-small", "medium", "small"]),
  class1: PropTypes.oneOf(["outlined", "soft", "solid", "ghost"]),
  state: PropTypes.oneOf(["disabled", "hover", "focus", "default"]),
  text1: PropTypes.string,
};
