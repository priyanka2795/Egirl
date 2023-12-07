import PropTypes from "prop-types";
import React from "react";
import TooltipArrow from '@/assets/svgImages/tooltiparrow.svg';
import Image from "next/image";
interface Props {
  direction:
    | "right"
    | "right_2"
    | "bottom_1"
    | "left_1"
    | "left_2"
    | "bottom"
    | "left"
    | "bottom_2"
    | "right_1"
    | "top_1"
    | "top"
    | "top_2";
  className: any;
  text: string;
  assets: string;
}

export const Tooltip = ({ direction, className, text = "Tooltip", assets = "/img/assets.svg" }: Props): JSX.Element => {
  return (
    <div
      className={`relative ${
        ["left", "left_1", "left_2", "right", "right_1", "right_2"].includes(direction) ? "w-[63px]" : ""
      } ${["left", "left_1", "left_2", "right", "right_1", "right_2"].includes(direction) ? "flex" : "inline-flex"} ${
        ["bottom", "bottom_1", "bottom_2", "top", "top_1", "top_2"].includes(direction) ? "flex-col" : ""
      } ${
        ["left", "left_1", "left_2", "right", "right_1", "right_2"].includes(direction) ? "items-start" : "items-center"
      } ${
        direction === "left" ||
        direction === "left_1" ||
        direction === "left_2" ||
        direction === "right" ||
        direction === "right_1" ||
        direction === "right_2" ||
        direction === "top" ||
        direction === "top_1" ||
        direction === "top_2"
          ? "shadow-[0px_24px_56px_#00000040]"
          : ""
      } ${
        ["left", "left_1", "left_2", "right", "right_1", "right_2"].includes(direction) ? "justify-center" : ""
      } ${className}`}
    >
      {["bottom", "bottom_1", "bottom_2", "right", "right_1", "right_2"].includes(direction) && (
        <img
          className={`self-stretch flex-[0_0_auto] relative ${
            ["bottom", "bottom_1", "bottom_2"].includes(direction) ? "w-full" : ""
          }`}
          alt="Assets"
          src={
            direction === "right_1"
              ? "/img/assets-6.svg"
              : direction === "right_2"
              ? "/img/assets-8.svg"
              : direction === "bottom"
              ? "/img/assets-9.svg"
              : direction === "bottom_1"
              ? "/img/assets-10.svg"
              : direction === "bottom_2"
              ? "/img/assets-11.svg"
              : "/img/assets-4.svg"
          }
        />
      )}

      <div
        className={`flex items-center gap-[10px] px-[12px] py-[6px] rounded-[6px] justify-center bg-[#303030] relative ${
          ["bottom", "bottom_1", "bottom_2", "top", "top_1", "top_2"].includes(direction) ? "w-full" : ""
        } ${["bottom", "bottom_1", "bottom_2", "top", "top_1", "top_2"].includes(direction) ? "self-stretch" : ""} ${
          ["left", "left_1", "left_2", "right", "right_1", "right_2"].includes(direction) ? "grow" : ""
        } ${
          ["bottom", "bottom_1", "bottom_2", "top", "top_1", "top_2"].includes(direction) ? "flex-[0_0_auto]" : "flex-1"
        }`}
      >
        <div
          className={`font-caption-c2-regular w-fit mt-[-1.00px] tracking-[var(--caption-c2-regular-letter-spacing)] text-[length:var(--caption-c2-regular-font-size)] [font-style:var(--caption-c2-regular-font-style)] text-text-icon-colorslight font-[number:var(--caption-c2-regular-font-weight)] text-center whitespace-nowrap leading-[var(--caption-c2-regular-line-height)] relative ${
            ["left", "left_1", "left_2", "right", "right_1", "right_2"].includes(direction) ? "mr-[-3.00px]" : ""
          } ${["left", "left_1", "left_2", "right", "right_1", "right_2"].includes(direction) ? "ml-[-3.00px]" : ""}`}
        >
          {text}
        </div>
      </div>
      {["left", "left_1", "left_2", "top", "top_1", "top_2"].includes(direction) && (
        <Image
          className={`self-stretch flex-[0_0_auto] relative ${
            ["top", "top_1", "top_2"].includes(direction) ? "w-full" : ""
          }`}
          alt="Assets"
          src={
            direction === "top_1"
              ? `${TooltipArrow}`
              : direction === "top_2"
              ? "/img/assets-2.svg"
              : direction === "left"
              ? "/img/assets-3.svg"
              : direction === "left_1"
              ? "/img/assets-5.svg"
              : direction === "left_2"
              ? "/img/assets-7.svg"
              : assets
          }
        />
      )}
    </div>
  );
};

Tooltip.propTypes = {
  direction: PropTypes.oneOf([
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
  ]),
  text: PropTypes.string,
  assets: PropTypes.string,
};
