import TmpLayout from "@/components/layout/TmpLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "use gesture",
  description: "어렵지만 더 강력하다.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TmpLayout>{children}</TmpLayout>;
}
