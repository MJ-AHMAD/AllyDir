import Link from "next/link"

export default function PowershellAutomationCoursePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">PowerShell Automation Course</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
        <p className="mb-4">
          This comprehensive course will teach you how to automate administrative tasks and system management using
          PowerShell. Learn to create scripts, manage Windows systems, and integrate with various Microsoft
          technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Duration</h3>
            <p>8 weeks (2 sessions per week)</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Skill Level</h3>
            <p>Beginner to Intermediate</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Prerequisites</h3>
            <p>Basic understanding of Windows OS and command line</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Certificate</h3>
            <p>Yes, upon completion</p>
          </div>
        </div>

        <Link
          href="/education-program-c/courses/powershell-automation/register"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Register Now
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>PowerShell fundamentals and syntax</li>
          <li>Creating and running scripts</li>
          <li>Working with variables, arrays, and objects</li>
          <li>Flow control and error handling</li>
          <li>Managing files, folders, and the registry</li>
          <li>Remote administration and WMI</li>
          <li>Active Directory management</li>
          <li>Azure and Microsoft 365 automation</li>
          <li>Creating custom modules and functions</li>
          <li>Best practices for PowerShell scripting</li>
        </ul>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Course Structure</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Week 1-2: PowerShell Basics</h3>
            <p>Introduction to PowerShell, command syntax, pipelines, and basic scripting concepts.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Week 3-4: Scripting Fundamentals</h3>
            <p>Variables, data types, operators, flow control, functions, and error handling.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Week 5-6: System Administration</h3>
            <p>Managing files, processes, services, registry, and remote administration.</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Week 7-8: Advanced Automation</h3>
            <p>Active Directory, Azure, Microsoft 365 integration, and creating reusable modules.</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Instructor</h2>
        <div className="flex items-start">
          <div className="w-20 h-20 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <h3 className="text-xl font-medium">John Smith</h3>
            <p className="text-gray-600 mb-2">Microsoft Certified Systems Engineer</p>
            <p>
              John has over 10 years of experience in Windows system administration and automation. He has helped
              numerous organizations implement PowerShell solutions to streamline their IT operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

