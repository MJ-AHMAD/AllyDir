import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Home, Plane, RouteIcon as Road } from "lucide-react"

export default function InfrastructureHub() {
  const majorProjects = [
    {
      name: "Marine Drive Road",
      status: "Partially Complete",
      description:
        "134 km road connecting Cox's Bazar to Teknaf along the coastline, enhancing tourism and connectivity.",
    },
    {
      name: "Cox's Bazar Airport Expansion",
      status: "Ongoing",
      description: "Upgrading to international standards with extended runway and modern terminal facilities.",
    },
    {
      name: "Matarbari Deep Sea Port",
      status: "Under Construction",
      description: "Major deep-sea port with coal-fired power plant, industrial zone, and LNG terminal.",
    },
    {
      name: "Cox's Bazar-Chittagong Highway Expansion",
      status: "Ongoing",
      description: "Widening and upgrading the main highway connecting Cox's Bazar to Chittagong.",
    },
  ]

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Infrastructure Hub - Cox's Bazar</h1>
      <p className="text-lg mb-8">
        Cox's Bazar is undergoing significant infrastructure development to support tourism, economic growth, and
        improved quality of life. This hub provides information about major infrastructure projects, urban development,
        and future plans.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Road className="h-5 w-5" />
              Transportation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Major transportation infrastructure includes the Cox's Bazar Airport, the Chittagong-Cox's Bazar Highway,
              and the Marine Drive Road. The road network is being expanded and upgraded to accommodate increasing
              traffic and improve connectivity to remote areas and tourist destinations.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Urban Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Urban infrastructure in Cox's Bazar town is being modernized with improved water supply systems, drainage
              networks, and waste management facilities. The town's master plan includes designated zones for
              commercial, residential, and tourism development with proper urban planning.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plane className="h-5 w-5" />
              Tourism Infrastructure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Tourism-specific infrastructure includes beachfront development, tourist information centers, and
              recreational facilities. Hotel and resort zones are being developed with proper regulations to ensure
              sustainable tourism growth while preserving the natural beauty of the area.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Housing and Utilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Housing development includes both urban residential areas and rural housing improvement programs. Utility
              infrastructure such as electricity, telecommunications, and internet connectivity is being expanded to
              cover more areas, with special focus on renewable energy solutions.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Major Infrastructure Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Project</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                {majorProjects.map((project) => (
                  <tr key={project.name} className="border-b">
                    <td className="p-2 font-medium">{project.name}</td>
                    <td className="p-2">{project.status}</td>
                    <td className="p-2">{project.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Infrastructure Challenges and Solutions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-1">Challenges:</h3>
              <ul className="space-y-1">
                <li>Vulnerability to natural disasters including cyclones and flooding</li>
                <li>Rapid urbanization leading to unplanned development</li>
                <li>Environmental impacts of large infrastructure projects</li>
                <li>Meeting the needs of both local population and tourism sector</li>
                <li>Infrastructure maintenance in coastal and high-rainfall conditions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Solutions and Approaches:</h3>
              <ul className="space-y-1">
                <li>Disaster-resilient infrastructure design and construction</li>
                <li>Integrated urban planning with environmental considerations</li>
                <li>Public-private partnerships for infrastructure development</li>
                <li>Community involvement in planning and implementation</li>
                <li>Sustainable and green infrastructure initiatives</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

