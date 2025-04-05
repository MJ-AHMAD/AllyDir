import Link from "next/link"

export default function DatabaseManagementRegistrationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-600 p-6 text-white">
              <h1 className="text-2xl md:text-3xl font-bold">Register for Database Management Course</h1>
              <p className="mt-2 text-green-100">
                Complete the form below to enroll in our comprehensive database management course.
              </p>
            </div>

            <div className="p-6 md:p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Experience Level
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner - No prior experience</option>
                    <option value="intermediate">Intermediate - Some experience</option>
                    <option value="advanced">Advanced - Experienced but want to improve</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="database" className="block text-sm font-medium text-gray-700 mb-1">
                    Database Interest
                  </label>
                  <select
                    id="database"
                    name="database"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select your primary interest</option>
                    <option value="sql">SQL Databases</option>
                    <option value="nosql">NoSQL Databases</option>
                    <option value="both">Both SQL and NoSQL</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1">
                    What are your learning goals?
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    I agree to the{" "}
                    <Link href="/terms-of-service" className="text-green-600 hover:text-green-800">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="text-green-600 hover:text-green-800">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300"
                  >
                    Submit Registration
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center text-gray-600 text-sm">
                <p>
                  Already registered?{" "}
                  <Link href="/education-program/student-dashboard" className="text-green-600 hover:text-green-800">
                    Go to your dashboard
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Course Details</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="ml-2 text-gray-700">Duration: 10 weeks, 5 hours/week</p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="ml-2 text-gray-700">Skill Level: Intermediate</p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="ml-2 text-gray-700">Prerequisites: Basic programming knowledge</p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="ml-2 text-gray-700">Certificate: Yes, upon completion</p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/education-program/courses/database-management"
                className="text-green-600 hover:text-green-800 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Back to course details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

