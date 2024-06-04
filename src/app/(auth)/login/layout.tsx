import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kamion Dashboard",
  description: "Giriş Sayfası - Kamion Case",
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
