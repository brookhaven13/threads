import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { LeftSidebar } from "@/components/shared/LeftSidebar";
import { Topbar } from "@/components/shared/Topbar";
import { Bottombar } from "@/components/shared/Bottombar";
import { RightSidebar } from "@/components/shared/RightSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js 14 Meta Threads Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        
        <main>
          <LeftSidebar />
          <section className="main-container">
            <div className="w-full max-w-4xl">
              {children}
            </div>
          </section>

          <RightSidebar />
        </main>

        <Bottombar />
      </body>
    </html>
  );
}
