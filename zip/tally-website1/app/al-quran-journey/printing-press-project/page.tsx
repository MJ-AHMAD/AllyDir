import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Printing Press Project | Al Quran Journey",
  description:
    "Our plan to establish a state-of-the-art printing press dedicated to producing high-quality copies of the Holy Quran with the highest standards of accuracy and beauty.",
}

export default function PrintingPressProjectPage() {
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
            <h1 className="text-4xl font-bold mb-6 leading-tight">Modern Printing Press Project</h1>
            <p className="text-xl mb-8 text-emerald-100">
              Establishing a state-of-the-art printing facility dedicated to producing the highest quality copies of the
              Holy Quran
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
            <span className="font-medium">Printing Press Project</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">
              Our Vision: A Dedicated Quran Printing Facility
            </h2>

            <p className="mb-6">
              TRUSTED-ALLY is embarking on an ambitious project to establish a state-of-the-art printing press dedicated
              exclusively to producing high-quality copies of the Holy Quran. This facility will combine traditional
              craftsmanship with cutting-edge technology to set new standards for excellence in Quranic printing.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Project Overview</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="mb-4">Our dedicated printing press will enable us to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Produce up to 100,000 high-quality Qurans annually</li>
                    <li>Implement rigorous quality control at every stage</li>
                    <li>Develop specialized editions for diverse needs</li>
                    <li>Reduce production costs through scale and efficiency</li>
                    <li>Create sustainable, environmentally responsible operations</li>
                    <li>Train the next generation of Quranic printing specialists</li>
                  </ul>
                </div>
                <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-gray-500">Printing press facility concept image</div>
                  {/* Replace with actual image: 
                  <Image 
                    src="/images/quran-printing/press-concept.jpg" 
                    alt="Modern printing press concept" 
                    width={500} 
                    height={300} 
                    className="rounded-lg"
                  /> */}
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Facility Design & Equipment</h3>

            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-gray-500">Facility floor plan image</div>
                  {/* Replace with actual image */}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-emerald-800 mb-3">Facility Layout</h4>
                  <p className="mb-4">
                    Our 25,000 square foot facility will be strategically designed to optimize workflow and ensure the
                    highest quality standards. The layout includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Pre-press preparation area</li>
                    <li>Main printing hall with state-of-the-art presses</li>
                    <li>Binding and finishing department</li>
                    <li>Quality control laboratory</li>
                    <li>Materials storage with climate control</li>
                    <li>Packaging and distribution center</li>
                    <li>Administrative offices and training facilities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h4 className="text-xl font-bold text-emerald-800 mb-3">Cutting-Edge Equipment</h4>
              <p className="mb-4">
                We will invest in the latest printing technology specifically calibrated for Quranic text production:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="h-12 w-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h5 className="font-bold mb-2">High-Precision Printing</h5>
                  <p className="text-sm">
                    Advanced digital and offset presses with exceptional color accuracy and resolution for perfect
                    reproduction of Arabic text and diacritical marks
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="h-12 w-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h5 className="font-bold mb-2">Automated Quality Control</h5>
                  <p className="text-sm">
                    AI-powered inspection systems that verify every page against the master text, ensuring 100% accuracy
                    in every copy
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="h-12 w-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </div>
                  <h5 className="font-bold mb-2">Advanced Binding Systems</h5>
                  <p className="text-sm">
                    Specialized binding equipment that creates durable, lay-flat bindings perfect for frequent use and
                    long-term durability
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="h-12 w-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                  <h5 className="font-bold mb-2">Specialized Paper Processing</h5>
                  <p className="text-sm">
                    Custom paper handling systems for the specialized thin yet opaque paper required for Quranic
                    printing
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="h-12 w-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                      />
                    </svg>
                  </div>
                  <h5 className="font-bold mb-2">Ink Formulation Lab</h5>
                  <p className="text-sm">
                    On-site facility for developing and testing specialized inks that provide perfect clarity and
                    longevity
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="h-12 w-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <h5 className="font-bold mb-2">Environmental Controls</h5>
                  <p className="text-sm">
                    Advanced climate and dust control systems that maintain optimal conditions for printing and material
                    storage
                  </p>
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
                          <span className="font-medium">Land Acquisition & Development</span>
                          <span className="font-bold">৳50,000,000</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "20%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Building Construction</span>
                          <span className="font-bold">৳120,000,000</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "48%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Printing Equipment</span>
                          <span className="font-bold">৳60,000,000</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "24%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Initial Materials & Supplies</span>
                          <span className="font-bold">৳10,000,000</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "4%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Staff Training & Development</span>
                          <span className="font-bold">৳5,000,000</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "2%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Contingency Fund</span>
                          <span className="font-bold">৳5,000,000</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-emerald-600 h-2 rounded-full" style={{ width: "2%" }}></div>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex justify-between">
                          <span className="font-bold">Total Project Budget</span>
                          <span className="font-bold text-emerald-700">৳250,000,000</span>
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
                            <p className="text-sm text-gray-600">6 months</p>
                            <ul className="text-sm mt-2 space-y-1">
                              <li>Site selection and acquisition</li>
                              <li>Architectural planning</li>
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
                            <h5 className="font-bold">Phase 2: Construction</h5>
                            <p className="text-sm text-gray-600">12 months</p>
                            <ul className="text-sm mt-2 space-y-1">
                              <li>Building construction</li>
                              <li>Infrastructure development</li>
                              <li>Environmental systems installation</li>
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
                            <h5 className="font-bold">Phase 3: Equipment Installation</h5>
                            <p className="text-sm text-gray-600">6 months</p>
                            <ul className="text-sm mt-2 space-y-1">
                              <li>Equipment procurement</li>
                              <li>Installation and calibration</li>
                              <li>Testing and optimization</li>
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
                            <h5 className="font-bold">Phase 4: Staff Training</h5>
                            <p className="text-sm text-gray-600">3 months</p>
                            <ul className="text-sm mt-2 space-y-1">
                              <li>Recruitment of specialized staff</li>
                              <li>Comprehensive training programs</li>
                              <li>Process development and documentation</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="relative flex items-start">
                          <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm z-10">
                            5
                          </div>
                          <div className="ml-4">
                            <h5 className="font-bold">Phase 5: Launch & Initial Production</h5>
                            <p className="text-sm text-gray-600">3 months</p>
                            <ul className="text-sm mt-2 space-y-1">
                              <li>Initial production run</li>
                              <li>Quality assurance protocols</li>
                              <li>Full-scale operations begin</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t text-center">
                      <p className="font-bold">Total Project Duration: 30 months</p>
                      <p className="text-sm text-gray-600">Estimated completion: 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Sponsorship Opportunities</h3>

            <p className="mb-6">
              We invite individuals, organizations, and institutions to become stakeholders in this historic project.
              Your contribution will help establish a legacy of Quranic excellence for generations to come.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-600">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Founding Patron</h4>
                <div className="text-2xl font-bold text-emerald-700 mb-2">৳10,000,000+</div>
                <p className="text-sm text-gray-600 mb-4">
                  Become a founding patron of our printing press with a major contribution
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
                    Named recognition on building facade
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
                    Permanent recognition in main lobby
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
                    Naming rights to a major facility section
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
                    VIP access to all facility events
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
                    Annual special edition Quran gift
                  </li>
                </ul>
                <Link
                  href="/al-quran-journey/printing-press-project/sponsor?level=founding"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                >
                  Become a Founding Patron
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-500">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Major Sponsor</h4>
                <div className="text-2xl font-bold text-emerald-700 mb-2">৳5,000,000+</div>
                <p className="text-sm text-gray-600 mb-4">
                  Make a significant contribution to a specific aspect of the project
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
                    Named recognition for specific equipment
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
                    Recognition plaque in sponsored area
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
                    Invitations to special facility events
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
                    Commemorative limited edition Quran
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
                    Regular project updates and reports
                  </li>
                </ul>
                <Link
                  href="/al-quran-journey/printing-press-project/sponsor?level=major"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                >
                  Become a Major Sponsor
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-emerald-400">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Supporting Partner</h4>
                <div className="text-2xl font-bold text-emerald-700 mb-2">৳1,000,000+</div>
                <p className="text-sm text-gray-600 mb-4">Support a specific component of the printing press project</p>
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
                    Recognition on donor wall
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
                    Certificate of appreciation
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
                    Special edition Quran from first print run
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
                    Regular project newsletters
                  </li>
                </ul>
                <Link
                  href="/al-quran-journey/printing-press-project/sponsor?level=supporting"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                >
                  Become a Supporting Partner
                </Link>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg my-8">
              <h4 className="text-xl font-bold text-emerald-900 mb-3 text-center">
                Equipment Sponsorship Opportunities
              </h4>
              <p className="text-center mb-6">
                Sponsor specific equipment or facility components with naming rights and recognition
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold mb-1">Main Printing Press</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">High-precision digital press</span>
                    <span className="font-bold text-emerald-700">৳25,000,000</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold mb-1">Binding Department</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Complete binding facility</span>
                    <span className="font-bold text-emerald-700">৳15,000,000</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold mb-1">Quality Control Laboratory</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Advanced testing equipment</span>
                    <span className="font-bold text-emerald-700">৳10,000,000</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold mb-1">Training Center</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Staff development facility</span>
                    <span className="font-bold text-emerald-700">৳5,000,000</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold mb-1">Paper Processing System</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Specialized paper handling</span>
                    <span className="font-bold text-emerald-700">৳8,000,000</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-bold mb-1">Distribution Center</h5>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Packaging and logistics hub</span>
                    <span className="font-bold text-emerald-700">৳7,000,000</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/al-quran-journey/printing-press-project/equipment-sponsorship"
                  className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-800 transition"
                >
                  View All Equipment Sponsorship Options
                </Link>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-emerald-900 mb-3 text-center">Join Our Printing Press Project</h3>
              <p className="text-center mb-6">
                Be part of this historic initiative to establish a world-class Quran printing facility
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/al-quran-journey/printing-press-project/sponsor"
                  className="bg-emerald-700 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-800 transition"
                >
                  Become a Sponsor
                </Link>
                <Link
                  href="/al-quran-journey/printing-press-project/contact"
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

