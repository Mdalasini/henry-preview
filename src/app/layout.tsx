import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const sans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Henry's Portfolio",
  description: "A portfolio website",
  icons: "/images/awana-logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <Navbar />
        <main className="mt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
