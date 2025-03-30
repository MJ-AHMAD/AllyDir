import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Heart, School, Home, Droplet, SproutIcon as Seedling, Users, BookOpen } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function Donation() {
  const causes = [
    {
      title: "Education for Underprivileged Children",
      icon: School,
      description:
        "Support educational programs for underprivileged children in Cox's Bazar, providing school supplies, scholarships, and improved learning facilities.",
      goal: 500000,
      raised: 325000,
      donors: 142,
    },
    {
      title: "Coastal Community Housing",
      icon: Home,
      description:
        "Help build disaster-resilient housing for vulnerable coastal communities affected by cyclones and rising sea levels.",
      goal: 1200000,
      raised: 780000,
      donors: 215,
    },
    {
      title: "Clean Water Initiative",
      icon: Droplet,
      description:
        "Provide clean drinking water solutions for communities facing saltwater intrusion and contamination issues.",
      goal: 350000,
      raised: 210000,
      donors: 98,
    },
    {
      title: "Mangrove Restoration Project",
      icon: Seedling,
      description:
        "Support the restoration of mangrove forests that protect coastal areas from erosion and storm surges while preserving biodiversity.",
      goal: 280000,
      raised: 165000,
      donors: 73,
    },
    {
      title: "Women's Skill Development",
      icon: Users,
      description:
        "Fund vocational training and microfinance programs for women to achieve economic independence through sustainable livelihoods.",
      goal: 420000,
      raised: 290000,
      donors: 124,
    },
    {
      title: "Community Library Network",
      icon: BookOpen,
      description:
        "Help establish community libraries in remote areas to promote literacy and provide access to educational resources.",
      goal: 180000,
      raised: 95000,
      donors: 67,
    },
  ]

  return (
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-4">Support Cox's Bazar Community</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Your donations help fund vital projects that support education, environmental conservation, disaster
          resilience, and community development in Cox's Bazar district.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {causes.map((cause) => {
          const percentRaised = Math.round((cause.raised / cause.goal) * 100)

          return (
            <Card key={cause.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <cause.icon className="h-5 w-5 text-primary" />
                  <CardTitle>{cause.title}</CardTitle>
                </div>
                <CardDescription>{cause.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>৳{cause.raised.toLocaleString()} raised</span>
                      <span>৳{cause.goal.toLocaleString()} goal</span>
                    </div>
                    <Progress value={percentRaised} className="h-2" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span>{cause.donors} donors have contributed</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Donate Now</Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>How Your Donation Helps</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <School className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Education Support</p>
                  <p className="text-muted-foreground">৳5,000 provides school supplies for 10 children for a year</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Home className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Housing Assistance</p>
                  <p className="text-muted-foreground">৳50,000 helps repair a cyclone-damaged home for a family</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Droplet className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Clean Water</p>
                  <p className="text-muted-foreground">৳15,000 installs a community water filtration system</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Seedling className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Environmental Conservation</p>
                  <p className="text-muted-foreground">৳10,000 plants and maintains 100 mangrove saplings</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ways to Donate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Online Donation</h3>
                <p className="text-muted-foreground mb-2">
                  Make a secure online donation using credit card, mobile banking, or bank transfer.
                </p>
                <Button>Donate Online</Button>
              </div>

              <div>
                <h3 className="font-medium mb-1">Bank Transfer</h3>
                <p className="text-muted-foreground">Transfer directly to our donation account:</p>
                <div className="bg-muted p-3 rounded-md mt-2">
                  <p>
                    <strong>Account Name:</strong> Cox's Bazar Development Trust
                  </p>
                  <p>
                    <strong>Bank:</strong> Bangladesh Bank
                  </p>
                  <p>
                    <strong>Account Number:</strong> 0123456789
                  </p>
                  <p>
                    <strong>Branch:</strong> Cox's Bazar
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-1">Corporate Partnerships</h3>
                <p className="text-muted-foreground">
                  For corporate donations and CSR partnerships, please contact our development team at
                  donations@trustedally.gov.bd
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Donation Transparency</CardTitle>
          <CardDescription>We are committed to full transparency in how your donations are used</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>
              All donations to the Cox's Bazar Development Trust are managed with complete transparency. We provide
              regular updates on project progress and financial reports to ensure your contributions are making a real
              difference.
            </p>

            <div>
              <h3 className="font-medium mb-2">Our Commitment:</h3>
              <ul className="space-y-1">
                <li>• Quarterly financial reports published online</li>
                <li>• Project updates sent to all donors</li>
                <li>• Annual independent audit of all donation accounts</li>
                <li>• 85% of donations go directly to projects (15% for administrative costs)</li>
                <li>• Tax receipts provided for all donations</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button variant="outline">View Financial Reports</Button>
              <Button variant="outline">Project Impact Stories</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

