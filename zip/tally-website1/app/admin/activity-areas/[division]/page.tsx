"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import CoreTeamAuthCheck from "@/components/core-team-auth-check"

// Sample data for districts by division
const divisionData = {
  dhaka: {
    name: "Dhaka",
    description: "Dhaka Division is the most populous division in Bangladesh and home to the capital city.",
    educationSummary:
      "Dhaka Division has the highest literacy rate in Bangladesh at 76.5%, with over 12,850 educational institutions including prestigious universities like Dhaka University and BUET. However, there remains a significant urban-rural education gap that TRUSTED ALLY aims to address through targeted educational programs and technology integration in rural schools.",
    economicSummary:
      "As Bangladesh's economic center, Dhaka Division hosts major industries including textiles, pharmaceuticals, IT services, and manufacturing. TRUSTED ALLY is working to connect rural producers with urban and international markets, particularly focusing on handicrafts, agricultural products, and specialized textiles that have high international demand.",
    investmentOpportunities:
      "Key investment opportunities include technology parks, urban infrastructure development, manufacturing facilities, educational technology, and sustainable urban solutions. TRUSTED ALLY facilitates connections between international investors and local entrepreneurs to stimulate economic growth and job creation.",
    districts: [
      {
        id: "dhaka-district",
        name: "Dhaka",
        population: "12.5 million",
        projects: 15,
        volunteers: 450,
        status: "active",
        literacyRate: "78.2%",
        educationalInstitutions: 4250,
        keyProducts: "Textiles, IT Services, Handicrafts, Processed Foods",
        investmentPotential: "Technology Parks, Urban Infrastructure, Education Technology",
      },
      {
        id: "gazipur",
        name: "Gazipur",
        population: "3.4 million",
        projects: 8,
        volunteers: 210,
        status: "active",
        literacyRate: "75.8%",
        educationalInstitutions: 1120,
        keyProducts: "Textiles, Furniture, Poultry, Ceramics",
        investmentPotential: "Manufacturing, Industrial Parks, Agro-processing",
      },
      {
        id: "narayanganj",
        name: "Narayanganj",
        population: "2.9 million",
        projects: 7,
        volunteers: 180,
        status: "active",
        literacyRate: "74.5%",
        educationalInstitutions: 980,
        keyProducts: "Knitwear, Textiles, Jute Products, River Fish",
        investmentPotential: "Textile Manufacturing, River Transportation, Logistics",
      },
      {
        id: "tangail",
        name: "Tangail",
        population: "3.6 million",
        projects: 6,
        volunteers: 150,
        status: "active",
        literacyRate: "68.2%",
        educationalInstitutions: 1050,
        keyProducts: "Tangail Saree, Handloom Products, Rice, Vegetables",
        investmentPotential: "Handloom Industry, Agro-processing, Tourism",
      },
      {
        id: "narsingdi",
        name: "Narsingdi",
        population: "2.2 million",
        projects: 5,
        volunteers: 120,
        status: "active",
        literacyRate: "67.8%",
        educationalInstitutions: 720,
        keyProducts: "Textiles, Cotton Fabrics, Vegetables, Rice",
        investmentPotential: "Textile Processing, Agricultural Development",
      },
      {
        id: "munshiganj",
        name: "Munshiganj",
        population: "1.4 million",
        projects: 4,
        volunteers: 90,
        status: "active",
        literacyRate: "65.3%",
        educationalInstitutions: 480,
        keyProducts: "Pottery, Vegetables, Fish, Rice",
        investmentPotential: "Fisheries, Pottery Industry, Agriculture",
      },
      {
        id: "manikganj",
        name: "Manikganj",
        population: "1.4 million",
        projects: 3,
        volunteers: 85,
        status: "active",
        literacyRate: "64.8%",
        educationalInstitutions: 460,
        keyProducts: "Jute, Rice, Vegetables, Dairy",
        investmentPotential: "Jute Processing, Dairy Industry, Agriculture",
      },
      {
        id: "faridpur",
        name: "Faridpur",
        population: "1.9 million",
        projects: 4,
        volunteers: 95,
        status: "active",
        literacyRate: "65.5%",
        educationalInstitutions: 580,
        keyProducts: "Jute, Sugarcane, Dairy, Vegetables",
        investmentPotential: "Sugar Industry, Jute Processing, Dairy",
      },
      {
        id: "madaripur",
        name: "Madaripur",
        population: "1.2 million",
        projects: 3,
        volunteers: 75,
        status: "active",
        literacyRate: "63.2%",
        educationalInstitutions: 380,
        keyProducts: "Coconut, Betel Leaf, Rice, Fish",
        investmentPotential: "Coconut Processing, Fisheries, Agriculture",
      },
      {
        id: "shariatpur",
        name: "Shariatpur",
        population: "1.1 million",
        projects: 3,
        volunteers: 70,
        status: "active",
        literacyRate: "62.8%",
        educationalInstitutions: 350,
        keyProducts: "Hilsa Fish, Rice, Jute, Vegetables",
        investmentPotential: "Fish Processing, Jute Industry, Agriculture",
      },
      {
        id: "rajbari",
        name: "Rajbari",
        population: "1.0 million",
        projects: 3,
        volunteers: 65,
        status: "active",
        literacyRate: "63.5%",
        educationalInstitutions: 320,
        keyProducts: "Jute, Rice, Sugarcane, Vegetables",
        investmentPotential: "Jute Processing, Sugar Industry, Agriculture",
      },
      {
        id: "gopalganj",
        name: "Gopalganj",
        population: "1.2 million",
        projects: 3,
        volunteers: 80,
        status: "active",
        literacyRate: "64.2%",
        educationalInstitutions: 390,
        keyProducts: "Date Molasses, Rice, Fish, Vegetables",
        investmentPotential: "Date Processing, Fisheries, Agriculture",
      },
      {
        id: "kishoreganj",
        name: "Kishoreganj",
        population: "2.9 million",
        projects: 5,
        volunteers: 110,
        status: "active",
        literacyRate: "65.8%",
        educationalInstitutions: 850,
        keyProducts: "Rice, Jute, Vegetables, Handicrafts",
        investmentPotential: "Handicraft Industry, Agriculture, Jute Processing",
      },
    ],
  },
  chittagong: {
    name: "Chittagong",
    description: "Chittagong Division is the largest division by area and includes the port city of Chittagong.",
    educationSummary:
      "Chittagong Division has a literacy rate of 64.8% with approximately 9,750 educational institutions. The division is home to Chittagong University and several specialized institutions. TRUSTED ALLY is implementing programs to improve educational access in remote hill tract areas and enhance technical education to support the division's industrial and maritime sectors.",
    economicSummary:
      "As Bangladesh's commercial gateway, Chittagong Division is known for its port activities, shipbuilding, tea production, and leather goods. TRUSTED ALLY is working to connect hill tract communities with international markets for their unique handicrafts, medicinal plants, and organic produce, which have significant demand in global markets.",
    investmentOpportunities:
      "Promising investment areas include port expansion, tourism development (particularly in Cox's Bazar and the Chittagong Hill Tracts), shipbuilding, agro-processing, and sustainable forestry. TRUSTED ALLY facilitates connections between international investors and local opportunities to drive economic growth while preserving the region's cultural and environmental heritage.",
    districts: [
      {
        id: "chittagong-district",
        name: "Chittagong",
        population: "8.4 million",
        projects: 12,
        volunteers: 320,
        status: "active",
        literacyRate: "72.5%",
        educationalInstitutions: 2850,
        keyProducts: "Marine Products, Ship Building, Steel, Leather Goods",
        investmentPotential: "Port Development, Shipbuilding, Manufacturing",
      },
      {
        id: "coxs-bazar",
        name: "Cox's Bazar",
        population: "2.3 million",
        projects: 9,
        volunteers: 240,
        status: "active",
        literacyRate: "61.2%",
        educationalInstitutions: 780,
        keyProducts: "Dried Fish, Salt, Handicrafts, Tourism Services",
        investmentPotential: "Tourism Infrastructure, Seafood Processing, Hospitality",
      },
      {
        id: "bandarban",
        name: "Bandarban",
        population: "0.4 million",
        projects: 6,
        volunteers: 110,
        status: "active",
        literacyRate: "48.5%",
        educationalInstitutions: 210,
        keyProducts: "Tribal Handicrafts, Bamboo Products, Medicinal Plants, Fruits",
        investmentPotential: "Eco-tourism, Medicinal Plant Processing, Handicrafts",
      },
      {
        id: "rangamati",
        name: "Rangamati",
        population: "0.6 million",
        projects: 5,
        volunteers: 95,
        status: "active",
        literacyRate: "53.8%",
        educationalInstitutions: 280,
        keyProducts: "Tribal Textiles, Bamboo Products, Fruits, Honey",
        investmentPotential: "Tourism, Handicraft Industry, Fruit Processing",
      },
      {
        id: "khagrachari",
        name: "Khagrachari",
        population: "0.6 million",
        projects: 4,
        volunteers: 85,
        status: "active",
        literacyRate: "51.2%",
        educationalInstitutions: 260,
        keyProducts: "Tribal Handicrafts, Fruits, Bamboo Products, Spices",
        investmentPotential: "Eco-tourism, Fruit Processing, Handicraft Industry",
      },
      {
        id: "noakhali",
        name: "Noakhali",
        population: "3.1 million",
        projects: 7,
        volunteers: 160,
        status: "active",
        literacyRate: "63.5%",
        educationalInstitutions: 920,
        keyProducts: "Rice, Fish, Coconut, Salt",
        investmentPotential: "Fisheries, Salt Industry, Agriculture",
      },
      {
        id: "feni",
        name: "Feni",
        population: "1.5 million",
        projects: 5,
        volunteers: 120,
        status: "active",
        literacyRate: "65.2%",
        educationalInstitutions: 480,
        keyProducts: "Rice, Vegetables, Poultry, Fish",
        investmentPotential: "Poultry Industry, Agriculture, Food Processing",
      },
      {
        id: "lakshmipur",
        name: "Lakshmipur",
        population: "1.7 million",
        projects: 4,
        volunteers: 100,
        status: "active",
        literacyRate: "62.8%",
        educationalInstitutions: 520,
        keyProducts: "Rice, Fish, Vegetables, Betel Leaf",
        investmentPotential: "Fisheries, Agriculture, Food Processing",
      },
      {
        id: "comilla",
        name: "Comilla",
        population: "5.4 million",
        projects: 10,
        volunteers: 220,
        status: "active",
        literacyRate: "67.8%",
        educationalInstitutions: 1650,
        keyProducts: "Rice, Vegetables, Textiles, Handicrafts",
        investmentPotential: "Textile Industry, Food Processing, Handicrafts",
      },
      {
        id: "chandpur",
        name: "Chandpur",
        population: "2.4 million",
        projects: 6,
        volunteers: 140,
        status: "active",
        literacyRate: "64.5%",
        educationalInstitutions: 720,
        keyProducts: "Hilsa Fish, Rice, Vegetables, Pottery",
        investmentPotential: "Fish Processing, Pottery Industry, Agriculture",
      },
      {
        id: "brahmanbaria",
        name: "Brahmanbaria",
        population: "2.8 million",
        projects: 7,
        volunteers: 160,
        status: "active",
        literacyRate: "63.2%",
        educationalInstitutions: 840,
        keyProducts: "Rice, Vegetables, Handicrafts, Musical Instruments",
        investmentPotential: "Musical Instrument Industry, Agriculture, Handicrafts",
      },
    ],
  },
  rajshahi: {
    name: "Rajshahi",
    description: "Rajshahi Division is known for its agricultural production and cultural heritage.",
    educationSummary:
      "Rajshahi Division has a literacy rate of 63.2% with approximately 6,320 educational institutions. The division is home to Rajshahi University, one of the largest universities in Bangladesh. TRUSTED ALLY is implementing programs to improve educational quality in rural areas and develop specialized agricultural education to support the region's primary economic activity.",
    economicSummary:
      "Rajshahi Division is renowned for its silk production, mango cultivation, rice farming, and traditional handicrafts. TRUSTED ALLY is working to connect local silk producers, mango farmers, and artisans with international markets, particularly focusing on organic mangoes and handcrafted silk products that command premium prices in global markets.",
    investmentOpportunities:
      "Key investment opportunities include agro-processing facilities, silk production modernization, food processing plants, and cultural tourism development. TRUSTED ALLY facilitates connections between international investors and local entrepreneurs to develop these sectors while preserving traditional knowledge and practices.",
    districts: [
      {
        id: "rajshahi-district",
        name: "Rajshahi",
        population: "2.6 million",
        projects: 8,
        volunteers: 190,
        status: "active",
        literacyRate: "67.5%",
        educationalInstitutions: 780,
        keyProducts: "Silk, Mango, Rice, Pottery",
        investmentPotential: "Silk Industry, Agro-processing, Food Processing",
      },
      {
        id: "chapai-nawabganj",
        name: "Chapai Nawabganj",
        population: "1.6 million",
        projects: 5,
        volunteers: 120,
        status: "active",
        literacyRate: "61.8%",
        educationalInstitutions: 520,
        keyProducts: "Mango, Rice, Silk, Handicrafts",
        investmentPotential: "Mango Processing, Silk Production, Agriculture",
      },
      {
        id: "naogaon",
        name: "Naogaon",
        population: "2.6 million",
        projects: 6,
        volunteers: 140,
        status: "active",
        literacyRate: "62.5%",
        educationalInstitutions: 680,
        keyProducts: "Rice, Wheat, Sugarcane, Vegetables",
        investmentPotential: "Rice Processing, Sugar Industry, Agriculture",
      },
      {
        id: "natore",
        name: "Natore",
        population: "1.7 million",
        projects: 5,
        volunteers: 110,
        status: "active",
        literacyRate: "63.2%",
        educationalInstitutions: 540,
        keyProducts: "Rice, Sugarcane, Vegetables, Dairy",
        investmentPotential: "Sugar Industry, Dairy Processing, Agriculture",
      },
      {
        id: "pabna",
        name: "Pabna",
        population: "2.5 million",
        projects: 5,
        volunteers: 120,
        status: "active",
        literacyRate: "64.8%",
        educationalInstitutions: 620,
        keyProducts: "Handloom Products, Rice, Vegetables, Dairy",
        investmentPotential: "Textile Industry, Dairy Processing, Agriculture",
      },
      {
        id: "sirajganj",
        name: "Sirajganj",
        population: "3.1 million",
        projects: 7,
        volunteers: 160,
        status: "active",
        literacyRate: "62.5%",
        educationalInstitutions: 720,
        keyProducts: "Handloom Products, Dairy, Rice, Jute",
        investmentPotential: "Textile Industry, Dairy Processing, Jute Products",
      },
      {
        id: "bogra",
        name: "Bogra",
        population: "3.4 million",
        projects: 6,
        volunteers: 150,
        status: "active",
        literacyRate: "65.2%",
        educationalInstitutions: 780,
        keyProducts: "Rice, Vegetables, Dairy, Handicrafts",
        investmentPotential: "Food Processing, Dairy Industry, Agriculture",
      },
      {
        id: "joypurhat",
        name: "Joypurhat",
        population: "0.9 million",
        projects: 3,
        volunteers: 80,
        status: "active",
        literacyRate: "63.8%",
        educationalInstitutions: 320,
        keyProducts: "Rice, Sugarcane, Dairy, Vegetables",
        investmentPotential: "Sugar Industry, Dairy Processing, Agriculture",
      },
    ],
  },
  khulna: {
    name: "Khulna",
    description: "Khulna Division is home to the Sundarbans, the world's largest mangrove forest.",
    educationSummary:
      "Khulna Division has a literacy rate of 61.8% with approximately 5,480 educational institutions. TRUSTED ALLY is implementing programs to improve educational access in remote areas, particularly focusing on environmental education and sustainable development skills to support conservation of the Sundarbans while enabling economic development.",
    economicSummary:
      "Khulna Division is known for its shrimp farming, jute production, coconut cultivation, and honey collection from the Sundarbans. TRUSTED ALLY is working to connect local producers with international markets for organic honey, sustainably harvested seafood, and eco-friendly jute products, which command premium prices in environmentally conscious global markets.",
    investmentOpportunities:
      "Key investment opportunities include eco-tourism development, sustainable seafood processing, renewable energy projects, and jute product manufacturing. TRUSTED ALLY facilitates connections between international investors and local entrepreneurs to develop these sectors while ensuring environmental sustainability.",
    districts: [
      {
        id: "khulna-district",
        name: "Khulna",
        population: "2.3 million",
        projects: 7,
        volunteers: 170,
        status: "active",
        literacyRate: "65.8%",
        educationalInstitutions: 720,
        keyProducts: "Shrimp, Jute, Coconut, Honey",
        investmentPotential: "Seafood Processing, Jute Industry, Eco-tourism",
      },
      {
        id: "bagerhat",
        name: "Bagerhat",
        population: "1.5 million",
        projects: 5,
        volunteers: 120,
        status: "active",
        literacyRate: "60.2%",
        educationalInstitutions: 480,
        keyProducts: "Shrimp, Fish, Honey, Coconut",
        investmentPotential: "Seafood Processing, Eco-tourism, Coconut Products",
      },
      {
        id: "satkhira",
        name: "Satkhira",
        population: "2.0 million",
        projects: 5,
        volunteers: 110,
        status: "active",
        literacyRate: "59.8%",
        educationalInstitutions: 580,
        keyProducts: "Shrimp, Rice, Vegetables, Honey",
        investmentPotential: "Shrimp Processing, Agriculture, Eco-tourism",
      },
      {
        id: "jessore",
        name: "Jessore",
        population: "2.8 million",
        projects: 6,
        volunteers: 140,
        status: "active",
        literacyRate: "64.5%",
        educationalInstitutions: 820,
        keyProducts: "Vegetables, Flowers, Rice, Betel Leaf",
        investmentPotential: "Floriculture, Vegetable Processing, Agriculture",
      },
      {
        id: "magura",
        name: "Magura",
        population: "0.9 million",
        projects: 3,
        volunteers: 70,
        status: "active",
        literacyRate: "61.2%",
        educationalInstitutions: 280,
        keyProducts: "Rice, Jute, Sugarcane, Vegetables",
        investmentPotential: "Jute Processing, Sugar Industry, Agriculture",
      },
      {
        id: "jhenaidah",
        name: "Jhenaidah",
        population: "1.8 million",
        projects: 4,
        volunteers: 100,
        status: "active",
        literacyRate: "62.5%",
        educationalInstitutions: 520,
        keyProducts: "Rice, Vegetables, Sugarcane, Jute",
        investmentPotential: "Sugar Industry, Jute Processing, Agriculture",
      },
      {
        id: "narail",
        name: "Narail",
        population: "0.7 million",
        projects: 3,
        volunteers: 60,
        status: "active",
        literacyRate: "60.8%",
        educationalInstitutions: 240,
        keyProducts: "Rice, Jute, Vegetables, Fish",
        investmentPotential: "Jute Processing, Fisheries, Agriculture",
      },
      {
        id: "kushtia",
        name: "Kushtia",
        population: "1.9 million",
        projects: 5,
        volunteers: 120,
        status: "active",
        literacyRate: "63.5%",
        educationalInstitutions: 580,
        keyProducts: "Tobacco, Rice, Sugarcane, Vegetables",
        investmentPotential: "Tobacco Processing, Sugar Industry, Agriculture",
      },
      {
        id: "chuadanga",
        name: "Chuadanga",
        population: "1.1 million",
        projects: 3,
        volunteers: 80,
        status: "active",
        literacyRate: "61.5%",
        educationalInstitutions: 320,
        keyProducts: "Rice, Sugarcane, Vegetables, Jute",
        investmentPotential: "Sugar Industry, Jute Processing, Agriculture",
      },
      {
        id: "meherpur",
        name: "Meherpur",
        population: "0.7 million",
        projects: 2,
        volunteers: 50,
        status: "active",
        literacyRate: "60.2%",
        educationalInstitutions: 220,
        keyProducts: "Rice, Sugarcane, Vegetables, Jute",
        investmentPotential: "Sugar Industry, Jute Processing, Agriculture",
      },
    ],
  },
  barisal: {
    name: "Barisal",
    description: "Barisal Division is known for its rivers and waterways.",
    educationSummary:
      "Barisal Division has a literacy rate of 62.5% with approximately 3,250 educational institutions. TRUSTED ALLY is implementing programs to improve educational access in remote riverine areas, particularly focusing on digital education to overcome geographical barriers and developing specialized agricultural and fisheries education to support the region's primary economic activities.",
    economicSummary:
      "Barisal Division is known for its rice cultivation, betel leaf production, coconut farming, and hilsa fish harvesting. TRUSTED ALLY is working to connect local producers with national and international markets, particularly focusing on premium hilsa fish, organic betel leaf, and coconut products that have significant demand in global markets.",
    investmentOpportunities:
      "Key investment opportunities include fisheries development, river transportation infrastructure, agricultural processing facilities, and eco-tourism. TRUSTED ALLY facilitates connections between investors and local entrepreneurs to develop these sectors while preserving the region's unique riverine ecosystem.",
    districts: [
      {
        id: "barisal-district",
        name: "Barisal",
        population: "2.3 million",
        projects: 6,
        volunteers: 140,
        status: "active",
        literacyRate: "65.2%",
        educationalInstitutions: 680,
        keyProducts: "Rice, Betel Leaf, Coconut, Hilsa Fish",
        investmentPotential: "Fisheries, Coconut Processing, River Transportation",
      },
      {
        id: "bhola",
        name: "Bhola",
        population: "1.8 million",
        projects: 5,
        volunteers: 110,
        status: "active",
        literacyRate: "61.8%",
        educationalInstitutions: 520,
        keyProducts: "Hilsa Fish, Rice, Betel Leaf, Coconut",
        investmentPotential: "Fish Processing, Agriculture, Renewable Energy",
      },
      {
        id: "patuakhali",
        name: "Patuakhali",
        population: "1.5 million",
        projects: 4,
        volunteers: 90,
        status: "active",
        literacyRate: "60.5%",
        educationalInstitutions: 420,
        keyProducts: "Rice, Fish, Coconut, Watermelon",
        investmentPotential: "Fisheries, Coconut Processing, Agriculture",
      },
      {
        id: "jhalokati",
        name: "Jhalokati",
        population: "0.7 million",
        projects: 3,
        volunteers: 70,
        status: "active",
        literacyRate: "62.2%",
        educationalInstitutions: 240,
        keyProducts: "Rice, Betel Leaf, Coconut, Fish",
        investmentPotential: "Betel Leaf Processing, Fisheries, Agriculture",
      },
      {
        id: "pirojpur",
        name: "Pirojpur",
        population: "1.1 million",
        projects: 3,
        volunteers: 80,
        status: "active",
        literacyRate: "61.5%",
        educationalInstitutions: 320,
        keyProducts: "Rice, Fish, Coconut, Betel Leaf",
        investmentPotential: "Fisheries, Coconut Processing, Agriculture",
      },
      {
        id: "barguna",
        name: "Barguna",
        population: "0.9 million",
        projects: 3,
        volunteers: 70,
        status: "active",
        literacyRate: "60.8%",
        educationalInstitutions: 280,
        keyProducts: "Rice, Fish, Coconut, Salt",
        investmentPotential: "Fisheries, Salt Industry, Coconut Processing",
      },
    ],
  },
  sylhet: {
    name: "Sylhet",
    description: "Sylhet Division is known for its tea gardens and natural beauty.",
    educationSummary:
      "Sylhet Division has a literacy rate of 65.2% with approximately 3,850 educational institutions. TRUSTED ALLY is implementing programs to improve educational quality and access, particularly focusing on technical education related to the energy sector and hospitality industry to support the region's economic strengths.",
    economicSummary:
      "Sylhet Division is renowned for its tea production, natural gas reserves, citrus fruit cultivation, and medicinal plant harvesting. TRUSTED ALLY is working to connect local producers with international markets, particularly focusing on organic tea, medicinal herbs, and specialty citrus products that command premium prices in global markets.",
    investmentOpportunities:
      "Key investment opportunities include tourism development, tea processing modernization, energy sector projects, and hospitality infrastructure. TRUSTED ALLY facilitates connections between international investors and local entrepreneurs to develop these sectors while preserving the region's natural beauty and cultural heritage.",
    districts: [
      {
        id: "sylhet-district",
        name: "Sylhet",
        population: "3.4 million",
        projects: 6,
        volunteers: 150,
        status: "active",
        literacyRate: "67.8%",
        educationalInstitutions: 980,
        keyProducts: "Tea, Natural Gas, Citrus Fruits, Medicinal Plants",
        investmentPotential: "Tourism, Tea Processing, Energy Sector, Hospitality",
      },
      {
        id: "moulvibazar",
        name: "Moulvibazar",
        population: "1.9 million",
        projects: 5,
        volunteers: 120,
        status: "active",
        literacyRate: "65.5%",
        educationalInstitutions: 580,
        keyProducts: "Tea, Rubber, Pineapple, Medicinal Plants",
        investmentPotential: "Tea Processing, Rubber Industry, Tourism",
      },
      {
        id: "habiganj",
        name: "Habiganj",
        population: "2.1 million",
        projects: 4,
        volunteers: 90,
        status: "active",
        literacyRate: "64.2%",
        educationalInstitutions: 620,
        keyProducts: "Tea, Natural Gas, Rice, Vegetables",
        investmentPotential: "Energy Sector, Tea Processing, Agriculture",
      },
      {
        id: "sunamganj",
        name: "Sunamganj",
        population: "2.4 million",
        projects: 5,
        volunteers: 110,
        status: "active",
        literacyRate: "62.8%",
        educationalInstitutions: 680,
        keyProducts: "Rice, Fish, Stone, Vegetables",
        investmentPotential: "Fisheries, Stone Mining, Agriculture",
      },
    ],
  },
  rangpur: {
    name: "Rangpur",
    description: "Rangpur Division is located in the northwestern part of Bangladesh.",
    educationSummary:
      "Rangpur Division has a literacy rate of 59.8% with approximately 5,120 educational institutions. TRUSTED ALLY is implementing programs to improve educational access and quality, particularly focusing on agricultural education and technical skills development to address the region's relatively lower literacy rate and support economic diversification.",
    economicSummary:
      "Rangpur Division is known for its tobacco cultivation, potato farming, jute production, and sugarcane growing. TRUSTED ALLY is working to connect local producers with national and international markets, particularly focusing on value-added potato products, handicrafts, and specialized agricultural goods that have significant demand in global markets.",
    investmentOpportunities:
      "Key investment opportunities include agro-processing facilities, cold storage infrastructure, textile manufacturing, and sustainable agriculture projects. TRUSTED ALLY facilitates connections between investors and local entrepreneurs to develop these sectors while addressing the region's seasonal food insecurity challenges.",
    districts: [
      {
        id: "rangpur-district",
        name: "Rangpur",
        population: "2.9 million",
        projects: 7,
        volunteers: 160,
        status: "active",
        literacyRate: "62.5%",
        educationalInstitutions: 820,
        keyProducts: "Tobacco, Potato, Jute, Handicrafts",
        investmentPotential: "Tobacco Processing, Cold Storage, Handicraft Industry",
      },
      {
        id: "dinajpur",
        name: "Dinajpur",
        population: "3.0 million",
        projects: 6,
        volunteers: 140,
        status: "active",
        literacyRate: "61.8%",
        educationalInstitutions: 780,
        keyProducts: "Rice, Potato, Wheat, Vegetables",
        investmentPotential: "Rice Processing, Cold Storage, Agriculture",
      },
      {
        id: "kurigram",
        name: "Kurigram",
        population: "2.1 million",
        projects: 4,
        volunteers: 100,
        status: "active",
        literacyRate: "56.2%",
        educationalInstitutions: 580,
        keyProducts: "Jute, Rice, Tobacco, Vegetables",
        investmentPotential: "Jute Processing, Tobacco Industry, Agriculture",
      },
      {
        id: "gaibandha",
        name: "Gaibandha",
        population: "2.4 million",
        projects: 5,
        volunteers: 120,
        status: "active",
        literacyRate: "57.5%",
        educationalInstitutions: 620,
        keyProducts: "Rice, Jute, Vegetables, Handicrafts",
        investmentPotential: "Jute Processing, Handicraft Industry, Agriculture",
      },
      {
        id: "nilphamari",
        name: "Nilphamari",
        population: "1.8 million",
        projects: 4,
        volunteers: 90,
        status: "active",
        literacyRate: "58.2%",
        educationalInstitutions: 520,
        keyProducts: "Rice, Tobacco, Jute, Vegetables",
        investmentPotential: "Tobacco Processing, Jute Industry, Agriculture",
      },
      {
        id: "panchagarh",
        name: "Panchagarh",
        population: "1.0 million",
        projects: 3,
        volunteers: 70,
        status: "active",
        literacyRate: "59.5%",
        educationalInstitutions: 320,
        keyProducts: "Tea, Stone, Rice, Vegetables",
        investmentPotential: "Tea Processing, Stone Mining, Agriculture",
      },
      {
        id: "thakurgaon",
        name: "Thakurgaon",
        population: "1.4 million",
        projects: 4,
        volunteers: 80,
        status: "active",
        literacyRate: "60.2%",
        educationalInstitutions: 420,
        keyProducts: "Rice, Potato, Sugarcane, Vegetables",
        investmentPotential: "Sugar Industry, Cold Storage, Agriculture",
      },
      {
        id: "lalmonirhat",
        name: "Lalmonirhat",
        population: "1.3 million",
        projects: 3,
        volunteers: 70,
        status: "active",
        literacyRate: "58.8%",
        educationalInstitutions: 380,
        keyProducts: "Rice, Tobacco, Jute, Vegetables",
        investmentPotential: "Tobacco Processing, Jute Industry, Agriculture",
      },
    ],
  },
  mymensingh: {
    name: "Mymensingh",
    description: "Mymensingh is the newest division, established in 2015.",
    educationSummary:
      "Mymensingh Division has a literacy rate of 60.5% with approximately 3,680 educational institutions. The division is home to Bangladesh Agricultural University, the country's premier agricultural education institution. TRUSTED ALLY is implementing programs to improve rural education access and quality, with a particular focus on agricultural sciences and veterinary education to support the region's economic strengths.",
    economicSummary:
      "Mymensingh Division is known for its rice cultivation, vegetable farming, dairy production, and fisheries. TRUSTED ALLY is working to connect local producers with national and international markets, particularly focusing on organic vegetables, dairy products, and medicinal herbs that have significant demand in health-conscious global markets.",
    investmentOpportunities:
      "Key investment opportunities include agricultural research facilities, dairy processing plants, fisheries development, and medicinal herb cultivation. TRUSTED ALLY facilitates connections between investors and local entrepreneurs to develop these sectors while leveraging the region's strong agricultural education infrastructure.",
    districts: [
      {
        id: "mymensingh-district",
        name: "Mymensingh",
        population: "5.1 million",
        projects: 6,
        volunteers: 140,
        status: "active",
        literacyRate: "63.5%",
        educationalInstitutions: 1250,
        keyProducts: "Rice, Vegetables, Dairy, Fisheries",
        investmentPotential: "Agriculture Research, Dairy Processing, Fisheries",
      },
      {
        id: "jamalpur",
        name: "Jamalpur",
        population: "2.3 million",
        projects: 5,
        volunteers: 110,
        status: "active",
        literacyRate: "59.2%",
        educationalInstitutions: 680,
        keyProducts: "Rice, Jute, Vegetables, Handicrafts",
        investmentPotential: "Jute Processing, Handicraft Industry, Agriculture",
      },
      {
        id: "netrokona",
        name: "Netrokona",
        population: "2.2 million",
        projects: 4,
        volunteers: 90,
        status: "active",
        literacyRate: "58.5%",
        educationalInstitutions: 620,
        keyProducts: "Rice, Fish, Medicinal Herbs, Vegetables",
        investmentPotential: "Fisheries, Medicinal Herb Processing, Agriculture",
      },
      {
        id: "sherpur",
        name: "Sherpur",
        population: "1.4 million",
        projects: 3,
        volunteers: 70,
        status: "active",
        literacyRate: "57.8%",
        educationalInstitutions: 420,
        keyProducts: "Rice, Vegetables, Fruits, Handicrafts",
        investmentPotential: "Fruit Processing, Handicraft Industry, Agriculture",
      },
    ],
  },
}

