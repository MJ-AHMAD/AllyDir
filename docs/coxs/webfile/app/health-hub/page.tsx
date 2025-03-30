import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Heart, Hospital, Stethoscope } from "lucide-react"

export default function HealthHub() {
  const healthFacilities = [
    {
      name: "Cox's Bazar District Hospital",
      type: "Government Hospital",
      beds: 250,
      services: "General medicine, surgery, pediatrics, obstetrics, emergency care",
    },
    {
      name: "Cox's Bazar Medical College Hospital",
      type: "Teaching Hospital",
      beds: 500,
      services: "Specialized care, medical education, research",
    },
    {
      name: "Upazila Health Complexes",
      type: "Primary Healthcare",
      beds: "30-50 each",
      services: "Basic healthcare services, maternal and child health",
    },
    {
      name: "NGO-operated Field Hospitals",
      type: "Humanitarian",
      beds: "Variable",
      services: "Refugee healthcare, emergency response",
    },
  ]

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Health Hub - Cox's Bazar</h1>
      <p className="text-lg mb-8">
        Cox's Bazar faces unique healthcare challenges due to its geographical location, refugee population, and tourism
        influx. This hub provides information about healthcare facilities, initiatives, and public health programs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Hospital className="h-5 w-5" />
              Healthcare Infrastructure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Cox's Bazar has a network of healthcare facilities including district and upazila hospitals, community
              clinics, and specialized centers. The healthcare system has expanded significantly to address the needs of
              both local residents and the Rohingya refugee population.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5" />
              Medical Professionals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The district has approximately 1 doctor per 6,500 people, which is below the WHO recommended ratio.
              Efforts are ongoing to attract and retain healthcare professionals through incentives and improved working
              conditions. Many international medical professionals also work in the refugee camps.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Public Health Programs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Various public health initiatives focus on disease prevention, maternal and child health, nutrition, and
              water and sanitation. Mobile health clinics reach remote areas, while community health workers provide
              basic healthcare education and services.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Health Challenges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Key health challenges include waterborne diseases, respiratory infections, malnutrition, and limited
              access to specialized care. The monsoon season brings additional risks of disease outbreaks, particularly
              in densely populated areas and refugee camps.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Healthcare Facilities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Facility</th>
                  <th className="text-left p-2">Type</th>
                  <th className="text-left p-2">Beds</th>
                  <th className="text-left p-2">Services</th>
                </tr>
              </thead>
              <tbody>
                {healthFacilities.map((facility) => (
                  <tr key={facility.name} className="border-b">
                    <td className="p-2">{facility.name}</td>
                    <td className="p-2">{facility.type}</td>
                    <td className="p-2">{facility.beds}</td>
                    <td className="p-2">{facility.services}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Health Initiatives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>Vaccination campaigns for children and vulnerable populations</li>
            <li>Maternal and child health programs to reduce mortality rates</li>
            <li>Nutrition interventions targeting malnutrition in children</li>
            <li>Water, sanitation, and hygiene (WASH) programs</li>
            <li>Mental health and psychosocial support services</li>
            <li>Disease surveillance and outbreak response systems</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

