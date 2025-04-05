"use client"

import { useState } from "react"
import Link from "next/link"
import CoreTeamAuthCheck from "@/components/core-team-auth-check"

// Bangladesh's administrative divisions
const divisions = [
  {
    id: "dhaka",
    name: "Dhaka",
    districts: 13,
    population: "36.4 million",
    area: "20,593 km²",
    projects: 42,
    volunteers: 1250,
    status: "active",
    literacyRate: "76.5%",
    educationalInstitutions: 12850,
    keyProducts: "Textiles, Pharmaceuticals, IT Services, Handicrafts",
    investmentOpportunities: "Technology Parks, Urban Infrastructure, Manufacturing",
  },
  {
    id: "chittagong",
    name: "Chittagong",
    districts: 11,
    population: "33.5 million",
    area: "33,771 km²",
    projects: 38,
    volunteers: 980,
    status: "active",
    literacyRate: "64.8%",
    educationalInstitutions: 9750,
    keyProducts: "Marine Products, Tea, Leather Goods, Ship Building",
    investmentOpportunities: "Port Expansion, Tourism, Agro-processing, Shipbuilding",
  },
  {
    id: "rajshahi",
    name: "Rajshahi",
    districts: 8,
    population: "18.5 million",
    area: "18,174 km²",
    projects: 24,
    volunteers: 720,
    status: "active",
    literacyRate: "63.2%",
    educationalInstitutions: 6320,
    keyProducts: "Silk, Mango, Rice, Pottery, Handicrafts",
    investmentOpportunities: "Agro-processing, Silk Production, Food Processing",
  },
  {
    id: "khulna",
    name: "Khulna",
    districts: 10,
    population: "15.7 million",
    area: "22,272 km²",
    projects: 22,
    volunteers: 650,
    status: "active",
    literacyRate: "61.8%",
    educationalInstitutions: 5480,
    keyProducts: "Shrimp, Jute, Coconut, Honey, Timber",
    investmentOpportunities: "Eco-tourism, Seafood Processing, Renewable Energy",
  },
  {
    id: "barisal",
    name: "Barisal",
    districts: 6,
    population: "8.3 million",
    area: "13,225 km²",
    projects: 18,
    volunteers: 420,
    status: "active",
    literacyRate: "62.5%",
    educationalInstitutions: 3250,
    keyProducts: "Rice, Betel Leaf, Coconut, Hilsa Fish",
    investmentOpportunities: "Fisheries, Agriculture, River Transportation",
  },
  {
    id: "sylhet",
    name: "Sylhet",
    districts: 4,
    population: "9.8 million",
    area: "12,635 km²",
    projects: 16,
    volunteers: 380,
    status: "active",
    literacyRate: "65.2%",
    educationalInstitutions: 3850,
    keyProducts: "Tea, Natural Gas, Citrus Fruits, Medicinal Plants",
    investmentOpportunities: "Tourism, Tea Processing, Energy Sector, Hospitality",
  },
  {
    id: "rangpur",
    name: "Rangpur",
    districts: 8,
    population: "15.8 million",
    area: "16,317 km²",
    projects: 20,
    volunteers: 520,
    status: "active",
    literacyRate: "59.8%",
    educationalInstitutions: 5120,
    keyProducts: "Tobacco, Potato, Jute, Sugarcane, Handicrafts",
    investmentOpportunities: "Agro-processing, Cold Storage, Textile Manufacturing",
  },
  {
    id: "mymensingh",
    name: "Mymensingh",
    districts: 4,
    population: "11.4 million",
    area: "10,584 km²",
    projects: 15,
    volunteers: 340,
    status: "active",
    literacyRate: "60.5%",
    educationalInstitutions: 3680,
    keyProducts: "Rice, Vegetables, Dairy, Fisheries, Medicinal Herbs",
    investmentOpportunities: "Agriculture Research, Dairy Processing, Fisheries",
  },
]

