import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://localhost:3000"),
  title: {
    template: "%s | ポートフォリオサイト",
    default: "ポートフォリオサイト。",
  },
  description:
    "私のポートフォリオサイトです。これまでの経験やスキルについて紹介しています。",
  openGraph: {
    title: "ポートフォリオサイト",
    description:
      "私のポートフォリオサイトです。これまでの経験やスキルについて紹介しています。",
    images: ["/Music_Logo.svg"],
  },
  alternates: {
    canonical: "https://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-KXJ7RV6VF6" /> 
    </html>
  );
}
