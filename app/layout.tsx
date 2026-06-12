import type { Metadata } from "next";
import { Cormorant, EB_Garamond, Pinyon_Script } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andy's Vows — I Turn Vowels Into Howls",
  description:
    "A wedding vow writing service. I interview you about your relationship, then I write your vows for you. You will win the vows contest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${garamond.variable} ${pinyon.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
