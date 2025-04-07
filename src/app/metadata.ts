import type { Metadata } from "next";

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
        url: "/og-image.png", // 1200x630 recommended
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
