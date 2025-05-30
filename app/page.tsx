"use client"
import { useState } from "react"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import AboutSection from "@/components/AboutSection"
import ProductShowcase from "@/components/ProductShowcase"
import ProductRange from "@/components/ProductRange"
import CountriesSection from "@/components/CountriesSection"
import ReviewsSection from "@/components/ReviewsSection"
import Footer from "@/components/Footer"
import AboutPage from "@/components/AboutPage"
import ProductPage from "@/components/ProductPage"
import ContactPage from "@/components/ContactPage"
import ScrollToTop from "@/components/ScrollToTop"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <AboutPage setCurrentPage={setCurrentPage} />
      case "product":
        return <ProductPage setCurrentPage={setCurrentPage} />
      case "contact":
        return <ContactPage setCurrentPage={setCurrentPage} />
      default:
        return (
          <>
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <ProductShowcase />
            <ProductRange />
            <CountriesSection />
            <ReviewsSection />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
      <ScrollToTop />
    </div>
  )
}
