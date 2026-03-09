"use client";

import { products } from "@/data/products";
import ProductGrid from "@/components/ui/ProductGrid";

interface CategoryPageProps {
  category: string;
  title: string;
  description: string;
  backgroundImage: string;
}

export default function CategoryPage({
  category,
  title,
  description,
  backgroundImage,
}: CategoryPageProps) {
  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-stone-900">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
            }}
          />
          <div className="absolute inset-0 bg-stone-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white mb-4">
            {title}
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryProducts.length > 0 ? (
            <ProductGrid products={categoryProducts} />
          ) : (
            <div className="text-center py-16">
              <p className="text-stone-500 text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
