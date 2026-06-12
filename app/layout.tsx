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

const PREVIEW = "From the wedding to the bedding";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.andysvows.com"),
  title: PREVIEW,
  description: PREVIEW,
  applicationName: PREVIEW,
  openGraph: {
    title: PREVIEW,
    description: PREVIEW,
    siteName: PREVIEW,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PREVIEW,
    description: PREVIEW,
  },
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
