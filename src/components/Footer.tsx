import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-extrabold mb-4 text-amber-200">Trendy Jewellery Collection</h2>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Discover timeless elegance with our curated collection of premium
              jewellery. Each piece is crafted with care to celebrate your unique style.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {["instagram", "facebook", "twitter", "pinterest"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-stone-800 hover:bg-amber-600 transition-colors flex items-center justify-center"
                  aria-label={social}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-amber-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-stone-400 hover:text-white transition-colors text-sm font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-400 hover:text-white transition-colors text-sm font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-stone-400 hover:text-white transition-colors text-sm font-medium">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-400 hover:text-white transition-colors text-sm font-medium">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-amber-200">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/earrings" className="text-stone-400 hover:text-white transition-colors text-sm font-medium">
                  Earrings
                </Link>
              </li>
              <li>
                <Link href="/products/necklace" className="text-stone-400 hover:text-white transition-colors text-sm font-medium">
                  Necklace
                </Link>
              </li>
              <li>
                <Link href="/products/locket-sets" className="text-stone-400 hover:text-white transition-colors text-sm font-medium">
                  Locket Sets
                </Link>
              </li>
              <li>
                <Link href="/products/rings" className="text-stone-400 hover:text-white transition-colors text-sm font-medium">
                  Rings
                </Link>
              </li>
              <li>
                <Link href="/products/bracelet-bangles" className="text-stone-400 hover:text-white transition-colors text-sm font-medium">
                  Bracelet & Bangles
                </Link>
              </li>
              <li>
                <Link href="/products/watches" className="text-stone-400 hover:text-white transition-colors text-sm font-medium">
                  Watches
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-amber-200">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <a href="https://wa.me/923312806808" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors text-sm">
                  +92 331 2806808
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <a href="https://wa.me/923342929247" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors text-sm">
                  +92 334 2929247
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">
              © {currentYear} Trendy Jewellery Collection. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy-policy" className="text-stone-500 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-stone-500 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
