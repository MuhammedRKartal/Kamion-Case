"use client";

import { useAppSelector } from "@/redux/hooks";
import Transports from "@/views/user-panel/transports";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const isAuthenticated = useAppSelector(state => state?.auth?.isAuthenticated ?? false);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated]);

  return <Transports />;
}
