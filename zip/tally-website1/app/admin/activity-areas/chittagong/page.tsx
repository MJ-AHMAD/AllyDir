import Link from "next/link"
import Image from "next/image"

export default function ChittagongDivisionPage() {
  const districts = [
    {
      id: "coxs-bazar",
      name: "Cox's Bazar",
      projects: 12,
      volunteers: 45,
      beneficiaries: 2500,
      image: "/images/coxs-bazar.jpg",
    },
    {
      id: "chittagong",
      name: "Chittagong",
      projects: 8,
      volunteers: 32,
      beneficiaries: 1800,
      image: "/images/chittagong.jpg",
    },
    {
      id: "bandarban",
      name: "Bandarban",
      projects: 5,
      volunteers: 18,
      beneficiaries: 950,
      image: "/images/bandarban.jpg",
    },
    {
      id: "khagrachari",
      name: "Khagrachari",
      projects: 4,
      volunteers: 15,
      beneficiaries: 780,
      image: "/images/khagrachari.jpg",
    },
    {
      id: "rangamati",
      name: "Rangamati",
      projects: 6,
      volunteers: 22,
      beneficiaries: 1100,
      image: "/images/rangamati.jpg",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Chittagong Division Activity Areas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {districts.map((district) => (
          <div key={district.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src={district.image || "/placeholder.svg"}
                alt={`${district.name} district`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{district.name}</h2>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Projects</p>
                  <p className="font-bold text-blue-600">{district.projects}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Volunteers</p>
                  <p className="font-bold text-green-600">{district.volunteers}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Beneficiaries</p>
                  <p className="font-bold text-amber-600">{district.beneficiaries}</p>
                </div>
              </div>
              <Link
                href={`/admin/activity-areas/chittagong/${district.id}`}
                className="block w-full text-center py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

