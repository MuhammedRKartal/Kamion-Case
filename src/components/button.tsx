import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
  const { isloading, ...rest } = props;

  return (
    <>
      {props.link && props.link !== null ? (
        <Link href={props.link} className={props.linkclassname} target={props.target}>
          <button
            {...rest}
            className={twMerge(
              clsx(
                [
                  "px-[76px]",
                  "min-h-20",
                  "h-auto",
                  "text-xl",
                  "font-light",
                  "rounded-[111px]",
                  "border",
                  "transition-all",
                  "flex",
                  "items-center",
                  "justify-center",
                ],
                props.size === "xs" && ["leading-5", "text-[10px]", "px-4", "min-h-9"],
                props.size === "lg" && ["px-12", "min-h-[3.5rem]", "text-2xl", "font-bold"],
                (props.appearance === "filled" || !props.appearance) && [
                  "text-white",
                  "bg-primary-100",
                  "border-primary-100",
                  "hover:bg-primary-300",
                  "hover:border-primary-300",
                  "disabled:bg-gray-400",
                  "disabled:border-gray-400",
                ],
                props.appearance === "outlined" && [
                  "bg-transparent",
                  "border-primary-100",
                  "hover:border-primar-300",
                  "hover:bg-primary-100",
                ],
                props.appearance === "ghost" && [
                  "bg-transparent",
                  "border-transparent",
                  "hover:bg-primary-100",
                ],
                props.appearance === "bright" && [
                  "text-white",
                  "bg-transparent",
                  "border-transparent",
                  "hover:border-transparent",
                  "hover:bg-transparent",
                  "hover:brightness-[1.15]",
                ]
              ),
              props.className
            )}
          >
            {isloading === true ? (
              <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
            ) : (
              <>{props.children}</>
            )}
          </button>
        </Link>
      ) : (
        <button
          {...rest}
          className={twMerge(
            clsx(
              [
                "px-[76px]",
                "min-h-20",
                "h-auto",
                "text-xl",
                "font-medium",
                "rounded-[111px]",
                "border",
                "transition-all",
                "flex",
                "items-center",
                "justify-center",
              ],
              props.size === "xs" && ["leading-5", "text-[10px]", "px-4", "min-h-9"],
              props.size === "lg" && ["px-12", "min-h-[3.5rem]", "text-2xl", "font-bold"],
              (props.appearance === "filled" || !props.appearance) && [
                "text-white",
                "bg-primary-100",
                "border-primary-100",
                "hover:bg-primary-300",
                "hover:border-primary-300",
                "disabled:bg-gray-400",
                "disabled:border-gray-400",
              ],
              props.appearance === "outlined" && [
                "bg-transparent",
                "border-primary-100",
                "hover:border-primar-300",
                "hover:bg-primary-100",
              ],
              props.appearance === "ghost" && [
                "bg-transparent",
                "border-transparent",
                "hover:bg-primary-100",
              ],
              props.appearance === "bright" && [
                "text-white",
                "bg-transparent",
                "border-transparent",
                "hover:border-transparent",
                "hover:bg-transparent",
                "hover:brightness-[1.15]",
              ]
            ),
            props.className
          )}
        >
          {isloading === true ? (
            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
          ) : (
            <>{props.children}</>
          )}
        </button>
      )}
    </>
  );
};
