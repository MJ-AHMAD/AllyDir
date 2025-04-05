import Link from "next/link"
import { FaDesktop, FaServer, FaShieldAlt, FaTools, FaUsers, FaCalendarAlt } from "react-icons/fa"

export default function OperatingSystemsCoursePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Operating Systems Fundamentals</h1>
            <p className="text-xl mb-8">
              Understand the core principles of operating systems and gain practical skills in system administration and
              management.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/education-program/courses/operating-systems/register"
                className="bg-white text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Enroll Now
              </Link>
              <a
                href="#curriculum"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-md font-medium transition duration-300"
              >
                View Curriculum
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Course Overview</h2>
            <p className="text-gray-600 mb-6">
              This comprehensive course covers the fundamental concepts and practical aspects of operating systems.
              You'll learn about system architecture, process management, memory management, file systems, and security.
              The course includes hands-on labs with Windows, Linux, and macOS, giving you practical experience with
              different operating systems.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <FaDesktop className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">OS Architecture</h3>
                  <p className="text-gray-600">
                    Understand the core components and architecture of modern operating systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <FaServer className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">System Administration</h3>
                  <p className="text-gray-600">
                    Learn practical skills for managing and administering different operating systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <FaShieldAlt className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Security Principles</h3>
                  <p className="text-gray-600">
                    Master essential security concepts and best practices for operating systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <FaTools className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Troubleshooting</h3>
                  <p className="text-gray-600">
                    Develop skills to diagnose and resolve common operating system issues.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <FaCalendarAlt className="text-purple-600 mr-3 text-xl" />
                <h3 className="font-semibold text-lg text-gray-800">Duration</h3>
              </div>
              <p className="text-gray-600">12 weeks, 4 hours/week</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <FaDesktop className="text-purple-600 mr-3 text-xl" />
                <h3 className="font-semibold text-lg text-gray-800">Skill Level</h3>
              </div>
              <p className="text-gray-600">Beginner to Intermediate</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <FaUsers className="text-purple-600 mr-3 text-xl" />
                <h3 className="font-semibold text-lg text-gray-800">Prerequisites</h3>
              </div>
              <p className="text-gray-600">Basic computer knowledge</p>
            </div>
          </div>

          {/* Curriculum */}
          <div id="curriculum" className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Curriculum</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 1: Introduction to Operating Systems</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>History and evolution of operating systems</li>
                <li>Types of operating systems</li>
                <li>OS components and architecture</li>
                <li>Operating system services</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 2: Process Management</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Processes and threads</li>
                <li>CPU scheduling algorithms</li>
                <li>Process synchronization</li>
                <li>Deadlocks and starvation</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 3: Memory Management</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Memory hierarchy and organization</li>
                <li>Virtual memory concepts</li>
                <li>Paging and segmentation</li>
                <li>Memory allocation techniques</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 4: File Systems</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>File system structure and implementation</li>
                <li>File allocation methods</li>
                <li>Directory structure</li>
                <li>File system reliability and protection</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 5: Windows Operating System</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Windows architecture</li>
                <li>Windows system administration</li>
                <li>PowerShell scripting</li>
                <li>Windows security features</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 6: Linux Operating System</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Linux architecture and distributions</li>
                <li>Linux file system and commands</li>
                <li>Shell scripting</li>
                <li>Linux system administration</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 7: macOS Fundamentals</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>macOS architecture</li>
                <li>Terminal and command line tools</li>
                <li>macOS system administration</li>
                <li>macOS security features</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 8: OS Security</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Authentication and authorization</li>
                <li>Access control mechanisms</li>
                <li>Security threats and vulnerabilities</li>
                <li>Security best practices</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 9: Virtualization and Containers</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Virtualization concepts</li>
                <li>Hypervisors and virtual machines</li>
                <li>Container technologies</li>
                <li>Docker basics</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Module 10: System Performance and Optimization
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Performance metrics and monitoring</li>
                <li>System optimization techniques</li>
                <li>Troubleshooting methodologies</li>
                <li>Performance tuning tools</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 11: Final Project</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Comprehensive system administration project</li>
                <li>Multi-OS environment setup and management</li>
                <li>Security implementation and testing</li>
                <li>Performance optimization and documentation</li>
              </ul>
            </div>
          </div>

          {/* Instructors */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Instructors</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Instructor"
                  className="w-24 h-24 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">David Wilson</h3>
                  <p className="text-purple-600 mb-2">Senior Systems Administrator</p>
                  <p className="text-gray-600">
                    David has over 15 years of experience in system administration across Windows, Linux, and macOS
                    environments. He specializes in enterprise system management and security.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Instructor"
                  className="w-24 h-24 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Priya Sharma</h3>
                  <p className="text-purple-600 mb-2">Linux System Engineer</p>
                  <p className="text-gray-600">
                    Priya is a certified Linux engineer with expertise in system optimization and security. She has
                    worked with major tech companies and contributed to open-source projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Courses */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Related Courses You Might Like</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=192&width=384"
                    alt="Cloud Computing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Cloud Computing</h3>
                  <p className="text-gray-600 mb-4">Master cloud platforms and deployment strategies.</p>
                  <Link
                    href="/education-program/courses/cloud-computing"
                    className="text-purple-600 hover:text-purple-800 font-medium"
                  >
                    View Course
                  </Link>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=192&width=384"
                    alt="PowerShell Automation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">PowerShell Automation</h3>
                  <p className="text-gray-600 mb-4">Learn to automate Windows administration tasks with PowerShell.</p>
                  <Link
                    href="/education-program/courses/powershell-automation"
                    className="text-purple-600 hover:text-purple-800 font-medium"
                  >
                    View Course
                  </Link>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=192&width=384"
                    alt="Cybersecurity Fundamentals"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Cybersecurity Fundamentals</h3>
                  <p className="text-gray-600 mb-4">Learn essential security concepts and practices.</p>
                  <Link
                    href="/education-program/courses/cybersecurity"
                    className="text-purple-600 hover:text-purple-800 font-medium"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Master Operating Systems?</h2>
            <p className="text-xl mb-6">
              Join our comprehensive course and build essential skills for your tech career.
            </p>
            <Link
              href="/education-program/courses/operating-systems/register"
              className="inline-block bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-md font-medium text-lg transition duration-300"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