export default function ActivityAreas() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredDivisions = divisions.filter((division) => {
    const matchesSearch = division.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || division.status === filterStatus
    return matchesSearch && matchesStatus
  })

  // Calculate total statistics
  const totalProjects = divisions.reduce((sum, div) => sum + div.projects, 0)
  const totalVolunteers = divisions.reduce((sum, div) => sum + div.volunteers, 0)
  const totalDistricts = divisions.reduce((sum, div) => sum + div.districts, 0)
  const avgLiteracyRate =
    (divisions.reduce((sum, div) => sum + Number.parseFloat(div.literacyRate), 0) / divisions.length).toFixed(1) + "%"
  const totalEducationalInstitutions = divisions.reduce((sum, div) => sum + div.educationalInstitutions, 0)

  return (
    <CoreTeamAuthCheck>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">Activity Areas Management</h1>
            <p className="text-gray-600">
              Comprehensive overview and management of all operational areas across Bangladesh
            </p>
          </div>

          {/* Dashboard Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
              <h3 className="text-gray-500 text-sm font-medium">Total Divisions</h3>
              <p className="text-3xl font-bold text-gray-800">{divisions.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
              <h3 className="text-gray-500 text-sm font-medium">Total Districts</h3>
              <p className="text-3xl font-bold text-gray-800">{totalDistricts}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-600">
              <h3 className="text-gray-500 text-sm font-medium">Active Projects</h3>
              <p className="text-3xl font-bold text-gray-800">{totalProjects}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-600">
              <h3 className="text-gray-500 text-sm font-medium">Volunteers</h3>
              <p className="text-3xl font-bold text-gray-800">{totalVolunteers}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-teal-600">
              <h3 className="text-gray-500 text-sm font-medium">Avg. Literacy Rate</h3>
              <p className="text-3xl font-bold text-gray-800">{avgLiteracyRate}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-indigo-600">
              <h3 className="text-gray-500 text-sm font-medium">Educational Institutions</h3>
              <p className="text-3xl font-bold text-gray-800">{totalEducationalInstitutions.toLocaleString()}</p>
            </div>
          </div>

          {/* Bangladesh Overview */}
          <div className="bg-white rounded-lg shadow mb-8 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Bangladesh Overview</h2>
            <div className="prose max-w-none">
              <p>
                Bangladesh is a densely populated country in South Asia that gained independence in 1971. With an area
                of 147,570 square kilometers and a population of approximately 170 million, it is administratively
                divided into 8 divisions: Dhaka, Chittagong, Rajshahi, Khulna, Barisal, Sylhet, Rangpur, and Mymensingh.
              </p>

              <p>
                These divisions are further divided into 64 districts, which are subdivided into 495 upazilas
                (sub-districts). Bangladesh's economy relies on agriculture, garment industry, remittances, and the
                service sector. The country is rich in natural resources, particularly rivers, fertile land, and gas
                reserves.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Education Landscape</h3>
              <p>
                Bangladesh has made significant progress in education, with a national literacy rate of approximately{" "}
                {avgLiteracyRate}. The country has over {totalEducationalInstitutions.toLocaleString()} educational
                institutions across all levels. However, educational quality and access vary significantly between urban
                and rural areas. TRUSTED ALLY's primary mission is to remove barriers to education and create a
                well-educated future generation by addressing these disparities.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Economic Development Focus</h3>
              <p>
                TRUSTED ALLY aims to leverage technology to connect remote producers with international markets. By
                identifying locally available products with global demand and providing technological support for
                marketing, processing, packaging, and export, we can help transform the economic landscape of rural
                Bangladesh. This approach not only improves individual livelihoods but also creates employment
                opportunities and stimulates regional development.
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">Investment Opportunities</h3>
              <p>
                Bangladesh offers diverse investment opportunities across sectors including agriculture, manufacturing,
                technology, tourism, and energy. TRUSTED ALLY works to identify region-specific investment potential and
                connect international investors with local opportunities, fostering economic growth and creating
                sustainable employment.
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search divisions..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="alert">Alert</option>
              </select>
            </div>
            <div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Generate Report
              </button>
            </div>
          </div>

          {/* Divisions List */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
              {filteredDivisions.map((division) => (
                <Link href={`/admin/activity-areas/${division.id}`} key={division.id} className="block">
                  <div className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow p-4 h-full">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-blue-900">{division.name}</h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          division.status === "active"
                            ? "bg-green-100 text-green-800"
                            : division.status === "alert"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {division.status.charAt(0).toUpperCase() + division.status.slice(1)}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Districts:</span>
                        <span className="font-medium">{division.districts}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Population:</span>
                        <span className="font-medium">{division.population}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Area:</span>
                        <span className="font-medium">{division.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Literacy Rate:</span>
                        <span className="font-medium">{division.literacyRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Projects:</span>
                        <span className="font-medium">{division.projects}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Volunteers:</span>
                        <span className="font-medium">{division.volunteers}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700">Key Products:</h4>
                      <p className="text-xs text-gray-600 mt-1">{division.keyProducts}</p>
                    </div>
                    <div className="mt-4 text-right">
                      <span className="text-blue-600 text-sm">View Details →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CoreTeamAuthCheck>
  )
}

