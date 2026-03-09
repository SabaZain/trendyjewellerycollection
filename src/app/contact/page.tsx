"use client";

import Link from "next/link";

export default function ContactPage() {
  const phoneNumber1 = "923312806808"; // +92 331 2806808
  const phoneNumber2 = "923342929247"; // +92 334 2929247

  const handleWhatsAppOrder = (phoneNumber: string) => {
    const message = `Hi, I would like to place an order.

*Full Name:*
*Product Code Number:*
*Contact Number:*
*Complete Home Address:*

Please confirm availability and delivery details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            We&apos;re here to help you find the perfect piece
          </p>
        </div>
      </section>

      {/* Order Instructions Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-600 text-sm uppercase tracking-[0.2em] mb-3 font-semibold">
              Easy Ordering
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">
              Order via WhatsApp
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Placing an order is quick and easy. Simply send us a message on WhatsApp
              with your order details and we&apos;ll take care of the rest.
            </p>
          </div>

          {/* Instructions Card */}
          <div className="bg-gradient-to-br from-stone-50 to-white rounded-2xl p-8 md:p-12 mb-12 shadow-lg">
            <h3 className="text-xl font-bold text-stone-900 mb-6 text-center">
              To place an order on WhatsApp, please send:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </span>
                <div>
                  <p className="font-bold text-stone-900">Full Name</p>
                  <p className="text-sm text-stone-500">Your complete name as it should appear on the order</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <div>
                  <p className="font-bold text-stone-900">Product Code Number</p>
                  <p className="text-sm text-stone-500">The unique code of the item you want to order</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </span>
                <div>
                  <p className="font-bold text-stone-900">Contact Number</p>
                  <p className="text-sm text-stone-500">A phone number where we can reach you</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </span>
                <div>
                  <p className="font-bold text-stone-900">Complete Home Address</p>
                  <p className="text-sm text-stone-500">Full delivery address including postal code</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="text-center">
              <p className="text-stone-700 font-semibold mb-4">Select a number to order:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleWhatsAppOrder(phoneNumber1)}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Order on WhatsApp (1)
                </button>
                <button
                  onClick={() => handleWhatsAppOrder(phoneNumber2)}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Order on WhatsApp (2)
                </button>
              </div>
              <p className="text-stone-500 text-sm mt-4">
                Click any button above to start your order
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">WhatsApp No</h3>
              <p className="text-stone-600">+92 331 2806808</p>
              <p className="text-stone-600">+92 334 2929247</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Business Hours</h3>
              <p className="text-stone-600">Mon - Sat: 9AM - 11PM</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Location</h3>
              <p className="text-stone-600">Online Store - Worldwide Shipping</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
            Ready to find your perfect piece?
          </h2>
          <p className="text-amber-100 mb-8">
            Browse our collection and order directly on WhatsApp
          </p>
          <Link
            href="/products"
            className="inline-block px-8 py-3 bg-white text-amber-700 font-bold rounded-full hover:bg-amber-50 transition-all shadow-md hover:shadow-lg"
          >
            Browse Collection
          </Link>
        </div>
      </section>
    </>
  );
}
