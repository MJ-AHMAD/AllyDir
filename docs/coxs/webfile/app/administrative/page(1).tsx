import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, FileText, Users, UserCog } from "lucide-react"
import Link from "next/link"

export default function Administrative() {
  const departments = [
    {
      name: "District Commissioner's Office",
      head: "District Commissioner",
      responsibilities: "Overall administration, law and order, revenue collection, disaster management",
    },
    {
      name: "Upazila Administration",
      head: "Upazila Nirbahi Officer (UNO)",
      responsibilities: "Sub-district administration, development activities, local governance",
    },
    {
      name: "Municipal Corporation",
      head: "Mayor",
      responsibilities: "Urban services, city planning, waste management, local taxation",
    },
    {
      name: "Union Parishads",
      head: "Union Parishad Chairman",
      responsibilities: "Rural local governance, community development, dispute resolution",
    },
  ]

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Administrative - Cox's Bazar</h1>
      <p className="text-lg mb-8">
        The administrative structure of Cox's Bazar district ensures effective governance, service delivery, and
        implementation of development initiatives. This section provides information about the administrative setup, key
        officials, and government services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Administrative Structure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Cox's Bazar district is divided into 8 upazilas (sub-districts), 71 union parishads, and 989 villages. The
              district administration is headed by the Deputy Commissioner, while each upazila is administered by an
              Upazila Nirbahi Officer (UNO). The Cox's Bazar Municipality oversees urban areas.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCog className="h-5 w-5" />
              Key Officials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The key administrative officials include the Deputy Commissioner, Additional Deputy Commissioners, Upazila
              Nirbahi Officers, and elected representatives such as the Mayor of Cox's Bazar Municipality and
              Chairpersons of Union Parishads. Various department heads oversee specific sectors.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Government Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The district administration provides various services including land records management, birth and death
              registration, trade licenses, certificates issuance, tax collection, and implementation of government
              schemes and development projects.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Citizen Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Citizens can access services through district and upazila offices, as well as through digital platforms.
              The administration has established one-stop service centers to streamline service delivery and reduce
              bureaucratic hurdles.
            </p>
          </CardContent>
        </Card>
        <Link
          href="/administrative/founder"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          <h3 className="text-xl font-semibold mb-2">Founder Profile</h3>
          <p className="text-gray-600">Learn about Md Jafor Ahmad, the founder and visionary behind Trusted Ally</p>
        </Link>
        <Link
          href="/administrative/contact-logs"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          <h3 className="text-xl font-semibold mb-2">Contact Logs</h3>
          <p className="text-gray-600">View all contact form submissions</p>
        </Link>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Administrative Departments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Department</th>
                  <th className="text-left p-2">Head</th>
                  <th className="text-left p-2">Responsibilities</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((dept) => (
                  <tr key={dept.name} className="border-b">
                    <td className="p-2 font-medium">{dept.name}</td>
                    <td className="p-2">{dept.head}</td>
                    <td className="p-2">{dept.responsibilities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Administrative Initiatives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>Digital service delivery through e-governance platforms</li>
            <li>Transparent land management and modernization of land records</li>
            <li>Coordination of multi-agency response to Rohingya refugee situation</li>
            <li>Disaster preparedness and management systems</li>
            <li>Public-private partnerships for development projects</li>
            <li>Community engagement in local governance</li>
            <li>Capacity building programs for administrative officials</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

