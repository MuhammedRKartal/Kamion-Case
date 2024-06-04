"use server";

import { Button } from "@/components/button";
import { Image } from "@/components/image";
import { twMerge } from "tailwind-merge";

interface PropsType {
  className?: string;
}

export default async function LoginBanner(props: PropsType) {
  const { className } = props;

  return (
    <div className={twMerge("relative", className)}>
      <div className="bg-gradient-to-b from-white to-primary-400">
        <Image
          src={
            "https://s3-alpha-sig.figma.com/img/ccce/d4cc/005e04cc5730f4bb111b3bf6a465900e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bs7z5bziuXsiChw6sFCwP3d8k4vLuAIiJBm-PHaiTGO1E3zgd-uz1D2rqnUIdRN6vTJepju2gMJd2gu9rvOudjeFPKGHarZOhJwDZGiYvUvh4GZ2v7d-9sbUXHRSTAF94YovgkJvZk7P~8894MhhO-CVeJcg76GiNE5L7-JKaQ~QohIbj4FelvOqV~tZ7NBXlBgfnLEZyGaRIYq9-To~6iEkGt845s1Am4vTqFAPxSIxMlQkToOUpDKcgQ-egpAWslkgfsnBYL~Wh-j1JoXwsQ76BmJTwhk25d1T9mDdoMTVJia-nGd4Ma6WCrbiWCKFY8rDKKs4ClCASWWc0emN9w__"
          }
          alt="Kamion MENA's Most Efficient Digital Freight Network"
          width={836}
          height={1053}
          quality={100}
          priority={true}
          className="opacity-10"
        />
      </div>
      <div className="absolute bottom-0 left-0 text-white text-center px-8 pb-12 flex flex-col items-center justify-center">
        <div className="leading-[38px]">ONE PLATFORM FOR ALL ROAD FREIGHT</div>
        <div className="text-6xl leading-[88.7px]">Visibility, Efficiency, Sustainability</div>
        <div className="text-2xl leading-[54px] font-light">
          <span className="font-semibold text-primary-300">{"MENA's"}</span> Most Efficient Digital
          Freight Network
        </div>
        <Button>
          <div className="flex gap-1">
            Join the Kamion Logistics Network <span className="underline font-medium">Sign Up</span>
          </div>
          <Image
            src={"/assets/svg/arrow-right.svg"}
            alt="arrow-right"
            width={15}
            height={12}
            className="ms-1"
          ></Image>
        </Button>
      </div>
    </div>
  );
}
