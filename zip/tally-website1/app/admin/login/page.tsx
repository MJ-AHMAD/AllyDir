import Link from "next/link"
import { SimpleFooter } from "@/components/simple-footer"

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold flex items-center">
                <span className="mr-2">TRUSTED-ALLY</span>
              </Link>
            </div>
            <nav className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="hover:text-blue-200 transition-colors">
                Home
              </Link>
              <Link href="/contact" className="hover:text-blue-200 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center bg-gray-100 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-800 text-white py-6 px-8 text-center">
              <h1 className="text-2xl font-bold">Admin Login</h1>
              <p className="text-blue-100 mt-2">Access the Director General's Dashboard</p>
            </div>

            <div className="p-8">
              <div className="mb-6 text-center">
                <div className="inline-block rounded-full bg-blue-100 p-3 mb-4">
                  <i className="fas fa-user-shield text-blue-800 text-3xl"></i>
                </div>
                <p className="text-gray-600">Please enter your credentials to continue</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="admin@trusted-ally.org"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>

                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>

                <div>
                  <Link href="/admin">
                    <button
                      type="button"
                      className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                      Sign In
                    </button>
                  </Link>
                </div>
              </form>

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>Protected area. Unauthorized access is prohibited.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SimpleFooter />
    </div>
  )
}

