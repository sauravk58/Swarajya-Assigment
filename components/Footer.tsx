import { MapPin, Mail, Phone, Facebook, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1" />
                <span className="text-gray-300">
                  Plot No. 68 A/1, Layout No. 4, Baba Jarag Nagar, Kolhapur 416007, India.
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">contact@proywant.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+91 9075947090</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <Facebook className="w-6 h-6 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-pink-400 hover:text-pink-300 cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Product
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Admin
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Proywant International</h3>
            <p className="text-gray-300 mb-4">
              Proywant International is a leading import-export company committed to providing top-quality products and
              services across various industries. Our mission is to drive growth and establish a global network of
              trusted partners.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            Proywant International, All right reserved. | Designed By Swarajya Venture Tech
          </p>
        </div>
      </div>
    </footer>
  )
}
