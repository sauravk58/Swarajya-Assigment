"use client"

import { Home, FileText, Package } from "lucide-react"
import ProductRange from "./ProductRange"

interface ProductPageProps {
  setCurrentPage?: (page: string) => void
}

export default function ProductPage({ setCurrentPage }: ProductPageProps) {
  return (
    <div>
      {/* Product Banner with Image Background */}
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
            <h1 className="text-5xl font-bold mb-8 drop-shadow-lg">Our Products</h1>

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

      <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold mb-2">OUR PRODUCT RANGE</p>

          {/* Heading with decorative lines */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-500 to-green-500 max-w-32"></div>
            <h2 className="text-4xl font-bold text-gray-800 mx-8">Discover Proywant's Premium Products</h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-green-500 to-green-500 max-w-32"></div>
          </div>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At Proywant International, we bring you the finest selection of products, crafted with care, ensuring top
            quality and sustainability in every bite. Explore our range and experience the best in healthy and delicious
            snacks!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://india.neelamfoodland.in/cdn/shop/products/IMG_9938_80ae712e-f1e2-4f73-8a76-942e0cd88d88_800x.jpg?v=1734379253"
              alt="soya products"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Soya Sticks</h3>
            <p className="text-lg text-green-600 mb-6 font-medium">
              Crunchy, protein-packed soya sticks: a healthy, delicious snack perfect for guilt-free munching anytime!
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Looking for a snack that’s both tasty and healthy? Try our crunchy, protein-packed soya sticks! Made from premium ingredients, they’re the perfect guilt-free snack for any occasion.
            </p>

            <div>
              <h4 className="text-xl font-semibold mb-4">Creative Ways to Enjoy:</h4>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold">1. Snack Attack:</span>
                  <span className="text-gray-600">
                    {" "}
                   Perfect for on-the-go munching, grab a handful soya sticks to satisfy those midday cravings.
                  </span>
                </div>
                <div>
                  <span className="font-semibold">2. Crunchy Salad Topper: </span>
                  <span className="text-gray-600">
                    {" "}
                    Add a delightful crunch to your salads by tossing in some soya sticks.
                  </span>
                </div>
                <div>
                  <span className="font-semibold">3. Movie Night Munchies:</span>
                  <span className="text-gray-600">
                    {" "}
                   Serve soya sticks alongside your favourite dips like hummus or guacamole.
                  </span>
                </div>
                <div>
                  <span className="font-semibold">4. Breakfast Boost:</span>
                  <span className="text-gray-600">
                    {" "}
                  Sprinkle soya sticks on top of your yogurt or smoothie bowl for an extra protein punch.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
       <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://media.istockphoto.com/id/175418464/photo/bowl-of-corn-flakes-with-spoon.jpg?s=612x612&w=0&k=20&c=Zt0TlXEMcU1v8bF-kY7jqN1ik1IIjWCc1J-BDzLDPe4="
              alt="Raw corn flakes in bowl"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Raw Corn Flakes</h3>
            <p className="text-lg text-green-600 mb-6 font-medium">
              Naturally delicious raw corn flakes: a perfect, energizing choice for a balanced and flavourful start!
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Looking for a nutritious and versatile snack or breakfast option? Try our naturally delicious raw corn
              flakes! Made from the finest corn, they provide a perfect balance of taste and health.
            </p>

            <div>
              <h4 className="text-xl font-semibold mb-4">Creative Ways to Enjoy:</h4>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold">1. Corn Flakes Chivda:</span>
                  <span className="text-gray-600">
                    {" "}
                    A crunchy and flavorful Indian snack made with roasted corn flakes, peanuts, and spices.
                  </span>
                </div>
                <div>
                  <span className="font-semibold">2. Breakfast Pudding:</span>
                  <span className="text-gray-600">
                    {" "}
                    Combine raw corn flakes with milk, fruits, and nuts for a hearty and energizing breakfast pudding.
                  </span>
                </div>
                <div>
                  <span className="font-semibold">3. Savory Snack Bars:</span>
                  <span className="text-gray-600">
                    {" "}
                    Make delicious snack bars by mixing corn flakes with honey, dried fruits, and seeds.
                  </span>
                </div>
                <div>
                  <span className="font-semibold">4. Corn Flakes Coating:</span>
                  <span className="text-gray-600">
                    {" "}
                    Use crushed corn flakes as a coating for crispy baked or fried dishes.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

     
    </div>
  )
}
