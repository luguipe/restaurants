import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApiProvider } from "@/client/api";
import React from "react";
// import { Home } from "./page";
import { Navbar1 } from "@/app/components/nav/navbar";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Food Delivery",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApiProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar1/>
          <main>
            {children}
          </main>
        </body>
      </html>
    </ApiProvider>
  );
}
