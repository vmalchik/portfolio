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
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 lg:py-0 lg:flex lg:gap-4">
      {/* Prevent scroll on large screen sizes and up */}
      <div className="lg:sticky lg:top-0 lg:w-[48%] lg:flex lg:flex-col lg:max-h-screen lg:py-24">
        <Header
          title="Victor Malchikov"
          subtitle="Software Engineer"
          description="I work in the cloud and build applications for the web!"
        />

        <div className="hidden lg:block lg:mt-16">
          <AnchorLinks />
        </div>

        <div className="mt-8 ml-1 lg:flex lg:flex-col lg:flex-1 lg:justify-end">
          <SocialLinks />
        </div>
      </div>

      <main className="lg:w-[52%] overflow-y-auto pt-24 lg:py-24">
        {children}
      </main>
    </div>
  );
}
