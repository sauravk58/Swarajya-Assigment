"use client"
import { useState, useEffect } from "react"
import { Zap, Plane, Coffee, Salad } from "lucide-react"

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const useCases = [
    {
      icon: Zap,
      title: "Fuel",
      description: "Perfect energy boost for your daily activities and workout sessions.",
      color: "bg-yellow-500",
    },
    {
      icon: Plane,
      title: "Travel Buddy",
      description: "The ultimate travel companion! Lightweight, tasty, and satisfying for any trip.",
      color: "bg-blue-500",
    },
    {
      icon: Coffee,
      title: "Snack Attack",
      description: "Great for on-the-go! These protein-packed sticks satisfy midday cravings on your commute.",
      color: "bg-orange-500",
    },
    {
      icon: Salad,
      title: "Crunchy Salad",
      description: "Add a delightful crunch to salads. They pair well with greens, making every bite nutritious.",
      color: "bg-green-500",
    },
    {
      icon: Zap,
      title: "Pre-Workout",
      description: "Ideal pre-workout snack that provides sustained energy for your fitness routine.",
      color: "bg-purple-500",
    },
    {
      icon: Coffee,
      title: "Office Snack",
      description: "Perfect desk companion for busy professionals who need healthy snacking options.",
      color: "bg-red-500",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % useCases.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [useCases.length])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          
          <p className="text-green-600 font-semibold mb-2">SNACK TIME, ANYTIME!</p>

          <div className="flex items-center justify-center mb-6">
            
              <h2 className="text-4xl font-bold text-gray-800 mx-8">Creative Ways to Enjoy Soya Sticks & Raw Corn Flakes</h2>
            
          </div>
        

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
          >
            {[...useCases, ...useCases].map((useCase, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 px-3">
                <div className="bg-blue-50 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div
                    className={`${useCase.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{useCase.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {useCases.map((_, index) => (
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
      </div>
    </section>
  )
}
