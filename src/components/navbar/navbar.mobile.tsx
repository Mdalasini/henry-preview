"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Playfair_Display, Lato } from "next/font/google";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/news-blog", label: "News & Blog" },
  { href: "/press-room", label: "Press Room" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const titleFont = Playfair_Display({ subsets: ["latin"] });
const paragraphFont = Lato({ weight: "400", subsets: ["latin"] });

export function MobileNavbar() {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-inherit z-40">
        <div className="mx-auto px-4 max-w-6xl bg-stone-800">
          <div className="flex justify-between items-center h-18">
            <Link href="/">
              <Image
                src="/images/awana-logo.svg"
                alt="AWAN Afrika Logo"
                width={40}
                height={40}
              />
            </Link>

            <Link href="/" className={titleFont.className}>
              <span className="text-lg font-bold text-white">AWAN Afrika</span>
            </Link>

            <Button
              size="icon"
              variant="ghost"
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              className="hover:bg-transparent"
            >
              {isOpen ? (
                <X stroke="white" className="size-7" />
              ) : (
                <Menu stroke="white" className="size-7" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-stone-800 shadow-lg z-30 border-b">
          <hr />
          <div className="mx-auto flex flex-col gap-2 px-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm text-white ${currentPath === item.href ? "bg-neutral-700" : ""} rounded-md py-2 px-4 font-semibold ${paragraphFont.className}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
