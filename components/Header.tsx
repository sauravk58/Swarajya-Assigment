"use client"

import { Phone, Mail, Facebook, Linkedin, Twitter, Instagram, ChevronDown } from "lucide-react"

interface HeaderProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  return (
    <header className="bg-blue shadow-sm">
      {/* Top contact bar */}
      <div className="bg-gray-300 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gray-600" />
              <span>contact@proywant.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gray-600" />
              <span>+91 9075947090</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Facebook className="w-4 h-4 text-blue-600 hover:text-blue-700 cursor-pointer transition-colors" />
            <Twitter className="w-4 h-4 text-blue-400 hover:text-blue-500 cursor-pointer transition-colors" />
            <Instagram className="w-4 h-4 text-pink-600 hover:text-pink-700 cursor-pointer transition-colors" />
            <Linkedin className="w-4 h-4 text-blue-600 hover:text-blue-700 cursor-pointer transition-colors" />
          </div>

          <div className="flex items-center space-x-4">
            <span>Help</span>
            <span>Support</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-blue-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-700 cursor-pointer" onClick={() => setCurrentPage("home")}>
              Proywant International
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => setCurrentPage("home")}
                className={`font-medium transition-colors relative py-2 hover:border-t-2 hover:border-b-2 hover:border-blue-500 ${
                  currentPage === "home"
                    ?  "text-blue-600 border-t-2 border-b-2 border-blue-500"
                  : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage("about")}
                className={`font-medium transition-colors relative py-2 hover:border-t-2 hover:border-b-2 hover:border-blue-500 ${
                  currentPage === "about"
                    ?  "text-blue-600 border-t-2 border-b-2 border-blue-500"
                  : "text-gray-700 hover:text-blue-600"
                }`}
              >
                About
              </button>
              <button
                onClick={() => setCurrentPage("product")}
                className={`font-medium transition-colors relative py-2 hover:border-t-2 hover:border-b-2 hover:border-blue-500 ${
                  currentPage === "product"
                   ?  "text-blue-600 border-t-2 border-b-2 border-blue-500"
                  : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Product
              </button>

              {/* Explore Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center space-x-1 py-2 hover:border-t-2 hover:border-b-2 hover:border-blue-500">
                  <span>Explore</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Certificate
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Testimonial
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Blog
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Gallery
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCurrentPage("contact")}
                className={`font-medium transition-colors relative py-2 hover:border-t-2 hover:border-b-2 hover:border-blue-500 ${
                  currentPage === "contact"
                    ?  "text-blue-600 border-t-2 border-b-2 border-blue-500"
                  : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Contact
              </button>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 hover:border-t-2 hover:border-b-2 hover:border-blue-500"
              >
                Enquiry
              </a>

              {/* Language Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center space-x-1 py-2 hover:border-t-2 hover:border-b-2 hover:border-blue-500">
                  <span>Language</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      English
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Hindi
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Marathi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
