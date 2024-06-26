"use client";

import clsx from "clsx";

import { forwardRef, FocusEvent, useState } from "react";

import { InputLabel } from "@/components/Input/input-label";
import { Button } from "@/components/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { InputProps } from "../types";
import { twMerge } from "tailwind-merge";

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [showValue, setShowValue] = useState(false);

  const {
    id,
    label,
    labelStyle,
    floatingLabelText,
    error,
    type,
    required = false,
    disabled = false,
    labelClassName,
    className,
    icon,
    iconClassName,
    iconButtonClassName,
    ...rest
  } = props;

  const hasFloatingLabel = label && labelStyle === "floating";
  const hasPlaceholder = label && (labelStyle === "inner" || !labelStyle);
  const isPassword = type && type === "password";

  const inputClass = twMerge(
    "bg-transparent text-base w-full border border-gray-500 px-4 h-[88px] rounded-lg my-[3px] transition duration-200 !text-primary",
    "placeholder:text-primary",
    "hover:border-primary",
    "active:border-primary",
    "focus-visible:outline-none focus:border-primary",
    hasFloatingLabel && "pt-3 px-6",
    error &&
      "!border-error focus:!border-error active:!border-error hover:!border-error !text-error",
    disabled && "pointer-events-none opacity-40",
    className
  );

  const inputProps: any = {
    id,
    ref,
    className: inputClass,
    type: type === "password" ? (showValue ? "text" : type) : type,
    onFocus: () => setFocused(true),
    onBlur: (event: FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      setHasValue(!!event.target.value);
    },
  };

  return (
    <>
      <div className="relative flex flex-col transition-all w-full">
        {!hasPlaceholder && (
          <InputLabel
            label={label}
            labelStyle={labelStyle}
            floatingLabelText={floatingLabelText}
            focused={focused}
            hasValue={hasValue}
            required={required}
            disabled={disabled}
            id={id}
            className={labelClassName || ""}
            hasError={error ? true : false}
          />
        )}
        <div className="relative">
          <input
            {...rest}
            {...inputProps}
            placeholder={hasPlaceholder ? `${label} ${required ? "*" : ""}` : ""}
          />
          {isPassword && !icon && (
            <Button
              type="button"
              appearance="bright"
              size="xs"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => {
                setShowValue(!showValue);
              }}
            >
              <FontAwesomeIcon
                icon={faEye}
                className={clsx("text-primary-400 text-xl", error && "!text-error")}
              />

              {showValue && (
                <span
                  className={clsx(
                    "w-1 h-3/5 absolute top-1/2 left-1/2 bg-primary-400 rounded-xl border-l-2 border-l-black content-[''] -translate-x-1/2 -translate-y-1/2 -rotate-[60deg]",
                    error && "!bg-error"
                  )}
                />
              )}
            </Button>
          )}

          {isPassword && icon && (
            <Button
              type="button"
              appearance="bright"
              size="xs"
              className="absolute right-3 top-1/2 -translate-y-1/2"
              onClick={() => {
                setShowValue(!showValue);
              }}
            >
              {showValue && (
                <span
                  className={clsx(
                    "w-1 h-3/5 absolute top-1/2 left-1/2 bg-primary-400 rounded-xl border-l-2 border-l-black content-[''] -translate-x-1/2 -translate-y-1/2 -rotate-[60deg] z-50",
                    error && "!bg-error"
                  )}
                />
              )}
              <FontAwesomeIcon
                icon={icon}
                className={clsx("text-primary-400 text-xl", error && "!text-error")}
              />
            </Button>
          )}

          {icon && !isPassword && (
            <Button
              type="button"
              appearance="bright"
              size="xs"
              className={twMerge("absolute right-3 top-1/2 -translate-y-1/2", iconButtonClassName)}
              onClick={() => {
                setShowValue(!showValue);
              }}
            >
              <FontAwesomeIcon
                icon={icon}
                className={twMerge(
                  "text-primary-400 text-xl",
                  error && "!text-error",
                  iconClassName
                )}
              />
            </Button>
          )}
        </div>
        {error && <span className="text-end text-xs text-error">{error.message}</span>}
      </div>
    </>
  );
});

Input.displayName = "Input";
