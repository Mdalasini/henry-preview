import { Youtube, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Subscription */}
        <div className="flex justify-start mb-8">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to our Newsletter
            </h3>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="grow"
                aria-label="Email for newsletter"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <Link
              href="#"
              aria-label="Instagram"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Instagram className="size-6" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Facebook className="size-6" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Twitter className="size-6" />
            </Link>
            <Link
              href="#"
              aria-label="YouTube"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Youtube className="size-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
