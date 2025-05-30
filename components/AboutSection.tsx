import { Leaf, Award } from "lucide-react"

export default function AboutSection() {
  return (
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
  )
}
