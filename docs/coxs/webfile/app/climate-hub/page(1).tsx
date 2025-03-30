import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, CloudRain, Sun, Wind } from "lucide-react"

export default function ClimateHub() {
  const seasons = [
    {
      name: "Winter (December-February)",
      icon: Cloud,
      description:
        "Mild and dry with temperatures ranging from 15°C to 26°C. Clear skies and low humidity make it the most pleasant season for tourists.",
      precipitation: "Low",
    },
    {
      name: "Summer (March-May)",
      icon: Sun,
      description:
        "Hot and humid with temperatures ranging from 25°C to 34°C. Occasional thunderstorms occur towards the end of May.",
      precipitation: "Medium",
    },
    {
      name: "Monsoon (June-September)",
      icon: CloudRain,
      description:
        "Heavy rainfall with temperatures ranging from 24°C to 30°C. The region receives about 80% of its annual rainfall during this period.",
      precipitation: "Very High",
    },
    {
      name: "Autumn (October-November)",
      icon: Wind,
      description:
        "Gradually decreasing rainfall and humidity with temperatures ranging from 20°C to 30°C. The weather becomes more pleasant.",
      precipitation: "Medium to Low",
    },
  ]

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Climate Hub - Cox's Bazar</h1>
      <p className="text-lg mb-8">
        Cox's Bazar has a tropical monsoon climate with distinct seasons. This hub provides information about the local
        climate, weather patterns, and climate change impacts on the region.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {seasons.map((season) => (
          <Card key={season.name}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <season.icon className="h-5 w-5" />
                {season.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{season.description}</p>
              <p>
                <strong>Precipitation:</strong> {season.precipitation}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Climate Change Impacts</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Cox's Bazar is vulnerable to climate change impacts due to its coastal location. Some of the observed and
            projected impacts include:
          </p>
          <ul className="space-y-2">
            <li>Sea level rise threatening coastal areas and infrastructure</li>
            <li>Increased frequency and intensity of cyclones and storm surges</li>
            <li>Coastal erosion affecting beaches and settlements</li>
            <li>Saltwater intrusion into freshwater sources</li>
            <li>Changes in rainfall patterns affecting agriculture and water resources</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Climate Adaptation Initiatives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>Coastal afforestation programs to reduce erosion and storm impacts</li>
            <li>Construction of cyclone shelters and early warning systems</li>
            <li>Promotion of climate-resilient agriculture practices</li>
            <li>Rainwater harvesting and sustainable water management</li>
            <li>Community-based disaster risk reduction programs</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

