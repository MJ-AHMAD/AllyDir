import Link from "next/link"
import Image from "next/image"
import { SimpleFooter } from "@/components/simple-footer"

export default function TeamPage() {
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
              <Link href="/admin/management/team" className="hover:text-blue-200 transition-colors font-bold">
                Team Structure
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team Structure</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Meet the dedicated professionals working together to fulfill TRUSTED-ALLY's mission
            </p>
          </div>
        </section>

        {/* Department Teams */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Department Teams</h2>

            <div className="max-w-6xl mx-auto">
              {/* Operations Team */}
              <div className="mb-16">
                <div className="bg-blue-800 text-white p-4 rounded-t-lg">
                  <h3 className="text-xl font-bold">Operations Department</h3>
                </div>
                <div className="bg-white rounded-b-lg shadow-md p-6 border border-gray-200">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-800 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=128&width=128"
                        alt="Sophia Lee - Chief Operations Officer"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-1">Sophia Lee</h4>
                      <p className="text-blue-700 font-medium mb-3">Chief Operations Officer</p>
                      <p className="text-gray-700 mb-4">
                        With over 15 years of experience in operations management, Sophia oversees all operational
                        aspects of TRUSTED-ALLY. She ensures efficient execution of programs, manages logistics, and
                        coordinates field operations across all initiatives.
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

                  <h4 className="text-lg font-bold text-blue-900 mb-4 border-b pb-2">Team Members</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Team Member"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Alex Johnson</h5>
                        <p className="text-sm text-gray-600">Project Management Lead</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Team Member"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Priya Patel</h5>
                        <p className="text-sm text-gray-600">Logistics Manager</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Team Member"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Carlos Rodriguez</h5>
                        <p className="text-sm text-gray-600">Quality Assurance Lead</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Team Member"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Sarah Kim</h5>
                        <p className="text-sm text-gray-600">Field Operations Manager</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Team Member"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Mohammed Al-Farsi</h5>
                        <p className="text-sm text-gray-600">Volunteer Coordinator</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Programs Team */}
              <div className="mb-16">
                <div className="bg-blue-800 text-white p-4 rounded-t-lg">
                  <h3 className="text-xl font-bold">Programs Department</h3>
                </div>
                <div className="bg-white rounded-b-lg shadow-md p-6 border border-gray-200">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-800 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=128&width=128"
                        alt="James Rodriguez - Chief Program Officer"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-1">James Rodriguez</h4>
                      <p className="text-blue-700 font-medium mb-3">Chief Program Officer</p>
                      <p className="text-gray-700 mb-4">
                        James leads the development and implementation of all educational and social programs at
                        TRUSTED-ALLY. With a background in international development and education, he ensures our
                        programs create meaningful impact and align with our organizational mission.
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

                  <h4 className="text-lg font-bold text-blue-900 mb-4 border-b pb-2">Team Members</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Team Member"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Emily Chen</h5>
                        <p className="text-sm text-gray-600">Education Programs Director</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Team Member"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Sophia Garcia</h5>
                        <p className="text-sm text-gray-600">Social Initiatives Director</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Team Member"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Malik Johnson</h5>
                        <p className="text-sm text-gray-600">Environmental Projects Director</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Team Member"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Robert Kim</h5>
                        <p className="text-sm text-gray-600">Technology Ventures Director</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Team Member"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Layla Hassan</h5>
                        <p className="text-sm text-gray-600">Travel & Tourism Director</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Team Member"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Abdullah Mahmood</h5>
                        <p className="text-sm text-gray-600">Religious Projects Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Administration Team */}
              <div className="mb-16">
                <div className="bg-blue-800 text-white p-4 rounded-t-lg">
                  <h3 className="text-xl font-bold">Administration Department</h3>
                </div>
                <div className="bg-white rounded-b-lg shadow-md p-6 border border-gray-200">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-800 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=128&width=128"
                        alt="Amina Patel - Chief Financial Officer"
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-900 mb-1">Amina Patel</h4>
                      <p className="text-blue-700 font-medium mb-3">Chief Financial Officer</p>
                      <p className="text-gray-700 mb-4">
                        Amina manages all financial operations, budgeting, and ensures fiscal responsibility across all
                        projects. With her background in finance and non-profit management, she maintains TRUSTED-ALLY's
                        financial health and transparency.
                      </p>
                      <div className="flex gap-3">
                        <a href="#" className="text-blue-800 hover:text-blue-600">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-blue-900 mb-4 border-b pb-2">Team Members</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Team Member"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">David Park</h5>
                        <p className="text-sm text-gray-600">Human Resources Director</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Team Member"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Fatima Al-Zahra</h5>
                        <p className="text-sm text-gray-600">International Relations Director</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Team Member"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Michael Zhang</h5>
                        <p className="text-sm text-gray-600">IT Director</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Team Member"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Aisha Khan</h5>
                        <p className="text-sm text-gray-600">Legal & Compliance Manager</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Team Member"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">Aisha Khan</h5>
                        <p className="text-sm text-gray-600">Legal & Compliance Manager</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Team Member"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="font-medium">John Williams</h5>
                        <p className="text-sm text-gray-600">Communications & PR Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Teams */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Project Teams</h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Al-Quran Journey Team */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-800 text-white p-4">
                  <h3 className="text-xl font-bold">Al-Quran Journey Team</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-800 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Abdullah Mahmood - Team Lead"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">Abdullah Mahmood</h4>
                      <p className="text-sm text-blue-700">Team Lead</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">
                    A dedicated team of 15 professionals working on research, printing, distribution, and administration
                    of Quran projects worldwide.
                  </p>

                  <h5 className="font-bold text-blue-900 mb-2">Key Responsibilities:</h5>
                  <ul className="space-y-1 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                      <span>Quran research and authentication</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                      <span>High-quality printing and production</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                      <span>Global distribution networks</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                      <span>Community engagement and education</span>
                    </li>
                  </ul>

                  <div className="text-right">
                    <Link href="/projects/al-quran-journey" className="text-blue-800 hover:underline font-medium">
                      View Project Details →
                    </Link>
                  </div>
                </div>
              </div>

              {/* TechAlly Ventures Team */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-800 text-white p-4">
                  <h3 className="text-xl font-bold">TechAlly Ventures Team</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-800 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Robert Kim - Team Lead"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">Robert Kim</h4>
                      <p className="text-sm text-blue-700">Team Lead</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">
                    A team of 12 technology experts providing web development, SEO, payment integration, and technical
                    support services to clients and communities.
                  </p>

                  <h5 className="font-bold text-blue-900 mb-2">Key Responsibilities:</h5>
                  <ul className="space-y-1 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                      <span>Website development and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                      <span>Search engine optimization services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                      <span>Payment gateway integration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                      <span>Technical support and training</span>
                    </li>
                  </ul>

                  <div className="text-right">
                    <Link href="/projects/techally-ventures" className="text-blue-800 hover:underline font-medium">
                      View Project Details →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Ally Voyage Team */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-800 text-white p-4">
                  <h3 className="text-xl font-bold">Ally Voyage Team</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-800 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Layla Hassan - Team Lead"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">Layla Hassan</h4>
                      <p className="text-sm text-blue-700">Team Lead</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">
                    A team of 8 travel specialists organizing Umrah packages, featured travel packages, and tourism
                    services for pilgrims and travelers.
                  </p>

                  <h5 className="font-bold text-blue-900 mb-2">Key Responsibilities:</h5>
                  <ul className="space-y-1 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                      <span>Umrah package planning and coordination</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                      <span>Travel logistics and accommodations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                      <span>Tour guide services and cultural education</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                      <span>Customer service and travel support</span>
                    </li>
                  </ul>

                  <div className="text-right">
                    <Link href="/projects/ally-voyage" className="text-blue-800 hover:underline font-medium">
                      View Project Details →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Education Program Team */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-800 text-white p-4">
                  <h3 className="text-xl font-bold">Education Program Team</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-800 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Emily Chen - Team Lead"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900">Emily Chen</h4>
                      <p className="text-sm text-blue-700">Team Lead</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">
                    A team of 10 education specialists developing free learning resources, training programs, and
                    educational initiatives for students and communities.
                  </p>

                  <h5 className="font-bold text-blue-900 mb-2">Key Responsibilities:</h5>
                  <ul className="space-y-1 text-gray-700 mb-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                      <span>Curriculum development and educational content</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                      <span>Teacher training and professional development</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                      <span>Educational technology implementation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                      <span>Student support and community outreach</span>
                    </li>
                  </ul>

                  <div className="text-right">
                    <Link href="/education-program" className="text-blue-800 hover:underline font-medium">
                      View Project Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Collaboration */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Team Collaboration</h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Communication Channels</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3 mt-0.5">
                          <i className="fas fa-users"></i>
                        </div>
                        <div>
                          <h4 className="font-bold">Weekly Team Meetings</h4>
                          <p className="text-sm">Department-specific meetings to discuss progress and challenges</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3 mt-0.5">
                          <i className="fas fa-comments"></i>
                        </div>
                        <div>
                          <h4 className="font-bold">Digital Communication</h4>
                          <p className="text-sm">Slack channels for real-time communication and collaboration</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3 mt-0.5">
                          <i className="fas fa-video"></i>
                        </div>
                        <div>
                          <h4 className="font-bold">Virtual Meetings</h4>
                          <p className="text-sm">Zoom and Microsoft Teams for remote collaboration</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Collaboration Tools</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3 mt-0.5">
                          <i className="fas fa-tasks"></i>
                        </div>
                        <div>
                          <h4 className="font-bold">Project Management</h4>
                          <p className="text-sm">Asana and Trello for task tracking and project coordination</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3 mt-0.5">
                          <i className="fas fa-file-alt"></i>
                        </div>
                        <div>
                          <h4 className="font-bold">Document Collaboration</h4>
                          <p className="text-sm">Google Workspace and Microsoft 365 for shared documents</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3 mt-0.5">
                          <i className="fas fa-calendar-alt"></i>
                        </div>
                        <div>
                          <h4 className="font-bold">Scheduling</h4>
                          <p className="text-sm">Shared calendars and scheduling tools for coordination</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Cross-Functional Collaboration</h3>
                  <p className="text-gray-700 mb-4">
                    At TRUSTED-ALLY, we emphasize cross-functional collaboration to ensure all departments and teams
                    work together seamlessly toward our shared mission. Regular inter-departmental meetings,
                    collaborative projects, and knowledge sharing sessions help break down silos and foster a unified
                    organizational culture.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-800 p-4">
                    <p className="italic text-gray-700">
                      "Our strength lies in our ability to bring together diverse expertise and perspectives to create
                      holistic solutions for the communities we serve."
                    </p>
                    <p className="text-right text-sm text-blue-800 font-medium mt-2">— MJ AHMAD, Director General</p>
                  </div>
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

