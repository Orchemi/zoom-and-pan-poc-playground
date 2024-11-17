import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zoom&Pan",
  description: "Zoom&Pan PoC를 위한 플레이그라운드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
