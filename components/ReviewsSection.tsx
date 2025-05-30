"use client"
import { useState, useEffect } from "react"
import { Star } from "lucide-react"

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      name: "Jane Smith",
      role: "Nutritionist",
      review:
        "The raw corn flakes from Proywant International have truly transformed my breakfast routine. They are incredibly fresh, delightfully crunchy, and perfect for a morning energy boost!",
      image: "https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Michael Brown",
      role: "Entrepreneur",
      review:
        "I've tried many different snacks, but nothing beats the quality and taste of Proywant's products. Their strong commitment to sustainability and health is truly impressive.",
      image: "https://www.shutterstock.com/image-photo/man-suit-looks-camera-smiles-260nw-606177257.jpg",
    },
    {
      name: "John Doe",
      role: "Fitness Enthusiast",
      review:
        "Proywant's Soya Sticks are an absolute game-changer! Not only are they delicious, but they also provide a healthy, guilt-free snack option that fits perfectly into my busy lifestyle.",
      image: "https://t3.ftcdn.net/jpg/06/50/56/80/360_F_650568058_q6KruAvlT4w7RahAGwIwgIY8ZjIkGAYg.jpg",
    },
    {
      name: "Sarah Wilson",
      role: "Chef",
      review:
        "As a professional chef, I appreciate the quality and versatility of Proywant's products. They add the perfect crunch to my dishes and are loved by all my customers.",
      image: "https://www.digitalstrike.com/wp-content/uploads/2018/09/testimonial-blog-post.jpg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [reviews.length])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold mb-2">OUR CLIENT REVIEWS</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At Proywant International, we are committed to delivering excellence and satisfaction. Here's what some of
            our valued customers have to say about their experience with our products and services.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-3">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow h-full overflow-hidden">
                  {/* Blue header section */}
                  <div className="bg-blue-500 p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center">
                      <img
                        src={review.image || "/placeholder.svg"}
                        alt={review.name}
                        className="w-12 h-12 rounded-full mr-4 border-2 border-white"
                      />
                      <div>
                        <h4 className="font-semibold text-white">{review.name}</h4>
                        <p className="text-blue-100 text-sm">{review.role}</p>
                      </div>
                    </div>
                  </div>
                  {/* White content section */}
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">"{review.review}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
