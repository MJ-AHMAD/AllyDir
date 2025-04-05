export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-md mx-auto text-xl text-white">How we protect and manage your information</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="prose max-w-none">
              <p className="text-gray-500 mb-8">Last updated: March 20, 2025</p>

              <div className="mb-10 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-blue-700">
                  At Trusted Ally, we respect your privacy and are committed to protecting your personal data. This
                  privacy policy will inform you about how we look after your personal data when you visit our website
                  and tell you about your privacy rights and how the law protects you.
                </p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-700">1. The Data We Collect About You</h2>
              <p>
                Personal data, or personal information, means any information about an individual from which that person
                can be identified. We may collect, use, store and transfer different kinds of personal data about you
                which we have grouped together as follows:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg my-6">
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <span className="font-medium text-gray-700">Identity Data</span> includes first name, last name,
                    username or similar identifier.
                  </li>
                  <li>
                    <span className="font-medium text-gray-700">Contact Data</span> includes email address and telephone
                    numbers.
                  </li>
                  <li>
                    <span className="font-medium text-gray-700">Technical Data</span> includes internet protocol (IP)
                    address, browser type and version, time zone setting and location, browser plug-in types and
                    versions, operating system and platform, and other technology on the devices you use to access this
                    website.
                  </li>
                  <li>
                    <span className="font-medium text-gray-700">Usage Data</span> includes information about how you use
                    our website, products and services.
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-700">2. How We Use Your Personal Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                data in the following circumstances:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg my-6">
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    Where we need to perform the contract we are about to enter into or have entered into with you.
                  </li>
                  <li>
                    Where it is necessary for our legitimate interests (or those of a third party) and your interests
                    and fundamental rights do not override those interests.
                  </li>
                  <li>Where we need to comply with a legal obligation.</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-700">3. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally
                lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to
                your personal data to those employees, agents, contractors and other third parties who have a business
                need to know.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-700">4. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we
                collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or
                reporting requirements.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-700">5. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-indigo-600">Request access</p>
                  <p className="text-sm text-gray-600">You can request copies of your personal data.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-indigo-600">Request correction</p>
                  <p className="text-sm text-gray-600">You can ask us to correct inaccurate personal data.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-indigo-600">Request erasure</p>
                  <p className="text-sm text-gray-600">You can ask us to delete your personal data.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-indigo-600">Object to processing</p>
                  <p className="text-sm text-gray-600">You can object to how we process your data.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-indigo-600">Request restriction</p>
                  <p className="text-sm text-gray-600">You can ask us to limit how we use your data.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-indigo-600">Request transfer</p>
                  <p className="text-sm text-gray-600">You can ask us to transfer your data to another organization.</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-700">6. Contact Us</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
              <div className="bg-indigo-50 p-6 rounded-lg my-6 border border-indigo-100">
                <p className="font-medium text-indigo-800">Email:</p>
                <a href="mailto:t-ally@outlook.com" className="text-indigo-600 hover:underline">
                  t-ally@outlook.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-md transition-colors duration-300"
          >
            Back to Home
          </a>
        </div>
      </main>
    </div>
  )
}

