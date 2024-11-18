import TmpLayout from "@/components/layout/TmpLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "react zoom pan pinch",
  description: "심플하고 강력한 라이브러리",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TmpLayout currentPage={"react-zoom-pan-pinch"}>{children}</TmpLayout>;
}
