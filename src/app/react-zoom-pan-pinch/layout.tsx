import TmpLayout from "@/components/layout/TmpLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "react zoom pan pinch",
  description: "쉽고 강력하다",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TmpLayout>{children}</TmpLayout>;
}
