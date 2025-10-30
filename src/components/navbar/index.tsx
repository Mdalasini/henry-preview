"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
        <div className="max-w-7xl mx-auto px-4 tablet:px-5 desktop:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="shrink-0">
              <Link href="/" className="text-2xl font-bold">
                Logo
              </Link>
            </div>

            {/* Desktop Menu */}

            <div className="hidden tablet:flex gap-8">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className="">
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              className="tablet:hidden cursor-pointer"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-30 tablet:hidden pt-20">
          <div className="flex flex-col gap-6 max-w-7xl px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-2xl font-semibold relative"
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
