"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "https://thumbs.dreamstime.com/b/container-cargo-ship-global-business-import-export-commerce-trade-logistic-transportation-worldwide-boat-open-sea-176863923.jpg",
      title: "Discover Global Opportunities with Soya Stick Export",
      subtitle: "Premium Quality Soya Sticks for Global Markets",
    },
    {
      image: "https://media.istockphoto.com/id/175418464/photo/bowl-of-corn-flakes-with-spoon.jpg?s=612x612&w=0&k=20&c=Zt0TlXEMcU1v8bF-kY7jqN1ik1IIjWCc1J-BDzLDPe4=",
      title: "The Perfect Blend of Crunch and Nutrition",
      subtitle: "Enjoy the wholesome goodness of our corn flakes, packed with essential vitamins and minerals to kickstart your day!",
    },
    {
      image: "https://india.neelamfoodland.in/cdn/shop/products/IMG_9938_80ae712e-f1e2-4f73-8a76-942e0cd88d88_800x.jpg?v=1734379253",
      title: "Export High-Quality Soya Sticks with Us",
      subtitle: "We offer a wide range of soya stick products, ensuring that our customers receive the best quality products. Our team is dedicated to providing excellent customer service and support.",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-80 drop-shadow-md">{slides[currentSlide].subtitle}</p>


          {/* WhatsApp Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-3 mx-auto transition-colors shadow-lg">
            <MessageCircle className="w-6 h-6" />
            <span>Contact us on WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
