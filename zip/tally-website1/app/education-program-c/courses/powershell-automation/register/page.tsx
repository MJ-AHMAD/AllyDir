export default function PowershellAutomationRegisterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Register for PowerShell Automation Course</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                Highest Education Level *
              </label>
              <select
                id="education"
                name="education"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Education Level</option>
                <option value="high-school">High School</option>
                <option value="associate">Associate Degree</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="doctorate">Doctorate</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                IT Experience Level *
              </label>
              <select
                id="experience"
                name="experience"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Experience Level</option>
                <option value="none">No Experience</option>
                <option value="beginner">Beginner (0-1 years)</option>
                <option value="intermediate">Intermediate (1-3 years)</option>
                <option value="advanced">Advanced (3+ years)</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="background" className="block text-sm font-medium text-gray-700 mb-1">
              Technical Background (if any)
            </label>
            <textarea
              id="background"
              name="background"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Please describe your technical background, including any programming languages or tools you're familiar with."
            ></textarea>
          </div>

          <div>
            <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-1">
              Learning Goals *
            </label>
            <textarea
              id="goals"
              name="goals"
              rows={4}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What do you hope to achieve by taking this PowerShell Automation course?"
            ></textarea>
          </div>

          <div className="flex items-start">
            <input type="checkbox" id="terms" name="terms" required className="mt-1 mr-2" />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the{" "}
              <a href="/terms-of-service" className="text-blue-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>{" "}
              *
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Course Information</h2>
        <div className="space-y-3">
          <p>
            <strong>Course:</strong> PowerShell Automation
          </p>
          <p>
            <strong>Duration:</strong> 8 weeks
          </p>
          <p>
            <strong>Format:</strong> Online, self-paced with weekly live sessions
          </p>
          <p>
            <strong>Start Date:</strong> Enrollment ongoing, start anytime
          </p>
          <p>
            <strong>Fee:</strong> Free for eligible participants
          </p>
          <p className="text-sm text-gray-600 mt-4">
            After submitting your registration, you will receive a confirmation email with further instructions. If you
            have any questions, please contact us at{" "}
            <a href="mailto:education@trustedally.org" className="text-blue-600 hover:underline">
              education@trustedally.org
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

