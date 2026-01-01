import Header from "@/components/header";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "홍시현 Hong Sihyeon",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-background">
        <Header />
        {children}
      </body>
    </html>
  );
}
