"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

const navItems = [
  { href: "/about", label: "About Us" },
  { href: "/presence", label: "Our Presence" },
  { href: "/events", label: "Events" },
  { href: "/news-blog", label: "News & Blog" },
  { href: "/press-room", label: "Press Room" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 w-full bg-inherit z-40">
        <div className="mx-auto px-8 max-w-7xl tablet:px-4">
          <div className="flex flex-wrap justify-between items-center h-16">
            {/* Logo */}
            <div className="shrink-0 tablet:mr-20">
              <Link href="/" className="text-2xl font-bold">
                Logo
              </Link>
            </div>

            {/* Desktop Menu */}

            <div className="hidden tablet:flex justify-between items-center grow">
              <div className="hidden tablet:flex gap-8">
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} className="text-sm">
                    {item.label}
                  </Link>
                ))}
              </div>
              <Button size="default" variant="outline" aria-label="Join Us">
                JOIN US
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              size="icon"
              variant="ghost"
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              className="tablet:hidden"
            >
              {isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="fixed top-16 left-0 w-full bg-background shadow-lg z-30 tablet:hidden border-b">
          <hr></hr>
          <div className="mx-auto flex flex-col gap-6 px-8 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              size="default"
              variant="outline"
              aria-label="Join Us"
              className="w-full"
            >
              JOIN US
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
