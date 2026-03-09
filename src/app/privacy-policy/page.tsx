export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            Your privacy is important to us
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

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">1. Introduction</h2>
              <p className="text-stone-600 mb-4">
                Welcome to Trendy Jewellery Collection. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website.
              </p>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-stone-600 mb-4">We collect the following types of information:</p>
              <ul className="list-disc list-inside text-stone-600 space-y-2 mb-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and delivery address when you place an order</li>
                <li><strong>Order Information:</strong> Product details, order history, and payment information</li>
                <li><strong>Usage Data:</strong> How you interact with our website (pages visited, time spent, etc.)</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-stone-600 mb-4">We use your information to:</p>
              <ul className="list-disc list-inside text-stone-600 space-y-2 mb-4">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders via WhatsApp or phone</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Improve our website and services</li>
                <li>Send promotional offers (only with your consent)</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">4. Information Sharing</h2>
              <p className="text-stone-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only with:
              </p>
              <ul className="list-disc list-inside text-stone-600 space-y-2 mb-4">
                <li>Delivery partners to fulfill your orders</li>
                <li>Payment processors to complete transactions</li>
                <li>Legal authorities when required by law</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">5. Data Security</h2>
              <p className="text-stone-600 mb-4">
                We implement appropriate security measures to protect your personal information. However, please note that no method of transmission over the internet is 100% secure.
              </p>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">6. Your Rights</h2>
              <p className="text-stone-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-stone-600 space-y-2 mb-4">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of promotional communications</li>
              </ul>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">7. Cookies</h2>
              <p className="text-stone-600 mb-4">
                Our website uses cookies to enhance your browsing experience. You can disable cookies in your browser settings, but this may affect website functionality.
              </p>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">8. Third-Party Links</h2>
              <p className="text-stone-600 mb-4">
                Our website may contain links to third-party sites (e.g., WhatsApp for ordering). We are not responsible for the privacy practices of these external sites.
              </p>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">9. Changes to This Policy</h2>
              <p className="text-stone-600 mb-4">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>

              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4">10. Contact Us</h2>
              <p className="text-stone-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none text-stone-600 space-y-2 mb-4">
                <li><strong>WhatsApp:</strong> +92 331 2806808 / +92 334 2929247</li>
              </ul>

              <div className="mt-12 p-6 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-amber-800 text-sm">
                  <strong>Note:</strong> By using our website and placing orders, you agree to the terms of this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
