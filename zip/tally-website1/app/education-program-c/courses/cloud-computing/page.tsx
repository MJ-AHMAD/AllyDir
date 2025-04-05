import Link from "next/link"

export default function CloudComputingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Computing Course</h1>
            <p className="text-xl mb-8">Master cloud technologies and build scalable infrastructure</p>
            <Link
              href="/education-program-c/courses/cloud-computing/register"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Course Overview</h2>
              <p className="text-gray-600 mb-6">
                Our comprehensive Cloud Computing course will equip you with the skills needed to design, deploy, and
                manage cloud infrastructure. Learn about major cloud platforms, virtualization, containerization, and
                cloud-native application development.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Duration</h3>
                  <p className="text-gray-700">12 weeks (24 sessions)</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Format</h3>
                  <p className="text-gray-700">Online with live instructor sessions</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Prerequisites</h3>
                  <p className="text-gray-700">Basic networking knowledge, familiarity with Linux</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Certification</h3>
                  <p className="text-gray-700">Trusted Ally Cloud Computing Certificate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Curriculum */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Course Curriculum</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="text-xl font-semibold text-gray-800">Module 1: Cloud Computing Fundamentals</h3>
                  <p className="text-gray-600 mt-2">
                    Introduction to cloud models (IaaS, PaaS, SaaS), cloud service providers, and cloud architecture
                    principles.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="text-xl font-semibold text-gray-800">Module 2: AWS Essentials</h3>
                  <p className="text-gray-600 mt-2">
                    Core AWS services, EC2, S3, IAM, VPC, and best practices for AWS deployments.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="text-xl font-semibold text-gray-800">Module 3: Microsoft Azure</h3>
                  <p className="text-gray-600 mt-2">
                    Azure virtual machines, storage, networking, and Azure Resource Manager.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="text-xl font-semibold text-gray-800">Module 4: Google Cloud Platform</h3>
                  <p className="text-gray-600 mt-2">GCP compute, storage, networking, and specialized services.</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="text-xl font-semibold text-gray-800">Module 5: Containerization with Docker</h3>
                  <p className="text-gray-600 mt-2">
                    Docker fundamentals, container orchestration, and Docker Compose.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="text-xl font-semibold text-gray-800">Module 6: Kubernetes</h3>
                  <p className="text-gray-600 mt-2">
                    Kubernetes architecture, pods, services, deployments, and scaling applications.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="text-xl font-semibold text-gray-800">Module 7: Cloud Security</h3>
                  <p className="text-gray-600 mt-2">
                    Security best practices, identity management, encryption, and compliance in the cloud.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="text-xl font-semibold text-gray-800">Module 8: Capstone Project</h3>
                  <p className="text-gray-600 mt-2">
                    Design and implement a complete cloud solution for a real-world scenario.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Instructors */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Your Instructors</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-600 text-2xl">RS</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Rahul Sharma</h3>
                    <p className="text-gray-600">AWS Certified Solutions Architect</p>
                    <p className="text-gray-500 text-sm mt-1">10+ years of cloud infrastructure experience</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-600 text-2xl">MA</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Mina Ahmed</h3>
                    <p className="text-gray-600">Google Cloud Certified Professional</p>
                    <p className="text-gray-500 text-sm mt-1">Kubernetes specialist with 8+ years experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration CTA */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl shadow-md overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Master Cloud Computing?</h2>
              <p className="text-white text-lg mb-6">
                Join our next cohort and transform your career with in-demand cloud skills
              </p>
              <Link
                href="/education-program-c/courses/cloud-computing/register"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full shadow-lg inline-block transition duration-300"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

