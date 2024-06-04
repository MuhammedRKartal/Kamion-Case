import React from "react";
import { twMerge } from "tailwind-merge";
import { InputLabelProps } from "../types";

export const InputLabel: React.FC<InputLabelProps> = ({
  label,
  labelStyle,
  focused,
  hasValue,
  required,
  disabled,
  id,
  className,
  hasError,
}) => {
  const floating = labelStyle === "floating";
  const outer = labelStyle === "outer";

  return (
    <label
      htmlFor={id}
      className={twMerge(
        "text-base leading-5 text-primary transition-all duration-900",
        disabled && "opacity-40 pointer-events-none",
        floating && "absolute left-6 pointer-events-none transform text-primary",
        floating && !(focused || hasValue) && "translate-y-[40px]",
        outer && "mb-1",
        floating && (focused || hasValue) && "-translate-y-[-20px] !text-[12px] text-gray-400",
        outer && !(focused || hasValue) && "top-1/3",
        hasError && "text-error",
        className
      )}
    >
      {label}{" "}
      {required && (
        <span className={twMerge("text-primary dark:text-secondary", hasError ? "text-error" : "")}>
          *
        </span>
      )}
    </label>
  );
};
