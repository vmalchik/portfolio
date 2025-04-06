import { GlobalSpotlight } from "@/components/common/global-spotlight";
import { cn } from "@/lib/utils/cn";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Victor Malchikov",
  description: "Profile of Victor Malchikov, a software engineer"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "relative bg-slate-900 leading-relaxed antialiased text-slate-400 selection:bg-teal-300 selection:text-teal-900",
          inter.className
        )}
      >
        <GlobalSpotlight />
        {children}
      </body>
    </html>
  );
}
