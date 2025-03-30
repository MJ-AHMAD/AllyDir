import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, Microscope, Users } from "lucide-react"

export default function ResearchHub() {
  const researchAreas = [
    {
      title: "Marine Biodiversity",
      icon: Microscope,
      description: "Research on marine ecosystems, coral reefs, and coastal biodiversity in the Bay of Bengal.",
    },
    {
      title: "Climate Change Adaptation",
      icon: FileText,
      description:
        "Studies on climate change impacts, vulnerability assessment, and adaptation strategies for coastal communities.",
    },
    {
      title: "Sustainable Tourism",
      icon: Users,
      description:
        "Research on tourism carrying capacity, environmental impacts, and sustainable tourism development models.",
    },
    {
      title: "Socioeconomic Studies",
      icon: BookOpen,
      description: "Research on livelihoods, poverty reduction, and socioeconomic development in Cox's Bazar district.",
    },
  ]

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Research Hub - Cox's Bazar</h1>
      <p className="text-lg mb-8">
        Cox's Bazar serves as an important research site for various disciplines due to its unique coastal ecosystem,
        socioeconomic dynamics, and environmental challenges. This hub highlights research activities, institutions, and
        findings relevant to the district.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {researchAreas.map((area) => (
          <Card key={area.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <area.icon className="h-5 w-5" />
                {area.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{area.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Research Institutions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li>
              <div className="font-medium">Cox's Bazar Research Center, Bangladesh Fisheries Research Institute</div>
              <div className="text-sm text-muted-foreground">
                Focuses on marine fisheries research, aquaculture, and coastal ecosystem studies.
              </div>
            </li>
            <li>
              <div className="font-medium">Institute of Marine Sciences, University of Chittagong</div>
              <div className="text-sm text-muted-foreground">
                Conducts research on oceanography, marine biology, and coastal management.
              </div>
            </li>
            <li>
              <div className="font-medium">Bangladesh Forest Research Institute, Cox's Bazar Station</div>
              <div className="text-sm text-muted-foreground">
                Researches coastal forest ecosystems, mangrove conservation, and afforestation techniques.
              </div>
            </li>
            <li>
              <div className="font-medium">Center for Natural Resource Studies</div>
              <div className="text-sm text-muted-foreground">
                Focuses on natural resource management, community-based approaches, and policy research.
              </div>
            </li>
            <li>
              <div className="font-medium">International Centre for Climate Change and Development</div>
              <div className="text-sm text-muted-foreground">
                Studies climate change impacts and adaptation strategies in coastal areas.
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Research Findings</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li>
              <div className="font-medium">Coral Reef Health Assessment (2023)</div>
              <div className="text-sm text-muted-foreground">
                Documented declining coral health around St. Martin's Island due to rising sea temperatures and tourism
                pressure.
              </div>
            </li>
            <li>
              <div className="font-medium">Coastal Erosion Patterns (2022)</div>
              <div className="text-sm text-muted-foreground">
                Mapped erosion hotspots along Cox's Bazar coastline and identified natural and anthropogenic factors.
              </div>
            </li>
            <li>
              <div className="font-medium">Tourism Impact Study (2023)</div>
              <div className="text-sm text-muted-foreground">
                Analyzed economic benefits and environmental costs of tourism growth in Cox's Bazar.
              </div>
            </li>
            <li>
              <div className="font-medium">Mangrove Restoration Success Rates (2022)</div>
              <div className="text-sm text-muted-foreground">
                Evaluated different mangrove restoration techniques and their effectiveness in coastal protection.
              </div>
            </li>
            <li>
              <div className="font-medium">Socioeconomic Impact of Rohingya Influx (2023)</div>
              <div className="text-sm text-muted-foreground">
                Assessed changes in local economy, environment, and social dynamics following the refugee crisis.
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

