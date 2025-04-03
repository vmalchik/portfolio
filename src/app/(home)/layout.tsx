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
    <div className="lg:flex lg:gap-4 lg:min-h-screen">
      <div className="lg:fixed lg:h-screen lg:w-1/2 bg-blue-200">
        <Header
          title="Victor Malchikov"
          subtitle="Software Developer"
          description="I work in the cloud and build applications for the web!"
        />

        <div className="hidden lg:block">
          <AnchorLinks />
        </div>

        <SocialLinks />
      </div>

      <main className="w-full lg:ml-[50vw] lg:w-1/2 bg-amber-400 min-h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
