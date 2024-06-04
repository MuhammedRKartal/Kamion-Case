"use server";

import { Image } from "@/components/image";
import Link from "next/link";
import Logout from "./logout";

export default async function Header() {
  return (
    <header className="h-[100px] py-6 w-full k-px flex justify-between">
      <Link href={"/"}>
        <Image
          src={"/assets/company-logo-text.png"}
          alt="Kamion Company Logo"
          width={167}
          height={40}
          aspectRatio={167 / 40}
        ></Image>
      </Link>
      <Logout />
    </header>
  );
}
