'use client'
import { ChevronDown, Menu, X, Search } from "lucide-react";
import SearchInput from "./SearchInput";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [search, setSearch] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);
  const pathname = "/"; // Since we don't have usePathname in this setup

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  // Focus on search input when mobile search dropdown opens
  useEffect(() => {
    if (isMobileSearchOpen && mobileSearchInputRef.current) {
      mobileSearchInputRef.current.focus();
    }
  }, [isMobileSearchOpen]);

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
            <div className="text-xl font-bold text-[#8062F6]">Ventor</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  pathname === link.href
                    ? "text-[#8062F6] font-bold"
                    : "hover:text-gray-300"
                }`}
              >
                {link.label}
              </a>
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
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
            </button>
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium">Spades</span>
              <button className="flex items-center cursor-pointer space-x-1 hover:bg-[#1a1d24] rounded-lg p-1 transition-colors">
                <div className="w-9 h-9 bg-gray-400 rounded-full"></div>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Mobile Right Section */}
          <div className="flex lg:hidden items-center space-x-3">
            <button 
              onClick={toggleMobileSearch}
              className="p-2 hover:bg-[#1a1d24] rounded-lg transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-[#1a1d24] rounded-lg transition-colors">
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
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

        {/* Mobile Search Dropdown */}
        {isMobileSearchOpen && (
          <div className="lg:hidden border-t border-[#22242D]">
            <div className="py-4 px-2">
              <SearchInput
                ref={mobileSearchInputRef}
                placeholder="Search here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#22242D]">
            <div className="py-4 space-y-4">
              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      pathname === link.href
                        ? "text-[#8062F6] font-bold bg-[#1a1d24]"
                        : "hover:bg-[#1a1d24]"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Mobile User Section */}
              <div className="border-t border-[#22242D] pt-4">
                <div className="flex items-center justify-between px-4 py-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
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
