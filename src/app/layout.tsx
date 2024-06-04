import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import React from "react";
import MainRoot from "./main-root";
import ClientRoot from "./client-root";

export const metadata: Metadata = {
  title: "Kamion",
  description: "One platform for all road freight, visibility, efficiency and sustainability.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Kamion",
    description: "One platform for all road freight, visibility, efficiency and sustainability.",
    url: process.env.DOMAIN_URL,
    type: "website",
    siteName: "Kamion Dashboard",
    images: [
      {
        url: "/assets/company-logo.png",
        width: 400,
        height: 400,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <MainRoot>
          <ClientRoot>{children}</ClientRoot>
        </MainRoot>
      </body>
    </html>
  );
}
