import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Anchor, Fish, Shield, Waves } from "lucide-react"

export default function MarineResourceHub() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Marine Resource Hub - Cox's Bazar</h1>
      <p className="text-lg mb-8">
        Cox's Bazar is blessed with rich marine resources in the Bay of Bengal. This hub provides information about
        marine biodiversity, fishing industry, conservation efforts, and sustainable management practices.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Waves className="h-5 w-5" />
              Marine Biodiversity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The coastal waters of Cox's Bazar support diverse marine ecosystems including coral reefs, seagrass beds,
              and mangrove forests. The area is home to over 500 species of fish, various crustaceans, mollusks, and
              marine mammals including dolphins and occasional whale sightings.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Fish className="h-5 w-5" />
              Fishing Industry
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Fishing is a major economic activity, supporting the livelihoods of thousands of coastal communities. The
              annual fish production from Cox's Bazar is approximately 50,000 tons, contributing significantly to the
              national fish supply. Both traditional and commercial fishing methods are practiced.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Conservation Efforts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Several conservation initiatives aim to protect marine biodiversity, including marine protected areas,
              seasonal fishing bans during spawning periods, and regulations on fishing gear. Community-based
              conservation programs engage local fishermen in sustainable resource management.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Anchor className="h-5 w-5" />
              Coastal Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Integrated coastal zone management approaches address the complex interactions between land and sea.
              Efforts include mangrove restoration, beach cleanup campaigns, and sustainable tourism practices to
              minimize negative impacts on marine ecosystems.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Key Marine Species</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <strong>Fish:</strong> Hilsa, Bombay duck, Pomfret, Red snapper, Tuna, Mackerel
            </li>
            <li>
              <strong>Crustaceans:</strong> Tiger prawns, Mud crabs, Lobsters
            </li>
            <li>
              <strong>Mollusks:</strong> Oysters, Clams, Squids, Octopus
            </li>
            <li>
              <strong>Marine Mammals:</strong> Indo-Pacific humpback dolphins, Irrawaddy dolphins
            </li>
            <li>
              <strong>Reptiles:</strong> Olive Ridley turtles, Green turtles, Hawksbill turtles
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Challenges and Initiatives</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-1">Challenges:</h3>
              <ul className="space-y-1">
                <li>Overfishing and destructive fishing practices</li>
                <li>Marine pollution from land-based sources</li>
                <li>Habitat degradation and coral reef damage</li>
                <li>Climate change impacts including ocean acidification</li>
                <li>Conflicts between different resource users</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Initiatives:</h3>
              <ul className="space-y-1">
                <li>Sustainable fishing gear promotion program</li>
                <li>Marine protected area establishment around Saint Martin's Island</li>
                <li>Alternative livelihood development for fishing communities</li>
                <li>Marine pollution monitoring and control measures</li>
                <li>Research and monitoring of marine ecosystems</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

