import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"

export default function NewsPage() {
  // Sample news data - in a real application, this would come from a database or API
  const newsItems = [
    {
      id: 1,
      title: "Chief Advisor Prof. Muhammad Yunus Launches Educational Reform Initiative",
      excerpt:
        "Nobel laureate and Chief Advisor Prof. Muhammad Yunus announces comprehensive educational reform initiative aimed at modernizing Bangladesh's education system.",
      date: "March 25, 2025",
      category: "Education",
      readTime: "5 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "chief-advisor-initiative",
    },
    {
      id: 2,
      title: "Trusted Ally Leads Cox's Bazar Flood Relief Efforts",
      excerpt:
        "Emergency response teams mobilized to provide aid to communities affected by recent flooding in the Cox's Bazar region.",
      date: "March 20, 2025",
      category: "Community",
      readTime: "4 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "flood-relief",
    },
    {
      id: 3,
      title: "Digital Literacy Program Expands to 50 Schools in Cox's Bazar",
      excerpt:
        "Flagship digital literacy initiative reaches milestone, now serving over 15,000 students across the district.",
      date: "March 15, 2025",
      category: "Technology",
      readTime: "3 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "digital-literacy",
    },
    {
      id: 4,
      title: "New Marine Conservation Initiative Launched",
      excerpt: "Trusted Ally partners with international organizations to protect Cox's Bazar's marine ecosystems.",
      date: "March 10, 2025",
      category: "Environment",
      readTime: "6 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "marine-conservation",
    },
    {
      id: 5,
      title: "Women's Entrepreneurship Program Celebrates 100 Successful Startups",
      excerpt: "Initiative supporting women entrepreneurs in Cox's Bazar reaches significant milestone.",
      date: "March 5, 2025",
      category: "Economic Development",
      readTime: "4 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "women-entrepreneurship",
    },
    {
      id: 6,
      title: "Cox's Bazar Tourism Summit Attracts International Attention",
      excerpt: "Annual summit brings together industry leaders to discuss sustainable tourism development.",
      date: "February 28, 2025",
      category: "Tourism",
      readTime: "5 min read",
      image: "/placeholder.svg?height=400&width=600",
      slug: "tourism-summit",
    },
  ]

  // Categories for filtering
  const categories = ["All", "Education", "Community", "Technology", "Environment", "Economic Development", "Tourism"]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
            News & Updates
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest developments, initiatives, and events from Trusted Ally and across Cox's
            Bazar district.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-800 hover:text-blue-700 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured News */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-l-4 border-blue-600 pl-4">Featured News</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
              <div className="relative h-64">
                <img
                  src={newsItems[0].image || "/placeholder.svg"}
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {newsItems[0].category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{newsItems[0].title}</h3>
                <p className="text-gray-600 mb-4">{newsItems[0].excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{newsItems[0].date}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{newsItems[0].readTime}</span>
                </div>
                <Link
                  href={`/news/${newsItems[0].slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Read full article <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
              <div className="relative h-64">
                <img
                  src={newsItems[1].image || "/placeholder.svg"}
                  alt={newsItems[1].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                  {newsItems[1].category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{newsItems[1].title}</h3>
                <p className="text-gray-600 mb-4">{newsItems[1].excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{newsItems[1].date}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{newsItems[1].readTime}</span>
                </div>
                <Link
                  href={`/news/${newsItems[1].slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Read full article <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* All News */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 border-l-4 border-blue-600 pl-4">All News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(2).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
              >
                <div className="relative h-48">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.excerpt}</p>
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span className="mr-3">{item.date}</span>
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{item.readTime}</span>
                  </div>
                  <Link
                    href={`/news/${item.slug}`}
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                  >
                    Read more <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800">Previous</button>
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white">1</button>
            <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800">2</button>
            <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800">3</button>
            <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-800">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

