import PropTypes from "prop-types";
import React from "react";
import ArrowLeft from "@/assets/svgImages/arrow-left.svg";
import Xmark from "@/assets/svgImages/xmark.svg";

interface Props {
  showTokens?: boolean;
  caption?: boolean;
  rightIcon1?: boolean;
  rightIcon2?: boolean;
  leftIcon?: boolean;
  className?: any;
  text?: string;
}

export const Header = ({
  showTokens = false,
  caption = false,
  rightIcon1 = false,
  rightIcon2 = true,
  leftIcon = true,
  className,
  text = "Add New Character",
}: Props): JSX.Element => {
  return (
    <div
      className={`flex w-[484px] items-start gap-[8px] p-[24px] relative border-b [border-bottom-style:solid] border-basic-alfa8 ${className}`}
    >
      {leftIcon && <ArrowLeft className="!relative !w-[24px] !h-[24px]" color="#979797" />}

      <div className="flex flex-col items-start gap-[4px] relative flex-1 grow">
        <div className="relative w-[286px] mt-[-1.00px] font-headline-h6 font-[number:var(--headline-h6-font-weight)] text-text-icon-colorslight text-[length:var(--headline-h6-font-size)] tracking-[var(--headline-h6-letter-spacing)] leading-[var(--headline-h6-line-height)] [font-style:var(--headline-h6-font-style)]">
          {text}
        </div>
      </div>
      <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
        {rightIcon2 && <Xmark className="!relative !w-[24px] !h-[24px] cursor-pointer" color="#979797" />}
      </div>
    </div>
  );
};

Header.propTypes = {
  showTokens: PropTypes.bool,
  caption: PropTypes.bool,
  rightIcon1: PropTypes.bool,
  rightIcon2: PropTypes.bool,
  leftIcon: PropTypes.bool,
  text: PropTypes.string,
};
