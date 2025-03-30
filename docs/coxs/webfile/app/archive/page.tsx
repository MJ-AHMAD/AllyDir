import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Archive, Calendar, FileText, Filter, Search, Download } from "lucide-react"

export default function ArchivePage() {
  const archiveCategories = [
    "Administrative Records",
    "Tourism Statistics",
    "Educational Data",
    "Economic Reports",
    "Climate and Weather Data",
    "Health Statistics",
    "Infrastructure Projects",
    "Research Publications",
    "Historical Documents",
    "Media Archives",
  ]

  const recentArchives = [
    {
      title: "Annual Tourism Report 2023",
      category: "Tourism Statistics",
      date: "January 15, 2024",
      size: "4.2 MB",
    },
    {
      title: "Cox's Bazar Development Plan 2020-2025",
      category: "Administrative Records",
      date: "March 10, 2020",
      size: "12.8 MB",
    },
    {
      title: "Educational Institutions Census 2022",
      category: "Educational Data",
      date: "August 22, 2023",
      size: "8.5 MB",
    },
    {
      title: "Coastal Erosion Study 2018-2023",
      category: "Research Publications",
      date: "November 5, 2023",
      size: "15.3 MB",
    },
    {
      title: "Healthcare Facilities Directory 2023",
      category: "Health Statistics",
      date: "December 12, 2023",
      size: "3.7 MB",
    },
  ]

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Archive - Trusted Ally</h1>
      <p className="text-lg mb-8">
        Access historical data, reports, and documents related to Cox's Bazar district. The archive contains valuable
        information for research, planning, and reference purposes.
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Search Archives</CardTitle>
          <CardDescription>Find specific documents and data in our comprehensive archive</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search archives..." className="pl-8" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">Date Range:</span>
                <select className="border rounded px-2 py-1 text-sm">
                  <option>All Time</option>
                  <option>Last Year</option>
                  <option>Last 5 Years</option>
                  <option>Custom...</option>
                </select>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>More Filters</span>
              </Button>
              <Button>Search</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Archive className="h-5 w-5" />
              Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {archiveCategories.map((category) => (
                <li key={category}>
                  <a href="#" className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span>{category}</span>
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Recent Archives</CardTitle>
            <CardDescription>Recently added or updated documents and data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Title</th>
                    <th className="text-left p-2">Category</th>
                    <th className="text-left p-2">Date</th>
                    <th className="text-left p-2">Size</th>
                    <th className="text-left p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentArchives.map((archive) => (
                    <tr key={archive.title} className="border-b">
                      <td className="p-2 font-medium">{archive.title}</td>
                      <td className="p-2">{archive.category}</td>
                      <td className="p-2">{archive.date}</td>
                      <td className="p-2">{archive.size}</td>
                      <td className="p-2">
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Archive Access Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-1">Access Levels:</h3>
              <ul className="space-y-1">
                <li>
                  <strong>Public Access:</strong> General reports, statistics, and publications
                </li>
                <li>
                  <strong>Registered Users:</strong> Detailed datasets and historical records
                </li>
                <li>
                  <strong>Administrative Access:</strong> Confidential documents and internal reports
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Usage Guidelines:</h3>
              <ul className="space-y-1">
                <li>Cite Trusted Ally as the source when using archived materials</li>
                <li>Some documents may have specific usage restrictions noted in their metadata</li>
                <li>Large datasets may require approval for bulk downloads</li>
                <li>For research access to restricted archives, submit a request through the Research Hub</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Contact Archive Administration:</h3>
              <p>For assistance with archive access or to contribute materials to the archive:</p>
              <p className="mt-1">
                <strong>Email:</strong> archive@trustedally.gov.bd
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

