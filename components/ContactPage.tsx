"use client"

import { MapPin, Phone, Send, Home, FileText, MessageSquare } from "lucide-react"

interface ContactPageProps {
  setCurrentPage?: (page: string) => void
}

export default function ContactPage({ setCurrentPage }: ContactPageProps) {
  return (
    <div>
      {/* Contact Banner with Image Background */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://thumbs.dreamstime.com/b/container-cargo-ship-global-business-import-export-commerce-trade-logistic-transportation-worldwide-boat-open-sea-176863923.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-8 drop-shadow-lg">Contact Us</h1>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setCurrentPage?.("home")}
                className="flex items-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg transition-all backdrop-blur-sm"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <span className="text-white">/</span>
              <button className="flex items-center space-x-2 bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                <FileText className="w-4 h-4" />
                <span>Pages</span>
              </button>
              <span className="text-white">/</span>
              <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg">
                <MessageSquare className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Heading */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800">Quick Contact</h2>
          </div>
        </div>
      </section>

      {/* Contact Section - Two Column Layout */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section */}
            <div className="space-y-8">
              {/* Have Questions Heading */}
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Have Questions? Feel Free to Reach Out!</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Proywant International, we're here to assist you. Whether you have inquiries about our products or
                  need support, don't hesitate to get in touch with us!
                </p>
              </div>

              {/* Location Details */}
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">Location</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Plot No. 68 A/1, Layout No. 4, Baba Jarag Nagar,
                    <br />
                    Kolhapur 416007, India.
                  </p>
                </div>
              </div>

              {/* Separator Line */}
              <div className="border-t border-gray-300"></div>

              {/* Quick Contact */}
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">Quick Contact</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      <span className="font-medium">Phone:</span>
                      <br />
                      +91 9075947090
                    </p>
                    <p>
                      <span className="font-medium">Email:</span>
                      <br />
                      contact@proywant.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Send Message Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Send Message</h3>
              <form className="space-y-6">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Row 2: Phone and Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your country"
                    />
                  </div>
                </div>

                {/* Row 3: Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter message subject"
                  />
                </div>

                {/* Row 4: Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your message here..."
                  ></textarea>
                </div>

                {/* Row 5: Send Button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us on Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Us on Map</h2>
            <p className="text-xl text-gray-600">Visit our office for direct consultation and product viewing</p>
          </div>

          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center shadow-md">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive Map</p>
              <p className="text-gray-500">Google Maps integration coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
