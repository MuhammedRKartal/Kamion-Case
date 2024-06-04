"use server";

import { twMerge } from "tailwind-merge";
import { Image } from "@/components/image";

interface PropsType {
  className?: string;
}

export default async function LoginHeader(props: PropsType) {
  const { className } = props;

  return (
    <header className={twMerge("", className)}>
      <Image
        src={"/assets/company-logo.png"}
        alt="Kamion Company Logo"
        width={56}
        height={56}
        aspectRatio={1}
        className="mb-9"
      ></Image>
      <h1 className="text-primary text-5xl leading-[64px] font-medium">Kamion®</h1>
      <h2 className="text-primary text-5xl leading-[64px] font-light">Dashboard Log In</h2>
    </header>
  );
}
