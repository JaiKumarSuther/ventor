"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import SearchInput from "./SearchInput";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [search, setSearch] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Define the links
  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Wallets", href: "/wallets" },
    { label: "XID", href: "/xid" },
    { label: "Market Maker", href: "/market-maker" },
    { label: "Settings", href: "/settings" },
  ];

  return (
    <header className="bg-[#06070B] border-b border-[#22242D] text-white sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/assets/logo.svg" width={170} height={56} alt="Ventor" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  pathname === link.href
                    ? "text-[#8062F6] font-bold"
                    : "hover:text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-6">
            <SearchInput
              placeholder="Search here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-64"
            />
            <button className="p-2 hover:bg-[#1a1d24] rounded-lg transition-colors">
              <Image src="/assets/bell.svg" width={24} height={24} alt="Notifications" />
            </button>
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium">Spades</span>
              <button className="flex items-center cursor-pointer space-x-1 hover:bg-[#1a1d24] rounded-lg p-1 transition-colors">
                <Image src="/assets/profile.svg" width={38} height={38} alt="Profile" />
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Mobile Right Section */}
          <div className="flex lg:hidden items-center space-x-3">
            <button className="p-2 hover:bg-[#1a1d24] rounded-lg transition-colors">
              <Image src="/assets/search.svg" width={20} height={20} alt="Ventor" />
            </button>
            <button className="p-2 hover:bg-[#1a1d24] rounded-lg transition-colors">
              <Image src="/assets/bell.svg" width={20} height={20} alt="Notifications" />
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 hover:bg-[#1a1d24] rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#22242D]">
            <div className="py-4 space-y-4">
              {/* Mobile Search */}
              <div className="px-2">
                <SearchInput
                  placeholder="Search here..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      pathname === link.href
                        ? "text-[#8062F6] font-bold bg-[#1a1d24]"
                        : "hover:bg-[#1a1d24]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile User Section */}
              <div className="border-t border-[#22242D] pt-4">
                <div className="flex items-center justify-between px-4 py-2">
                  <div className="flex items-center space-x-3">
                    <Image src="/assets/profile.svg" width={20} height={20} alt="Profile" />
                    <span className="text-sm font-medium">Spades</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
