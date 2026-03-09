import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-stone-900">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1920&h=600&fit=crop&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-stone-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            About Trendy Jewellery Collection
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            Crafting moments of beauty through elegant designs
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-amber-600 text-sm uppercase tracking-[0.2em] mb-3 font-semibold">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
                A Passion for
                <span className="text-amber-700"> Exquisite Jewellery</span>
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  At Trendy Jewellery Collection, we believe that every person deserves to feel extraordinary. 
                  Our journey began with a simple yet powerful vision: to sell premium, 
                  handcrafted jewellery accessible to everyone who appreciates fine craftsmanship.
                </p>
                <p>
                  As an online-based jewellery store, we&apos;ve eliminated the overhead costs
                  of traditional retail, passing those savings directly to you. This means
                  you get affordable luxury without compromising on quality or style.
                </p>
                <p>
                  Each piece in our collection is carefully selected and crafted with 
                  meticulous attention to detail. We work with skilled artisans who bring 
                  decades of expertise to create jewellery that stands the test of time.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about/Stainless Steel Locket Chain6.jpg"
                alt="Jewellery craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full flex items-center justify-center shadow-sm">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Quality Craftsmanship</h3>
              <p className="text-stone-600">
                Every piece is crafted with precision using premium materials, ensuring
                lasting beauty and durability.
              </p>
               </div>
               
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full flex items-center justify-center shadow-sm">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4L3 5l5-5 5 5-2 2V3M19 3v4l-2-2 5-5 5 5-2-2V3M5 21v-4l2 2-5 5-5-5 2-2M19 21v-4l-2 2 5 5 5-5-2-2M12 7v10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Affordable Luxury</h3>
              <p className="text-stone-600">
                Premium jewellery at accessible prices. We believe luxury should be 
                within reach for everyone.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full flex items-center justify-center shadow-sm">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Customer First</h3>
              <p className="text-stone-600">
                Your satisfaction is our priority. We&apos;re dedicated to providing
                exceptional service and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-semibold text-amber-700 mb-2">05+</p>
              <p className="text-stone-600">Years of Excellence</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-semibold text-amber-700 mb-2">05K+</p>
              <p className="text-stone-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-semibold text-amber-700 mb-2">100+</p>
              <p className="text-stone-600">Unique Designs</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-semibold text-amber-700 mb-2">100%</p>
              <p className="text-stone-600">Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
