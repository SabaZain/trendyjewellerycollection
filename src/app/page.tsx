"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, features } from "@/data/products";
import ProductGrid from "@/components/ui/ProductGrid";

const categories = [
  { name: "Earrings", href: "/products/earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop&q=80" },
  { name: "Necklace", href: "/products/necklace", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop&q=80" },
  { name: "Locket Sets", href: "/products/locket-sets", image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=500&fit=crop&q=80" },
  { name: "Rings", href: "/products/rings", image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=500&fit=crop&q=80" },
  { name: "Bracelet & Bangles", href: "/products/bracelet-bangles", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=500&fit=crop&q=80" },
  { name: "Watches", href: "/products/watches", image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=400&h=500&fit=crop&q=80" },
  { name: "Kids Corner", href: "/products/kids-corner", image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&h=500&fit=crop&q=80" },
];

// Shuffle function to randomize array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function HomePage() {
  const [bestSellers, setBestSellers] = useState<typeof products>([]);

  useEffect(() => {
    // Shuffle products on mount
    setBestSellers(shuffleArray(products).slice(0, 8));
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1920&h=1080&fit=crop&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-stone-900/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-amber-300 text-sm uppercase tracking-[0.3em] mb-4 font-semibold">
                New Collection 2026
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                Timeless Jewellery for
                <span className="text-amber-200 block mt-2">Everyday Elegance</span>
              </h1>
              <p className="text-stone-200 text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                Handpicked designs crafted for modern style. Discover our exquisite
                collection of premium jewellery pieces.
              </p>
              <Link
                href="/products"
                className="inline-block px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-semibold transition-all duration-300 uppercase tracking-wider text-sm shadow-lg hover:shadow-xl"
              >
                Shop Collection
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Image Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-stone-900 to-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-400 text-sm uppercase tracking-[0.2em] mb-3 font-semibold">
              Discover Elegance
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
              Timeless Beauty
            </h2>
          </div>

          <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-500/30">
            <Image
              src="/homepage image/homepage image.jpg"
              alt="Exquisite jewellery craftsmanship"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-600 text-sm uppercase tracking-[0.2em] mb-3 font-semibold">
              Browse by Category
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">
              Featured Categories
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, (max-width: 1024px) 25vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="text-white font-medium text-lg">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Kids Corner Highlighted Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-100 via-purple-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-square max-w-md mx-auto lg:max-w-full overflow-hidden rounded-2xl shadow-2xl border-4 border-pink-300">
                <Image
                  src="https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=800&h=800&fit=crop&q=80"
                  alt="Kids Corner - Adorable jewellery for young ones"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 50vw"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <p className="text-pink-600 text-sm uppercase tracking-[0.2em] mb-3 font-semibold">
                New & Exclusive
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-4">
                Kids Corner
              </h2>
              <p className="text-stone-600 text-base md:text-lg mb-6 max-w-lg mx-auto lg:mx-0">
                Delightful and playful jewellery pieces designed especially for your little ones. 
                Safe, comfortable, and beautifully crafted for young jewellery lovers.
              </p>
              <Link
                href="/products/kids-corner"
                className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold transition-all duration-300 uppercase tracking-wider text-sm shadow-lg hover:shadow-xl rounded-full"
              >
                Explore Kids Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-600 text-sm uppercase tracking-[0.2em] mb-3 font-semibold">
              Our Collection
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              Best Sellers
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Discover our most loved pieces, carefully selected for their timeless
              appeal and exceptional craftsmanship.
            </p>
          </div>

          <ProductGrid products={bestSellers} />

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block px-8 py-3 bg-gradient-to-r from-stone-900 to-stone-800 hover:from-stone-800 hover:to-stone-700 text-white font-semibold transition-all duration-300 uppercase tracking-wider text-sm shadow-md hover:shadow-lg"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 text-amber-600 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full shadow-sm">
                  {feature.icon === "diamond" && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4L3 5l5-5 5 5-2 2V3M19 3v4l-2-2 5-5 5 5-2-2V3M5 21v-4l2 2-5 5-5-5 2-2M19 21v-4l-2 2 5 5 5-5-2-2M12 7v10" />
                    </svg>
                  )}
                  {feature.icon === "truck" && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {feature.icon === "shield" && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {feature.icon === "heart" && (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-stone-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Banner */}
      <section className="py-12 bg-gradient-to-r from-green-700 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                Order directly on WhatsApp — Fast & Easy
              </h2>
              <p className="text-green-100">
                Get instant responses and personalized service
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-green-700 font-semibold rounded-full hover:bg-green-50 transition-all shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Order Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
