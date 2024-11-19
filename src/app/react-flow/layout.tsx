import TmpLayout from "@/components/layout/TmpLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "react flow",
  description: "node-edge 기반의 완성형 에디터 라이브러리",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <TmpLayout currentPage={"react-flow"}>{children}</TmpLayout>;
}
