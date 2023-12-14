import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavBar from "./components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Hooks Tutorial",
  description: "A demonstration site to help teach the majority of hooks provided by React.js",
  icons: {
    icon: "/reactIcon.svg"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
