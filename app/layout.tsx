import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Instrument_Serif } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme-provider";
import FractalTree from "@/components/ui/fractal-tree";
import { Toaster } from "sonner";


const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"], // 🛠 Fix missing subsets
});

export const metadata: Metadata = {
  title: "Yash Kataria",
  description: "Full Stack AI Engineer — I build intelligent systems.",
  openGraph: {
    title: "Yash Kataria",
    description: "Full Stack AI Engineer — I build intelligent systems.",
    url: "https://your-portfolio-url.com", // Update to your actual URL
    siteName: "Yash Kataria",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Kataria",
    description: "Full Stack AI Engineer — I build intelligent systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>{/* 🛠 Important for dark mode */}
      <body
        className={`${instrumentSerif.className} antialiased bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300 [--pattern-fg:var(--color-neutral-200)]`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Analytics />
          <SpeedInsights />
          <FractalTree />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
