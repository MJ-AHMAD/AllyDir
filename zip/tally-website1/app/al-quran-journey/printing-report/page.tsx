import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quran Printing Activities Report | Al Quran Journey",
  description:
    "A comprehensive report on our Quran printing, packaging and distribution activities from 2020 to present, including our work with students and Rohingya refugees.",
}

export default function PrintingReportPage() {
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
            <h1 className="text-4xl font-bold mb-6 leading-tight">Quran Printing Activities Report</h1>
            <p className="text-xl mb-8 text-emerald-100">
              Our journey of printing and distributing high-quality copies of the Holy Quran from 2020 to present
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
            <span className="font-medium">Printing Report</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">Our Quran Printing Journey (2020-Present)</h2>

            <p className="mb-6">
              Since 2020, TRUSTED-ALLY has been committed to producing and distributing high-quality copies of the Holy
              Quran to students, communities, and Rohingya refugees. Our meticulous process ensures that each copy meets
              the highest standards of accuracy, quality, and beauty.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Project Highlights</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-emerald-700 mb-2">50,000+</div>
                  <div className="text-sm">Copies Printed</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-emerald-700 mb-2">35,000+</div>
                  <div className="text-sm">Distributed to Students</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-emerald-700 mb-2">10,000+</div>
                  <div className="text-sm">To Rohingya Refugees</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-emerald-700 mb-2">15+</div>
                  <div className="text-sm">Districts Covered</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Our Printing Process</h3>

            <div className="mb-12">
              <h4 className="text-xl font-bold text-emerald-800 mb-3">1. Pre-Printing Preparation</h4>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p>
                    Our process begins with meticulous preparation. Qualified Quranic scholars verify every letter and
                    diacritical mark to ensure absolute textual accuracy. Our design team works on typography that
                    honors the aesthetic tradition of Quranic script.
                  </p>
                  <ul className="list-disc pl-6 mt-3">
                    <li>Text verification by qualified huffaz</li>
                    <li>Typography and layout design</li>
                    <li>Paper selection and quality testing</li>
                    <li>Ink preparation and color calibration</li>
                  </ul>
                </div>
                <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-gray-500">Pre-printing preparation image</div>
                  {/* Replace with actual image: 
                  <Image 
                    src="/images/quran-printing/preparation.jpg" 
                    alt="Pre-printing preparation" 
                    width={500} 
                    height={300} 
                    className="rounded-lg"
                  /> */}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h4 className="text-xl font-bold text-emerald-800 mb-3">2. Printing Process</h4>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-gray-500">Printing process image</div>
                  {/* Replace with actual image: 
                  <Image 
                    src="/images/quran-printing/printing.jpg" 
                    alt="Printing process" 
                    width={500} 
                    height={300} 
                    className="rounded-lg"
                  /> */}
                </div>
                <div>
                  <p>
                    The printing phase is conducted with the utmost care and precision. Our team monitors every aspect
                    of the printing process to ensure consistent quality across all copies.
                  </p>
                  <ul className="list-disc pl-6 mt-3">
                    <li>High-quality paper feeding</li>
                    <li>Precision printing with specialized equipment</li>
                    <li>Continuous quality monitoring</li>
                    <li>Inspection team oversight during printing</li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-gray-500">Paper preparation</div>
                  {/* Replace with actual image */}
                </div>
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-gray-500">Printing in progress</div>
                  {/* Replace with actual image */}
                </div>
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-gray-500">Quality inspection</div>
                  {/* Replace with actual image */}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h4 className="text-xl font-bold text-emerald-800 mb-3">3. Cover Printing & Binding</h4>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p>
                    The cover design and binding process are crucial for both the aesthetic appeal and durability of
                    each Quran. We use high-quality materials that ensure longevity while maintaining the sacred beauty
                    of the text.
                  </p>
                  <ul className="list-disc pl-6 mt-3">
                    <li>Elegant cover design and printing</li>
                    <li>Durable binding techniques</li>
                    <li>Quality control at each binding stage</li>
                    <li>Final inspection before packaging</li>
                  </ul>
                </div>
                <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-gray-500">Cover printing and binding image</div>
                  {/* Replace with actual image */}
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-gray-500">Cover printing</div>
                  {/* Replace with actual image */}
                </div>
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-gray-500">Binding process</div>
                  {/* Replace with actual image */}
                </div>
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-gray-500">Final inspection</div>
                  {/* Replace with actual image */}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h4 className="text-xl font-bold text-emerald-800 mb-3">4. Packaging & Distribution Preparation</h4>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-gray-500">Packaging and distribution preparation image</div>
                  {/* Replace with actual image */}
                </div>
                <div>
                  <p>
                    Each Quran is carefully packaged to protect it during transportation. Our team organizes the copies
                    by destination, ensuring efficient distribution to different regions, schools, and refugee camps.
                  </p>
                  <ul className="list-disc pl-6 mt-3">
                    <li>Protective packaging materials</li>
                    <li>Organization by destination</li>
                    <li>Inventory management</li>
                    <li>Logistics planning for different regions</li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-gray-500">Packaging process</div>
                  {/* Replace with actual image */}
                </div>
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-gray-500">Regional sorting</div>
                  {/* Replace with actual image */}
                </div>
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-gray-500">Distribution preparation</div>
                  {/* Replace with actual image */}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h4 className="text-xl font-bold text-emerald-800 mb-3">5. Distribution to Students & Communities</h4>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p>
                    The most rewarding part of our journey is distributing the Qurans to students and communities. The
                    joy on their faces when receiving their own copy of the Holy Quran is immeasurable.
                  </p>
                  <ul className="list-disc pl-6 mt-3">
                    <li>School distribution events</li>
                    <li>Community madrasa programs</li>
                    <li>Special ceremonies for first-time recipients</li>
                    <li>Follow-up programs for Quranic education</li>
                  </ul>
                </div>
                <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-gray-500">Distribution to students image</div>
                  {/* Replace with actual image */}
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-gray-500">School distribution</div>
                  {/* Replace with actual image */}
                </div>
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-gray-500">Students receiving Qurans</div>
                  {/* Replace with actual image */}
                </div>
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-gray-500">Joyful students with Qurans</div>
                  {/* Replace with actual image */}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h4 className="text-xl font-bold text-emerald-800 mb-3">6. Rohingya Refugee Distribution Program</h4>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-gray-500">Rohingya distribution program image</div>
                  {/* Replace with actual image */}
                </div>
                <div>
                  <p>
                    Our special initiative for Rohingya refugees has been particularly meaningful. We've distributed
                    over 10,000 copies to refugee camps, providing spiritual comfort and educational resources to
                    displaced communities.
                  </p>
                  <ul className="list-disc pl-6 mt-3">
                    <li>Coordination with camp authorities</li>
                    <li>Distribution through educational centers in camps</li>
                    <li>Special editions with Rohingya translation notes</li>
                    <li>Teacher training for Quranic education in camps</li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-gray-500">Camp distribution</div>
                  {/* Replace with actual image */}
                </div>
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-gray-500">Rohingya children with Qurans</div>
                  {/* Replace with actual image */}
                </div>
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-gray-500">Quran class in refugee camp</div>
                  {/* Replace with actual image */}
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-12">
              <h3 className="text-xl font-bold text-red-700 mb-3">Current Funding Crisis</h3>
              <p className="mb-4">
                Despite the tremendous impact of our Quran printing and distribution program, we are currently facing a
                severe funding crisis. The rising costs of quality materials, printing, and distribution have made it
                increasingly difficult to continue this vital work at the scale needed.
              </p>
              <p className="mb-4">
                Without immediate support, we may be forced to significantly reduce or temporarily suspend our Quran
                printing operations, leaving thousands of students and refugees without access to their own copy of the
                Holy Quran.
              </p>
              <p className="font-medium">
                Your generous contribution can help us overcome this challenge and continue our mission of making the
                Holy Quran accessible to all who seek its guidance.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-6">Support Our Quran Printing Mission</h3>

            <div className="bg-emerald-50 p-8 rounded-lg shadow-md mb-12">
              <h4 className="text-xl font-bold text-emerald-800 mb-6 text-center">Donation Options</h4>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-emerald-100 text-emerald-800 rounded-full p-3 mb-2">
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
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <h5 className="font-bold text-lg">Single Quran Sponsor</h5>
                    <div className="text-2xl font-bold text-emerald-700 my-2">৳500</div>
                    <p className="text-sm text-gray-600">Sponsor one complete Quran</p>
                  </div>
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
                      Your name inside the sponsored Quran
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
                      Digital certificate of sponsorship
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
                      Photo of recipient (when possible)
                    </li>
                  </ul>
                  <Link
                    href="/al-quran-journey/printing-report/donate?package=single"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Donate Now
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-emerald-500 hover:shadow-lg transition">
                  <div className="absolute -mt-10 ml-[calc(50%-45px)]">
                    <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                      Most Popular
                    </span>
                  </div>
                  <div className="text-center mb-4">
                    <div className="inline-block bg-emerald-100 text-emerald-800 rounded-full p-3 mb-2">
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
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h5 className="font-bold text-lg">Classroom Sponsor</h5>
                    <div className="text-2xl font-bold text-emerald-700 my-2">৳15,000</div>
                    <p className="text-sm text-gray-600">Sponsor 30 Qurans for a classroom</p>
                  </div>
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
                      Your name in all sponsored Qurans
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
                      Framed certificate of appreciation
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
                      Photos of classroom distribution
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
                      Recognition on our donor wall
                    </li>
                  </ul>
                  <Link
                    href="/al-quran-journey/printing-report/donate?package=classroom"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Donate Now
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-emerald-100 text-emerald-800 rounded-full p-3 mb-2">
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
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <h5 className="font-bold text-lg">School Sponsor</h5>
                    <div className="text-2xl font-bold text-emerald-700 my-2">৳100,000</div>
                    <p className="text-sm text-gray-600">Sponsor 200 Qurans for a school</p>
                  </div>
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
                      All Classroom Sponsor benefits
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
                      Commemorative plaque at the school
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
                      Invitation to distribution ceremony
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
                      Featured in our annual report
                    </li>
                  </ul>
                  <Link
                    href="/al-quran-journey/printing-report/donate?package=school"
                    className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 mb-4">Prefer to make a custom donation? Choose your own amount:</p>
                <Link
                  href="/al-quran-journey/printing-report/donate?package=custom"
                  className="inline-block bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-2 px-6 rounded-md transition"
                >
                  Custom Donation
                </Link>
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg my-8">
              <h4 className="text-xl font-bold text-emerald-900 mb-3 text-center">Join Our Mission</h4>
              <p className="text-center mb-6">
                Help us continue our mission of making the Holy Quran accessible to all who seek its guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/al-quran-journey/printing-report/donate"
                  className="bg-emerald-700 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-800 transition"
                >
                  Donate Now
                </Link>
                <Link
                  href="/al-quran-journey/printing-project/volunteer"
                  className="bg-white text-emerald-700 border border-emerald-700 px-6 py-3 rounded-md font-medium hover:bg-emerald-50 transition"
                >
                  Volunteer
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

