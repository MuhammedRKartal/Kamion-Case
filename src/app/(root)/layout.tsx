import React from "react";

import Header from "@/views/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yükveren Paneli - Taşımalarım",
  description: "Taşımalarım Sayfası - Kamion Case",
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex min-h-screen bg-gray-300">{children}</main>
    </>
  );
}
