import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Global Quranic Research Network | Al Quran Journey",
  description:
    "Join our worldwide network of Quranic scholars, scientists, and researchers dedicated to advancing understanding of the Quran's universal message.",
}

export default function GlobalNetworkPage() {
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
            <h1 className="text-4xl font-bold mb-6 leading-tight">Global Quranic Research Network</h1>
            <p className="text-xl mb-8 text-emerald-100">
              Uniting scholars, scientists, and researchers worldwide in a collaborative effort to advance understanding
              of the Quran's universal message.
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
            <span className="font-medium">Global Quranic Research Network</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">A Worldwide Community of Knowledge</h2>

            <p className="mb-6">
              The Global Quranic Research Network represents a groundbreaking initiative to connect scholars,
              scientists, researchers, and students across geographical, cultural, and disciplinary boundaries. United
              by a shared commitment to understanding and applying the wisdom of the Quran, our network facilitates
              collaboration that transcends traditional academic silos.
            </p>

            <p className="mb-6">
              We believe that the universal message of the Quran is best understood through diverse perspectives and
              collaborative inquiry. Our network brings together experts from Islamic studies, natural sciences, social
              sciences, humanities, and technology to engage in meaningful dialogue and research.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg my-8 border-l-4 border-emerald-600">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Network Objectives</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Foster international collaboration among Quranic researchers and scholars</li>
                <li>Facilitate interdisciplinary research projects that explore the Quran's multifaceted wisdom</li>
                <li>Develop global standards for Quranic research methodologies</li>
                <li>Create platforms for knowledge exchange and scholarly dialogue</li>
                <li>Support emerging scholars through mentorship and research opportunities</li>
                <li>Disseminate research findings to both academic and general audiences worldwide</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Network Structure</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Regional Hubs</h4>
                <p>
                  Our network operates through regional research hubs across six continents, each serving as a center
                  for local collaboration while connecting to the global community.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Thematic Research Clusters</h4>
                <p>
                  Scholars collaborate in specialized research clusters focused on specific themes within Quranic
                  studies, from linguistic analysis to ethical frameworks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Digital Collaboration Platform</h4>
                <p>
                  Our custom-built digital platform enables real-time collaboration, resource sharing, and discussion
                  among network members regardless of geographical location.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Annual Global Symposium</h4>
                <p>
                  Each year, network members gather for an international symposium to share research, build
                  relationships, and chart new directions for collaborative inquiry.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Current Collaborative Projects</h3>

            <div className="bg-white p-8 rounded-lg shadow-md mb-12">
              <h4 className="text-xl font-bold text-emerald-800 mb-3">The Universal Ethics Project</h4>
              <p className="mb-4">
                This flagship initiative brings together ethicists, social scientists, and Quranic scholars from 23
                countries to explore how Quranic ethical principles can contribute to addressing contemporary global
                challenges.
              </p>
              <p className="mb-4">
                The project examines Quranic approaches to environmental stewardship, economic justice, peaceful
                coexistence, and human dignity, developing frameworks that can inform both policy and personal conduct
                in our complex world.
              </p>
              <p>
                Led by Dr. Aisha Rahman (Oxford) and Sheikh Muhammad Al-Azhari (Al-Azhar), this project has produced a
                series of publications and practical resources that demonstrate the relevance of Quranic wisdom to
                contemporary ethical questions.
              </p>
              <div className="mt-6">
                <Link
                  href="/al-quran-journey/research/universal-ethics"
                  className="text-emerald-700 font-medium hover:text-emerald-900 transition flex items-center"
                >
                  Explore the Universal Ethics Project <i className="fas fa-external-link-alt ml-2"></i>
                </Link>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Join Our Network</h3>

            <p className="mb-6">
              The Global Quranic Research Network welcomes participation from qualified individuals and institutions:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Academic researchers and scholars in relevant fields</li>
              <li>Islamic educational institutions and research centers</li>
              <li>Scientists interested in Quranic perspectives on natural phenomena</li>
              <li>Digital humanities specialists and technology innovators</li>
              <li>Graduate students pursuing advanced research in Quranic studies</li>
              <li>Community educators committed to disseminating Quranic knowledge</li>
            </ul>

            <div className="bg-emerald-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Network Membership</h3>
              <p className="mb-4">
                Become part of our global community dedicated to advancing understanding of the Quran's universal
                message.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link
                  href="/al-quran-journey/global-network/apply"
                  className="bg-emerald-700 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-800 transition inline-block"
                >
                  Apply for Membership
                </Link>
                <Link
                  href="/al-quran-journey/global-network/institutions"
                  className="bg-white text-emerald-700 border border-emerald-700 px-6 py-3 rounded-md font-medium hover:bg-emerald-50 transition inline-block"
                >
                  Institutional Partnerships
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

