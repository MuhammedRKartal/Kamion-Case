"use server";

import { twMerge } from "tailwind-merge";

interface PropsType {
  className?: string;
}

export default async function LoginFooter(props: PropsType) {
  const { className } = props;

  return (
    <footer
      className={twMerge("text-primary font-light absolute bottom-6 text-center w-full", className)}
    >
      @ Copyright 2024, <span className="font-medium">Kamion Logistics</span> - All rights reserved.
    </footer>
  );
}
