import TmpLayout from "@/components/layout/TmpLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "use gesture",
  description: "어렵지만 더더욱 강력한 라이브러리",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TmpLayout currentPage={"use-gesture"}>{children}</TmpLayout>;
}
