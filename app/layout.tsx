"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import "./css/index.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { queryClient } from "./utils/queryClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend test",
  description: "Put your frontend skills to the test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
