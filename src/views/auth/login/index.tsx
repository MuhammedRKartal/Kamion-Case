"use server";

import LoginBanner from "./login-banner";
import LoginDetails from "./login-details";

export default async function Login() {
  return (
    <section className="k-container flex mx-auto p-8 xl:gap-24 xl:pr-28">
      <LoginBanner className="flex-1 rounded-[32px] overflow-hidden hidden xl:block" />
      <LoginDetails className="flex-1 py-2.5" />
    </section>
  );
}
