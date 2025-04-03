import Header from "@/components/common/header";
import SocialLinks from "@/components/common/social-links";
import AnchorMainLinks from "@/components/page/home/anchor-main-links";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Victor Malchikov",
  description: "Profile of Victor Malchikov, a software engineer"
};

export default function HomeLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header
        title="Victor Malchikov"
        subtitle="Software Developer"
        description="I work in the cloud and build applications for the web!"
      />

      {/* Internal navigation */}
      <AnchorMainLinks />

      {/* Contact - Social Media & Resume */}
      <SocialLinks />

      <main>{children}</main>
    </div>
  );
}
