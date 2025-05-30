"use client"

export default function CountriesSection() {
  const countries = [
    { name: "United States", image: "https://i.ndtvimg.com/i/2016-09/statue-of-liberty_650x400_81474551505.jpg" },
    { name: "United Kingdom", image: "https://plus.unsplash.com/premium_photo-1661962726504-fa8f464a1bb8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdGVkJTIwa2luZ2RvbXxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Germany", image: "https://etimg.etb2bimg.com/photo/93896068.cms" },
    { name: "india", image: "https://www.india-briefing.com/news/wp-content/uploads/2019/05/India-Briefing-Indias-Top-Investment-Destinations.jpg" },
   
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">COUNTRIES WE EXPORT TO</h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Soya Sticks & Raw Corn Flakes Available in These Countries
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            We are proud to offer our premium soya sticks and raw corn flakes to a variety of countries. Our commitment
            to quality and customer satisfaction drives us to expand our reach globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={country.image || "/placeholder.svg"}
                alt={country.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <h4 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {country.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Explore More Countries
          </button>
        </div>
      </div>
    </section>
  )
}
