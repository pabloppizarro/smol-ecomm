import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "TechStore | Gaming Best Sellers",
  description: "Top Gaming Sellers, Gamer Setups, Components and many more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} m-auto max-w-screen-xl relative grid h-screen`}
      >
        <Header></Header>
        <div className="mt-[130px]">{children}</div>
      </body>
    </html>
  );
}
