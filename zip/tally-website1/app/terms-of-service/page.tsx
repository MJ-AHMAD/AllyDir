export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-700 py-16">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-4 max-w-md mx-auto text-xl text-white">Guidelines for using our services</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="prose max-w-none">
              <p className="text-gray-500 mb-8">Last updated: March 20, 2025</p>

              <div className="mb-10 bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <p className="text-purple-700">
                  Welcome to Trusted Ally. These terms and conditions outline the rules and regulations for the use of
                  our website. By accessing this website, we assume you accept these terms and conditions in full.
                </p>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-700">1. Introduction</h2>
              <p>
                By accessing this website, we assume you accept these terms and conditions in full. Do not continue to
                use Trusted Ally's website if you do not accept all of the terms and conditions stated on this page.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-700">2. License</h2>
              <p>
                Unless otherwise stated, Trusted Ally and/or its licensors own the intellectual property rights for all
                material on this website. All intellectual property rights are reserved. You may view and/or print pages
                from the website for your own personal use subject to restrictions set in these terms and conditions.
              </p>

              <div className="bg-red-50 p-6 rounded-lg my-6 border border-red-100">
                <p className="font-medium text-red-800 mb-3">You must not:</p>
                <ul className="list-disc pl-6 space-y-2 text-red-700">
                  <li>Republish material from this website</li>
                  <li>Sell, rent or sub-license material from this website</li>
                  <li>Reproduce, duplicate or copy material from this website</li>
                  <li>
                    Redistribute content from Trusted Ally (unless content is specifically made for redistribution)
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-700">3. User Content</h2>
              <p>
                In these terms and conditions, "User Content" shall mean any audio, video, text, images or other
                material you choose to display on this website. By displaying your User Content, you grant Trusted Ally
                a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt,
                publish, translate and distribute it in any and all media.
              </p>
              <p className="mt-4">
                Your User Content must be your own and must not be infringing on any third party's rights. Trusted Ally
                reserves the right to remove any of your content from this website at any time without notice.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-600">4. No Warranties</h3>
                  <p className="text-gray-700">
                    This website is provided "as is," with all faults, and Trusted Ally makes no express or implied
                    representations or warranties, of any kind related to this website or the materials contained on
                    this website.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-600">5. Limitation of Liability</h3>
                  <p className="text-gray-700">
                    In no event shall Trusted Ally, nor any of its officers, directors and employees, be liable to you
                    for anything arising out of or in any way connected with your use of this website, whether such
                    liability is under contract, tort or otherwise.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-700">6. Indemnification</h2>
              <p>
                You hereby indemnify to the fullest extent Trusted Ally from and against any and all liabilities, costs,
                demands, causes of action, damages and expenses (including reasonable attorney's fees) arising out of or
                in any way related to your breach of any of the provisions of these Terms.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-700">7. Governing Law & Jurisdiction</h2>
              <p>
                These Terms will be governed by and construed in accordance with the laws, and you submit to the
                non-exclusive jurisdiction of the courts located for the resolution of any disputes.
              </p>

              <div className="bg-indigo-50 p-6 rounded-lg my-10 border border-indigo-100">
                <h3 className="text-xl font-semibold mb-3 text-indigo-700">Questions About Our Terms?</h3>
                <p className="mb-4">If you have any questions about these Terms of Service, please contact us at:</p>
                <a href="mailto:t-ally@outlook.com" className="text-indigo-600 hover:underline font-medium">
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
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 shadow-md transition-colors duration-300"
          >
            Back to Home
          </a>
        </div>
      </main>
    </div>
  )
}

