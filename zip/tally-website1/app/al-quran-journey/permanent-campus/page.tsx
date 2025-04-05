import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Permanent Campus Plan | Al Quran Journey",
  description:
    "Our comprehensive plan for establishing a permanent campus for Quranic research and education in Cox's Bazar, Bangladesh.",
}

export default function PermanentCampusPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Header */}
      <header className="bg-emerald-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center mb-8">
            <Link href="/" className="text-2xl font-bold">
              TRUSTED-ALLY
            </Link>
            <div className="flex gap-6">
              <Link href="/education-program" className="hover:text-emerald-200 transition">
                Education
              </Link>
              <Link href="/al-quran-journey" className="hover:text-emerald-200 transition">
                Al-Quran Journey
              </Link>
              <Link href="/contact" className="hover:text-emerald-200 transition">
                Contact
              </Link>
            </div>
          </nav>

          <div className="text-center py-12 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 leading-tight">Permanent Campus Plan</h1>
            <p className="text-xl mb-8 text-emerald-100">
              A visionary project to establish a world-class center for Quranic research and education in Cox's Bazar,
              Bangladesh
            </p>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-emerald-50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-emerald-800">
            <Link href="/" className="hover:text-emerald-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/al-quran-journey" className="hover:text-emerald-600">
              Al-Quran Journey
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium">Permanent Campus</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">A Vision for Excellence in Quranic Research</h2>

            <p className="mb-6">
              TRUSTED-ALLY is embarking on an ambitious project to establish a permanent campus dedicated to Quranic
              research and education in the serene coastal district of Cox's Bazar, Bangladesh. This world-class
              facility will serve as a center of excellence for scholars, students, and visitors from around the world.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Campus Overview</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-4">Our planned campus will feature:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>50-acre campus in a scenic location in Cox's Bazar</li>
                    <li>State-of-the-art research facilities and laboratories</li>
                    <li>Comprehensive library with rare manuscripts</li>
                    <li>Modern educational facilities and classrooms</li>
                    <li>Residential accommodations for scholars and students</li>
                    <li>Sustainable design with renewable energy systems</li>
                    <li>Contemplation gardens and natural spaces</li>
                  </ul>
                </div>
                <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-gray-500">Campus aerial concept image</div>
                  {/* Replace with actual image: 
                  <Image 
                    src="/images/quran-campus/aerial-concept.jpg" 
                    alt="Campus aerial concept" 
                    width={500} 
                    height={300} 
                    className="rounded-lg"
                  /> */}
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Location: Cox's Bazar</h3>

            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-gray-500">Cox's Bazar location map</div>
                  {/* Replace with actual image */}
                </div>
                <div>
                  <p className="mb-4">
                    We have selected Cox's Bazar as the ideal location for our permanent campus for several compelling
                    reasons:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Natural beauty that inspires contemplation and reflection</li>
                    <li>Strategic location accessible to both domestic and international visitors</li>
                    <li>Proximity to Rohingya refugee communities we serve</li>
                    <li>Available land for a spacious, purpose-built campus</li>
                    <li>Supportive local community and government</li>
                    <li>Opportunity to contribute to regional development</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm mt-6">
                <p className="italic text-sm text-gray-600">
                  "The serene natural environment of Cox's Bazar provides the perfect setting for deep study and
                  contemplation of the Quran. The rhythm of the ocean and the beauty of the landscape remind us of the
                  divine signs mentioned throughout the sacred text."
                </p>
                <p className="text-right font-medium mt-2">— Dr. Rashid Ahmed, Project Director</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Campus Master Plan</h3>

            <div className="mb-12">
              <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center mb-6">
                <div className="text-gray-500">Campus master plan image</div>
                {/* Replace with actual image */}
              </div>

              <p className="mb-6">
                Our comprehensive master plan divides the campus into distinct zones, each designed to fulfill specific
                aspects of our mission while creating a harmonious and integrated environment.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-emerald-800 mb-3">Academic Zone</h4>
                  <p className="mb-4">
                    The heart of our campus, featuring facilities dedicated to research, teaching, and learning:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Research Center Building</li>
                    <li>Central Library & Manuscript Repository</li>
                    <li>Lecture Halls & Classrooms</li>
                    <li>Faculty Offices</li>
                    <li>Conference Center</li>
                    <li>Digital Learning Labs</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-emerald-800 mb-3">Residential Zone</h4>
                  <p className="mb-4">Comfortable accommodations for our scholarly community:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Scholar Residences</li>
                    <li>Student Dormitories</li>
                    <li>Visiting Researcher Apartments</li>
                    <li>Family Housing</li>
                    <li>Guest Accommodations</li>
                    <li>Dining Facilities</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-emerald-800 mb-3">Spiritual & Contemplative Zone</h4>
                  <p className="mb-4">Spaces designed for reflection, prayer, and spiritual connection:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Central Mosque</li>
                    <li>Contemplation Gardens</li>
                    <li>Quranic Calligraphy Gallery</li>
                    <li>Meditation Spaces</li>
                    <li>Outdoor Prayer Areas</li>
                    <li>Reflection Ponds</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-emerald-800 mb-3">Community & Support Zone</h4>
                  <p className="mb-4">Facilities that support campus operations and community engagement:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Administrative Building</li>
                    <li>Visitor Center</li>
                    <li>Community Outreach Center</li>
                    <li>Health Clinic</li>
                    <li>Recreational Facilities</li>
                    <li>Maintenance & Operations</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Floor-by-Floor Planning</h3>

            <div className="mb-12">
              <h4 className="text-xl font-bold text-emerald-800 mb-3">Research Center Building</h4>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                    <div className="text-gray-500">Research Center floor plan</div>
                    {/* Replace with actual image */}
                  </div>
                </div>
                <div>
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                    <h5 className="font-bold mb-2">Ground Floor</h5>
                    <ul className="text-sm space-y-1">
                      <li>Reception and welcome area</li>
                      <li>Exhibition space for Quranic manuscripts</li>
                      <li>Seminar rooms for small group discussions</li>
                      <li>Café and informal meeting spaces</li>
                      <li>Administrative offices</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                    <h5 className="font-bold mb-2">First Floor</h5>
                    <ul className="text-sm space-y-1">
                      <li>Advanced research laboratories</li>
                      <li>Digital manuscript scanning facility</li>
                      <li>Collaborative research spaces</li>
                      <li>Meeting rooms with videoconferencing</li>
                      <li>Faculty offices</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-bold mb-2">Second Floor</h5>
                    <ul className="text-sm space-y-1">
                      <li>Specialized research departments</li>
                      <li>Visiting scholar offices</li>
                      <li>Quiet study areas</li>
                      <li>Research project rooms</li>
                      <li>Roof garden and observation deck</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-bold text-emerald-800 mb-3 mt-8">Central Library & Manuscript Repository</h4>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                    <h5 className="font-bold mb-2">Ground Floor</h5>
                    <ul className="text-sm space-y-1">
                      <li>Main circulation desk and information</li>
                      <li>General collection and reading areas</li>
                      <li>Digital resource center</li>
                      <li>Children's Quranic learning section</li>
                      <li>Library café and social spaces</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                    <h5 className="font-bold mb-2">First Floor</h5>
                    <ul className="text-sm space-y-1">
                      <li>Specialized research collections</li>
                      <li>Academic journals and periodicals</li>
                      <li>Individual study carrels</li>
                      <li>Group study rooms</li>
                      <li>Multimedia resources center</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h5 className="font-bold mb-2">Second Floor</h5>
                    <ul className="text-sm space-y-1">
                      <li>Rare manuscript collection</li>
                      <li>Climate-controlled preservation rooms</li>
                      <li>Manuscript restoration laboratory</li>
                      <li>Scholar reading room</li>
                      <li>Digital archive access terminals</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                    <div className="text-gray-500">Library floor plan</div>
                    {/* Replace with actual image */}
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-bold text-emerald-800 mb-3 mt-8">Central Mosque</h4>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                    <div className="text-gray-500">Mosque design concept</div>
                    {/* Replace with actual image */}
                  </div>
                </div>
                <div>
                  <p className="mb-4">
                    The central mosque will serve as both a place of worship and a living educational space,
                    demonstrating the beauty and functionality of Islamic architecture. Features include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Main prayer hall accommodating 500 worshippers</li>
                    <li>Women's prayer area with equal aesthetic consideration</li>
                    <li>Educational displays on mosque architecture and history</li>
                    <li>Quranic calligraphy showcasing various traditional styles</li>
                    <li>Sustainable design elements including natural lighting and ventilation</li>
                    <li>Acoustic design optimized for Quranic recitation</li>
                    <li>Ablution facilities with water conservation features</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Project Budget & Timeline</h3>

            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-emerald-800 mb-3">Budget Breakdown</h4>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Land Acquisition</span>
                          <span className="font-bold">৳100,000,000</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "20%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Infrastructure Development</span>
                          <span className="font-bold">৳75,000,000</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "15%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Academic Buildings</span>
                          <span className="font-bold">৳150,000,000</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "30%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Residential Buildings</span>
                          <span className="font-bold">৳100,000,000</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "20%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Central Mosque</span>
                          <span className="font-bold">৳50,000,000</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Landscaping & Gardens</span>
                          <span className="font-bold">৳25,000,000</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "5%" }}></div>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex justify-between">
                          <span className="font-bold">Total Project Budget</span>
                          <span className="font-bold text-emerald-700">৳500,000,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-emerald-800 mb-3">Project Timeline</h4>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="space-y-6">
                      <div className="relative">
                        <div className="absolute top-0 left-4 h-full w-0.5 bg-emerald-200"></div>
                        <div className="relative flex items-start">
                          <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm z-10">
                            1
                          </div>
                          <div className="ml-4">
                            <h5 className="font-bold">Phase 1: Planning & Land Acquisition</h5>
                            <p className="text-sm text-gray-600">12 months</p>
                            <ul className="text-sm mt-2 space-y-1">
                              <li>Site selection and acquisition</li>
                              <li>Master planning</li>
                              <li>Environmental impact assessment</li>
                              <li>Regulatory approvals</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute top-0 left-4 h-full w-0.5 bg-emerald-200"></div>
                        <div className="relative flex items-start">
                          <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm z-10">
                            2
                          </div>
                          <div className="ml-4">
                            <h5 className="font-bold">Phase 2: Infrastructure Development</h5>
                            <p className="text-sm text-gray-600">18 months</p>
                            <ul className="text-sm mt-2 space-y-1">
                              <li>Site preparation</li>
                              <li>Road networks and pathways</li>
                              <li>Utilities installation</li>
                              <li>Sustainable energy systems</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute top-0 left-4 h-full w-0.5 bg-emerald-200"></div>
                        <div className="relative flex items-start">
                          <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm z-10">
                            3
                          </div>
                          <div className="ml-4">
                            <h5 className="font-bold">Phase 3: Academic Zone Construction</h5>
                            <p className="text-sm text-gray-600">24 months</p>
                            <ul className="text-sm mt-2 space-y-1">
                              <li>Research Center Building</li>
                              <li>Central Library</li>
                              <li>Lecture Halls & Classrooms</li>
                              <li>Conference Center</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute top-0 left-4 h-full w-0.5 bg-emerald-200"></div>
                        <div className="relative flex items-start">
                          <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm z-10">
                            4
                          </div>
                          <div className="ml-4">
                            <h5 className="font-bold">Phase 4: Residential & Community Zones</h5>
                            <p className="text-sm text-gray-600">18 months</p>
                            <ul className="text-sm mt-2 space-y-1">
                              <li>Scholar and student residences</li>
                              <li>Dining and community facilities</li>
                              <li>Administrative buildings</li>
                              <li>Visitor center</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute top-0 left-4 h-full w-0.5 bg-emerald-200"></div>
                        <div className="relative flex items-start">
                          <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm z-10">
                            5
                          </div>
                          <div className="ml-4">
                            <h5 className="font-bold">Phase 5: Spiritual Zone & Landscaping</h5>
                            <p className="text-sm text-gray-600">12 months</p>
                            <ul className="text-sm mt-2 space-y-1">
                              <li>Central Mosque construction</li>
                              <li>Contemplation gardens</li>
                              <li>Landscaping and outdoor spaces</li>
                              <li>Reflection ponds and water features</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="relative flex items-start">
                          <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm z-10">
                            6
                          </div>
                          <div className="ml-4">
                            <h5 className="font-bold">Phase 6: Finishing & Commissioning</h5>
                            <p className="text-sm text-gray-600">6 months</p>
                            <ul className="text-sm mt-2 space-y-1">
                              <li>Interior finishing</li>
                              <li>Equipment installation</li>
                              <li>Testing and commissioning</li>
                              <li>Grand opening ceremony</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t text-center">
                      <p className="font-bold">Total Project Duration: 7.5 years</p>
                      <p className="text-sm text-gray-600">Estimated completion: 2030</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Sponsorship Opportunities</h3>

            <p className="mb-6">
              We invite individuals, organizations, and institutions to become part of this historic project by
              sponsoring various aspects of our permanent campus. Your contribution will create a lasting legacy of
              Quranic scholarship and education.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-600">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Campus Founder</h4>
                <div className="text-2xl font-bold text-emerald-700 mb-2">৳50,000,000+</div>
                <p className="text-sm text-gray-600 mb-4">
                  Become a founding patron of our permanent campus with a major contribution
                </p>
                <ul className="text-sm space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Campus naming opportunity
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Permanent recognition at main entrance
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Lifetime membership on advisory board
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    VIP access to all campus facilities
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Annual special recognition events
                  </li>
                </ul>
                <Link
                  href="/al-quran-journey/permanent-campus/sponsor?level=founder"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                >
                  Become a Campus Founder
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-500">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Building Sponsor</h4>
                <div className="text-2xl font-bold text-emerald-700 mb-2">৳20,000,000+</div>
                <p className="text-sm text-gray-600 mb-4">Sponsor an entire building on our campus</p>
                <ul className="text-sm space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Building naming opportunity
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Recognition plaque at building entrance
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Membership on campus advisory committee
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Special access to campus events
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Regular updates on building activities
                  </li>
                </ul>
                <Link
                  href="/al-quran-journey/permanent-campus/sponsor?level=building"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                >
                  Sponsor a Building
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-400">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Facility Sponsor</h4>
                <div className="text-2xl font-bold text-emerald-700 mb-2">৳5,000,000+</div>
                <p className="text-sm text-gray-600 mb-4">Sponsor a specific facility or room within a building</p>
                <ul className="text-sm space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Facility naming opportunity
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Recognition plaque at facility entrance
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Invitation to facility opening ceremony
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Annual report on facility activities
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-4 w-4 text-emerald-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Recognition in campus publications
                  </li>
                </ul>
                <Link
                  href="/al-quran-journey/permanent-campus/sponsor?level=facility"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                >
                  Sponsor a Facility
                </Link>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg my-8">
              <h4 className="text-xl font-bold text-emerald-900 mb-3 text-center">
                Building Sponsorship Opportunities
              </h4>
              <p className="text-center mb-6">
                Sponsor specific buildings or major facilities with naming rights and recognition
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold mb-1">Research Center Building</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Central research facility</span>
                    <span className="font-bold text-emerald-700">৳50,000,000</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold mb-1">Central Library</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Main library and manuscript repository</span>
                    <span className="font-bold text-emerald-700">৳40,000,000</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold mb-1">Central Mosque</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Campus mosque and spiritual center</span>
                    <span className="font-bold text-emerald-700">৳50,000,000</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold mb-1">Conference Center</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">International conference facility</span>
                    <span className="font-bold text-emerald-700">৳30,000,000</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold mb-1">Scholar Residence Building</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Housing for resident scholars</span>
                    <span className="font-bold text-emerald-700">৳25,000,000</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold mb-1">Student Dormitory</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Student residential facility</span>
                    <span className="font-bold text-emerald-700">৳20,000,000</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/al-quran-journey/permanent-campus/building-sponsorship"
                  className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-800 transition"
                >
                  View All Building Sponsorship Options
                </Link>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-emerald-900 mb-3 text-center">Join Our Campus Project</h3>
              <p className="text-center mb-6">
                Be part of this historic initiative to establish a world-class center for Quranic research and education
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/al-quran-journey/permanent-campus/sponsor"
                  className="bg-emerald-700 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-800 transition"
                >
                  Become a Sponsor
                </Link>
                <Link
                  href="/al-quran-journey/permanent-campus/contact"
                  className="bg-white text-emerald-700 border border-emerald-700 px-6 py-3 rounded-md font-medium hover:bg-emerald-50 transition"
                >
                  Contact Project Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TRUSTED-ALLY</h3>
              <p className="text-emerald-100">
                Dedicated to illuminating minds through Quranic wisdom and scholarly research.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-emerald-100 hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-emerald-100 hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/education-program" className="text-emerald-100 hover:text-white transition">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-emerald-100 hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Al-Quran Journey</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/al-quran-journey/modern-science"
                    className="text-emerald-100 hover:text-white transition"
                  >
                    Modern Science
                  </Link>
                </li>
                <li>
                  <Link
                    href="/al-quran-journey/research-methodologies"
                    className="text-emerald-100 hover:text-white transition"
                  >
                    Research Methods
                  </Link>
                </li>
                <li>
                  <Link
                    href="/al-quran-journey/printing-distribution"
                    className="text-emerald-100 hover:text-white transition"
                  >
                    Printing Excellence
                  </Link>
                </li>
                <li>
                  <Link
                    href="/al-quran-journey/global-network"
                    className="text-emerald-100 hover:text-white transition"
                  >
                    Global Network
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-emerald-100 hover:text-white transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-emerald-100 hover:text-white transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-emerald-100 hover:text-white transition">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-emerald-100 hover:text-white transition">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <p className="text-emerald-100">
                Email: info@trusted-ally.org
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>

          <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-100">
            <p>&copy; {new Date().getFullYear()} TRUSTED-ALLY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

