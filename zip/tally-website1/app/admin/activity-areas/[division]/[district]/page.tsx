"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import CoreTeamAuthCheck from "@/components/core-team-auth-check"

// Sample data for upazilas by district
const districtData = {
  "dhaka-district": {
    name: "Dhaka",
    division: "dhaka",
    divisionName: "Dhaka",
    description: "Dhaka is the capital city of Bangladesh and one of the most densely populated cities in the world.",
    population: "12.5 million",
    area: "1,463 km²",
    projects: 15,
    volunteers: 450,
    literacyRate: "78.2%",
    educationalInstitutions: 4250,
    educationSummary:
      "Dhaka district has the highest literacy rate in Bangladesh at 78.2%, with over 4,250 educational institutions including prestigious universities, colleges, and schools. However, educational quality varies significantly between different areas of the district. TRUSTED ALLY is implementing targeted programs to improve educational access in underserved areas and enhance the quality of technical education to support economic development.",
    economicSummary:
      "As Bangladesh's capital, Dhaka district is the economic and commercial hub of the country, with major industries including textiles, IT services, pharmaceuticals, and food processing. TRUSTED ALLY is working to connect small-scale producers and artisans with international markets, particularly focusing on high-quality handicrafts, specialized textiles, and innovative tech services.",
    investmentOpportunities:
      "Key investment opportunities include technology parks, urban infrastructure development, educational technology, sustainable urban solutions, and specialized manufacturing. TRUSTED ALLY facilitates connections between international investors and local entrepreneurs to stimulate economic growth while addressing urban challenges.",
    keyProducts: [
      {
        name: "Textiles and Garments",
        description: "High-quality ready-made garments, specialized textiles, and fashion accessories",
        internationalDemand: "Very High",
        exportMarkets: "EU, USA, Canada, Japan, Australia",
      },
      {
        name: "IT Services",
        description: "Software development, web services, digital content creation, and BPO services",
        internationalDemand: "High",
        exportMarkets: "USA, UK, EU, Australia, Middle East",
      },
      {
        name: "Handicrafts",
        description: "Traditional embroidery, handloom products, jute crafts, and decorative items",
        internationalDemand: "Medium-High",
        exportMarkets: "EU, USA, Japan, Australia, Middle East",
      },
      {
        name: "Processed Foods",
        description: "Specialty snacks, confectionery, spices, and preserved foods",
        internationalDemand: "Medium",
        exportMarkets: "Middle East, UK, USA, Malaysia, Singapore",
      },
    ],
    upazilas: [
      {
        id: "savar",
        name: "Savar",
        population: "1.4 million",
        projects: 4,
        volunteers: 120,
        status: "active",
        literacyRate: "72.5%",
        educationalInstitutions: 420,
        keyProducts: "Textiles, Ceramics, Dairy, Vegetables",
        investmentPotential: "Manufacturing, Education, Housing",
      },
      {
        id: "dhamrai",
        name: "Dhamrai",
        population: "0.5 million",
        projects: 3,
        volunteers: 80,
        status: "active",
        literacyRate: "68.2%",
        educationalInstitutions: 180,
        keyProducts: "Brass Products, Pottery, Rice, Vegetables",
        investmentPotential: "Handicraft Industry, Agriculture, Tourism",
      },
      {
        id: "keraniganj",
        name: "Keraniganj",
        population: "1.2 million",
        projects: 4,
        volunteers: 110,
        status: "active",
        literacyRate: "70.5%",
        educationalInstitutions: 380,
        keyProducts: "Furniture, Textiles, Boats, Vegetables",
        investmentPotential: "Furniture Industry, River Transportation, Manufacturing",
      },
      {
        id: "nawabganj",
        name: "Nawabganj",
        population: "0.3 million",
        projects: 2,
        volunteers: 60,
        status: "active",
        literacyRate: "65.8%",
        educationalInstitutions: 120,
        keyProducts: "Rice, Vegetables, Pottery, Handicrafts",
        investmentPotential: "Agriculture, Pottery Industry, Eco-tourism",
      },
      {
        id: "dohar",
        name: "Dohar",
        population: "0.2 million",
        projects: 2,
        volunteers: 50,
        status: "inactive",
        literacyRate: "64.2%",
        educationalInstitutions: 90,
        keyProducts: "Rice, Jute, Vegetables, Handicrafts",
        investmentPotential: "Agriculture, Jute Processing, Handicrafts",
      },
    ],
    cityCorporations: [
      {
        id: "dncc",
        name: "Dhaka North City Corporation",
        population: "5.8 million",
        projects: 8,
        volunteers: 220,
        status: "active",
        literacyRate: "82.5%",
        educationalInstitutions: 1850,
        keyProducts: "IT Services, Textiles, Pharmaceuticals, Education Services",
        investmentPotential: "Technology Parks, Urban Infrastructure, Education",
        wards: [
          {
            id: "ward-1",
            name: "Ward 1",
            population: "180,000",
            projects: 1,
            volunteers: 25,
            status: "active",
            literacyRate: "83.2%",
            educationalInstitutions: 65,
            keyProducts: "IT Services, Textiles, Retail",
            investmentPotential: "Commercial Real Estate, Technology",
          },
          {
            id: "ward-2",
            name: "Ward 2",
            population: "195,000",
            projects: 1,
            volunteers: 30,
            status: "active",
            literacyRate: "84.5%",
            educationalInstitutions: 72,
            keyProducts: "Financial Services, Textiles, Retail",
            investmentPotential: "Financial Services, Commercial Real Estate",
          },
          {
            id: "ward-3",
            name: "Ward 3",
            population: "210,000",
            projects: 2,
            volunteers: 35,
            status: "active",
            literacyRate: "82.8%",
            educationalInstitutions: 78,
            keyProducts: "IT Services, Education, Healthcare",
            investmentPotential: "Education Technology, Healthcare Services",
          },
          {
            id: "ward-4",
            name: "Ward 4",
            population: "185,000",
            projects: 1,
            volunteers: 25,
            status: "active",
            literacyRate: "81.5%",
            educationalInstitutions: 68,
            keyProducts: "Textiles, Retail, Food Services",
            investmentPotential: "Retail, Food Processing",
          },
          {
            id: "ward-5",
            name: "Ward 5",
            population: "220,000",
            projects: 2,
            volunteers: 40,
            status: "active",
            literacyRate: "83.8%",
            educationalInstitutions: 82,
            keyProducts: "IT Services, Pharmaceuticals, Education",
            investmentPotential: "Technology, Pharmaceuticals, Education",
          },
        ],
      },
      {
        id: "dscc",
        name: "Dhaka South City Corporation",
        population: "5.2 million",
        projects: 7,
        volunteers: 200,
        status: "active",
        literacyRate: "80.2%",
        educationalInstitutions: 1650,
        keyProducts: "Textiles, Leather Goods, Handicrafts, Food Processing",
        investmentPotential: "Manufacturing, Urban Renewal, Heritage Tourism",
        wards: [
          {
            id: "ward-1",
            name: "Ward 1",
            population: "170,000",
            projects: 1,
            volunteers: 20,
            status: "active",
            literacyRate: "79.5%",
            educationalInstitutions: 58,
            keyProducts: "Textiles, Leather Goods, Handicrafts",
            investmentPotential: "Manufacturing, Heritage Tourism",
          },
          {
            id: "ward-2",
            name: "Ward 2",
            population: "185,000",
            projects: 1,
            volunteers: 25,
            status: "active",
            literacyRate: "80.8%",
            educationalInstitutions: 64,
            keyProducts: "Textiles, Food Processing, Retail",
            investmentPotential: "Food Processing, Retail Development",
          },
          {
            id: "ward-3",
            name: "Ward 3",
            population: "200,000",
            projects: 2,
            volunteers: 30,
            status: "active",
            literacyRate: "81.2%",
            educationalInstitutions: 70,
            keyProducts: "Handicrafts, Textiles, Retail",
            investmentPotential: "Handicraft Industry, Retail Development",
          },
          {
            id: "ward-4",
            name: "Ward 4",
            population: "175,000",
            projects: 1,
            volunteers: 20,
            status: "active",
            literacyRate: "78.5%",
            educationalInstitutions: 60,
            keyProducts: "Textiles, Leather Goods, Food Processing",
            investmentPotential: "Manufacturing, Food Processing",
          },
          {
            id: "ward-5",
            name: "Ward 5",
            population: "210,000",
            projects: 2,
            volunteers: 35,
            status: "active",
            literacyRate: "80.5%",
            educationalInstitutions: 72,
            keyProducts: "Textiles, Handicrafts, Retail",
            investmentPotential: "Manufacturing, Retail Development",
          },
        ],
      },
    ],
    activities: [
      {
        id: 1,
        name: "Quran Distribution",
        location: "Savar",
        date: "2023-10-15",
        status: "Completed",
        participants: 45,
      },
      {
        id: 2,
        name: "Education Program",
        location: "Dhamrai",
        date: "2023-11-20",
        status: "Ongoing",
        participants: 120,
      },
      {
        id: 3,
        name: "Environmental Cleanup",
        location: "Keraniganj",
        date: "2023-12-05",
        status: "Upcoming",
        participants: 80,
      },
      { id: 4, name: "Health Camp", location: "Nawabganj", date: "2024-01-10", status: "Upcoming", participants: 200 },
      {
        id: 5,
        name: "Urban Development",
        location: "Dhaka North",
        date: "2023-09-25",
        status: "Completed",
        participants: 150,
      },
      {
        id: 6,
        name: "Community Outreach",
        location: "Dhaka South",
        date: "2023-12-15",
        status: "Upcoming",
        participants: 180,
      },
    ],
  },
  gazipur: {
    name: "Gazipur",
    division: "dhaka",
    divisionName: "Dhaka",
    description: "Gazipur is an industrial hub located near Dhaka.",
    population: "3.4 million",
    area: "1,741 km²",
    projects: 8,
    volunteers: 210,
    literacyRate: "75.8%",
    educationalInstitutions: 1120,
    educationSummary:
      "Gazipur district has a literacy rate of 75.8% with approximately 1,120 educational institutions. The district is home to several specialized technical institutions supporting its industrial base. TRUSTED ALLY is implementing programs to enhance technical education and vocational training to better align with the district's industrial needs.",
    economicSummary:
      "Gazipur is a major industrial hub with significant textile, furniture, poultry, and ceramics industries. TRUSTED ALLY is working to connect small and medium enterprises with international markets, particularly focusing on high-quality furniture, ceramics, and specialized textiles that have significant demand in global markets.",
    investmentOpportunities:
      "Key investment opportunities include manufacturing facilities, industrial parks, agro-processing plants, and technical education centers. TRUSTED ALLY facilitates connections between international investors and local entrepreneurs to develop these sectors while addressing environmental sustainability challenges.",
    keyProducts: [
      {
        name: "Textiles and Garments",
        description: "Ready-made garments, specialized textiles, and textile accessories",
        internationalDemand: "Very High",
        exportMarkets: "EU, USA, Canada, Japan, Australia",
      },
      {
        name: "Furniture",
        description: "Wooden furniture, office furniture, and home decor items",
        internationalDemand: "High",
        exportMarkets: "Middle East, India, EU, USA",
      },
      {
        name: "Poultry",
        description: "Poultry products, eggs, and processed chicken items",
        internationalDemand: "Medium",
        exportMarkets: "Middle East, Nepal, Bhutan",
      },
      {
        name: "Ceramics",
        description: "Tableware, decorative items, and industrial ceramics",
        internationalDemand: "Medium-High",
        exportMarkets: "EU, USA, India, Australia, Middle East",
      },
    ],
    upazilas: [
      {
        id: "gazipur-sadar",
        name: "Gazipur Sadar",
        population: "1.8 million",
        projects: 3,
        volunteers: 90,
        status: "active",
        literacyRate: "77.5%",
        educationalInstitutions: 420,
        keyProducts: "Textiles, Furniture, Ceramics, Poultry",
        investmentPotential: "Manufacturing, Industrial Parks, Technical Education",
      },
      {
        id: "kaliakair",
        name: "Kaliakair",
        population: "0.5 million",
        projects: 2,
        volunteers: 50,
        status: "active",
        literacyRate: "74.2%",
        educationalInstitutions: 180,
        keyProducts: "Textiles, Electronics, Vegetables, Poultry",
        investmentPotential: "Electronics Manufacturing, Textile Industry, Agriculture",
      },
      {
        id: "kaliganj",
        name: "Kaliganj",
        population: "0.4 million",
        projects: 1,
        volunteers: 30,
        status: "active",
        literacyRate: "73.5%",
        educationalInstitutions: 150,
        keyProducts: "Rice, Vegetables, Poultry, Handicrafts",
        investmentPotential: "Poultry Industry, Agriculture, Handicrafts",
      },
      {
        id: "kapasia",
        name: "Kapasia",
        population: "0.4 million",
        projects: 1,
        volunteers: 25,
        status: "active",
        literacyRate: "72.8%",
        educationalInstitutions: 140,
        keyProducts: "Rice, Vegetables, Dairy, Handicrafts",
        investmentPotential: "Agriculture, Dairy Processing, Handicrafts",
      },
      {
        id: "sreepur",
        name: "Sreepur",
        population: "0.3 million",
        projects: 1,
        volunteers: 15,
        status: "active",
        literacyRate: "73.2%",
        educationalInstitutions: 130,
        keyProducts: "Textiles, Poultry, Rice, Vegetables",
        investmentPotential: "Textile Industry, Poultry, Agriculture",
      },
    ],
    activities: [
      {
        id: 1,
        name: "Tree Plantation",
        location: "Gazipur Sadar",
        date: "2023-09-22",
        status: "Completed",
        participants: 65,
      },
      {
        id: 2,
        name: "Vocational Training",
        location: "Kaliakair",
        date: "2023-10-30",
        status: "Completed",
        participants: 40,
      },
      {
        id: 3,
        name: "Food Distribution",
        location: "Kaliganj",
        date: "2023-12-15",
        status: "Upcoming",
        participants: 150,
      },
    ],
  },
  "chittagong-district": {
    name: "Chittagong",
    division: "chittagong",
    divisionName: "Chittagong",
    description: "Chittagong is the second-largest city in Bangladesh and a major port city.",
    population: "8.4 million",
    area: "5,283 km²",
    projects: 12,
    volunteers: 320,
    literacyRate: "72.5%",
    educationalInstitutions: 2850,
    educationSummary:
      "Chittagong district has a literacy rate of 72.5% with approximately 2,850 educational institutions. The district is home to Chittagong University and several specialized maritime and engineering institutions. TRUSTED ALLY is implementing programs to enhance technical education related to maritime industries, port management, and international trade to support the district's economic strengths.",
    economicSummary:
      "As Bangladesh's primary port city, Chittagong is a major hub for international trade, shipbuilding, steel production, and leather goods manufacturing. TRUSTED ALLY is working to connect local producers with international markets, particularly focusing on high-quality marine products, leather goods, and specialized manufacturing that have significant demand in global markets.",
    investmentOpportunities:
      "Key investment opportunities include port development, shipbuilding facilities, manufacturing plants, and logistics infrastructure. TRUSTED ALLY facilitates connections between international investors and local entrepreneurs to develop these sectors while addressing environmental and urban challenges.",
    keyProducts: [
      {
        name: "Marine Products",
        description: "Seafood, fish products, and marine-derived items",
        internationalDemand: "High",
        exportMarkets: "EU, USA, Japan, China, Middle East",
      },
      {
        name: "Ship Building",
        description: "Small to medium-sized vessels, ship parts, and marine equipment",
        internationalDemand: "Medium-High",
        exportMarkets: "Middle East, Africa, South Asia, Southeast Asia",
      },
      {
        name: "Steel",
        description: "Steel products, construction materials, and metal goods",
        internationalDemand: "Medium",
        exportMarkets: "South Asia, Southeast Asia, Middle East",
      },
      {
        name: "Leather Goods",
        description: "Processed leather, leather accessories, and footwear",
        internationalDemand: "High",
        exportMarkets: "EU, USA, Japan, Australia, Middle East",
      },
    ],
    upazilas: [
      {
        id: "chittagong-sadar",
        name: "Chittagong Sadar",
        population: "4.2 million",
        projects: 5,
        volunteers: 140,
        status: "active",
        literacyRate: "75.8%",
        educationalInstitutions: 1250,
        keyProducts: "Marine Products, Ship Building, Steel, Leather Goods",
        investmentPotential: "Port Development, Shipbuilding, Manufacturing",
      },
      {
        id: "patiya",
        name: "Patiya",
        population: "0.5 million",
        projects: 2,
        volunteers: 60,
        status: "active",
        literacyRate: "68.5%",
        educationalInstitutions: 180,
        keyProducts: "Rice, Fish, Vegetables, Handicrafts",
        investmentPotential: "Fisheries, Agriculture, Handicrafts",
      },
      {
        id: "anwara",
        name: "Anwara",
        population: "0.3 million",
        projects: 2,
        volunteers: 50,
        status: "active",
        literacyRate: "67.2%",
        educationalInstitutions: 120,
        keyProducts: "Fish, Salt, Rice, Vegetables",
        investmentPotential: "Salt Industry, Fisheries, Agriculture",
      },
      {
        id: "sitakunda",
        name: "Sitakunda",
        population: "0.4 million",
        projects: 3,
        volunteers: 70,
        status: "active",
        literacyRate: "69.5%",
        educationalInstitutions: 150,
        keyProducts: "Ship Breaking, Steel, Fish, Vegetables",
        investmentPotential: "Ship Recycling, Steel Industry, Eco-tourism",
      },
      {
        id: "raozan",
        name: "Raozan",
        population: "0.3 million",
        projects: 2,
        volunteers: 50,
        status: "active",
        literacyRate: "68.8%",
        educationalInstitutions: 130,
        keyProducts: "Rice, Vegetables, Fish, Handicrafts",
        investmentPotential: "Agriculture, Fisheries, Handicrafts",
      },
      {
        id: "rangunia",
        name: "Rangunia",
        population: "0.3 million",
        projects: 2,
        volunteers: 45,
        status: "active",
        literacyRate: "67.5%",
        educationalInstitutions: 120,
        keyProducts: "Rice, Vegetables, Fish, Timber",
        investmentPotential: "Agriculture, Fisheries, Timber Processing",
      },
      {
        id: "mirsharai",
        name: "Mirsharai",
        population: "0.4 million",
        projects: 2,
        volunteers: 55,
        status: "active",
        literacyRate: "68.2%",
        educationalInstitutions: 140,
        keyProducts: "Salt, Fish, Rice, Vegetables",
        investmentPotential: "Salt Industry, Fisheries, Economic Zone Development",
      },
      {
        id: "sandwip",
        name: "Sandwip",
        population: "0.3 million",
        projects: 1,
        volunteers: 40,
        status: "active",
        literacyRate: "65.5%",
        educationalInstitutions: 110,
        keyProducts: "Fish, Salt, Coconut, Rice",
        investmentPotential: "Fisheries, Salt Industry, Coconut Processing",
      },
      {
        id: "satkania",
        name: "Satkania",
        population: "0.3 million",
        projects: 1,
        volunteers: 35,
        status: "active",
        literacyRate: "66.8%",
        educationalInstitutions: 100,
        keyProducts: "Rice, Vegetables, Fish, Betel Leaf",
        investmentPotential: "Agriculture, Fisheries, Betel Leaf Processing",
      },
      {
        id: "lohagara",
        name: "Lohagara",
        population: "0.2 million",
        projects: 1,
        volunteers: 30,
        status: "active",
        literacyRate: "65.2%",
        educationalInstitutions: 90,
        keyProducts: "Rice, Vegetables, Betel Leaf, Timber",
        investmentPotential: "Agriculture, Betel Leaf Processing, Timber",
      },
      {
        id: "chandanaish",
        name: "Chandanaish",
        population: "0.2 million",
        projects: 1,
        volunteers: 30,
        status: "active",
        literacyRate: "66.5%",
        educationalInstitutions: 95,
        keyProducts: "Rice, Vegetables, Betel Leaf, Handicrafts",
        investmentPotential: "Agriculture, Betel Leaf Processing, Handicrafts",
      },
      {
        id: "boalkhali",
        name: "Boalkhali",
        population: "0.2 million",
        projects: 1,
        volunteers: 25,
        status: "active",
        literacyRate: "67.2%",
        educationalInstitutions: 85,
        keyProducts: "Rice, Vegetables, Fish, Salt",
        investmentPotential: "Agriculture, Fisheries, Salt Industry",
      },
      {
        id: "banshkhali",
        name: "Banshkhali",
        population: "0.4 million",
        projects: 2,
        volunteers: 45,
        status: "active",
        literacyRate: "66.8%",
        educationalInstitutions: 130,
        keyProducts: "Rice, Fish, Salt, Vegetables",
        investmentPotential: "Fisheries, Salt Industry, Agriculture",
      },
      {
        id: "fatikchhari",
        name: "Fatikchhari",
        population: "0.5 million",
        projects: 2,
        volunteers: 50,
        status: "active",
        literacyRate: "67.5%",
        educationalInstitutions: 150,
        keyProducts: "Rice, Vegetables, Timber, Handicrafts",
        investmentPotential: "Agriculture, Timber Processing, Handicrafts",
      },
      {
        id: "hathazari",
        name: "Hathazari",
        population: "0.4 million",
        projects: 2,
        volunteers: 45,
        status: "active",
        literacyRate: "69.2%",
        educationalInstitutions: 140,
        keyProducts: "Rice, Vegetables, Handicrafts, Timber",
        investmentPotential: "Agriculture, Handicrafts, Timber Processing",
      },
    ],
    cityCorporations: [
      {
        id: "ccc",
        name: "Chittagong City Corporation",
        population: "3.9 million",
        projects: 6,
        volunteers: 180,
        status: "active",
        literacyRate: "76.5%",
        educationalInstitutions: 1450,
        keyProducts: "Marine Products, Ship Building, Steel, Leather Goods",
        investmentPotential: "Port Development, Urban Infrastructure, Manufacturing",
        wards: [
          {
            id: "ward-1",
            name: "Ward 1",
            population: "130,000",
            projects: 1,
            volunteers: 20,
            status: "active",
            literacyRate: "77.2%",
            educationalInstitutions: 48,
            keyProducts: "Marine Products, Retail, Services",
            investmentPotential: "Commercial Development, Marine Products",
          },
          {
            id: "ward-2",
            name: "Ward 2",
            population: "145,000",
            projects: 1,
            volunteers: 25,
            status: "active",
            literacyRate: "78.5%",
            educationalInstitutions: 52,
            keyProducts: "Ship Building, Steel, Services",
            investmentPotential: "Manufacturing, Commercial Development",
          },
          {
            id: "ward-3",
            name: "Ward 3",
            population: "160,000",
            projects: 1,
            volunteers: 30,
            status: "active",
            literacyRate: "76.8%",
            educationalInstitutions: 58,
            keyProducts: "Leather Goods, Retail, Services",
            investmentPotential: "Manufacturing, Retail Development",
          },
          {
            id: "ward-4",
            name: "Ward 4",
            population: "135,000",
            projects: 1,
            volunteers: 20,
            status: "active",
            literacyRate: "75.5%",
            educationalInstitutions: 50,
            keyProducts: "Marine Products, Steel, Services",
            investmentPotential: "Manufacturing, Commercial Development",
          },
          {
            id: "ward-5",
            name: "Ward 5",
            population: "170,000",
            projects: 2,
            volunteers: 35,
            status: "active",
            literacyRate: "77.8%",
            educationalInstitutions: 62,
            keyProducts: "Ship Building, Leather Goods, Services",
            investmentPotential: "Manufacturing, Commercial Development",
          },
        ],
      },
    ],
    activities: [
      {
        id: 1,
        name: "Coastal Cleanup",
        location: "Chittagong Sadar",
        date: "2023-11-05",
        status: "Completed",
        participants: 120,
      },
      {
        id: 2,
        name: "Maritime Education",
        location: "Patiya",
        date: "2023-12-10",
        status: "Ongoing",
        participants: 85,
      },
      {
        id: 3,
        name: "Fishermen Support",
        location: "Anwara",
        date: "2024-01-20",
        status: "Upcoming",
        participants: 60,
      },
      {
        id: 4,
        name: "Port Development",
        location: "Chittagong City",
        date: "2023-10-15",
        status: "Completed",
        participants: 100,
      },
      {
        id: 5,
        name: "Urban Planning",
        location: "Chittagong City",
        date: "2023-12-20",
        status: "Upcoming",
        participants: 120,
      },
    ],
  },
  "sylhet-district": {
    name: "Sylhet",
    division: "sylhet",
    divisionName: "Sylhet",
    description: "Sylhet is a major city in northeastern Bangladesh, known for its tea gardens and natural beauty.",
    population: "3.4 million",
    area: "3,452 km²",
    projects: 6,
    volunteers: 150,
    literacyRate: "67.8%",
    educationalInstitutions: 980,
    educationSummary:
      "Sylhet district has a literacy rate of 67.8% with approximately 980 educational institutions. The district is home to Shahjalal University of Science and Technology and several specialized institutions. TRUSTED ALLY is implementing programs to improve educational quality and access, particularly focusing on technical education related to the energy sector, tourism, and agricultural sciences.",
    economicSummary:
      "Sylhet is known for its tea production, natural gas reserves, citrus fruit cultivation, and medicinal plant harvesting. TRUSTED ALLY is working to connect local producers with international markets, particularly focusing on organic tea, medicinal herbs, and specialty citrus products that command premium prices in global markets.",
    investmentOpportunities:
      "Key investment opportunities include tourism development, tea processing modernization, energy sector projects, and hospitality infrastructure. TRUSTED ALLY facilitates connections between international investors and local entrepreneurs to develop these sectors while preserving the region's natural beauty and cultural heritage.",
    keyProducts: [
      {
        name: "Tea",
        description: "High-quality tea, organic tea, and specialty tea varieties",
        internationalDemand: "Very High",
        exportMarkets: "UK, USA, EU, Middle East, Australia",
      },
      {
        name: "Natural Gas",
        description: "Natural gas and related energy products",
        internationalDemand: "High",
        exportMarkets: "Regional markets, Energy companies",
      },
      {
        name: "Citrus Fruits",
        description: "Lemons, oranges, and specialty citrus varieties",
        internationalDemand: "Medium",
        exportMarkets: "Middle East, South Asia, Southeast Asia",
      },
      {
        name: "Medicinal Plants",
        description: "Herbs, medicinal plants, and natural remedies",
        internationalDemand: "Medium-High",
        exportMarkets: "EU, USA, Middle East, China, Japan",
      },
    ],
    upazilas: [
      {
        id: "sylhet-sadar",
        name: "Sylhet Sadar",
        population: "0.8 million",
        projects: 2,
        volunteers: 50,
        status: "active",
        literacyRate: "70.5%",
        educationalInstitutions: 280,
        keyProducts: "Tea, Natural Gas, Citrus Fruits, Tourism Services",
        investmentPotential: "Tourism, Tea Processing, Energy Sector",
      },
      {
        id: "balaganj",
        name: "Balaganj",
        population: "0.3 million",
        projects: 1,
        volunteers: 25,
        status: "active",
        literacyRate: "65.2%",
        educationalInstitutions: 90,
        keyProducts: "Tea, Rice, Vegetables, Medicinal Plants",
        investmentPotential: "Tea Processing, Agriculture, Medicinal Plants",
      },
      {
        id: "beanibazar",
        name: "Beanibazar",
        population: "0.2 million",
        projects: 1,
        volunteers: 20,
        status: "active",
        literacyRate: "64.8%",
        educationalInstitutions: 70,
        keyProducts: "Tea, Natural Gas, Rice, Vegetables",
        investmentPotential: "Energy Sector, Tea Processing, Agriculture",
      },
      {
        id: "bishwanath",
        name: "Bishwanath",
        population: "0.2 million",
        projects: 1,
        volunteers: 15,
        status: "active",
        literacyRate: "65.5%",
        educationalInstitutions: 65,
        keyProducts: "Tea, Rice, Vegetables, Handicrafts",
        investmentPotential: "Tea Processing, Agriculture, Handicrafts",
      },
      {
        id: "companiganj",
        name: "Companiganj",
        population: "0.1 million",
        projects: 1,
        volunteers: 10,
        status: "active",
        literacyRate: "63.2%",
        educationalInstitutions: 40,
        keyProducts: "Natural Gas, Rice, Vegetables, Stone",
        investmentPotential: "Energy Sector, Stone Mining, Agriculture",
      },
      {
        id: "fenchuganj",
        name: "Fenchuganj",
        population: "0.1 million",
        projects: 1,
        volunteers: 10,
        status: "active",
        literacyRate: "64.5%",
        educationalInstitutions: 45,
        keyProducts: "Natural Gas, Rice, Vegetables, Tea",
        investmentPotential: "Energy Sector, Agriculture, Tea Processing",
      },
      {
        id: "golapganj",
        name: "Golapganj",
        population: "0.3 million",
        projects: 1,
        volunteers: 20,
        status: "active",
        literacyRate: "66.2%",
        educationalInstitutions: 85,
        keyProducts: "Tea, Rice, Vegetables, Fruits",
        investmentPotential: "Tea Processing, Agriculture, Fruit Processing",
      },
      {
        id: "gowainghat",
        name: "Gowainghat",
        population: "0.2 million",
        projects: 1,
        volunteers: 15,
        status: "active",
        literacyRate: "62.8%",
        educationalInstitutions: 60,
        keyProducts: "Stone, Tea, Rice, Medicinal Plants",
        investmentPotential: "Stone Mining, Tea Processing, Eco-tourism",
      },
      {
        id: "jaintiapur",
        name: "Jaintiapur",
        population: "0.2 million",
        projects: 1,
        volunteers: 15,
        status: "active",
        literacyRate: "63.5%",
        educationalInstitutions: 65,
        keyProducts: "Stone, Tea, Rice, Medicinal Plants",
        investmentPotential: "Stone Mining, Tea Processing, Tourism",
      },
      {
        id: "kanaighat",
        name: "Kanaighat",
        population: "0.2 million",
        projects: 1,
        volunteers: 15,
        status: "active",
        literacyRate: "62.5%",
        educationalInstitutions: 60,
        keyProducts: "Tea, Rice, Vegetables, Stone",
        investmentPotential: "Tea Processing, Stone Mining, Agriculture",
      },
      {
        id: "osmaninagar",
        name: "Osmaninagar",
        population: "0.3 million",
        projects: 1,
        volunteers: 20,
        status: "active",
        literacyRate: "65.8%",
        educationalInstitutions: 80,
        keyProducts: "Tea, Rice, Vegetables, Fruits",
        investmentPotential: "Tea Processing, Agriculture, Fruit Processing",
      },
      {
        id: "zakiganj",
        name: "Zakiganj",
        population: "0.2 million",
        projects: 1,
        volunteers: 15,
        status: "active",
        literacyRate: "63.2%",
        educationalInstitutions: 65,
        keyProducts: "Tea, Rice, Vegetables, Handicrafts",
        investmentPotential: "Tea Processing, Agriculture, Handicrafts",
      },
      {
        id: "dakshin-surma",
        name: "Dakshin Surma",
        population: "0.3 million",
        projects: 1,
        volunteers: 20,
        status: "active",
        literacyRate: "66.5%",
        educationalInstitutions: 75,
        keyProducts: "Tea, Rice, Vegetables, Fruits",
        investmentPotential: "Tea Processing, Agriculture, Fruit Processing",
      },
    ],
    cityCorporations: [
      {
        id: "scc",
        name: "Sylhet City Corporation",
        population: "0.5 million",
        projects: 3,
        volunteers: 80,
        status: "active",
        literacyRate: "72.5%",
        educationalInstitutions: 320,
        keyProducts: "Tea, Tourism Services, Education Services, Handicrafts",
        investmentPotential: "Tourism, Education, Commercial Development",
        wards: [
          {
            id: "ward-1",
            name: "Ward 1",
            population: "25,000",
            projects: 1,
            volunteers: 10,
            status: "active",
            literacyRate: "73.2%",
            educationalInstitutions: 18,
            keyProducts: "Tourism Services, Retail, Handicrafts",
            investmentPotential: "Tourism, Commercial Development",
          },
          {
            id: "ward-2",
            name: "Ward 2",
            population: "30,000",
            projects: 1,
            volunteers: 15,
            status: "active",
            literacyRate: "74.5%",
            educationalInstitutions: 22,
            keyProducts: "Education Services, Retail, Handicrafts",
            investmentPotential: "Education, Commercial Development",
          },
          {
            id: "ward-3",
            name: "Ward 3",
            population: "35,000",
            projects: 1,
            volunteers: 20,
            status: "active",
            literacyRate: "72.8%",
            educationalInstitutions: 25,
            keyProducts: "Tourism Services, Tea, Retail",
            investmentPotential: "Tourism, Commercial Development",
          },
          {
            id: "ward-4",
            name: "Ward 4",
            population: "28,000",
            projects: 1,
            volunteers: 12,
            status: "active",
            literacyRate: "71.5%",
            educationalInstitutions: 20,
            keyProducts: "Handicrafts, Retail, Services",
            investmentPotential: "Handicraft Industry, Commercial Development",
          },
          {
            id: "ward-5",
            name: "Ward 5",
            population: "32,000",
            projects: 1,
            volunteers: 18,
            status: "active",
            literacyRate: "73.8%",
            educationalInstitutions: 24,
            keyProducts: "Tourism Services, Education, Retail",
            investmentPotential: "Tourism, Education, Commercial Development",
          },
        ],
      },
    ],
    activities: [
      {
        id: 1,
        name: "Tea Garden Outreach",
        location: "Sylhet Sadar",
        date: "2023-10-10",
        status: "Completed",
        participants: 80,
      },
      {
        id: 2,
        name: "Environmental Conservation",
        location: "Gowainghat",
        date: "2023-11-15",
        status: "Ongoing",
        participants: 65,
      },
      {
        id: 3,
        name: "Cultural Festival",
        location: "Sylhet City",
        date: "2023-12-25",
        status: "Upcoming",
        participants: 150,
      },
      {
        id: 4,
        name: "Tourism Development",
        location: "Jaintiapur",
        date: "2024-01-05",
        status: "Upcoming",
        participants: 70,
      },
    ],
  },
}

