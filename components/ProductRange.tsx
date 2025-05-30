export default function ProductRange() {
  return (
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
              src="https://rukminim2.flixcart.com/image/850/1000/xif0q/shopsy-cereal-flake/l/i/s/200-raw-cornflakes-breakfast-cereal-maize-poha-ready-to-fry-corn-original-imagw3h5tu45dmh4.jpeg?q=20&crop=false"
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
  )
}
