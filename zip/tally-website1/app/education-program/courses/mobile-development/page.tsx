import Link from "next/link"
import { FaMobile, FaApple, FaAndroid, FaCode, FaUsers, FaCalendarAlt } from "react-icons/fa"

export default function MobileDevelopmentCoursePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mobile App Development</h1>
            <p className="text-xl mb-8">
              Learn to build native and cross-platform mobile applications for iOS and Android devices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/education-program/courses/mobile-development/register"
                className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Enroll Now
              </Link>
              <a
                href="#curriculum"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-orange-600 px-6 py-3 rounded-md font-medium transition duration-300"
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
              This comprehensive mobile development course will teach you how to build professional-grade mobile
              applications for iOS and Android platforms. You'll learn both native development using Swift and Kotlin,
              as well as cross-platform development with React Native. By the end of this course, you'll have the skills
              to design, develop, and deploy mobile apps that provide exceptional user experiences.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <FaApple className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">iOS Development</h3>
                  <p className="text-gray-600">
                    Learn Swift programming and iOS app development with UIKit and SwiftUI.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <FaAndroid className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Android Development</h3>
                  <p className="text-gray-600">
                    Master Kotlin programming and Android app development with Jetpack Compose.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <FaCode className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Cross-Platform Development</h3>
                  <p className="text-gray-600">Build apps for multiple platforms using React Native.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <FaMobile className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">App Store Deployment</h3>
                  <p className="text-gray-600">
                    Learn to publish your apps to the Apple App Store and Google Play Store.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <FaCalendarAlt className="text-orange-600 mr-3 text-xl" />
                <h3 className="font-semibold text-lg text-gray-800">Duration</h3>
              </div>
              <p className="text-gray-600">12 weeks, 6 hours/week</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <FaMobile className="text-orange-600 mr-3 text-xl" />
                <h3 className="font-semibold text-lg text-gray-800">Skill Level</h3>
              </div>
              <p className="text-gray-600">Intermediate</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <FaUsers className="text-orange-600 mr-3 text-xl" />
                <h3 className="font-semibold text-lg text-gray-800">Prerequisites</h3>
              </div>
              <p className="text-gray-600">Basic programming knowledge</p>
            </div>
          </div>

          {/* Curriculum */}
          <div id="curriculum" className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Curriculum</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 1: Introduction to Mobile Development</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Mobile development landscape</li>
                <li>Native vs. cross-platform development</li>
                <li>Mobile app architecture patterns</li>
                <li>Setting up development environments</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 2: iOS Development Fundamentals</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Swift programming language basics</li>
                <li>iOS app architecture</li>
                <li>UIKit fundamentals</li>
                <li>Building user interfaces with Storyboards</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 3: Advanced iOS Development</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>SwiftUI for modern iOS interfaces</li>
                <li>Data persistence with Core Data</li>
                <li>Networking and API integration</li>
                <li>iOS app lifecycle and background processing</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 4: Android Development Fundamentals</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Kotlin programming language basics</li>
                <li>Android app architecture</li>
                <li>Android UI components</li>
                <li>Building layouts with XML</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 5: Advanced Android Development</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Jetpack Compose for modern Android UIs</li>
                <li>Data persistence with Room</li>
                <li>Android networking and API integration</li>
                <li>Background processing and services</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Module 6: Cross-Platform Development with React Native
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>React Native fundamentals</li>
                <li>JavaScript/TypeScript for mobile development</li>
                <li>React Native components and styling</li>
                <li>Navigation in React Native</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 7: Advanced React Native</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>State management with Redux</li>
                <li>Native modules and bridging</li>
                <li>Performance optimization</li>
                <li>Debugging and testing React Native apps</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 8: Mobile UI/UX Design</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Mobile design principles</li>
                <li>Platform-specific design guidelines</li>
                <li>Responsive and adaptive layouts</li>
                <li>Animations and transitions</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 9: Mobile App Testing</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Unit testing for mobile apps</li>
                <li>UI testing and automation</li>
                <li>Performance testing</li>
                <li>Beta testing and distribution</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 10: App Store Deployment</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>App Store guidelines and requirements</li>
                <li>Preparing apps for submission</li>
                <li>App Store Connect and Google Play Console</li>
                <li>App versioning and updates</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Module 11: Final Project</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Design and develop a complete mobile application</li>
                <li>Implement both iOS and Android versions</li>
                <li>Create a cross-platform version with React Native</li>
                <li>Deploy to app stores and present your work</li>
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
                  <h3 className="text-xl font-semibold text-gray-800">Alex Thompson</h3>
                  <p className="text-orange-600 mb-2">iOS Developer</p>
                  <p className="text-gray-600">
                    Alex has been developing iOS apps for over 7 years and has published multiple successful apps on the
                    App Store. He specializes in Swift and SwiftUI development.
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
                  <h3 className="text-xl font-semibold text-gray-800">Maya Patel</h3>
                  <p className="text-orange-600 mb-2">Android & React Native Expert</p>
                  <p className="text-gray-600">
                    Maya is a full-stack mobile developer with expertise in Android and React Native. She has worked
                    with startups and enterprises to build cross-platform mobile solutions.
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
                    alt="Web Development"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Web Development</h3>
                  <p className="text-gray-600 mb-4">Learn modern web development with HTML, CSS, and JavaScript.</p>
                  <Link
                    href="/education-program/courses/web-development"
                    className="text-orange-600 hover:text-orange-800 font-medium"
                  >
                    View Course
                  </Link>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=192&width=384"
                    alt="UI/UX Design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">UI/UX Design</h3>
                  <p className="text-gray-600 mb-4">Master the principles of user interface and experience design.</p>
                  <Link
                    href="/education-program/courses/ui-ux-design"
                    className="text-orange-600 hover:text-orange-800 font-medium"
                  >
                    View Course
                  </Link>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img
                    src="/placeholder.svg?height=192&width=384"
                    alt="API Development"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">API Development</h3>
                  <p className="text-gray-600 mb-4">Learn to build robust APIs for your mobile applications.</p>
                  <Link
                    href="/education-program/courses/api-development"
                    className="text-orange-600 hover:text-orange-800 font-medium"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-orange-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Amazing Mobile Apps?</h2>
            <p className="text-xl mb-6">Join our comprehensive course and become a skilled mobile developer.</p>
            <Link
              href="/education-program/courses/mobile-development/register"
              className="inline-block bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-md font-medium text-lg transition duration-300"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