export default function DistrictPage() {
  const params = useParams()
  const router = useRouter()
  const divisionId = params.division as string
  const districtId = params.district as string
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [expandedCityCorps, setExpandedCityCorps] = useState<string[]>([])

  // Check if district exists
  if (!districtData[districtId as keyof typeof districtData]) {
    return (
      <CoreTeamAuthCheck>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">District Not Found</h1>
            <p className="text-gray-600 mb-6">The district you are looking for does not exist.</p>
            <button
              onClick={() => router.push(`/admin/activity-areas/${divisionId}`)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Return to Division
            </button>
          </div>
        </div>
      </CoreTeamAuthCheck>
    )
  }

  const district = districtData[districtId as keyof typeof districtData]

  // Filter upazilas based on search and status
  const filteredUpazilas = district.upazilas.filter((upazila) => {
    const matchesSearch = upazila.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || upazila.status === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <CoreTeamAuthCheck>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <Link href="/admin/activity-areas" className="text-blue-600 hover:text-blue-800 mr-2">
                Activity Areas
              </Link>
              <span className="text-gray-500">/</span>
              <Link href={`/admin/activity-areas/${divisionId}`} className="text-blue-600 hover:text-blue-800 mx-2">
                {district.divisionName}
              </Link>
              <span className="text-gray-500">/</span>
              <span className="ml-2 text-gray-800">{district.name}</span>
            </div>
            <h1 className="text-3xl font-bold text-blue-900 mb-2">{district.name} District</h1>
            <p className="text-gray-600">{district.description}</p>
          </div>

          {/* Tabs */}
          <div className="mb-6 border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "overview"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("upazilas")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "upazilas"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Upazilas
              </button>
              <button
                onClick={() => setActiveTab("activities")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "activities"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Activities
              </button>
              <button
                onClick={() => setActiveTab("reports")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "reports"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Reports
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div>
              {/* Dashboard Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
                  <h3 className="text-gray-500 text-sm font-medium">Upazilas</h3>
                  <p className="text-3xl font-bold text-gray-800">{district.upazilas.length}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
                  <h3 className="text-gray-500 text-sm font-medium">Population</h3>
                  <p className="text-3xl font-bold text-gray-800">{district.population}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-600">
                  <h3 className="text-gray-500 text-sm font-medium">Active Projects</h3>
                  <p className="text-3xl font-bold text-gray-800">{district.projects}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-600">
                  <h3 className="text-gray-500 text-sm font-medium">Volunteers</h3>
                  <p className="text-3xl font-bold text-gray-800">{district.volunteers}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-teal-600">
                  <h3 className="text-gray-500 text-sm font-medium">Literacy Rate</h3>
                  <p className="text-3xl font-bold text-gray-800">{district.literacyRate}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6 border-l-4 border-indigo-600">
                  <h3 className="text-gray-500 text-sm font-medium">Educational Institutions</h3>
                  <p className="text-3xl font-bold text-gray-800">
                    {district.educationalInstitutions.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* District Overview */}
              <div className="bg-white rounded-lg shadow mb-8 p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{district.name} District Overview</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="prose max-w-none">
                    <h3 className="text-lg font-semibold text-blue-700">Education Landscape</h3>
                    <p>{district.educationSummary}</p>
                  </div>
                  <div className="prose max-w-none">
                    <h3 className="text-lg font-semibold text-green-700">Economic Profile</h3>
                    <p>{district.economicSummary}</p>
                  </div>
                  <div className="prose max-w-none">
                    <h3 className="text-lg font-semibold text-purple-700">Investment Opportunities</h3>
                    <p>{district.investmentOpportunities}</p>
                  </div>
                </div>
              </div>

              {/* Key Products with International Demand */}
              <div className="bg-white rounded-lg shadow mb-8 p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Key Products with International Market Potential
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          International Demand
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Export Markets
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {district.keyProducts.map((product, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{product.name}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{product.description}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                product.internationalDemand === "Very High"
                                  ? "bg-green-100 text-green-800"
                                  : product.internationalDemand === "High"
                                    ? "bg-blue-100 text-blue-800"
                                    : product.internationalDemand === "Medium-High"
                                      ? "bg-teal-100 text-teal-800"
                                      : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {product.internationalDemand}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{product.exportMarkets}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* District Info */}
              <div className="bg-white rounded-lg shadow p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">District Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-3">Demographics</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Population:</span>
                        <span className="font-medium">{district.population}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Area:</span>
                        <span className="font-medium">{district.area}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Density:</span>
                        <span className="font-medium">
                          {(
                            (Number.parseFloat(district.population) * 1000000) /
                            Number.parseFloat(district.area.split(" ")[0])
                          ).toFixed(0)}{" "}
                          people/km²
                        </span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Literacy Rate:</span>
                        <span className="font-medium">{district.literacyRate}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Educational Institutions:</span>
                        <span className="font-medium">{district.educationalInstitutions.toLocaleString()}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-3">Operations</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Active Projects:</span>
                        <span className="font-medium">{district.projects}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Volunteers:</span>
                        <span className="font-medium">{district.volunteers}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Volunteer Ratio:</span>
                        <span className="font-medium">
                          1:{Math.round((Number.parseFloat(district.population) * 1000000) / district.volunteers)}
                        </span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Education-to-Population Ratio:</span>
                        <span className="font-medium">
                          1:
                          {Math.round(
                            (Number.parseFloat(district.population) * 1000000) / district.educationalInstitutions,
                          )}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "upazilas" && (
            <div>
              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search upazilas..."
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
                    Add New Upazila
                  </button>
                </div>
              </div>

              {/* Upazilas List */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Population
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Literacy Rate
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Projects
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Volunteers
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredUpazilas.map((upazila) => (
                        <tr key={upazila.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{upazila.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{upazila.population}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{upazila.literacyRate}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{upazila.projects}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{upazila.volunteers}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                upazila.status === "active"
                                  ? "bg-green-100 text-green-800"
                                  : upazila.status === "alert"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {upazila.status.charAt(0).toUpperCase() + upazila.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                            <button className="text-blue-600 hover:text-blue-900">View</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* City Corporations Section - Only for Dhaka, Chittagong, and Sylhet */}
              {(districtId === "dhaka-district" ||
                districtId === "chittagong-district" ||
                districtId === "sylhet-district") &&
                district.cityCorporations && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">City Corporations</h3>
                    <div className="bg-white rounded-lg shadow overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Name
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Population
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Literacy Rate
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Projects
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Volunteers
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {district.cityCorporations.map((cityCorp) => (
                              <tr key={cityCorp.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm font-medium text-gray-900">{cityCorp.name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-500">{cityCorp.population}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-500">{cityCorp.literacyRate}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-500">{cityCorp.projects}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-500">{cityCorp.volunteers}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span
                                    className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                      cityCorp.status === "active"
                                        ? "bg-green-100 text-green-800"
                                        : cityCorp.status === "alert"
                                          ? "bg-red-100 text-red-800"
                                          : "bg-gray-100 text-gray-800"
                                    }}`}
                                  >
                                    {cityCorp.status.charAt(0).toUpperCase() + cityCorp.status.slice(1)}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <button
                                    className="text-blue-600 hover:text-blue-900"
                                    onClick={() => {
                                      // Toggle showing wards for this city corporation
                                      const updatedExpandedCityCorps = expandedCityCorps.includes(cityCorp.id)
                                        ? expandedCityCorps.filter((id) => id !== cityCorp.id)
                                        : [...expandedCityCorps, cityCorp.id]
                                      setExpandedCityCorps(updatedExpandedCityCorps)
                                    }}
                                  >
                                    {expandedCityCorps.includes(cityCorp.id) ? "Hide Wards" : "View Wards"}
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Wards for expanded city corporations */}
                    {district.cityCorporations.map(
                      (cityCorp) =>
                        expandedCityCorps.includes(cityCorp.id) && (
                          <div key={`wards-${cityCorp.id}`} className="mt-4 ml-8">
                            <h4 className="text-md font-medium text-gray-700 mb-3">{cityCorp.name} - Wards</h4>
                            <div className="bg-white rounded-lg shadow overflow-hidden">
                              <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                  <thead className="bg-gray-50">
                                    <tr>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                      >
                                        Name
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                      >
                                        Population
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                      >
                                        Literacy Rate
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                      >
                                        Educational Institutions
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                      >
                                        Key Products
                                      </th>
                                      <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                      >
                                        Status
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="bg-white divide-y divide-gray-200">
                                    {cityCorp.wards.map((ward) => (
                                      <tr key={ward.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm font-medium text-gray-900">{ward.name}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm text-gray-500">{ward.population}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm text-gray-500">{ward.literacyRate}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                          <div className="text-sm text-gray-500">{ward.educationalInstitutions}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                          <div className="text-sm text-gray-500">{ward.keyProducts}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                          <span
                                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                              ward.status === "active"
                                                ? "bg-green-100 text-green-800"
                                                : ward.status === "alert"
                                                  ? "bg-red-100 text-red-800"
                                                  : "bg-gray-100 text-gray-800"
                                            }`}
                                          >
                                            {ward.status.charAt(0).toUpperCase() + ward.status.slice(1)}
                                          </span>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        ),
                    )}
                  </div>
                )}
            </div>
          )}

          {activeTab === "activities" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Recent Activities</h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Add New Activity
                </button>
              </div>

              {/* Activities List */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Activity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Location
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Participants
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {district.activities.map((activity) => (
                        <tr key={activity.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{activity.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{activity.location}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{activity.date}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                activity.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : activity.status === "Ongoing"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {activity.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{activity.participants}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                            <button className="text-blue-600 hover:text-blue-900">Details</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reports" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Reports & Analytics</h2>
                <div className="flex space-x-3">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="all-time">All Time</option>
                    <option value="this-year">This Year</option>
                    <option value="this-month">This Month</option>
                    <option value="last-month">Last Month</option>
                  </select>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Export Report
                  </button>
                </div>
              </div>

              {/* Reports */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Project Distribution</h3>
                  <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-500">Project Distribution Chart</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Volunteer Engagement</h3>
                  <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-500">Volunteer Engagement Chart</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Activity Timeline</h3>
                  <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-500">Activity Timeline Chart</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Resource Allocation</h3>
                  <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-500">Resource Allocation Chart</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Key Performance Indicators</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Project Completion Rate</h4>
                    <p className="text-2xl font-bold text-green-600">92%</p>
                    <p className="text-xs text-gray-500 mt-1">+5% from previous period</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Volunteer Retention</h4>
                    <p className="text-2xl font-bold text-blue-600">87%</p>
                    <p className="text-xs text-gray-500 mt-1">+2% from previous period</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Community Engagement</h4>
                    <p className="text-2xl font-bold text-purple-600">78%</p>
                    <p className="text-xs text-gray-500 mt-1">+8% from previous period</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </CoreTeamAuthCheck>
  )
}

