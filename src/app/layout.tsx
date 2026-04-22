import type { Metadata } from "next";
import { Inter, Grenze_Gotisch } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const grenzeGotisch = Grenze_Gotisch({
  variable: "--font-grenze-gotisch",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Söguheimar website",
  description: "A website for söguheimar summer camp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grenzeGotisch.variable} h-full antialiased`}
    >
      <body className="px-4 md:px-24 lg:px-30">{children}</body>
    </html>
  );
}
