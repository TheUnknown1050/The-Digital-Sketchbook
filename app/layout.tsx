import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Digital Sketchbook",
  description: "Gawx's doodle sketchbook but it's digital ohhh yeah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50">
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
