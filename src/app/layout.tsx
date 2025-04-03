import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
