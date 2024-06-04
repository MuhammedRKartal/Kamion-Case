"use server";

import { twMerge } from "tailwind-merge";

interface PropsType {
  className?: string;
}

export default async function LoginFooter(props: PropsType) {
  const { className } = props;

  return (
    <footer
      className={twMerge(
        "text-primary font-light mt-12 bottom-6 text-center w-full xl:absolute",
        className
      )}
    >
      @ Copyright 2024, <span className="font-medium">Kamion Logistics</span> - All rights reserved.
    </footer>
  );
}
