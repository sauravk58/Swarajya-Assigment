import { Target, Eye, Leaf, Award, Users, Globe, ArrowRight } from "lucide-react"
import { Home, FileText, Package } from "lucide-react"

interface ProductPageProps {
  setCurrentPage?: (page: string) => void
}

export default function AboutPage({ setCurrentPage }: ProductPageProps) {
  return (
    <div>
      {/* About Banner with Image Background */}
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
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">About Us</h1>
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
                <Package className="w-4 h-4" />
                <span>Product</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold mb-2">ABOUT THE COMPANY</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Your Trusted Soya Stick Exporters</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Images */}
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://india.neelamfoodland.in/cdn/shop/products/IMG_9938_80ae712e-f1e2-4f73-8a76-942e0cd88d88_800x.jpg?v=1734379253"
                  alt="Soya products"
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
                <img
                  src="https://media.istockphoto.com/id/175418464/photo/bowl-of-corn-flakes-with-spoon.jpg?s=612x612&w=0&k=20&c=Zt0TlXEMcU1v8bF-kY7jqN1ik1IIjWCc1J-BDzLDPe4="
                  alt="Corn flakes"
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
                <img
                  src="https://evolvesnacks.com/cdn/shop/files/soya-stick-875424_1024x1024.jpg?v=1720083699"
                  alt="Quality products"
                  className="rounded-lg shadow-md w-full h-64 object-cover col-span-2"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2">
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Welcome to Proywant International, where exceptional quality in the export-import sector is our top
                priority. We are committed to meeting the diverse needs of our clients while ensuring the highest
                standards of quality and sustainability.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Passionate about building global partnerships, we focus on trust, transparency, and shared success. Our
                dedication to reliable products and services drives us to create a positive impact in every interaction.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At Proywant International, collaboration and innovation are at the core of our mission. We continually
                improve to meet the evolving market landscape, helping you achieve your business goals while making a
                difference.
              </p>

              {/* Company Highlights */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Our Commitment</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Leaf className="w-8 h-8 text-green-500" />
                    <div>
                      <span className="font-semibold block">Natural Ingredients</span>
                      <span className="text-sm text-gray-600">100% natural and organic</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-blue-500" />
                    <div>
                      <span className="font-semibold block">Quality Assurance</span>
                      <span className="text-sm text-gray-600">Certified quality standards</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - Corrected Layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Upper Section - Mission and Vision Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Mission - Left */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-green-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                To provide premium quality soya sticks and corn flakes to global markets while maintaining the highest
                standards of food safety, sustainability, and customer satisfaction. We strive to build lasting
                partnerships that drive mutual growth and success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Customer Focus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Quality Excellence</span>
                </div>
              </div>
            </div>

            {/* Vision - Right */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Eye className="w-12 h-12 text-blue-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                To become the leading global exporter of healthy snack foods, recognized for our commitment to quality,
                innovation, and sustainable practices. We envision a world where healthy eating is accessible to
                everyone, everywhere.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Global Reach</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Sustainability</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lower Section - Our Core Values */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our business decisions and shape our company culture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Quality</h4>
                <p className="text-gray-600">Uncompromising commitment to delivering the highest quality products</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Integrity</h4>
                <p className="text-gray-600">Building trust through transparent and ethical business practices</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Innovation</h4>
                <p className="text-gray-600">Continuously improving our products and processes for better outcomes</p>
              </div>
            </div>

            {/* Read More Button */}
            <div className="text-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 mx-auto">
                <span>Read More</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
