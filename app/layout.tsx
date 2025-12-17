import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Injective Ninja Quest | Learn Blockchain",
  description: "An interactive story-driven quiz game to learn about Injective blockchain and Ninja Labs community. Test your knowledge and become a blockchain ninja!",
  keywords: ["Injective", "blockchain", "DeFi", "Web3", "Ninja Labs", "quiz", "learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark-bg text-dark-text antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
