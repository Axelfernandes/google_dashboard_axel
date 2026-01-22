import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { MobileNav } from "@/components/layout/mobile-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GCPLens | GCP Usage & Location Insights",
  description: "Visualize your Google Cloud resource usage, costs, and service health with geographic insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased text-slate-200`}>
        <div className="flex h-screen overflow-hidden">
          {/* Desktop Sidebar */}
          <div className="hidden md:block">
            <Sidebar />
          </div>

          {/* Mobile Navigation */}
          <MobileNav />

          <main className="flex-1 overflow-y-auto relative pb-safe md:pb-0">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="p-4 md:p-8 pb-24 md:pb-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
