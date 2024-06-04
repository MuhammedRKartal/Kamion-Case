"use server";

import LoginBanner from "./login-banner";
import LoginDetails from "./login-details";

export default async function Login() {
  return (
    <section className="flex p-8 gap-24 pr-28">
      <LoginBanner className="flex-1 rounded-[32px] overflow-hidden" />
      <LoginDetails className="flex-1 py-2.5" />
    </section>
  );
}
