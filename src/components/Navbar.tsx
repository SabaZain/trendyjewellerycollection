"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

const productCategories = [
  { href: "/products/earrings", label: "Earrings" },
  { href: "/products/necklace", label: "Necklace" },
  { href: "/products/locket-sets", label: "Locket Sets" },
  { href: "/products/rings", label: "Rings" },
  { href: "/products/bracelet-bangles", label: "Bracelet and Bangles" },
  { href: "/products/watches", label: "Watches" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-serif font-extrabold text-stone-900 tracking-wide drop-shadow-sm">
              Trendy Jewellery Collection
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-stone-700 hover:text-amber-700 transition-colors duration-200 text-sm font-semibold uppercase tracking-wider"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-stone-700 hover:text-amber-700 transition-colors duration-200 text-sm font-semibold uppercase tracking-wider"
            >
              About Us
            </Link>

            {/* Products Dropdown - Hover */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button className="flex items-center text-stone-700 hover:text-amber-700 transition-colors duration-200 text-sm font-semibold uppercase tracking-wider gap-1">
                Products
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProductsDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 pt-4 transition-all duration-200 ${
                  isProductsDropdownOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <div className="bg-white border border-stone-200 shadow-lg rounded-sm min-w-[200px] overflow-hidden">
                  {productCategories.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className="block px-6 py-3 text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-colors text-sm"
                    >
                      {category.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="text-stone-700 hover:text-amber-700 transition-colors duration-200 text-sm font-semibold uppercase tracking-wider"
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-stone-700 hover:text-amber-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-stone-700 hover:text-amber-700"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-stone-200 shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search by product name or code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-stone-50 border border-stone-200 rounded-full text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  autoFocus
                />
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
                className="p-2 text-stone-400 hover:text-stone-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {searchQuery.length > 0 ? (
                filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {filteredProducts.slice(0, 8).map((product) => (
                      <Link
                        key={product.code}
                        href={`/products/${product.category}`}
                        className="group p-3 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors"
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery("");
                        }}
                      >
                        <div className="relative aspect-square mb-2 bg-white rounded-md overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 15vw"
                          />
                        </div>
                        <p className="text-xs text-stone-500 uppercase">{product.code}</p>
                        <p className="text-sm font-medium text-stone-900 line-clamp-2 group-hover:text-amber-600">
                          {product.name}
                        </p>
                        <p className="text-sm font-semibold text-amber-700 mt-1">
                          Rs. {product.price.toLocaleString()}
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-stone-500">No products found</p>
                  </div>
                )
              ) : (
                <div className="text-center py-8">
                  <p className="text-stone-500">Start typing to search products</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile/Tablet Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200">
          <div className="px-4 py-4 space-y-2">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 text-stone-700 hover:text-amber-700 hover:bg-amber-50 transition-colors text-sm font-semibold uppercase tracking-wider border-b border-stone-100"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 text-stone-700 hover:text-amber-700 hover:bg-amber-50 transition-colors text-sm font-semibold uppercase tracking-wider border-b border-stone-100"
            >
              About Us
            </Link>

            {/* Products Dropdown - Tap */}
            <div>
              <button
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                className="w-full flex items-center justify-between py-3 text-stone-700 hover:text-amber-700 transition-colors text-sm font-semibold uppercase tracking-wider border-b border-stone-100"
              >
                Products
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProductsDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProductsDropdownOpen && (
                <div className="bg-stone-50 pl-6 pr-4 py-2 space-y-1">
                  {productCategories.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 text-stone-600 hover:text-amber-700 transition-colors text-sm font-medium"
                    >
                      {category.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 text-stone-700 hover:text-amber-700 hover:bg-amber-50 transition-colors text-sm font-semibold uppercase tracking-wider border-b border-stone-100"
            >
              Contact Us
            </Link>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-6 pt-4">
              <button
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  setIsMenuOpen(false);
                }}
                className="text-stone-700 hover:text-amber-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
