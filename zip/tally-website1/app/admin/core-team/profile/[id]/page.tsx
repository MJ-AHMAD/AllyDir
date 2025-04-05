"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { SimpleFooter } from "@/components/simple-footer"
import CoreTeamAuthCheck from "@/components/core-team-auth-check"
import coreTeamCredentials from "@/data/core-team-credentials.json"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface TeamMember {
  id: string
  name: string
  position: string
  email: string
  joinDate: string
  phone: string
  address: string
  education: string
  skills: string[]
}

interface TrainingModule {
  id: string
  title: string
  description: string
  status: "completed" | "in-progress" | "upcoming"
  completionDate?: string
  progress?: number
}

interface Agreement {
  id: string
  title: string
  signedDate: string
  expiryDate: string
  type: string
  status: "active" | "expired" | "pending"
}

interface Benefit {
  id: string
  title: string
  description: string
  value: string
  category: string
}

interface PerformanceRecord {
  id: string
  period: string
  rating: number
  highlights: string[]
  improvements: string[]
  reviewedBy: string
  reviewDate: string
}

export default function CoreTeamMemberProfile() {
  const params = useParams()
  const router = useRouter()
  const [member, setMember] = useState<TeamMember | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [trainingModules, setTrainingModules] = useState<TrainingModule[]>([])
  const [agreements, setAgreements] = useState<Agreement[]>([])
  const [benefits, setBenefits] = useState<Benefit[]>([])
  const [performanceRecords, setPerformanceRecords] = useState<PerformanceRecord[]>([])
  const [activeTab, setActiveTab] = useState("overview")
  const [workHours, setWorkHours] = useState({
    totalDays: 22,
    workedDays: 20,
    scheduledHours: 160,
    workedHours: 152,
    missedHours: 8,
    overtimeHours: 12,
  })

  useEffect(() => {
    // Get the current logged in user
    const userData = sessionStorage.getItem("coreTeamUser")
    if (userData) {
      setCurrentUser(JSON.parse(userData))
    }

    // Find the team member by ID
    const id = params.id as string
    const foundMember = coreTeamCredentials.users.find((user) => user.id === id)

    if (foundMember) {
      const { password, ...memberData } = foundMember
      setMember(memberData as TeamMember)

      // Generate sample training modules
      setTrainingModules(generateTrainingModules(id))

      // Generate sample agreements
      setAgreements(generateAgreements(id))

      // Generate sample benefits
      setBenefits(generateBenefits(id))

      // Generate sample performance records
      setPerformanceRecords(generatePerformanceRecords(id))
    } else {
      // Member not found, redirect to dashboard
      router.push("/admin/core-team/dashboard")
    }

    setLoading(false)
  }, [params.id, router])

  const handleLogout = () => {
    sessionStorage.removeItem("coreTeamUser")
    window.location.href = "/admin/core-team/login"
  }

  // Generate sample training modules based on role
  const generateTrainingModules = (id: string): TrainingModule[] => {
    const rolePrefix = id.split("-")[0]
    const baseModules = [
      {
        id: "tm-001",
        title: "TRUSTED-ALLY Orientation",
        description: "Introduction to organization's mission, vision, values, and operational procedures.",
        status: "completed" as const,
        completionDate: "2022-08-15",
        progress: 100,
      },
      {
        id: "tm-002",
        title: "Professional Communication",
        description: "Effective communication strategies for internal and external stakeholders.",
        status: "completed" as const,
        completionDate: "2022-09-20",
        progress: 100,
      },
      {
        id: "tm-003",
        title: "Time Management & Productivity",
        description: "Techniques for optimizing workflow and managing priorities effectively.",
        status: "in-progress" as const,
        progress: 75,
      },
      {
        id: "tm-004",
        title: "Leadership Development",
        description: "Building leadership skills and effective team management strategies.",
        status: "upcoming" as const,
        progress: 0,
      },
    ]

    // Role-specific modules
    const roleModules: Record<string, TrainingModule[]> = {
      PA: [
        {
          id: "tm-pa-001",
          title: "Executive Support Skills",
          description: "Advanced techniques for supporting executive leadership effectively.",
          status: "completed" as const,
          completionDate: "2022-10-15",
          progress: 100,
        },
        {
          id: "tm-pa-002",
          title: "Calendar Management Mastery",
          description: "Strategic scheduling and prioritization for executive calendars.",
          status: "in-progress" as const,
          progress: 60,
        },
        {
          id: "tm-pa-003",
          title: "Confidentiality and Information Security",
          description: "Protocols for handling sensitive information and maintaining confidentiality.",
          status: "upcoming" as const,
          progress: 0,
        },
      ],
      OM: [
        {
          id: "tm-om-001",
          title: "Operations Excellence",
          description: "Strategies for optimizing operational efficiency and effectiveness.",
          status: "completed" as const,
          completionDate: "2022-11-10",
          progress: 100,
        },
        {
          id: "tm-om-002",
          title: "Strategic Resource Allocation",
          description: "Techniques for optimal resource distribution and utilization.",
          status: "in-progress" as const,
          progress: 80,
        },
        {
          id: "tm-om-003",
          title: "Crisis Management",
          description: "Protocols for handling operational disruptions and emergencies.",
          status: "upcoming" as const,
          progress: 0,
        },
      ],
      FM: [
        {
          id: "tm-fm-001",
          title: "Financial Reporting Excellence",
          description: "Advanced techniques for comprehensive financial reporting.",
          status: "completed" as const,
          completionDate: "2022-09-25",
          progress: 100,
        },
        {
          id: "tm-fm-002",
          title: "Budget Optimization",
          description: "Strategies for effective budget planning and management.",
          status: "in-progress" as const,
          progress: 70,
        },
        {
          id: "tm-fm-003",
          title: "Financial Risk Management",
          description: "Identifying and mitigating financial risks in organizational operations.",
          status: "upcoming" as const,
          progress: 0,
        },
      ],
      CC: [
        {
          id: "tm-cc-001",
          title: "Strategic Communication Planning",
          description: "Developing comprehensive communication strategies for organizational goals.",
          status: "completed" as const,
          completionDate: "2022-10-05",
          progress: 100,
        },
        {
          id: "tm-cc-002",
          title: "Digital Media Management",
          description: "Leveraging digital platforms for effective organizational communication.",
          status: "in-progress" as const,
          progress: 85,
        },
        {
          id: "tm-cc-003",
          title: "Crisis Communication",
          description: "Managing communication during organizational challenges and crises.",
          status: "upcoming" as const,
          progress: 0,
        },
      ],
      TDM: [
        {
          id: "tm-tdm-001",
          title: "Instructional Design",
          description: "Creating effective learning experiences and training materials.",
          status: "completed" as const,
          completionDate: "2022-11-15",
          progress: 100,
        },
        {
          id: "tm-tdm-002",
          title: "Training Needs Assessment",
          description: "Identifying and analyzing organizational training requirements.",
          status: "in-progress" as const,
          progress: 90,
        },
        {
          id: "tm-tdm-003",
          title: "E-Learning Development",
          description: "Creating digital learning experiences and platforms.",
          status: "upcoming" as const,
          progress: 0,
        },
      ],
      IT: [
        {
          id: "tm-it-001",
          title: "Cybersecurity Fundamentals",
          description: "Essential security practices for organizational IT infrastructure.",
          status: "completed" as const,
          completionDate: "2022-09-10",
          progress: 100,
        },
        {
          id: "tm-it-002",
          title: "Network Administration",
          description: "Managing and optimizing organizational networks.",
          status: "in-progress" as const,
          progress: 75,
        },
        {
          id: "tm-it-003",
          title: "Cloud Infrastructure Management",
          description: "Deploying and managing cloud-based services and resources.",
          status: "upcoming" as const,
          progress: 0,
        },
      ],
      DRC: [
        {
          id: "tm-drc-001",
          title: "Community Engagement Strategies",
          description: "Building effective relationships with community stakeholders.",
          status: "completed" as const,
          completionDate: "2022-10-20",
          progress: 100,
        },
        {
          id: "tm-drc-002",
          title: "Field Operations Management",
          description: "Coordinating and optimizing district-level activities.",
          status: "in-progress" as const,
          progress: 65,
        },
        {
          id: "tm-drc-003",
          title: "Local Resource Mobilization",
          description: "Strategies for leveraging local resources for organizational goals.",
          status: "upcoming" as const,
          progress: 0,
        },
      ],
      PM: [
        {
          id: "tm-pm-001",
          title: "Project Planning and Execution",
          description: "Comprehensive strategies for successful project implementation.",
          status: "completed" as const,
          completionDate: "2022-11-05",
          progress: 100,
        },
        {
          id: "tm-pm-002",
          title: "Agile Project Management",
          description: "Implementing agile methodologies for flexible project execution.",
          status: "in-progress" as const,
          progress: 80,
        },
        {
          id: "tm-pm-003",
          title: "Project Risk Management",
          description: "Identifying and mitigating risks in project implementation.",
          status: "upcoming" as const,
          progress: 0,
        },
      ],
    }

    // Get role-specific modules based on ID prefix
    const specificModules = roleModules[rolePrefix] || []

    return [...baseModules, ...specificModules]
  }

  // Generate sample agreements
  const generateAgreements = (id: string): Agreement[] => {
    const joinYear = "2022" // Example join year
    return [
      {
        id: "agr-001",
        title: "Employment Contract",
        signedDate: `${joinYear}-01-15`,
        expiryDate: `${Number.parseInt(joinYear) + 3}-01-15`,
        type: "Employment",
        status: "active",
      },
      {
        id: "agr-002",
        title: "Confidentiality Agreement",
        signedDate: `${joinYear}-01-15`,
        expiryDate: `${Number.parseInt(joinYear) + 5}-01-15`,
        type: "Legal",
        status: "active",
      },
      {
        id: "agr-003",
        title: "Code of Conduct Acknowledgement",
        signedDate: `${joinYear}-01-15`,
        expiryDate: `${Number.parseInt(joinYear) + 1}-01-15`,
        type: "Policy",
        status: "active",
      },
      {
        id: "agr-004",
        title: "IT Usage Policy",
        signedDate: `${joinYear}-01-15`,
        expiryDate: `${Number.parseInt(joinYear) + 1}-01-15`,
        type: "Policy",
        status: "active",
      },
      {
        id: "agr-005",
        title: "Performance Expectations",
        signedDate: `${joinYear}-01-15`,
        expiryDate: `${Number.parseInt(joinYear) + 1}-01-15`,
        type: "Performance",
        status: "active",
      },
    ]
  }

  // Generate sample benefits
  const generateBenefits = (id: string): Benefit[] => {
    const standardBenefits = [
      {
        id: "ben-001",
        title: "Health Insurance",
        description: "Comprehensive medical, dental, and vision coverage",
        value: "Premium Plan",
        category: "Insurance",
      },
      {
        id: "ben-002",
        title: "Retirement Plan",
        description: "401(k) with employer matching up to 5%",
        value: "5% matching",
        category: "Financial",
      },
      {
        id: "ben-003",
        title: "Paid Time Off",
        description: "Annual leave, sick leave, and holidays",
        value: "25 days/year",
        category: "Leave",
      },
      {
        id: "ben-004",
        title: "Professional Development",
        description: "Budget for courses, certifications, and conferences",
        value: "৳50,000/year",
        category: "Development",
      },
      {
        id: "ben-005",
        title: "Transportation Allowance",
        description: "Monthly allowance for commuting expenses",
        value: "৳5,000/month",
        category: "Allowance",
      },
      {
        id: "ben-006",
        title: "Meal Allowance",
        description: "Daily meal subsidy",
        value: "৳300/day",
        category: "Allowance",
      },
      {
        id: "ben-007",
        title: "Mobile Phone Allowance",
        description: "Monthly allowance for mobile phone expenses",
        value: "৳2,000/month",
        category: "Allowance",
      },
      {
        id: "ben-008",
        title: "Performance Bonus",
        description: "Annual bonus based on performance evaluation",
        value: "Up to 2 months' salary",
        category: "Financial",
      },
    ]

    // Add PA-specific benefits for Shintiya Rahman
    if (id === "PA-MCB001") {
      return [
        ...standardBenefits,
        {
          id: "ben-pa-001",
          title: "Executive Assistant Bonus",
          description: "Special quarterly bonus for Personal Assistants to the Director General",
          value: "৳15,000/quarter",
          category: "Financial",
        },
        {
          id: "ben-pa-002",
          title: "Enhanced Communication Package",
          description: "Premium smartphone and data plan for 24/7 availability",
          value: "Latest Model + Unlimited Data",
          category: "Equipment",
        },
        {
          id: "ben-pa-003",
          title: "Executive Office Access",
          description: "Special access and privileges within the executive suite",
          value: "Full Access",
          category: "Workplace",
        },
        {
          id: "ben-pa-004",
          title: "Schedule Flexibility",
          description: "Additional flexibility for personal appointments to compensate for occasional overtime",
          value: "8 hours/month",
          category: "Work-Life Balance",
        },
        {
          id: "ben-pa-005",
          title: "Executive Assistant Training",
          description: "Specialized training programs for executive support professionals",
          value: "2 programs/year",
          category: "Development",
        },
      ]
    }

    return standardBenefits
  }

  // Generate sample performance records
  const generatePerformanceRecords = (id: string): PerformanceRecord[] => {
    return [
      {
        id: "perf-001",
        period: "January - June 2023",
        rating: 4.5,
        highlights: [
          "Consistently met all deadlines and deliverables",
          "Demonstrated exceptional problem-solving skills",
          "Contributed valuable ideas to team projects",
          "Maintained excellent communication with stakeholders",
        ],
        improvements: [
          "Further develop strategic planning skills",
          "Take more initiative in cross-departmental collaboration",
        ],
        reviewedBy: "MJ Ahmad, Director General",
        reviewDate: "July 15, 2023",
      },
      {
        id: "perf-002",
        period: "July - December 2022",
        rating: 4.2,
        highlights: [
          "Successfully completed all assigned projects",
          "Demonstrated strong teamwork and collaboration",
          "Received positive feedback from stakeholders",
          "Adapted well to changing priorities",
        ],
        improvements: [
          "Enhance time management for complex projects",
          "Develop more advanced technical skills relevant to role",
        ],
        reviewedBy: "MJ Ahmad, Director General",
        reviewDate: "January 10, 2023",
      },
      {
        id: "perf-003",
        period: "January - June 2022",
        rating: 4.0,
        highlights: [
          "Quickly adapted to organizational processes",
          "Demonstrated strong learning ability",
          "Established positive relationships with team members",
          "Completed onboarding training ahead of schedule",
        ],
        improvements: [
          "Develop deeper understanding of organizational structure",
          "Build more confidence in decision-making",
        ],
        reviewedBy: "MJ Ahmad, Director General",
        reviewDate: "July 10, 2022",
      },
    ]
  }

  // Get role details based on ID prefix
  const getRoleDetails = (id: string) => {
    const prefix = id.split("-")[0]

    switch (prefix) {
      case "PA":
        return {
          title: "Personal Assistant",
          description:
            "Provides direct support to the Director General, managing schedules, communications, and administrative tasks.",
          responsibilities: [
            "Schedule management and meeting coordination",
            "Communication handling and documentation",
            "Administrative support and task management",
            "Liaison between DG and other team members",
            "Travel arrangements and logistics coordination",
            "Preparation of meeting materials and presentations",
            "Maintaining confidential records and information",
            "Prioritizing and managing multiple tasks simultaneously",
          ],
          qualifications: [
            "Excellent time management and organizational skills",
            "Strong communication and interpersonal abilities",
            "Adaptability and problem-solving skills",
            "Discretion and confidentiality",
            "Proficiency in MS Office and digital communication tools",
            "Ability to work under pressure and meet deadlines",
            "Attention to detail and accuracy",
            "Bachelor's degree in relevant field",
          ],
          shift:
            id === "PA-MCB001"
              ? "Day Shift (8:00 AM - 4:00 PM)"
              : id === "PA-MCB002"
                ? "Evening Shift (4:00 PM - 12:00 AM)"
                : "Night Shift (12:00 AM - 8:00 AM)",
        }
      case "OM":
        return {
          title: "Operations Manager",
          description:
            "Oversees daily operations and ensures efficient implementation of all activities and initiatives.",
          responsibilities: [
            "Daily operations supervision and coordination",
            "Team coordination and workflow management",
            "Strategy implementation and operational planning",
            "Resource allocation and optimization",
            "Performance monitoring and evaluation",
            "Process improvement and efficiency enhancement",
            "Operational risk management and mitigation",
            "Cross-departmental coordination and collaboration",
          ],
          qualifications: [
            "Strong leadership and management skills",
            "Operational expertise and strategic thinking",
            "Excellent multitasking and prioritization abilities",
            "Decision-making and problem-solving capabilities",
            "Experience in operational planning and execution",
            "Strong analytical and reporting skills",
            "Team building and staff development abilities",
            "Master's degree in Business Administration or related field",
          ],
        }
      case "FM":
        return {
          title: "Finance Manager",
          description:
            "Manages all financial aspects of the organization, including budgeting, reporting, and financial planning.",
          responsibilities: [
            "Budget preparation and management",
            "Financial tracking and reporting",
            "Expense management and approval",
            "Financial planning and forecasting",
            "Cash flow management and monitoring",
            "Financial compliance and risk management",
            "Audit preparation and coordination",
            "Financial analysis and strategic recommendations",
          ],
          qualifications: [
            "Strong accounting knowledge and financial expertise",
            "Proficiency in financial tools and software",
            "Analytical skills and attention to detail",
            "Integrity and ethical financial management",
            "Experience in budget development and management",
            "Knowledge of financial regulations and compliance",
            "Strategic financial planning abilities",
            "Master's degree in Finance, Accounting, or related field",
          ],
        }
      case "CC":
        return {
          title: "Communication Coordinator",
          description:
            "Manages internal and external communications, ensuring clear and consistent messaging across all channels.",
          responsibilities: [
            "Public relations and media management",
            "Internal and external communication coordination",
            "Social media and online presence management",
            "Content creation and messaging consistency",
            "Communication strategy development and implementation",
            "Stakeholder engagement and relationship building",
            "Crisis communication planning and execution",
            "Brand management and consistency",
          ],
          qualifications: [
            "Excellent writing and communication skills",
            "Creativity and strategic thinking",
            "Public relations experience",
            "Digital media and content management expertise",
            "Experience in strategic communication planning",
            "Knowledge of multiple communication channels",
            "Crisis communication experience",
            "Master's degree in Communications, Public Relations, or related field",
          ],
        }
      case "TDM":
        return {
          title: "Training Development Manager",
          description:
            "Develops and implements training programs to enhance skills and capabilities across the organization.",
          responsibilities: [
            "Training program creation and implementation",
            "Workshop and seminar organization",
            "Employee development and skill enhancement",
            "Training materials and resources development",
            "Training needs assessment and analysis",
            "Learning effectiveness evaluation",
            "Curriculum design and development",
            "Training budget management and optimization",
          ],
          qualifications: [
            "Instructional design and curriculum development skills",
            "Training and facilitation experience",
            "Strong organizational and planning abilities",
            "Assessment and evaluation expertise",
            "Experience in adult learning methodologies",
            "E-learning and digital training expertise",
            "Strong presentation and communication skills",
            "Master's degree in Education, Training, or related field",
          ],
        }
      case "IT":
        return {
          title: "IT Support Member",
          description:
            "Provides technical support and ensures the smooth operation of all IT systems and infrastructure.",
          responsibilities: [
            "Technical support and troubleshooting",
            "System maintenance and updates",
            "Cybersecurity implementation and monitoring",
            "IT infrastructure management",
            "Hardware and software installation and configuration",
            "User account management and access control",
            "Network monitoring and optimization",
            "IT documentation and knowledge base maintenance",
          ],
          qualifications: [
            "Technical expertise in relevant systems",
            "Problem-solving and analytical skills",
            "IT infrastructure and network knowledge",
            "Security awareness and best practices",
            "Experience with hardware and software troubleshooting",
            "Knowledge of network administration",
            "Customer service orientation",
            "Bachelor's degree in Computer Science, IT, or related field",
          ],
        }
      case "DRC":
        return {
          title: "District Coordinator",
          description:
            "Coordinates activities and initiatives at the district level, ensuring effective implementation and monitoring.",
          responsibilities: [
            "District-level coordination and management",
            "Local initiative monitoring and reporting",
            "Stakeholder engagement and relationship building",
            "Field operations and logistics coordination",
            "Community outreach and engagement",
            "Local resource mobilization and management",
            "Implementation of organizational strategies at district level",
            "Reporting on district activities and outcomes",
          ],
          qualifications: [
            "Leadership and coordination skills",
            "Strong communication and interpersonal abilities",
            "Understanding of local contexts and challenges",
            "Field operations and logistics experience",
            "Community engagement experience",
            "Project implementation expertise",
            "Reporting and documentation skills",
            "Bachelor's degree in relevant field",
          ],
        }
      case "PM":
        return {
          title: "Project Manager",
          description:
            "Manages projects from inception to completion, ensuring they meet objectives, timelines, and quality standards.",
          responsibilities: [
            "Project planning and scope definition",
            "Execution oversight and coordination",
            "Timeline and milestone management",
            "Resource allocation and budget management",
            "Stakeholder communication and expectation management",
            "Risk identification and mitigation",
            "Quality assurance and control",
            "Project documentation and reporting",
          ],
          qualifications: [
            "Project management expertise and certification",
            "Leadership and team management skills",
            "Planning and execution capabilities",
            "Risk management and problem-solving abilities",
            "Experience in project lifecycle management",
            "Budgeting and resource allocation expertise",
            "Strong communication and stakeholder management skills",
            "Bachelor's or Master's degree in Project Management or related field",
          ],
        }
      default:
        return {
          title: "Team Member",
          description: "Supports the CoreTeam in achieving organizational objectives.",
          responsibilities: ["Various responsibilities based on role"],
          qualifications: ["Various qualifications based on role"],
        }
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-800"></div>
      </div>
    )
  }

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Member Not Found</h2>
          <p className="mt-2 text-gray-600">The team member you're looking for doesn't exist.</p>
          <Link
            href="/admin/core-team/dashboard"
            className="mt-4 inline-block bg-blue-800 text-white px-4 py-2 rounded"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  const roleDetails = getRoleDetails(member.id)

  // Check if current user is authorized to view this profile
  const isAuthorized = currentUser && (currentUser.id === member.id || currentUser.position.includes("Director"))

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Access Denied</h2>
          <p className="mt-2 text-gray-600">You do not have permission to view this profile.</p>
          <Link
            href="/admin/core-team/dashboard"
            className="mt-4 inline-block bg-blue-800 text-white px-4 py-2 rounded"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <CoreTeamAuthCheck>
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
              <nav className="flex flex-wrap justify-center gap-4 items-center">
                <Link href="/admin/core-team/dashboard" className="hover:text-blue-200 transition-colors">
                  Dashboard
                </Link>
                <Link href="/admin" className="hover:text-blue-200 transition-colors">
                  Admin
                </Link>
                {currentUser && (
                  <div className="flex items-center ml-4">
                    <span className="mr-2">{currentUser.name}</span>
                    <button
                      onClick={handleLogout}
                      className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 px-3 rounded transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow bg-gray-50">
          {/* Profile Header */}
          <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-5xl mx-auto">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
                  {member.id === "PA-MCB001" ? (
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/111.png"
                      alt={member.name}
                      width={192}
                      height={192}
                      className="object-cover"
                    />
                  ) : (
                    <Image
                      src={`/placeholder.svg?height=192&width=192&text=${member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}`}
                      alt={member.name}
                      width={192}
                      height={192}
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="text-center md:text-left">
                  <div className="inline-block bg-blue-700 px-3 py-1 rounded-full text-sm mb-2">ID: {member.id}</div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{member.name}</h1>
                  <h2 className="text-xl md:text-2xl text-blue-200 mb-1">{roleDetails.title}</h2>
                  {member.id === "PA-MCB001" && (
                    <h3 className="text-md text-blue-200 mb-4">Personal Assistant (Day Shift)</h3>
                  )}
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div className="bg-blue-800 bg-opacity-50 px-4 py-2 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {member.email}
                    </div>
                    <div className="bg-blue-800 bg-opacity-50 px-4 py-2 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {member.phone}
                    </div>
                    {roleDetails.shift && (
                      <div className="bg-blue-800 bg-opacity-50 px-4 py-2 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 inline-block mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {roleDetails.shift}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Profile Tabs */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
                    <TabsTrigger value="training">Training</TabsTrigger>
                    <TabsTrigger value="agreements">Agreements</TabsTrigger>
                    <TabsTrigger value="benefits">Benefits</TabsTrigger>
                    <TabsTrigger value="performance">Performance</TabsTrigger>
                    {member.id === "PA-MCB001" && <TabsTrigger value="rules">Rules</TabsTrigger>}
                  </TabsList>

                  {/* Overview Tab */}
                  <TabsContent value="overview" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>Basic details and contact information</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3 flex-shrink-0">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">Email</p>
                                  <p>{member.email}</p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3 flex-shrink-0">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">Phone</p>
                                  <p>{member.phone}</p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3 flex-shrink-0">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">Address</p>
                                  <p>{member.address}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Professional Details</h3>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3 flex-shrink-0">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">Position</p>
                                  <p>{member.position}</p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3 flex-shrink-0">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">Join Date</p>
                                  <p>
                                    {new Date(member.joinDate).toLocaleDateString("en-US", {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    })}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3 flex-shrink-0">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-500">Education</p>
                                  <p>{member.education}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Work Hours Section - Only for Shintiya Rahman */}
                    {member.id === "PA-MCB001" && (
                      <Card>
                        <CardHeader>
                          <CardTitle>Work Hours & Schedule</CardTitle>
                          <CardDescription>Current month work hours tracking</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                              <div className="text-3xl font-bold text-blue-800 mb-2">
                                {workHours.workedDays}/{workHours.totalDays}
                              </div>
                              <div className="text-blue-600">Days Worked This Month</div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                              <div className="text-3xl font-bold text-green-800 mb-2">{workHours.workedHours}</div>
                              <div className="text-green-600">Hours Completed</div>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-center">
                              <div className="text-3xl font-bold text-yellow-800 mb-2">{workHours.overtimeHours}</div>
                              <div className="text-yellow-600">Overtime Hours</div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium text-gray-700 mb-2">Scheduled Hours</h4>
                              <Progress
                                value={(workHours.workedHours / workHours.scheduledHours) * 100}
                                className="h-4"
                              />
                              <div className="flex justify-between text-sm mt-1">
                                <span>Completed: {workHours.workedHours} hours</span>
                                <span>Target: {workHours.scheduledHours} hours</span>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-medium text-gray-700 mb-2">Attendance Rate</h4>
                              <Progress value={(workHours.workedDays / workHours.totalDays) * 100} className="h-4" />
                              <div className="flex justify-between text-sm mt-1">
                                <span>Present: {workHours.workedDays} days</span>
                                <span>Total: {workHours.totalDays} days</span>
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                              <h4 className="font-medium text-gray-700 mb-2">Schedule Notes</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start">
                                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                                  <span>Missed Hours: {workHours.missedHours} hours (due to personal emergency)</span>
                                </div>
                                <div className="flex items-start">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></div>
                                  <span>Overtime Hours: {workHours.overtimeHours} hours (due to high workload)</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Daily Responsibilities Section - Only for Shintiya Rahman */}
                    {member.id === "PA-MCB001" && (
                      <Card>
                        <CardHeader>
                          <CardTitle>Daily Responsibilities</CardTitle>
                          <CardDescription>Task tracker and important links</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-semibold mb-3">Morning Tasks (8:00 AM - 10:00 AM)</h3>
                              <div className="space-y-2">
                                <div className="flex items-center">
                                  <input type="checkbox" id="task1" className="h-4 w-4 text-blue-600 mr-2" />
                                  <label htmlFor="task1">Review Director General's email and calendar</label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="task2" className="h-4 w-4 text-blue-600 mr-2" />
                                  <label htmlFor="task2">Prepare daily briefing documents</label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="task3" className="h-4 w-4 text-blue-600 mr-2" />
                                  <label htmlFor="task3">Coordinate morning meetings and prepare meeting rooms</label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="task4" className="h-4 w-4 text-blue-600 mr-2" />
                                  <label htmlFor="task4">Follow up on pending action items from previous day</label>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-lg font-semibold mb-3">Midday Tasks (10:00 AM - 2:00 PM)</h3>
                              <div className="space-y-2">
                                <div className="flex items-center">
                                  <input type="checkbox" id="task5" className="h-4 w-4 text-blue-600 mr-2" />
                                  <label htmlFor="task5">Manage incoming communications and prioritize responses</label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="task6" className="h-4 w-4 text-blue-600 mr-2" />
                                  <label htmlFor="task6">Coordinate with other departments on DG's behalf</label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="task7" className="h-4 w-4 text-blue-600 mr-2" />
                                  <label htmlFor="task7">Prepare and organize documents for afternoon meetings</label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="task8" className="h-4 w-4 text-blue-600 mr-2" />
                                  <label htmlFor="task8">Manage lunch arrangements and break schedules</label>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-lg font-semibold mb-3">Afternoon Tasks (2:00 PM - 4:00 PM)</h3>
                              <div className="space-y-2">
                                <div className="flex items-center">
                                  <input type="checkbox" id="task9" className="h-4 w-4 text-blue-600 mr-2" />
                                  <label htmlFor="task9">Prepare end-of-day summary for Director General</label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="task10" className="h-4 w-4 text-blue-600 mr-2" />
                                  <label htmlFor="task10">Organize next day's schedule and send reminders</label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="task11" className="h-4 w-4 text-blue-600 mr-2" />
                                  <label htmlFor="task11">Handover pending tasks to evening shift PA</label>
                                </div>
                                <div className="flex items-center">
                                  <input type="checkbox" id="task12" className="h-4 w-4 text-blue-600 mr-2" />
                                  <label htmlFor="task12">Complete daily administrative documentation</label>
                                </div>
                              </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg">
                              <h3 className="text-lg font-semibold mb-3">Important Work Links</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <a
                                  href="/admin"
                                  className="bg-white p-3 rounded-lg border border-blue-200 flex items-center hover:bg-blue-100 transition-colors"
                                >
                                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                      />
                                    </svg>
                                  </div>
                                  <span>Admin Dashboard</span>
                                </a>
                                <a
                                  href="/admin/management"
                                  className="bg-white p-3 rounded-lg border border-blue-200 flex items-center hover:bg-blue-100 transition-colors"
                                >
                                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                      />
                                    </svg>
                                  </div>
                                  <span>Management System</span>
                                </a>
                                <a
                                  href="/admin/management/board"
                                  className="bg-white p-3 rounded-lg border border-blue-200 flex items-center hover:bg-blue-100 transition-colors"
                                >
                                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                      />
                                    </svg>
                                  </div>
                                  <span>Board of Directors</span>
                                </a>
                                <a
                                  href="/admin/management/team"
                                  className="bg-white p-3 rounded-lg border border-blue-200 flex items-center hover:bg-blue-100 transition-colors"
                                >
                                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                      />
                                    </svg>
                                  </div>
                                  <span>Team Structure</span>
                                </a>
                                <a
                                  href="https://calendar.google.com"
                                  className="bg-white p-3 rounded-lg border border-blue-200 flex items-center hover:bg-blue-100 transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                      />
                                    </svg>
                                  </div>
                                  <span>Director General's Calendar</span>
                                </a>
                                <a
                                  href="https://mail.google.com"
                                  className="bg-white p-3 rounded-lg border border-blue-200 flex items-center hover:bg-blue-100 transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                      />
                                    </svg>
                                  </div>
                                  <span>Email System</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Director's Statement - Only for Shintiya Rahman */}
                    {member.id === "PA-MCB001" && (
                      <Card>
                        <CardHeader>
                          <CardTitle>Director General's Statement</CardTitle>
                          <CardDescription>Special recognition from MJ Ahmad</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                            <div className="flex items-start">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-blue-800 mr-4 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                />
                              </svg>
                              <div>
                                <p className="text-gray-700 italic mb-4">
                                  "Shintiya Rahman has proven to be an exceptional Personal Assistant, demonstrating
                                  remarkable organizational skills, attention to detail, and dedication to her role. Her
                                  ability to anticipate needs, manage complex schedules, and handle sensitive
                                  information with the utmost professionalism has been invaluable to the efficient
                                  operation of our executive office. Her proactive approach and commitment to excellence
                                  set a high standard for all team members."
                                </p>
                                <div className="font-bold text-blue-800">MJ Ahmad</div>
                                <div className="text-sm text-gray-600">Director General, TRUSTED-ALLY</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* CoreTeam Overview - Only for Shintiya Rahman */}
                    {member.id === "PA-MCB001" && (
                      <Card>
                        <CardHeader>
                          <CardTitle>CoreTeam Overview</CardTitle>
                          <CardDescription>Key positions and responsibilities</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                              <h4 className="font-bold text-blue-800 mb-2">Operations Manager (OM)</h4>
                              <p className="text-gray-600 mb-2">
                                Oversees daily operations and ensures efficient implementation of all activities and
                                initiatives.
                              </p>
                              <div className="text-sm text-gray-500">Current: Rafiqul Islam</div>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                              <h4 className="font-bold text-blue-800 mb-2">Finance Manager (FM)</h4>
                              <p className="text-gray-600 mb-2">
                                Manages all financial aspects of the organization, including budgeting, reporting, and
                                financial planning.
                              </p>
                              <div className="text-sm text-gray-500">Current: Nusrat Jahan</div>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                              <h4 className="font-bold text-blue-800 mb-2">Communication Coordinator (CC)</h4>
                              <p className="text-gray-600 mb-2">
                                Manages internal and external communications, ensuring clear and consistent messaging.
                              </p>
                              <div className="text-sm text-gray-500">Current: Imran Hossain</div>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                              <h4 className="font-bold text-blue-800 mb-2">Training Development Manager (TDM)</h4>
                              <p className="text-gray-600 mb-2">
                                Develops and implements training programs to enhance skills and capabilities.
                              </p>
                              <div className="text-sm text-gray-500">Current: Sabrina Khan</div>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                              <h4 className="font-bold text-blue-800 mb-2">IT Support Member (IT)</h4>
                              <p className="text-gray-600 mb-2">
                                Provides technical support and ensures the smooth operation of all IT systems.
                              </p>
                              <div className="text-sm text-gray-500">Current: Mahfuz Rahman</div>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                              <h4 className="font-bold text-blue-800 mb-2">District Coordinator (DRC)</h4>
                              <p className="text-gray-600 mb-2">
                                Coordinates activities and initiatives at the district level, ensuring effective
                                implementation.
                              </p>
                              <div className="text-sm text-gray-500">Current: Farzana Akter</div>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                              <h4 className="font-bold text-blue-800 mb-2">Project Manager (PM)</h4>
                              <p className="text-gray-600 mb-2">
                                Manages projects from inception to completion, ensuring they meet objectives and
                                timelines.
                              </p>
                              <div className="text-sm text-gray-500">Current: Tanvir Ahmed</div>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-gray-200">
                              <h4 className="font-bold text-blue-800 mb-2">Personal Assistants (PA)</h4>
                              <p className="text-gray-600 mb-2">
                                Provide direct support to the Director General, managing schedules and communications.
                              </p>
                              <div className="text-sm text-gray-500">
                                Day: Shintiya Rahman | Evening: Farhan Ahmed | Night: Tasnim Akter
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Skill Development Section - Only for Shintiya Rahman */}
                    {member.id === "PA-MCB001" && (
                      <Card>
                        <CardHeader>
                          <CardTitle>Skill Development Plan</CardTitle>
                          <CardDescription>Targeted professional growth opportunities</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-4">
                              <h3 className="text-lg font-semibold text-blue-800 mb-3">Core Competency Development</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-bold mb-2">Executive Support Skills</h4>
                                  <ul className="space-y-2">
                                    <li className="flex items-start">
                                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                      <div>
                                        <span className="font-medium">Executive Calendar Management Mastery</span>
                                        <p className="text-sm text-gray-600">
                                          Advanced course on strategic scheduling and prioritization
                                        </p>
                                        <p className="text-sm text-green-600">Status: Enrolled, starts June 15</p>
                                      </div>
                                    </li>
                                    <li className="flex items-start">
                                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                      <div>
                                        <span className="font-medium">Professional Executive Correspondence</span>
                                        <p className="text-sm text-gray-600">
                                          Techniques for crafting effective executive communications
                                        </p>
                                        <p className="text-sm text-gray-600">Status: Recommended for Q3</p>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-bold mb-2">Administrative Excellence</h4>
                                  <ul className="space-y-2">
                                    <li className="flex items-start">
                                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                      <div>
                                        <span className="font-medium">Advanced Document Management</span>
                                        <p className="text-sm text-gray-600">
                                          Digital filing systems and document retrieval optimization
                                        </p>
                                        <p className="text-sm text-blue-600">Status: Completed, April 2023</p>
                                      </div>
                                    </li>
                                    <li className="flex items-start">
                                      <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                      <div>
                                        <span className="font-medium">Meeting Facilitation Techniques</span>
                                        <p className="text-sm text-gray-600">
                                          Methods for ensuring productive and effective meetings
                                        </p>
                                        <p className="text-sm text-gray-600">Status: Scheduled for August 2023</p>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="mb-6">
                              <h3 className="text-lg font-semibold mb-3">Specialized Training Opportunities</h3>
                              <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                  <div className="flex flex-col md:flex-row justify-between mb-2">
                                    <h4 className="font-bold text-purple-800">
                                      Executive Assistant Certification Program
                                    </h4>
                                    <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full self-start">
                                      High Priority
                                    </div>
                                  </div>
                                  <p className="text-gray-600 mb-2">
                                    Comprehensive certification program covering all aspects of executive assistance,
                                    including confidentiality, communication, and executive support.
                                  </p>
                                  <div className="flex justify-between text-sm">
                                    <span>Duration: 6 months</span>
                                    <span>Recommended Timeline: Q4 2023</span>
                                  </div>
                                </div>

                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                  <div className="flex flex-col md:flex-row justify-between mb-2">
                                    <h4 className="font-bold text-blue-800">Crisis Management for Executive Support</h4>
                                    <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full self-start">
                                      Medium Priority
                                    </div>
                                  </div>
                                  <p className="text-gray-600 mb-2">
                                    Specialized training on supporting executives during organizational crises,
                                    including communication coordination and resource management.
                                  </p>
                                  <div className="flex justify-between text-sm">
                                    <span>Duration: 2 weeks</span>
                                    <span>Recommended Timeline: Q3 2023</span>
                                  </div>
                                </div>

                                <div className="bg-white p-4 rounded-lg border border-gray-200">
                                  <div className="flex flex-col md:flex-row justify-between mb-2">
                                    <h4 className="font-bold text-green-800">
                                      Advanced Microsoft Office for Executive Assistants
                                    </h4>
                                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full self-start">
                                      Ongoing
                                    </div>
                                  </div>
                                  <p className="text-gray-600 mb-2">
                                    Advanced techniques in Outlook, Word, Excel, and PowerPoint specifically designed
                                    for executive support professionals.
                                  </p>
                                  <div className="flex justify-between text-sm">
                                    <span>Duration: Self-paced</span>
                                    <span>Status: 65% Complete</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-lg font-semibold mb-3">Mentorship & Networking</h3>
                              <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <p className="text-gray-700 mb-4">
                                  Beyond formal training, the following developmental opportunities are recommended:
                                </p>
                                <ul className="space-y-3">
                                  <li className="flex items-start">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3 flex-shrink-0">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                      </svg>
                                    </div>
                                    <div>
                                      <h4 className="font-medium">Executive Assistant Mentorship Program</h4>
                                      <p className="text-sm text-gray-600">
                                        Connect with experienced EAs from partner organizations for monthly mentoring
                                        sessions.
                                      </p>
                                    </div>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3 flex-shrink-0">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                      </svg>
                                    </div>
                                    <div>
                                      <h4 className="font-medium">Professional Association Membership</h4>
                                      <p className="text-sm text-gray-600">
                                        Join the International Association of Administrative Professionals for
                                        networking and resources.
                                      </p>
                                    </div>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3 flex-shrink-0">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        />
                                      </svg>
                                    </div>
                                    <div>
                                      <h4 className="font-medium">Executive Support Resources</h4>
                                      <p className="text-sm text-gray-600">
                                        Access to premium EA resources including publications, online courses, and
                                        webinars.
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </TabsContent>

                  {/* Responsibilities Tab */}
                  <TabsContent value="responsibilities" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Role Responsibilities</CardTitle>
                        <CardDescription>Detailed breakdown of duties and expectations</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-6">{roleDetails.description}</p>

                        <h3 className="text-lg font-semibold mb-4">Primary Responsibilities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          {roleDetails.responsibilities.map((responsibility, index) => (
                            <div key={index} className="flex">
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-4">
                                <span className="font-bold">{index + 1}</span>
                              </div>
                              <div>
                                <p className="text-gray-700">{responsibility}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <h3 className="text-lg font-semibold mb-4">Reporting Structure</h3>
                        <div className="bg-blue-50 p-4 rounded-lg mb-8">
                          <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center text-white text-xl font-bold">
                              DG
                            </div>
                            <div className="flex-grow">
                              <h4 className="font-bold">Reports To</h4>
                              <p>MJ Ahmad, Director General</p>
                              <p className="text-sm text-gray-600">Direct reporting line for all matters</p>
                            </div>
                          </div>

                          {member.id.startsWith("PA") && (
                            <div className="flex flex-col md:flex-row items-center gap-4">
                              <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 text-xl font-bold">
                                OM
                              </div>
                              <div className="flex-grow">
                                <h4 className="font-bold">Secondary Reporting</h4>
                                <p>Operations Manager</p>
                                <p className="text-sm text-gray-600">For operational and administrative matters</p>
                              </div>
                            </div>
                          )}
                        </div>

                        <h3 className="text-lg font-semibold mb-4">Performance Expectations</h3>
                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h4 className="font-bold text-blue-800 mb-2">Quality of Work</h4>
                            <p>
                              Consistently deliver high-quality work that meets or exceeds established standards.
                              Attention to detail and accuracy in all tasks.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h4 className="font-bold text-blue-800 mb-2">Timeliness</h4>
                            <p>
                              Complete assigned tasks and projects within established deadlines. Proactive communication
                              if delays are anticipated.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h4 className="font-bold text-blue-800 mb-2">Communication</h4>
                            <p>
                              Maintain clear, professional, and timely communication with all stakeholders. Regular
                              updates on progress and challenges.
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h4 className="font-bold text-blue-800 mb-2">Initiative</h4>
                            <p>
                              Demonstrate proactive problem-solving and initiative in identifying and addressing
                              challenges. Suggest improvements to existing processes.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Training Tab */}
                  <TabsContent value="training" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Training & Development</CardTitle>
                        <CardDescription>Skill enhancement and professional growth opportunities</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold mb-4">Current Training Progress</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                              <div className="text-green-600 text-3xl font-bold mb-2">
                                {trainingModules.filter((m) => m.status === "completed").length}
                              </div>
                              <div className="text-green-800">Completed Modules</div>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                              <div className="text-yellow-600 text-3xl font-bold mb-2">
                                {trainingModules.filter((m) => m.status === "in-progress").length}
                              </div>
                              <div className="text-yellow-800">In Progress</div>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                              <div className="text-blue-600 text-3xl font-bold mb-2">
                                {trainingModules.filter((m) => m.status === "upcoming").length}
                              </div>
                              <div className="text-blue-800">Upcoming</div>
                            </div>
                          </div>
                        </div>

                        <div className="mb-8">
                          <h3 className="text-lg font-semibold mb-4">Training Modules</h3>

                          {/* Completed Modules */}
                          <div className="mb-6">
                            <h4 className="font-medium text-gray-700 mb-3">Completed</h4>
                            {trainingModules
                              .filter((module) => module.status === "completed")
                              .map((module) => (
                                <div key={module.id} className="bg-white p-4 rounded-lg border border-gray-200 mb-3">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h5 className="font-bold text-green-700">{module.title}</h5>
                                      <p className="text-gray-600 text-sm mb-2">{module.description}</p>
                                      <div className="text-xs text-gray-500">
                                        Completed on: {new Date(module.completionDate || "").toLocaleDateString()}
                                      </div>
                                    </div>
                                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                      Completed
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>

                          {/* In Progress Modules */}
                          <div className="mb-6">
                            <h4 className="font-medium text-gray-700 mb-3">In Progress</h4>
                            {trainingModules
                              .filter((module) => module.status === "in-progress")
                              .map((module) => (
                                <div key={module.id} className="bg-white p-4 rounded-lg border border-gray-200 mb-3">
                                  <div>
                                    <div className="flex justify-between items-start mb-2">
                                      <div>
                                        <h5 className="font-bold text-yellow-700">{module.title}</h5>
                                        <p className="text-gray-600 text-sm">{module.description}</p>
                                      </div>
                                      <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                                        In Progress
                                      </div>
                                    </div>
                                    <div className="mt-2">
                                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                                        <span>Progress</span>
                                        <span>{module.progress}%</span>
                                      </div>
                                      <Progress value={module.progress} className="h-2" />
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>

                          {/* Upcoming Modules */}
                          <div>
                            <h4 className="font-medium text-gray-700 mb-3">Upcoming</h4>
                            {trainingModules
                              .filter((module) => module.status === "upcoming")
                              .map((module) => (
                                <div key={module.id} className="bg-white p-4 rounded-lg border border-gray-200 mb-3">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h5 className="font-bold text-blue-700">{module.title}</h5>
                                      <p className="text-gray-600 text-sm">{module.description}</p>
                                    </div>
                                    <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                      Upcoming
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">Development Plan</h3>
                          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                            <h4 className="font-bold text-blue-800 mb-3">Professional Development Goals</h4>
                            <div className="space-y-4">
                              <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3 flex-shrink-0">
                                  <span className="font-bold">1</span>
                                </div>
                                <div>
                                  <h5 className="font-medium">Enhance Leadership Skills</h5>
                                  <p className="text-gray-600">
                                    Develop advanced leadership capabilities through targeted training and practical
                                    experience.
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3 flex-shrink-0">
                                  <span className="font-bold">2</span>
                                </div>
                                <div>
                                  <h5 className="font-medium">Technical Skill Advancement</h5>
                                  <p className="text-gray-600">
                                    Acquire and strengthen technical skills relevant to role and organizational needs.
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 mr-3 flex-shrink-0">
                                  <span className="font-bold">3</span>
                                </div>
                                <div>
                                  <h5 className="font-medium">Strategic Thinking</h5>
                                  <p className="text-gray-600">
                                    Develop capacity for strategic analysis and planning to contribute to organizational
                                    goals.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Agreements Tab */}
                  <TabsContent value="agreements" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Agreements & Contracts</CardTitle>
                        <CardDescription>Official documents and signed agreements</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold mb-4">Active Agreements</h3>
                          <div className="space-y-4">
                            {agreements
                              .filter((agreement) => agreement.status === "active")
                              .map((agreement) => (
                                <div key={agreement.id} className="bg-white p-4 rounded-lg border border-gray-200">
                                  <div className="flex flex-col md:flex-row justify-between mb-2">
                                    <h4 className="font-bold text-blue-800">{agreement.title}</h4>
                                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full self-start">
                                      Active
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                    <div>
                                      <p className="text-gray-500">Type</p>
                                      <p className="font-medium">{agreement.type}</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-500">Signed Date</p>
                                      <p className="font-medium">
                                        {new Date(agreement.signedDate).toLocaleDateString()}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-gray-500">Expiry Date</p>
                                      <p className="font-medium">
                                        {new Date(agreement.expiryDate).toLocaleDateString()}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="mt-3 flex justify-end">
                                    <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                      </svg>
                                      View Document
                                    </button>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>

                        <div className="mb-8">
                          <h3 className="text-lg font-semibold mb-4">Employment Terms</h3>
                          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-bold text-blue-800 mb-3">Contract Terms</h4>
                                <ul className="space-y-2">
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>
                                      <strong>Contract Type:</strong> Full-time, Permanent
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>
                                      <strong>Working Hours:</strong> 40 hours per week
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>
                                      <strong>Probation Period:</strong> 3 months (completed)
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>
                                      <strong>Notice Period:</strong> 1 month
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-bold text-blue-800 mb-3">Leave Entitlement</h4>
                                <ul className="space-y-2">
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>
                                      <strong>Annual Leave:</strong> 20 days per year
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>
                                      <strong>Sick Leave:</strong> 10 days per year
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>
                                      <strong>Public Holidays:</strong> As per government calendar
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>
                                      <strong>Special Leave:</strong> As per organizational policy
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">Confidentiality & Compliance</h3>
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <p className="text-gray-700 mb-4">
                              As a member of the CoreTeam, you have signed comprehensive confidentiality and compliance
                              agreements. These agreements outline your responsibilities regarding:
                            </p>
                            <ul className="space-y-2 mb-4">
                              <li className="flex items-start">
                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                <span>Protection of sensitive organizational information</span>
                              </li>
                              <li className="flex items-start">
                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                <span>Adherence to data protection regulations</span>
                              </li>
                              <li className="flex items-start">
                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                <span>Ethical conduct and conflict of interest avoidance</span>
                              </li>
                              <li className="flex items-start">
                                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                <span>Intellectual property rights and ownership</span>
                              </li>
                            </ul>
                            <div className="bg-yellow-50 p-3 rounded-lg text-yellow-800 text-sm">
                              <strong>Note:</strong> Violation of confidentiality agreements may result in disciplinary
                              action, including termination of employment and legal proceedings.
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Benefits Tab */}
                  <TabsContent value="benefits" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Benefits & Compensation</CardTitle>
                        <CardDescription>Comprehensive benefits package and compensation details</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold mb-4">Benefits Overview</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                              <div className="text-3xl font-bold text-blue-800 mb-2">{benefits.length}</div>
                              <div className="text-blue-600">Total Benefits</div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                              <div className="text-3xl font-bold text-green-800 mb-2">
                                {benefits.filter((b) => b.category === "Financial").length}
                              </div>
                              <div className="text-green-600">Financial Benefits</div>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
                              <div className="text-3xl font-bold text-purple-800 mb-2">
                                {
                                  benefits.filter(
                                    (b) =>
                                      b.category === "Insurance" ||
                                      b.category === "Leave" ||
                                      b.category === "Development",
                                  ).length
                                }
                              </div>
                              <div className="text-purple-600">Wellness Benefits</div>
                            </div>
                          </div>
                        </div>

                        <div className="mb-8">
                          <h3 className="text-lg font-semibold mb-4">Benefits Package</h3>

                          {/* Group benefits by category */}
                          {Array.from(new Set(benefits.map((b) => b.category))).map((category) => (
                            <div key={category} className="mb-6">
                              <h4 className="font-medium text-gray-700 mb-3">{category} Benefits</h4>
                              <div className="space-y-3">
                                {benefits
                                  .filter((benefit) => benefit.category === category)
                                  .map((benefit) => (
                                    <div key={benefit.id} className="bg-white p-4 rounded-lg border border-gray-200">
                                      <div className="flex flex-col md:flex-row justify-between mb-2">
                                        <h5 className="font-bold text-blue-800">{benefit.title}</h5>
                                        <div className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full self-start">
                                          {benefit.value}
                                        </div>
                                      </div>
                                      <p className="text-gray-600">{benefit.description}</p>
                                    </div>
                                  ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">Compensation Structure</h3>
                          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-bold text-blue-800 mb-3">Salary Components</h4>
                                <ul className="space-y-3">
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <div>
                                      <span className="font-medium">Basic Salary</span>
                                      <p className="text-sm text-gray-600">60% of total compensation</p>
                                    </div>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <div>
                                      <span className="font-medium">House Rent Allowance</span>
                                      <p className="text-sm text-gray-600">25% of basic salary</p>
                                    </div>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <div>
                                      <span className="font-medium">Medical Allowance</span>
                                      <p className="text-sm text-gray-600">10% of basic salary</p>
                                    </div>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <div>
                                      <span className="font-medium">Conveyance Allowance</span>
                                      <p className="text-sm text-gray-600">5% of basic salary</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-bold text-blue-800 mb-3">Additional Compensation</h4>
                                <ul className="space-y-3">
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <div>
                                      <span className="font-medium">Performance Bonus</span>
                                      <p className="text-sm text-gray-600">
                                        Annual bonus based on performance evaluation
                                      </p>
                                    </div>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <div>
                                      <span className="font-medium">Festival Bonus</span>
                                      <p className="text-sm text-gray-600">Two festival bonuses per year</p>
                                    </div>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <div>
                                      <span className="font-medium">Overtime Pay</span>
                                      <p className="text-sm text-gray-600">For hours worked beyond standard schedule</p>
                                    </div>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <div>
                                      <span className="font-medium">Special Project Incentives</span>
                                      <p className="text-sm text-gray-600">
                                        For exceptional contributions to key projects
                                      </p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Performance Tab */}
                  <TabsContent value="performance" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Performance Records</CardTitle>
                        <CardDescription>Historical performance evaluations and future goals</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold mb-4">Performance Summary</h3>
                          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                              <div className="w-32 h-32 rounded-full bg-white flex flex-col items-center justify-center border-4 border-blue-500">
                                <span className="text-3xl font-bold text-blue-800">
                                  {performanceRecords.length > 0 ? performanceRecords[0].rating.toFixed(1) : "N/A"}
                                </span>
                                <span className="text-sm text-blue-600">Current Rating</span>
                              </div>
                              <div className="flex-grow">
                                <h4 className="font-bold text-blue-800 mb-2">Overall Assessment</h4>
                                <p className="mb-4">
                                  {performanceRecords.length > 0 && performanceRecords[0].rating >= 4.5
                                    ? "Outstanding performance consistently exceeding expectations in all areas."
                                    : performanceRecords.length > 0 && performanceRecords[0].rating >= 4.0
                                      ? "Excellent performance exceeding expectations in most areas."
                                      : performanceRecords.length > 0 && performanceRecords[0].rating >= 3.5
                                        ? "Strong performance meeting and sometimes exceeding expectations."
                                        : performanceRecords.length > 0 && performanceRecords[0].rating >= 3.0
                                          ? "Satisfactory performance meeting expectations in most areas."
                                          : "Insufficient performance data available."}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                    Reliable
                                  </div>
                                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                    Detail-oriented
                                  </div>
                                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                    Collaborative
                                  </div>
                                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                    Proactive
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mb-8">
                          <h3 className="text-lg font-semibold mb-4">Performance History</h3>
                          <div className="space-y-6">
                            {performanceRecords.map((record, index) => (
                              <div key={record.id} className="bg-white p-6 rounded-lg border border-gray-200">
                                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                                  <div>
                                    <h4 className="font-bold text-blue-800">{record.period}</h4>
                                    <p className="text-sm text-gray-500">
                                      Reviewed on {new Date(record.reviewDate).toLocaleDateString()} by{" "}
                                      {record.reviewedBy}
                                    </p>
                                  </div>
                                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                    Rating: {record.rating.toFixed(1)}/5.0
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div>
                                    <h5 className="font-medium text-gray-700 mb-2">Highlights & Achievements</h5>
                                    <ul className="space-y-2">
                                      {record.highlights.map((highlight, i) => (
                                        <li key={i} className="flex items-start">
                                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-2"></div>
                                          <span className="text-gray-600">{highlight}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div>
                                    <h5 className="font-medium text-gray-700 mb-2">Areas for Improvement</h5>
                                    <ul className="space-y-2">
                                      {record.improvements.map((improvement, i) => (
                                        <li key={i} className="flex items-start">
                                          <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-2"></div>
                                          <span className="text-gray-600">{improvement}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">Future Goals & Objectives</h3>
                          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                            <div className="space-y-6">
                              <div>
                                <h4 className="font-bold text-blue-800 mb-3">Short-term Goals (6 months)</h4>
                                <ul className="space-y-2">
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>Complete all assigned training modules with excellent results</span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>Improve efficiency in core responsibilities by 15%</span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>Develop stronger collaborative relationships across departments</span>
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-bold text-blue-800 mb-3">Medium-term Goals (1-2 years)</h4>
                                <ul className="space-y-2">
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>Take on additional responsibilities within current role</span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>Obtain relevant professional certification to enhance expertise</span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>Lead at least one significant project or initiative</span>
                                  </li>
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-bold text-blue-800 mb-3">Long-term Goals (3-5 years)</h4>
                                <ul className="space-y-2">
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>Advance to a senior position within the organization</span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>Develop mentorship capabilities to support team growth</span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>Contribute to strategic organizational initiatives and planning</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  {/* Rules Tab - Only for Shintiya Rahman */}
                  {member.id === "PA-MCB001" && (
                    <TabsContent value="rules" className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Role-Specific Rules & Protocols</CardTitle>
                          <CardDescription>Guidelines for Personal Assistant position</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-semibold mb-3">Confidentiality Guidelines</h3>
                              <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                                <p className="text-gray-700 mb-2">
                                  As the Personal Assistant to the Director General, you have access to highly sensitive
                                  information. The following confidentiality rules are critical:
                                </p>
                                <ul className="space-y-2">
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                                    <span>
                                      All executive communications, documents, and meetings are strictly confidential
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                                    <span>
                                      Never discuss DG's schedule, meetings, or communications with unauthorized
                                      personnel
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                                    <span>
                                      Store and handle all sensitive documents according to security protocols
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                                    <span>Report any breach or suspected breach of confidentiality immediately</span>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-lg font-semibold mb-3">Communication Protocols</h3>
                              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                                <ul className="space-y-2">
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>
                                      All official communications must follow the established organizational templates
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>
                                      Emails to external stakeholders must be approved by the DG before sending
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>Maintain a professional tone in all verbal and written communications</span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                                    <span>
                                      Document all significant communications in the specified tracking system
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-lg font-semibold mb-3">Schedule Management Rules</h3>
                              <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
                                <ul className="space-y-2">
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-green-800 rounded-full mt-2 mr-2"></div>
                                    <span>
                                      All appointments must be entered in the calendar system with appropriate details
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-green-800 rounded-full mt-2 mr-2"></div>
                                    <span>
                                      Provide the DG with a briefing document at least 30 minutes before each meeting
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-green-800 rounded-full mt-2 mr-2"></div>
                                    <span>Schedule 15-minute buffer periods between meetings whenever possible</span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-green-800 rounded-full mt-2 mr-2"></div>
                                    <span>
                                      Confirm all appointments 24 hours in advance and notify of any changes immediately
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-lg font-semibold mb-3">Handover Protocols</h3>
                              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                <p className="text-gray-700 mb-2">
                                  Clear shift handover procedures are essential to ensure continuity of support:
                                </p>
                                <ul className="space-y-2">
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-2"></div>
                                    <span>
                                      Complete and document the handover checklist 30 minutes before shift change
                                    </span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-2"></div>
                                    <span>Brief the incoming PA on all pending tasks and urgent matters</span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-2"></div>
                                    <span>Update the shared digital handover log with all relevant information</span>
                                  </li>
                                  <li className="flex items-start">
                                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-2"></div>
                                    <span>Ensure secure transfer of any confidential materials or access</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  )}
                </Tabs>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <SimpleFooter />
      </div>
    </CoreTeamAuthCheck>
  )
}

