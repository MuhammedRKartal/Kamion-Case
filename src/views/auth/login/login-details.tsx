"use server";

import { twMerge } from "tailwind-merge";
import LoginForm from "./login-form";
import LoginFooter from "./login-footer";
import LoginHeader from "./login-header";

interface PropsType {
  className?: string;
}

export default async function LoginDetails(props: PropsType) {
  const { className } = props;

  return (
    <div className={twMerge("relative", className)}>
      <div className="absolute top-40 w-full">
        <LoginHeader className="mb-14" />
        <LoginForm />
      </div>
      <LoginFooter />
    </div>
  );
}
