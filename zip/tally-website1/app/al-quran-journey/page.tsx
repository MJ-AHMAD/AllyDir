import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Al Quran Journey | TRUSTED-ALLY",
  description:
    "Explore the depths of Quranic knowledge through scholarly research, modern scientific perspectives, and comprehensive studies.",
}

export default function AlQuranJourneyPage() {
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

          <div className="text-center py-16 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 leading-tight">Al-Quran Journey</h1>
            <p className="text-xl mb-8 text-emerald-100">
              Illuminating minds through the divine wisdom of the Quran with scholarly research, scientific exploration,
              and comprehensive understanding.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/al-quran-journey/campus"
                className="bg-white text-emerald-900 px-6 py-3 rounded-md font-medium hover:bg-emerald-100 transition"
              >
                Our Campus
              </Link>
              <Link
                href="/al-quran-journey/courses"
                className="bg-emerald-700 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-800 transition"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-900">Our Research Pillars</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Modern Science & Quranic Revelations */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="h-16 w-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-atom text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-900">Modern Science & Quranic Revelations</h3>
              <p className="text-gray-700 mb-4">
                Exploring the remarkable harmony between scientific discoveries and Quranic revelations, demonstrating
                how the Quran's descriptions of natural phenomena preceded modern scientific understanding by centuries.
              </p>
              <Link
                href="/al-quran-journey/modern-science"
                className="text-emerald-700 font-medium hover:text-emerald-900 transition flex items-center"
              >
                Explore Research <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>

            {/* Advanced Quranic Research Methodologies */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="h-16 w-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-microscope text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-900">Advanced Quranic Research Methodologies</h3>
              <p className="text-gray-700 mb-4">
                Developing and implementing sophisticated methodologies for Quranic research, combining classical
                Islamic scholarship with contemporary academic approaches to textual analysis.
              </p>
              <Link
                href="/al-quran-journey/research-methodologies"
                className="text-emerald-700 font-medium hover:text-emerald-900 transition flex items-center"
              >
                Explore Research <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>

            {/* Quranic Printing & Distribution Excellence */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="h-16 w-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-book-open text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-900">Quranic Printing & Distribution Excellence</h3>
              <p className="text-gray-700 mb-4">
                Advancing the art and science of Quranic printing, preservation, and global distribution, ensuring the
                highest standards of accuracy, beauty, and accessibility for all seekers of knowledge.
              </p>
              <Link
                href="/al-quran-journey/printing-distribution"
                className="text-emerald-700 font-medium hover:text-emerald-900 transition flex items-center"
              >
                Explore Research <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>

            {/* Global Quranic Research Network */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="h-16 w-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-globe-asia text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-900">Global Quranic Research Network</h3>
              <p className="text-gray-700 mb-4">
                Fostering international collaboration among Quranic scholars, scientists, and researchers, creating a
                worldwide network dedicated to advancing understanding of the Quran's universal message.
              </p>
              <Link
                href="/al-quran-journey/global-network"
                className="text-emerald-700 font-medium hover:text-emerald-900 transition flex items-center"
              >
                Explore Research <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/al-quran-journey/printing-project"
              className="inline-block bg-emerald-800 text-white px-8 py-4 rounded-md font-medium hover:bg-emerald-900 transition"
            >
              Join Our Quran Printing Project
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-900">Scholarly Testimonials</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-800 font-bold">DR</span>
                </div>
                <div>
                  <h4 className="font-bold">Dr. Rashid Ahmed</h4>
                  <p className="text-sm text-gray-600">Professor of Islamic Studies</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The research methodology developed by Al-Quran Journey represents a significant advancement in Quranic
                studies, bridging classical scholarship with modern analytical approaches."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-800 font-bold">SA</span>
                </div>
                <div>
                  <h4 className="font-bold">Dr. Sarah Al-Farsi</h4>
                  <p className="text-sm text-gray-600">Quantum Physicist</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "As a scientist, I am continually amazed by the precision with which Quranic descriptions align with our
                most recent scientific discoveries. This program illuminates these connections brilliantly."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-emerald-800 font-bold">MK</span>
                </div>
                <div>
                  <h4 className="font-bold">Mufti Khalid Ibrahim</h4>
                  <p className="text-sm text-gray-600">Islamic Scholar</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The depth of analysis and scholarly rigor demonstrated in this program honors the tradition of Islamic
                scholarship while embracing the tools of modern research."
              </p>
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

