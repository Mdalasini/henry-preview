import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const sans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Henry's Portfolio",
  description: "A portfolio website",
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
