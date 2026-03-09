"use client";

import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const phoneNumber = "923312806808"; // +92 331 2806808

  const handleWhatsAppOrder = () => {
    const message = `Hi, I would like to order:

*Product Name:* ${product.name}
*Product Code:* ${product.code}
*Price:* Rs. ${product.price.toLocaleString()}
*Image:* ${product.image}

Please confirm availability and delivery details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* WhatsApp Button Overlay */}
        <button
          onClick={handleWhatsAppOrder}
          className="absolute bottom-3 right-3 w-11 h-11 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transform translate-y-14 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
          aria-label="Order on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-stone-500 text-xs uppercase tracking-wider mb-1">
          {product.code}
        </p>
        <h3 className="text-stone-900 font-medium text-sm md:text-base mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-amber-700 font-semibold text-base md:text-lg">
          Rs. {product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
