import Link from "next/link"
import Image from "next/image"
import { SimpleFooter } from "@/components/simple-footer"
import { PasswordPolicyNotice } from "@/components/password-policy-notice"

export default function AdminPage() {
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
              <Link href="/admin" className="hover:text-blue-200 transition-colors font-bold">
                Admin Dashboard
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Director General's Dashboard</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive oversight and management of all TRUSTED-ALLY initiatives and operations
            </p>
          </div>
        </section>

        {/* Director General Profile */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
              <div className="w-full md:w-1/3">
                <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-blue-800 shadow-xl">
                  <Image
                    src="/placeholder.svg?height=256&width=256"
                    alt="MJ AHMAD - Director General"
                    width={256}
                    height={256}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-3xl font-bold text-blue-900 mb-2">MJ AHMAD</h2>
                <p className="text-xl text-blue-800 mb-4">Director General, TRUSTED-ALLY</p>
                <p className="text-gray-700 mb-4">
                  Leading TRUSTED-ALLY's mission to create a peaceful and equitable world through education, social
                  innovation, and sustainable development. Overseeing all strategic initiatives and ensuring the
                  organization's vision is realized through effective management and leadership.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a href="#" className="text-blue-800 hover:text-blue-600">
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a href="#" className="text-blue-800 hover:text-blue-600">
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                  <a href="#" className="text-blue-800 hover:text-blue-600">
                    <i className="fas fa-envelope text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Overview */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Organizational Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Project Stats */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-800 text-4xl mb-4">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Projects</h3>
                <p className="text-3xl font-bold text-blue-900 mb-2">12</p>
                <p className="text-gray-600">Active initiatives across all domains</p>
              </div>

              {/* Volunteer Stats */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-800 text-4xl mb-4">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Volunteers</h3>
                <p className="text-3xl font-bold text-blue-900 mb-2">250+</p>
                <p className="text-gray-600">Dedicated individuals supporting our mission</p>
              </div>

              {/* Donation Stats */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-800 text-4xl mb-4">
                  <i className="fas fa-hand-holding-heart"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Donations</h3>
                <p className="text-3xl font-bold text-blue-900 mb-2">$125K</p>
                <p className="text-gray-600">Funds raised for our initiatives this year</p>
              </div>

              {/* Impact Stats */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-800 text-4xl mb-4">
                  <i className="fas fa-globe-americas"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Impact</h3>
                <p className="text-3xl font-bold text-blue-900 mb-2">10K+</p>
                <p className="text-gray-600">Lives positively affected by our programs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Monitoring */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Project Monitoring</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-blue-800 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Project Name</th>
                    <th className="py-3 px-4 text-left">Status</th>
                    <th className="py-3 px-4 text-left">Progress</th>
                    <th className="py-3 px-4 text-left">Budget</th>
                    <th className="py-3 px-4 text-left">Last Update</th>
                    <th className="py-3 px-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">Al-Quran Journey</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                      <span className="text-xs text-gray-500">75%</span>
                    </td>
                    <td className="py-3 px-4">$45,000</td>
                    <td className="py-3 px-4">2 days ago</td>
                    <td className="py-3 px-4">
                      <a href="#" className="text-blue-600 hover:underline">
                        View Details
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">TechAlly Ventures</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                      <span className="text-xs text-gray-500">90%</span>
                    </td>
                    <td className="py-3 px-4">$78,000</td>
                    <td className="py-3 px-4">Yesterday</td>
                    <td className="py-3 px-4">
                      <a href="#" className="text-blue-600 hover:underline">
                        View Details
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">Ally Voyage</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Active
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                      <span className="text-xs text-gray-500">60%</span>
                    </td>
                    <td className="py-3 px-4">$32,000</td>
                    <td className="py-3 px-4">3 days ago</td>
                    <td className="py-3 px-4">
                      <a href="#" className="text-blue-600 hover:underline">
                        View Details
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">Education Program</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                        In Progress
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                      </div>
                      <span className="text-xs text-gray-500">40%</span>
                    </td>
                    <td className="py-3 px-4">$55,000</td>
                    <td className="py-3 px-4">1 week ago</td>
                    <td className="py-3 px-4">
                      <a href="#" className="text-blue-600 hover:underline">
                        View Details
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">Environmental Development</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        Planning
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "15%" }}></div>
                      </div>
                      <span className="text-xs text-gray-500">15%</span>
                    </td>
                    <td className="py-3 px-4">$28,000</td>
                    <td className="py-3 px-4">2 weeks ago</td>
                    <td className="py-3 px-4">
                      <a href="#" className="text-blue-600 hover:underline">
                        View Details
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Recent Updates */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Recent Updates</h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-800 p-3 rounded-full mr-4">
                    <i className="fas fa-file-signature"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">New Partnership Agreement</h3>
                    <p className="text-gray-500">March 18, 2025</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Signed a new partnership agreement with Microsoft for the Education Program. This collaboration will
                  provide our students with access to premium learning resources and certification opportunities.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 text-green-800 p-3 rounded-full mr-4">
                    <i className="fas fa-dollar-sign"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Grant Approval</h3>
                    <p className="text-gray-500">March 15, 2025</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Received approval for a $50,000 grant to support our Environmental Development initiatives. Funds will
                  be allocated to the tree planting campaign and sustainable agriculture training programs.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 text-purple-800 p-3 rounded-full mr-4">
                    <i className="fas fa-users"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Volunteer Milestone</h3>
                    <p className="text-gray-500">March 10, 2025</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Celebrated reaching 250 active volunteers across all our programs. A special recognition ceremony is
                  planned for next month to honor their dedication and contributions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Administrative Actions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-blue-800 text-4xl mb-4">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Schedule Meeting</h3>
                <p className="text-gray-600 mb-4">Arrange meetings with project managers and stakeholders</p>
                <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Open Calendar
                </button>
              </div>

              <div className="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-blue-800 text-4xl mb-4">
                  <i className="fas fa-file-alt"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Generate Reports</h3>
                <p className="text-gray-600 mb-4">Create financial, progress, and impact reports</p>
                <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Create Report
                </button>
              </div>

              <div className="bg-blue-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-blue-800 text-4xl mb-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Send Updates</h3>
                <p className="text-gray-600 mb-4">Communicate with team members and stakeholders</p>
                <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Compose Message
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Planning */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Strategic Planning</h2>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">2025 Strategic Objectives</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-4 mt-1">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Expand Educational Reach</h4>
                      <p className="text-gray-700">
                        Increase the number of students in our education programs by 50% through partnerships with
                        educational institutions and online learning platforms.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-4 mt-1">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Enhance Digital Presence</h4>
                      <p className="text-gray-700">
                        Implement a comprehensive digital strategy to increase online engagement by 75% and improve
                        accessibility of our resources and services.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-4 mt-1">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Strengthen Financial Sustainability</h4>
                      <p className="text-gray-700">
                        Diversify funding sources and establish an endowment fund to ensure long-term financial
                        stability for all our initiatives.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-4 mt-1">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Expand Global Impact</h4>
                      <p className="text-gray-700">
                        Establish presence in three new countries to extend our social and environmental initiatives to
                        more communities in need.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    View Complete Strategic Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Management System */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Management System</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-40 bg-blue-800 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Organizational Management</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive overview of organizational structure, departments, and operational processes.
                  </p>
                  <Link
                    href="/admin/management"
                    className="inline-block bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    View Management
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-40 bg-blue-800 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Board of Directors</h3>
                  <p className="text-gray-600 mb-4">
                    Information about board members, committees, responsibilities, and meeting schedules.
                  </p>
                  <Link
                    href="/admin/management/board"
                    className="inline-block bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    View Board
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="h-40 bg-blue-800 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-900">Team Structure</h3>
                  <p className="text-gray-600 mb-4">
                    Detailed overview of department teams, project teams, and collaboration mechanisms.
                  </p>
                  <Link
                    href="/admin/management/team"
                    className="inline-block bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    View Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CoreTeam Access */}
        <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <div className="bg-blue-800 text-white p-6">
                <h2 className="text-2xl font-bold mb-2">CoreTeam Management</h2>
                <p className="text-blue-100">Access the Director General's Core Team management system</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  The CoreTeam consists of 8 key positions with 10 dedicated professionals who directly support the
                  Director General in managing all aspects of TRUSTED-ALLY's operations.
                </p>

                <h3 className="text-lg font-bold text-blue-900 mb-4">Key Positions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-600 flex items-center">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">Personal Assistants</p>
                      <p className="text-xs text-gray-500">24/7 Support</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-600 flex items-center">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">Operations Manager</p>
                      <p className="text-xs text-gray-500">Workflow Oversight</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-600 flex items-center">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">Finance Manager</p>
                      <p className="text-xs text-gray-500">Budget Control</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-600 flex items-center">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">Communication Coordinator</p>
                      <p className="text-xs text-gray-500">Message Management</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-600 flex items-center">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">Training Development Manager</p>
                      <p className="text-xs text-gray-500">Skill Enhancement</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-600 flex items-center">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">IT Support Member</p>
                      <p className="text-xs text-gray-500">Technical Infrastructure</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-600 flex items-center">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">District Coordinator</p>
                      <p className="text-xs text-gray-500">Regional Management</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-600 flex items-center">
                    <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">Project Manager</p>
                      <p className="text-xs text-gray-500">Initiative Execution</p>
                    </div>
                  </div>
                </div>

                <PasswordPolicyNotice />

                <div className="flex justify-between items-center">
                  <Link
                    href="/admin/core-team/login"
                    className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
                  >
                    <span>Access CoreTeam Dashboard</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <div className="text-sm text-gray-500">Restricted Access</div>
                </div>
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

