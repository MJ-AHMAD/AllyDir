import Link from "next/link"
import Image from "next/image"
import { SimpleFooter } from "@/components/simple-footer"

export default function BoardPage() {
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
              <Link href="/admin/management" className="hover:text-blue-200 transition-colors">
                Management
              </Link>
              <Link href="/admin/management/board" className="hover:text-blue-200 transition-colors font-bold">
                Board of Directors
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Board of Directors</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Meet the visionary leaders guiding TRUSTED-ALLY's mission and strategic direction
            </p>
          </div>
        </section>

        {/* Board Members */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
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

              {/* Board Member 6 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Dr. Maria Rodriguez - Board Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">Dr. Maria Rodriguez</h3>
                  <p className="text-blue-700 font-medium mb-3">Board Member</p>
                  <p className="text-gray-600 mb-4">
                    Public health expert specializing in healthcare access for underserved communities.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-blue-800 hover:text-blue-600">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="text-blue-800 hover:text-blue-600">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Board Member 7 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="James Thompson - Board Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">James Thompson</h3>
                  <p className="text-blue-700 font-medium mb-3">Board Member</p>
                  <p className="text-gray-600 mb-4">
                    Legal expert specializing in non-profit governance and international regulatory compliance.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-blue-800 hover:text-blue-600">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Board Committees */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Board Committees</h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Executive Committee */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-800 text-white p-4">
                  <h3 className="text-xl font-bold">Executive Committee</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Oversees day-to-day operations and makes decisions between board meetings.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                      <span className="font-medium">MJ AHMAD (Chair)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                      <span className="font-medium">Sarah Johnson</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                      <span className="font-medium">Dr. Rashid Khan</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                      <span className="font-medium">Michael Chen</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                      <span className="font-medium">James Thompson</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Finance Committee */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-800 text-white p-4">
                  <h3 className="text-xl font-bold">Finance Committee</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Oversees financial planning, budgeting, and fiscal responsibility.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                      <span className="font-medium">Michael Chen (Chair)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                      <span className="font-medium">David Williams</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                      <span className="font-medium">Aisha Rahman</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Programs Committee */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-800 text-white p-4">
                  <h3 className="text-xl font-bold">Programs Committee</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">Evaluates program effectiveness and recommends new initiatives.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                      <span className="font-medium">Dr. Rashid Khan (Chair)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                      <span className="font-medium">Dr. Maria Rodriguez</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                      <span className="font-medium">Aisha Rahman</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                      <span className="font-medium">Sarah Johnson</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Governance Committee */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-800 text-white p-4">
                  <h3 className="text-xl font-bold">Governance Committee</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">Ensures proper governance practices and board development.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                      <span className="font-medium">James Thompson (Chair)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                      <span className="font-medium">MJ AHMAD</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-2"></div>
                      <span className="font-medium">David Williams</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Board Responsibilities */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Board Responsibilities</h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-4 mt-1">
                      <i className="fas fa-compass"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Strategic Direction</h4>
                      <p className="text-gray-700">
                        Setting the organization's mission, vision, and strategic objectives. Approving and monitoring
                        the implementation of strategic plans.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-4 mt-1">
                      <i className="fas fa-balance-scale"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Governance & Oversight</h4>
                      <p className="text-gray-700">
                        Ensuring legal compliance, ethical integrity, and accountability. Establishing and enforcing
                        policies and procedures.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-4 mt-1">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Financial Stewardship</h4>
                      <p className="text-gray-700">
                        Approving annual budgets, monitoring financial performance, and ensuring financial
                        sustainability. Overseeing audits and financial reporting.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-4 mt-1">
                      <i className="fas fa-user-tie"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Executive Oversight</h4>
                      <p className="text-gray-700">
                        Hiring, supporting, evaluating, and if necessary, replacing the Director General. Ensuring
                        succession planning for key leadership positions.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-4 mt-1">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Stakeholder Relations</h4>
                      <p className="text-gray-700">
                        Representing the organization to external stakeholders. Building and maintaining relationships
                        with donors, partners, and the community.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-4 mt-1">
                      <i className="fas fa-tasks"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Program Evaluation</h4>
                      <p className="text-gray-700">
                        Monitoring program effectiveness and impact. Ensuring alignment of programs with the
                        organization's mission and strategic objectives.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Board Meeting Schedule */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Board Meeting Schedule</h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-blue-800 text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Meeting Type</th>
                      <th className="py-3 px-4 text-left">Frequency</th>
                      <th className="py-3 px-4 text-left">Next Meeting</th>
                      <th className="py-3 px-4 text-left">Location</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Full Board Meeting</td>
                      <td className="py-3 px-4">Quarterly</td>
                      <td className="py-3 px-4">June 15, 2025</td>
                      <td className="py-3 px-4">Main Office, Conference Room A</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Executive Committee</td>
                      <td className="py-3 px-4">Monthly</td>
                      <td className="py-3 px-4">April 5, 2025</td>
                      <td className="py-3 px-4">Virtual Meeting</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Finance Committee</td>
                      <td className="py-3 px-4">Monthly</td>
                      <td className="py-3 px-4">April 10, 2025</td>
                      <td className="py-3 px-4">Finance Department, Room 203</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Programs Committee</td>
                      <td className="py-3 px-4">Bi-monthly</td>
                      <td className="py-3 px-4">May 12, 2025</td>
                      <td className="py-3 px-4">Programs Office, Room 105</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Governance Committee</td>
                      <td className="py-3 px-4">Quarterly</td>
                      <td className="py-3 px-4">June 5, 2025</td>
                      <td className="py-3 px-4">Legal Department, Room 301</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Annual General Meeting</td>
                      <td className="py-3 px-4">Annually</td>
                      <td className="py-3 px-4">December 10, 2025</td>
                      <td className="py-3 px-4">Grand Conference Hall</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SimpleFooter />
    </div>
  )
}

