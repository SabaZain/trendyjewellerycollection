export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            Rules and guidelines for using our website
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-stone max-w-none">
              <p className="text-stone-600 mb-6">
                Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-stone-600 mb-4">
                By accessing and using the Trendy Jewellery Collection website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">2. Use of Website</h2>
              <p className="text-stone-600 mb-4">You agree to:</p>
              <ul className="list-disc list-inside text-stone-600 space-y-2 mb-4">
                <li>Use the website only for lawful purposes</li>
                <li>Provide accurate and complete information when placing orders</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not use the website in any way that could damage or impair its functionality</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">3. Product Information</h2>
              <p className="text-stone-600 mb-4">
                We strive to provide accurate product descriptions, images, and pricing. However:
              </p>
              <ul className="list-disc list-inside text-stone-600 space-y-2 mb-4">
                <li>Actual product colors may vary slightly from images due to lighting and screen settings</li>
                <li>Product availability is subject to change without notice</li>
                <li>We reserve the right to correct any errors in pricing or descriptions</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">4. Ordering and Payment</h2>
              <p className="text-stone-600 mb-4">
                To place an order:
              </p>
              <ul className="list-disc list-inside text-stone-600 space-y-2 mb-4">
                <li>Orders must be placed via WhatsApp with complete details (name, product code, address, contact number)</li>
                <li>All orders are subject to availability and confirmation</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Payment must be made as instructed (cash on delivery or advance payment)</li>
                <li>Prices are in Pakistani Rupees (PKR) and include applicable taxes</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">5. Shipping and Delivery</h2>
              <ul className="list-disc list-inside text-stone-600 space-y-2 mb-4">
                <li>Free shipping on orders over Rs. 3000</li>
                <li>Delivery times are estimates and not guaranteed</li>
                <li>We ship within Pakistan and internationally (where available)</li>
                <li>Risk of loss passes to you upon delivery to the carrier</li>
                <li>You are responsible for providing accurate delivery information</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">6. Exchange Policy</h2>
              <p className="text-stone-600 mb-4">
                Our exchange policy:
              </p>
              <ul className="list-disc list-inside text-stone-600 space-y-2 mb-4">
                <li>Items can be exchanged within 7 days of delivery</li>
                <li>Items must be in original, unworn condition with tags attached</li>
                <li>Custom or personalized items cannot be exchanged</li>
                <li>A small exchange/handling fee may apply for exchanges</li>
                <li>Exchange shipping costs are the responsibility of the customer</li>
                <li>Subject to product availability for exchange</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">7. Product Care</h2>
              <p className="text-stone-600 mb-4">
                To maintain the beauty of your jewellery:
              </p>
              <ul className="list-disc list-inside text-stone-600 space-y-2 mb-4">
                <li>Avoid contact with water, perfumes, and chemicals</li>
                <li>Store in a cool, dry place</li>
                <li>Clean gently with a soft cloth</li>
                <li>Remove before swimming, bathing, or exercising</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">8. Intellectual Property</h2>
              <p className="text-stone-600 mb-4">
                All content on this website (images, logos, text, designs) is the property of Trendy Jewellery Collection and is protected by copyright laws. You may not use, reproduce, or distribute any content without our written permission.
              </p>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">9. Limitation of Liability</h2>
              <p className="text-stone-600 mb-4">
                Trendy Jewellery Collection shall not be liable for:
              </p>
              <ul className="list-disc list-inside text-stone-600 space-y-2 mb-4">
                <li>Any indirect, incidental, or consequential damages</li>
                <li>Loss of data or profits</li>
                <li>Delays or failures in delivery beyond our control</li>
                <li>Misuse of products resulting in injury or damage</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">10. Modifications to Service</h2>
              <p className="text-stone-600 mb-4">
                We reserve the right to modify or discontinue any part of our website or services at any time without prior notice.
              </p>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">11. Governing Law</h2>
              <p className="text-stone-600 mb-4">
                These Terms of Service shall be governed by and construed in accordance with the laws of Pakistan.
              </p>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">12. Contact Information</h2>
              <p className="text-stone-600 mb-4">
                For any questions regarding these Terms of Service, please contact us:
              </p>
              <ul className="list-none text-stone-600 space-y-2 mb-4">
                <li><strong>WhatsApp:</strong> +92 331 2806808 / +92 334 2929247</li>
              </ul>

              <div className="mt-12 p-6 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-amber-800 text-sm">
                  <strong>Note:</strong> By placing an order with Trendy Jewellery Collection, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
