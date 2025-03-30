import { Users, School, Award, Clock } from "lucide-react"

export default function StatisticsSection() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "125,000+",
      label: "People Impacted",
      description: "Lives positively affected through our initiatives",
    },
    {
      icon: <School className="h-8 w-8 text-primary" />,
      value: "85+",
      label: "Schools Supported",
      description: "Educational institutions receiving our assistance",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "12",
      label: "Major Projects",
      description: "Significant development initiatives in progress",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      value: "5+ Years",
      label: "Of Service",
      description: "Dedicated to Cox's Bazar's development",
    },
  ]

  return (
    <div className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Measurable results that demonstrate our commitment to transforming Cox's Bazar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-lg font-semibold mb-2">{stat.label}</p>
              <p className="text-gray-500 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

