"use client";

import { products } from "@/data/products";
import ProductGrid from "@/components/ui/ProductGrid";

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-stone-900">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1920&h=600&fit=crop&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-stone-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4">
            All Products
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            Browse our complete collection of premium jewellery pieces
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid products={products} />
        </div>
      </section>
    </>
  );
}
