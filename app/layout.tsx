import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";

import DotFieldBackground from "./components/DotFieldBackground";
import OnekoMascot from "./components/OnekoMascot";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cursive",
});

export const metadata: Metadata = {
  title: "Dhruv Patel | Product Engineering for Scalable Systems",
  description:
    "Full-Stack Product Engineer building scalable SaaS platforms, business systems, and modern digital products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased md:max-w-xl mx-auto flex-wrap text-wrap md:px-40 bg-black`}>
        <div className="">
          <DotFieldBackground />
          <OnekoMascot />
          <div className="app-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
