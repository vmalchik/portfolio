import Header from "@/components/common/header";
import SocialLinks from "@/components/common/social-links";
import AnchorLinks from "@/components/page/home/anchor-links";
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
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 lg:py-0 lg:flex lg:gap-4">
      <div className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:max-h-screen lg:w-[48%] lg:pt-24">
        <Header
          title="Victor Malchikov"
          subtitle="Software Developer"
          description="I work in the cloud and build applications for the web!"
        />

        <div className="hidden lg:block">
          <AnchorLinks />
        </div>

        {/* border-black-800 border-1 */}
        <div className="lg:flex lg:flex-col lg:flex-1 lg:justify-end lg:pb-12">
          <SocialLinks />
        </div>
      </div>

      <main className="min-h-screen overflow-y-auto lg:w-[52%] lg:py-24">
        {children}
      </main>
    </div>
  );
}
