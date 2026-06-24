import type { Metadata } from "next";
import { Urbanist, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import NoiseTexture from "@/components/NoiseTexture";
import CustomCursor from "@/components/CustomCursor";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Merit EQ | The Architecture of High-Stakes Growth",
  description: "Engineering the future of high-stakes growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-cyan-accent selection:text-obsidian">
        <SmoothScroll>
          <NoiseTexture />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
