import { CheckCircle, Truck, Users, DollarSign } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: CheckCircle,
      title: "100% Satisfaction",
      description: "Guaranteed to meet expectations with quality.",
      iconColor: "bg-green-500",
      cardColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Truck,
      title: "Reliable Shipping",
      description: "Enjoy fast, secure shipping for all our products.",
      iconColor: "bg-blue-500",
      cardColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Our experts are here to assist you every step of the way.",
      iconColor: "bg-yellow-500",
      cardColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      icon: DollarSign,
      title: "Competitive Prices",
      description: "High-quality products at prices that work for you.",
      iconColor: "bg-red-500",
      cardColor: "bg-red-50",
      borderColor: "border-red-200",
    },
  ]

  return (
    <section className="relative -mt-20 pb-16 z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.cardColor} ${feature.borderColor} rounded-xl shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-xl transition-all duration-300 border-2`}
            >
              <div
                className={`${feature.iconColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
