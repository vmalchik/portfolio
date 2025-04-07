import { GlobalSpotlight } from "@/components/common/global-spotlight";
import { cn } from "@/lib/utils/cn";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Victor Malchikov | Software Engineer Portfolio",
  description:
    "Portfolio of Victor Malchikov – Software Engineer passionate about building scalable, impactful web products.",
  keywords: [
    "Victor Malchikov",
    "software engineer",
    "developer portfolio",
    "full stack",
    "passionate web developer"
  ],
  authors: [{ name: "Victor Malchikov" }],
  metadataBase: new URL("https://portfolio-mbqo.vercel.app"),
  openGraph: {
    title: "Victor Malchikov | Software Engineer Portfolio",
    description:
      "Explore work experience, projects, and skills by Victor Malchikov, a full stack software engineer.",
    url: "https://portfolio-mbqo.vercel.app",
    siteName: "Victor Malchikov Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1128,
        height: 508,
        alt: "Victor Malchikov Portfolio Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Malchikov | Software Engineer Portfolio",
    description:
      "Explore projects and skills by Victor Malchikov, a full stack software engineer.",
    images: ["/og-image.png"]
  }
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
          "relative bg-slate-900 leading-relaxed antialiased text-slate-400 selection:bg-teal-300/90 selection:text-teal-900",
          inter.className
        )}
      >
        <GlobalSpotlight />
        {children}
      </body>
    </html>
  );
}
