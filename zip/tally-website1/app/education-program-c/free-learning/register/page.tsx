import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Register for Free Learning - Trusted Ally",
  description: "Register for our free learning programs and start your educational journey with Trusted Ally.",
}

export default function FreeLearnRegisterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Register for Free Learning</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="education" className="block text-sm font-medium text-gray-700">
              Education Level
            </label>
            <select
              id="education"
              name="education"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select your education level</option>
              <option value="high-school">High School</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
              <option value="postgraduate">Postgraduate</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="interests" className="block text-sm font-medium text-gray-700">
              Areas of Interest
            </label>
            <div className="mt-2 space-y-2">
              <div className="flex items-start">
                <input
                  id="programming"
                  name="interests"
                  type="checkbox"
                  value="programming"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="programming" className="ml-3 block text-sm text-gray-700">
                  Programming
                </label>
              </div>
              <div className="flex items-start">
                <input
                  id="web-development"
                  name="interests"
                  type="checkbox"
                  value="web-development"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="web-development" className="ml-3 block text-sm text-gray-700">
                  Web Development
                </label>
              </div>
              <div className="flex items-start">
                <input
                  id="data-science"
                  name="interests"
                  type="checkbox"
                  value="data-science"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="data-science" className="ml-3 block text-sm text-gray-700">
                  Data Science
                </label>
              </div>
              <div className="flex items-start">
                <input
                  id="mobile-development"
                  name="interests"
                  type="checkbox"
                  value="mobile-development"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="mobile-development" className="ml-3 block text-sm text-gray-700">
                  Mobile Development
                </label>
              </div>
              <div className="flex items-start">
                <input
                  id="other"
                  name="interests"
                  type="checkbox"
                  value="other"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="other" className="ml-3 block text-sm text-gray-700">
                  Other
                </label>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Why are you interested in our free learning program?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="flex items-start">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              required
            />
            <label htmlFor="terms" className="ml-3 block text-sm text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