export default function DivisionPage() {
  const params = useParams()
  const router = useRouter()
  const divisionId = params.division as string
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  // Check if division exists
  if (!divisionData[divisionId as keyof typeof divisionData]) {
    return (
      <CoreTeamAuthCheck>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Division Not Found</h1>
            <p className="text-gray-600 mb-6">The division you are looking for does not exist.</p>
            <button
              onClick={() => router.push("/admin/activity-areas")}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Return to Activity Areas
            </button>
          </div>
        </div>
      </CoreTeamAuthCheck>
    )
  }

  const division = divisionData[divisionId as keyof typeof divisionData]

  // Filter districts based on search and status
  const filteredDistricts = division.districts.filter((district) => {
    const matchesSearch = district.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || district.status === filterStatus
    return matchesSearch && matchesStatus
  })

  // Calculate total statistics
  const totalProjects = division.districts.reduce((sum, district) => sum + district.projects, 0)
  const totalVolunteers = division.districts.reduce((sum, district) => sum + district.volunteers, 0)
  const avgLiteracyRate =
    (
      division.districts.reduce((sum, district) => sum + Number.parseFloat(district.literacyRate), 0) /
      division.districts.length
    ).toFixed(1) + "%"
  const totalEducationalInstitutions = division.districts.reduce(
    (sum, district) => sum + district.educationalInstitutions,
    0,
  )

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
              <span className="ml-2 text-gray-800">{division.name}</span>
            </div>
            <h1 className="text-3xl font-bold text-blue-900 mb-2">{division.name} Division</h1>
            <p className="text-gray-600">{division.description}</p>
          </div>

          {/* Dashboard Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
              <h3 className="text-gray-500 text-sm font-medium">Districts</h3>
              <p className="text-3xl font-bold text-gray-800">{division.districts.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-600">
              <h3 className="text-gray-500 text-sm font-medium">Population</h3>
              <p className="text-3xl font-bold text-gray-800">
                {division.districts
                  .reduce((sum, district) => {
                    const population = Number.parseFloat(district.population.split(" ")[0])
                    return sum + population
                  }, 0)
                  .toFixed(1)}{" "}
                M
              </p>
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

          {/* Division Overview */}
          <div className="bg-white rounded-lg shadow mb-8 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{division.name} Division Overview</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold text-blue-700">Education Landscape</h3>
                <p>{division.educationSummary}</p>
              </div>
              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold text-green-700">Economic Profile</h3>
                <p>{division.economicSummary}</p>
              </div>
              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold text-purple-700">Investment Opportunities</h3>
                <p>{division.investmentOpportunities}</p>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search districts..."
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

          {/* Districts List */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
              {filteredDistricts.map((district) => (
                <Link href={`/admin/activity-areas/${divisionId}/${district.id}`} key={district.id} className="block">
                  <div className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow p-4 h-full">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-blue-900">{district.name}</h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          district.status === "active"
                            ? "bg-green-100 text-green-800"
                            : district.status === "alert"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {district.status.charAt(0).toUpperCase() + district.status.slice(1)}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Population:</span>
                        <span className="font-medium">{district.population}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Literacy Rate:</span>
                        <span className="font-medium">{district.literacyRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Educational Institutions:</span>
                        <span className="font-medium">{district.educationalInstitutions.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Projects:</span>
                        <span className="font-medium">{district.projects}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Volunteers:</span>
                        <span className="font-medium">{district.volunteers}</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-sm font-medium text-gray-700">Key Products:</h4>
                      <p className="text-xs text-gray-600 mt-1">{district.keyProducts}</p>
                    </div>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium text-gray-700">Investment Potential:</h4>
                      <p className="text-xs text-gray-600 mt-1">{district.investmentPotential}</p>
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

