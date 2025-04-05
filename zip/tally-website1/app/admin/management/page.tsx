import Link from "next/link"
import Image from "next/image"
import { SimpleFooter } from "@/components/simple-footer"

export default function ManagementPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold flex items-center">
                <span className="mr-2">TRUSTED-ALLY</span>
              </Link>
            </div>
            <nav className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="hover:text-blue-200 transition-colors">
                Home
              </Link>
              <Link href="/admin" className="hover:text-blue-200 transition-colors">
                Admin Dashboard
              </Link>
              <Link href="/admin/management" className="hover:text-blue-200 transition-colors font-bold">
                Management
              </Link>
              <Link href="/contact" className="hover:text-blue-200 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Organizational Management</h1>
            <p className="text-xl max-w-3xl mx-auto">
              The dedicated team of professionals and volunteers working together to fulfill our mission
            </p>
          </div>
        </section>

        {/* Organizational Chart */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Organizational Structure</h2>

            <div className="max-w-5xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
              <div className="flex flex-col items-center">
                {/* Director General */}
                <div className="bg-blue-800 text-white p-4 rounded-lg shadow-md w-64 text-center mb-8">
                  <h3 className="font-bold">Director General</h3>
                  <p>MJ AHMAD</p>
                </div>

                {/* Board of Directors */}
                <div className="w-0.5 h-8 bg-gray-400"></div>
                <div className="bg-blue-700 text-white p-4 rounded-lg shadow-md w-64 text-center mb-8">
                  <h3 className="font-bold">Board of Directors</h3>
                  <p>7 Members</p>
                </div>

                {/* Executive Committee */}
                <div className="w-0.5 h-8 bg-gray-400"></div>
                <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md w-64 text-center mb-8">
                  <h3 className="font-bold">Executive Committee</h3>
                  <p>5 Members</p>
                </div>

                {/* Departments */}
                <div className="w-0.5 h-8 bg-gray-400"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
                  <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="font-bold">Operations</h3>
                    <p>12 Staff</p>
                  </div>
                  <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="font-bold">Programs</h3>
                    <p>18 Staff</p>
                  </div>
                  <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="font-bold">Administration</h3>
                    <p>8 Staff</p>
                  </div>
                </div>

                {/* Project Teams */}
                <div className="w-0.5 h-8 bg-gray-400 mt-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl mt-4">
                  <div className="bg-blue-400 text-white p-3 rounded-lg shadow-md text-center">
                    <h3 className="font-bold">Al-Quran Journey</h3>
                    <p>Team of 15</p>
                  </div>
                  <div className="bg-blue-400 text-white p-3 rounded-lg shadow-md text-center">
                    <h3 className="font-bold">TechAlly Ventures</h3>
                    <p>Team of 12</p>
                  </div>
                  <div className="bg-blue-400 text-white p-3 rounded-lg shadow-md text-center">
                    <h3 className="font-bold">Ally Voyage</h3>
                    <p>Team of 8</p>
                  </div>
                  <div className="bg-blue-400 text-white p-3 rounded-lg shadow-md text-center">
                    <h3 className="font-bold">Education Program</h3>
                    <p>Team of 10</p>
                  </div>
                  <div className="bg-blue-400 text-white p-3 rounded-lg shadow-md text-center">
                    <h3 className="font-bold">Environmental Dev</h3>
                    <p>Team of 7</p>
                  </div>
                  <div className="bg-blue-400 text-white p-3 rounded-lg shadow-md text-center">
                    <h3 className="font-bold">Social Initiatives</h3>
                    <p>Team of 9</p>
                  </div>
                </div>

                {/* Volunteers */}
                <div className="w-0.5 h-8 bg-gray-400 mt-8"></div>
                <div className="bg-blue-300 text-blue-900 p-4 rounded-lg shadow-md w-64 text-center mt-4">
                  <h3 className="font-bold">Volunteer Network</h3>
                  <p>250+ Active Volunteers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Board of Directors</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Director General */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="MJ AHMAD - Director General"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">MJ AHMAD</h3>
                  <p className="text-blue-700 font-medium mb-3">Director General & Chairman</p>
                  <p className="text-gray-600 mb-4">
                    Leading TRUSTED-ALLY's mission with over 20 years of experience in non-profit management and social
                    development.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-blue-800 hover:text-blue-600">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-blue-800 hover:text-blue-600">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-blue-800 hover:text-blue-600">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Board Member 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Sarah Johnson - Vice Chairman"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">Sarah Johnson</h3>
                  <p className="text-blue-700 font-medium mb-3">Vice Chairman</p>
                  <p className="text-gray-600 mb-4">
                    Expert in international development with focus on education and community empowerment programs.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-blue-800 hover:text-blue-600">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-blue-800 hover:text-blue-600">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Board Member 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Dr. Rashid Khan - Secretary"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">Dr. Rashid Khan</h3>
                  <p className="text-blue-700 font-medium mb-3">Secretary</p>
                  <p className="text-gray-600 mb-4">
                    Academic and researcher with expertise in sustainable development and environmental conservation.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-blue-800 hover:text-blue-600">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-blue-800 hover:text-blue-600">
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Board Member 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Michael Chen - Treasurer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">Michael Chen</h3>
                  <p className="text-blue-700 font-medium mb-3">Treasurer</p>
                  <p className="text-gray-600 mb-4">
                    Financial expert with background in corporate finance and non-profit fiscal management.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-blue-800 hover:text-blue-600">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Board Member 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Aisha Rahman - Board Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">Aisha Rahman</h3>
                  <p className="text-blue-700 font-medium mb-3">Board Member</p>
                  <p className="text-gray-600 mb-4">
                    Specialist in community outreach and social welfare programs with 15 years of field experience.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-blue-800 hover:text-blue-600">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-blue-800 hover:text-blue-600">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Board Member 5 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="David Williams - Board Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">David Williams</h3>
                  <p className="text-blue-700 font-medium mb-3">Board Member</p>
                  <p className="text-gray-600 mb-4">
                    Technology entrepreneur with focus on leveraging digital solutions for social impact.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-blue-800 hover:text-blue-600">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-blue-800 hover:text-blue-600">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/admin/management/board"
                className="inline-block bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Board Members
              </Link>
            </div>
          </div>
        </section>

        {/* Executive Leadership */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Executive Leadership</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Executive 1 */}
              <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-blue-800">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Sophia Lee - Chief Operations Officer"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-1">Sophia Lee</h3>
                <p className="text-blue-700 font-medium mb-3">Chief Operations Officer</p>
                <p className="text-gray-600 mb-4">
                  Oversees day-to-day operations and ensures efficient execution of all programs and initiatives.
                </p>
              </div>

              {/* Executive 2 */}
              <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-blue-800">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="James Rodriguez - Chief Program Officer"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-1">James Rodriguez</h3>
                <p className="text-blue-700 font-medium mb-3">Chief Program Officer</p>
                <p className="text-gray-600 mb-4">
                  Leads the development and implementation of all educational and social programs.
                </p>
              </div>

              {/* Executive 3 */}
              <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-blue-800">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Amina Patel - Chief Financial Officer"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-1">Amina Patel</h3>
                <p className="text-blue-700 font-medium mb-3">Chief Financial Officer</p>
                <p className="text-gray-600 mb-4">
                  Manages financial operations, budgeting, and ensures fiscal responsibility across all projects.
                </p>
              </div>

              {/* Executive 4 */}
              <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-blue-800">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Robert Kim - Chief Technology Officer"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-1">Robert Kim</h3>
                <p className="text-blue-700 font-medium mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 mb-4">
                  Leads technological innovation and digital transformation initiatives across the organization.
                </p>
              </div>

              {/* Executive 5 */}
              <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-blue-800">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Fatima Al-Zahra - Director of International Relations"
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-1">Fatima Al-Zahra</h3>
                <p className="text-blue-700 font-medium mb-3">Director of International Relations</p>
                <p className="text-gray-600 mb-4">
                  Manages partnerships with international organizations and oversees global initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Department Structure */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Department Structure</h2>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Operations Department */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-blue-800 text-white p-4">
                    <h3 className="text-xl font-bold">Operations Department</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                        <span className="font-medium">Project Management Office</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                        <span className="font-medium">Logistics & Supply Chain</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                        <span className="font-medium">Quality Assurance</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                        <span className="font-medium">Field Operations</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                        <span className="font-medium">Volunteer Coordination</span>
                      </li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-gray-700">
                        <span className="font-bold">Staff Count:</span> 12
                      </p>
                      <p className="text-gray-700">
                        <span className="font-bold">Head:</span> Sophia Lee
                      </p>
                    </div>
                  </div>
                </div>

                {/* Programs Department */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-blue-800 text-white p-4">
                    <h3 className="text-xl font-bold">Programs Department</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                        <span className="font-medium">Education Programs</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                        <span className="font-medium">Social Initiatives</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                        <span className="font-medium">Environmental Projects</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                        <span className="font-medium">Technology Ventures</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                        <span className="font-medium">Travel & Tourism</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                        <span className="font-medium">Religious Projects</span>
                      </li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-gray-700">
                        <span className="font-bold">Staff Count:</span> 18
                      </p>
                      <p className="text-gray-700">
                        <span className="font-bold">Head:</span> James Rodriguez
                      </p>
                    </div>
                  </div>
                </div>

                {/* Administration Department */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-blue-800 text-white p-4">
                    <h3 className="text-xl font-bold">Administration Department</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                        <span className="font-medium">Human Resources</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                        <span className="font-medium">Finance & Accounting</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                        <span className="font-medium">IT & Technology</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                        <span className="font-medium">Legal & Compliance</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                        <span className="font-medium">Communications & PR</span>
                      </li>
                    </ul>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-gray-700">
                        <span className="font-bold">Staff Count:</span> 8
                      </p>
                      <p className="text-gray-700">
                        <span className="font-bold">Head:</span> Amina Patel
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Teams */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Project Teams</h2>

            <div className="max-w-6xl mx-auto">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-blue-800 text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Project</th>
                      <th className="py-3 px-4 text-left">Team Lead</th>
                      <th className="py-3 px-4 text-left">Team Size</th>
                      <th className="py-3 px-4 text-left">Key Responsibilities</th>
                      <th className="py-3 px-4 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Al-Quran Journey</td>
                      <td className="py-3 px-4">Abdullah Mahmood</td>
                      <td className="py-3 px-4">15</td>
                      <td className="py-3 px-4">
                        Research, printing, distribution, and administration of Quran projects
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">TechAlly Ventures</td>
                      <td className="py-3 px-4">Robert Kim</td>
                      <td className="py-3 px-4">12</td>
                      <td className="py-3 px-4">
                        Web development, SEO, payment integration, and technical support services
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Ally Voyage</td>
                      <td className="py-3 px-4">Layla Hassan</td>
                      <td className="py-3 px-4">8</td>
                      <td className="py-3 px-4">Umrah packages, featured travel packages, and tourism services</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          Active
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Education Program</td>
                      <td className="py-3 px-4">Emily Chen</td>
                      <td className="py-3 px-4">10</td>
                      <td className="py-3 px-4">
                        Free learning resources, training programs, and educational initiatives
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                          In Progress
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Environmental Development</td>
                      <td className="py-3 px-4">Malik Johnson</td>
                      <td className="py-3 px-4">7</td>
                      <td className="py-3 px-4">
                        Sustainability projects, conservation efforts, and eco-friendly initiatives
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          Planning
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Social Initiatives</td>
                      <td className="py-3 px-4">Sophia Garcia</td>
                      <td className="py-3 px-4">9</td>
                      <td className="py-3 px-4">
                        Community outreach, welfare programs, and social development projects
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          Active
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Management Processes */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Management Processes</h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Strategic Planning */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-800 p-3 rounded-full mr-4">
                    <i className="fas fa-chess"></i>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">Strategic Planning</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                    <span>Annual strategic planning sessions with board and executives</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                    <span>Quarterly review and adjustment of strategic objectives</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                    <span>Five-year strategic roadmap development and maintenance</span>
                  </li>
                </ul>
              </div>

              {/* Project Management */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-800 p-3 rounded-full mr-4">
                    <i className="fas fa-tasks"></i>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">Project Management</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                    <span>Agile methodology for technology and development projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                    <span>Traditional waterfall approach for infrastructure projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                    <span>Weekly project status meetings and progress tracking</span>
                  </li>
                </ul>
              </div>

              {/* Financial Management */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-800 p-3 rounded-full mr-4">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">Financial Management</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                    <span>Monthly financial reporting and budget tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                    <span>Annual budgeting process with departmental input</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                    <span>Quarterly financial audits and compliance reviews</span>
                  </li>
                </ul>
              </div>

              {/* Human Resources */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-800 p-3 rounded-full mr-4">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">Human Resources</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                    <span>Bi-annual performance reviews and development planning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                    <span>Continuous professional development and training programs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                    <span>Volunteer recruitment, training, and management system</span>
                  </li>
                </ul>
              </div>

              {/* Communication */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-800 p-3 rounded-full mr-4">
                    <i className="fas fa-comments"></i>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">Communication</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                    <span>Weekly departmental meetings and cross-functional updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                    <span>Monthly all-hands meetings for organizational alignment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                    <span>Quarterly stakeholder communication and reporting</span>
                  </li>
                </ul>
              </div>

              {/* Quality Assurance */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-800 p-3 rounded-full mr-4">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">Quality Assurance</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                    <span>Continuous improvement processes and feedback loops</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                    <span>Regular program evaluations and impact assessments</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                    <span>Beneficiary feedback collection and implementation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Management Tools */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Management Tools & Systems</h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-800 text-4xl mb-4">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Project Management</h3>
                <p className="text-gray-600 mb-4">
                  Asana, Microsoft Project, and Trello for project tracking and team collaboration
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-800 text-4xl mb-4">
                  <i className="fas fa-file-invoice-dollar"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Financial Systems</h3>
                <p className="text-gray-600 mb-4">QuickBooks, Xero, and custom donation management systems</p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-800 text-4xl mb-4">
                  <i className="fas fa-users-cog"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">HR Management</h3>
                <p className="text-gray-600 mb-4">
                  BambooHR, Volunteer Management System, and Performance Review Platform
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-800 text-4xl mb-4">
                  <i className="fas fa-comments"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Communication</h3>
                <p className="text-gray-600 mb-4">
                  Slack, Microsoft Teams, and Zoom for internal and external communication
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-800 text-4xl mb-4">
                  <i className="fas fa-database"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Data Management</h3>
                <p className="text-gray-600 mb-4">CRM systems, beneficiary databases, and impact tracking tools</p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
                <div className="text-blue-800 text-4xl mb-4">
                  <i className="fas fa-chart-pie"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Analytics & Reporting</h3>
                <p className="text-gray-600 mb-4">
                  Power BI, Tableau, and custom reporting dashboards for data visualization
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Management Team</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              We're always looking for talented professionals who are passionate about making a difference. Explore
              career opportunities with TRUSTED-ALLY.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/careers"
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-blue-100 transition-colors"
              >
                View Open Positions
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SimpleFooter />
    </div>
  )
}

