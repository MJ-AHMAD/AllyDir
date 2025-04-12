### Project Structure JSON Setup


## 1. Master JSON File (master.json)

```json
{
  "projectName": "Trusted Ally Website",
  "version": "1.0.0",
  "description": "A comprehensive website for TRUSTED-ALLY organization focusing on education, social initiatives, and environmental development",
  "structure": {
    "app": "app.json",
    "components": "components.json",
    "public": "public.json",
    "api": "api.json"
  },
  "metadata": {
    "totalPages": 120,
    "mainSections": [
      "education-program", 
      "al-quran-journey", 
      "admin", 
      "social-initiatives", 
      "environmental-development"
    ],
    "technologies": [
      "Next.js", 
      "React", 
      "TypeScript", 
      "Tailwind CSS"
    ],
    "lastUpdated": "2025-04-12"
  }
}
```

## 2. App Directory Structure (app.json)

```json
{
  "directoryPath": "app",
  "pages": {
    "home": {
      "path": "page.tsx",
      "description": "Main landing page of the website",
      "components": ["Header", "Footer", "HeroSection", "AboutSection", "ProgramsOverview"],
      "routes": []
    },
    "about-us": {
      "path": "about-us/page.tsx",
      "description": "About the organization",
      "components": ["Header", "Footer", "TeamSection", "MissionSection"],
      "routes": []
    },
    "contact": {
      "path": "contact/page.tsx",
      "description": "Contact information and form",
      "components": ["Header", "Footer", "ContactForm"],
      "routes": []
    },
    "programs-overview": {
      "path": "programs-overview/page.tsx",
      "description": "Overview of all programs",
      "components": ["Header", "Footer", "ProgramsList"],
      "routes": []
    },
    "impact": {
      "path": "impact/page.tsx",
      "description": "Impact of the organization's work",
      "components": ["Header", "Footer", "ImpactStats", "TestimonialSection"],
      "routes": []
    },
    "get-involved": {
      "path": "get-involved/page.tsx",
      "description": "Ways to get involved with the organization",
      "components": ["Header", "Footer", "VolunteerSection", "DonateSection"],
      "routes": []
    },
    "donate": {
      "path": "donate/page.tsx",
      "description": "Donation page",
      "components": ["Header", "Footer", "DonationForm"],
      "routes": [
        "donate/checkout/page.tsx",
        "donate/thank-you/page.tsx"
      ]
    },
    "volunteer": {
      "path": "volunteer/page.tsx",
      "description": "Volunteer information",
      "components": ["Header", "Footer", "VolunteerForm"],
      "routes": [
        "volunteer/apply/page.tsx",
        "volunteer/landing/page.tsx"
      ]
    },
    "privacy-policy": {
      "path": "privacy-policy/page.tsx",
      "description": "Privacy policy page",
      "components": ["Header", "Footer", "PolicyContent"],
      "routes": []
    },
    "terms-of-service": {
      "path": "terms-of-service/page.tsx",
      "description": "Terms of service page",
      "components": ["Header", "Footer", "TermsContent"],
      "routes": []
    },
    "faq": {
      "path": "faq/page.tsx",
      "description": "Frequently asked questions",
      "components": ["Header", "Footer", "FAQAccordion"],
      "routes": []
    },
    "sitemap": {
      "path": "sitemap/page.tsx",
      "description": "Site map page",
      "components": ["Header", "Footer", "SitemapLinks"],
      "routes": []
    },
    "transparency-policy": {
      "path": "transparency-policy/page.tsx",
      "description": "Transparency policy page",
      "components": ["Header", "Footer", "PolicyContent"],
      "routes": []
    },
    "transparency-portal": {
      "path": "transparency-portal/page.tsx",
      "description": "Transparency portal with financial information",
      "components": ["Header", "Footer", "FinancialReports"],
      "routes": []
    },
    "workplace-policy": {
      "path": "workplace-policy/page.tsx",
      "description": "Workplace policy page",
      "components": ["Header", "Footer", "PolicyContent"],
      "routes": []
    },
    "schedule-consultation": {
      "path": "schedule-consultation/page.tsx",
      "description": "Schedule a consultation page",
      "components": ["Header", "Footer", "ScheduleForm"],
      "routes": []
    },
    "invest": {
      "path": "invest/page.tsx",
      "description": "Investment opportunities",
      "components": ["Header", "Footer", "InvestmentOptions"],
      "routes": [
        "invest/opportunities/page.tsx",
        "invest/export-opportunities/page.tsx"
      ]
    },
    "education-program": "education-program.json",
    "al-quran-journey": "al-quran-journey.json",
    "social-initiatives": "social-initiatives.json",
    "environmental-development": "environmental-development.json",
    "admin": "admin.json"
  },
  "layout": {
    "path": "layout.tsx",
    "description": "Root layout for the entire application",
    "components": ["ThemeProvider"]
  },
  "globals": {
    "path": "globals.css",
    "description": "Global CSS styles"
  }
}
```

## 3. Education Program Section (education-program.json)

```json
{
  "sectionName": "Education Program",
  "basePath": "app/education-program",
  "description": "Educational initiatives and courses offered by TRUSTED-ALLY",
  "pages": {
    "index": {
      "path": "page.tsx",
      "description": "Main education program page",
      "components": ["CourseList", "ProgramHeader", "TestimonialSection"]
    },
    "get-involved": {
      "path": "get-involved/page.tsx",
      "description": "Ways to get involved with the education program",
      "components": ["Header", "Footer", "VolunteerOptions"]
    },
    "projects": {
      "path": "projects/page.tsx",
      "description": "Educational projects overview",
      "components": ["Header", "Footer", "ProjectsList"]
    },
    "mentorship": {
      "path": "mentorship/page.tsx",
      "description": "Mentorship program information",
      "components": ["Header", "Footer", "MentorshipDetails"]
    },
    "free-learning": {
      "path": "free-learning/page.tsx",
      "description": "Free learning resources",
      "components": ["Header", "Footer", "ResourcesList"],
      "routes": [
        "free-learning/register/page.tsx"
      ]
    },
    "student-dashboard": {
      "path": "student-dashboard/page.tsx",
      "description": "Dashboard for enrolled students",
      "components": ["Header", "Footer", "StudentDashboard"]
    },
    "developer-program": {
      "path": "developer-program/page.tsx",
      "description": "Developer training program",
      "components": ["Header", "Footer", "ProgramDetails"]
    },
    "courses": {
      "web-development": {
        "path": "courses/web-development/page.tsx",
        "description": "Web development course",
        "components": ["Header", "Footer", "CourseDetails"],
        "routes": [
          "courses/web-development/register/page.tsx"
        ]
      },
      "programming-languages": {
        "path": "courses/programming-languages/page.tsx",
        "description": "Programming languages course",
        "components": ["Header", "Footer", "CourseDetails"],
        "routes": [
          "courses/programming-languages/register/page.tsx"
        ]
      },
      "powershell-automation": {
        "path": "courses/powershell-automation/page.tsx",
        "description": "PowerShell automation course",
        "components": ["Header", "Footer", "CourseDetails"],
        "routes": [
          "courses/powershell-automation/register/page.tsx"
        ]
      },
      "api-development": {
        "path": "courses/api-development/page.tsx",
        "description": "API development course",
        "components": ["Header", "Footer", "CourseDetails"],
        "routes": [
          "courses/api-development/register/page.tsx"
        ]
      },
      "version-control": {
        "path": "courses/version-control/page.tsx",
        "description": "Version control course",
        "components": ["Header", "Footer", "CourseDetails"],
        "routes": [
          "courses/version-control/register/page.tsx"
        ]
      },
      "operating-systems": {
        "path": "courses/operating-systems/page.tsx",
        "description": "Operating systems course",
        "components": ["Header", "Footer", "CourseDetails"],
        "routes": [
          "courses/operating-systems/register/page.tsx"
        ]
      },
      "cloud-computing": {
        "path": "courses/cloud-computing/page.tsx",
        "description": "Cloud computing course",
        "components": ["Header", "Footer", "CourseDetails"],
        "routes": [
          "courses/cloud-computing/register/page.tsx"
        ]
      },
      "mobile-development": {
        "path": "courses/mobile-development/page.tsx",
        "description": "Mobile development course",
        "components": ["Header", "Footer", "CourseDetails"],
        "routes": [
          "courses/mobile-development/register/page.tsx"
        ]
      },
      "database-management": {
        "path": "courses/database-management/page.tsx",
        "description": "Database management course",
        "components": ["Header", "Footer", "CourseDetails"],
        "routes": [
          "courses/database-management/register/page.tsx"
        ]
      }
    }
  }
}
```

## 4. Al-Quran Journey Section (al-quran-journey.json)

```json
{
  "sectionName": "Al-Quran Journey",
  "basePath": "app/al-quran-journey",
  "description": "Quranic research and educational initiatives",
  "pages": {
    "index": {
      "path": "page.tsx",
      "description": "Main Al-Quran Journey page",
      "components": ["Header", "Footer", "ResearchPillars", "TestimonialSection"]
    },
    "modern-science": {
      "path": "modern-science/page.tsx",
      "description": "Modern science and Quranic revelations",
      "components": ["Header", "Footer", "ResearchContent"]
    },
    "research-methodologies": {
      "path": "research-methodologies/page.tsx",
      "description": "Advanced Quranic research methodologies",
      "components": ["Header", "Footer", "MethodologyContent"]
    },
    "printing-distribution": {
      "path": "printing-distribution/page.tsx",
      "description": "Quranic printing and distribution excellence",
      "components": ["Header", "Footer", "PrintingDetails"]
    },
    "global-network": {
      "path": "global-network/page.tsx",
      "description": "Global Quranic research network",
      "components": ["Header", "Footer", "NetworkDetails"]
    },
    "campus": {
      "path": "campus/page.tsx",
      "description": "Al-Quran Journey campus information",
      "components": ["Header", "Footer", "CampusDetails"]
    },
    "courses": {
      "path": "courses/page.tsx",
      "description": "Courses offered by Al-Quran Journey",
      "components": ["Header", "Footer", "CoursesList"]
    },
    "printing-project": {
      "path": "printing-project/page.tsx",
      "description": "Quran printing project",
      "components": ["Header", "Footer", "ProjectDetails"],
      "routes": [
        "printing-project/volunteer/page.tsx"
      ]
    },
    "printing-press-project": {
      "path": "printing-press-project/page.tsx",
      "description": "Quran printing press project",
      "components": ["Header", "Footer", "ProjectDetails"],
      "routes": [
        "printing-press-project/contact/page.tsx",
        "printing-press-project/equipment-sponsorship/page.tsx",
        "printing-press-project/sponsor/page.tsx",
        "printing-press-project/sponsor/founding/page.tsx",
        "printing-press-project/sponsor/major/page.tsx",
        "printing-press-project/sponsor/supporting/page.tsx"
      ]
    },
    "printing-report": {
      "path": "printing-report/page.tsx",
      "description": "Quran printing project reports",
      "components": ["Header", "Footer", "ReportDetails"],
      "routes": [
        "printing-report/donate/page.tsx",
        "printing-report/donate/loading.tsx"
      ]
    },
    "permanent-campus": {
      "path": "permanent-campus/page.tsx",
      "description": "Permanent campus project",
      "components": ["Header", "Footer", "CampusDetails"],
      "routes": [
        "permanent-campus/building-sponsorship/page.tsx",
        "permanent-campus/sponsor/page.tsx",
        "permanent-campus/sponsor/campus-founder/page.tsx",
        "permanent-campus/sponsor/building/page.tsx",
        "permanent-campus/sponsor/facility/page.tsx"
      ]
    },
    "research-tools": {
      "concept-mapping": {
        "path": "research-tools/concept-mapping/page.tsx",
        "description": "Concept mapping tool",
        "components": ["Header", "Footer", "ConceptMappingTool"],
        "clientComponents": [
          "research-tools/concept-mapping/ConceptMappingToolClientPage.tsx"
        ]
      }
    }
  }
}
```

## 5. Admin Section (admin.json)

```json
{
  "sectionName": "Admin",
  "basePath": "app/admin",
  "description": "Administrative pages and dashboards",
  "pages": {
    "index": {
      "path": "page.tsx",
      "description": "Main admin dashboard",
      "components": ["Header", "SimpleFooter", "AdminDashboard", "PasswordPolicyNotice"]
    },
    "login": {
      "path": "login/page.tsx",
      "description": "Admin login page",
      "components": ["LoginForm"]
    },
    "management": {
      "path": "management/page.tsx",
      "description": "Organization management",
      "components": ["Header", "Footer", "ManagementDashboard"],
      "routes": [
        "management/board/page.tsx",
        "management/team/page.tsx"
      ]
    },
    "core-team": {
      "login": {
        "path": "core-team/login/page.tsx",
        "description": "Core team login",
        "components": ["LoginForm"]
      },
      "dashboard": {
        "path": "core-team/dashboard/page.tsx",
        "description": "Core team dashboard",
        "components": ["Header", "Footer", "TeamDashboard", "CoreTeamAuthCheck"]
      },
      "profile": {
        "path": "core-team/profile/[id]/page.tsx",
        "description": "Core team member profile",
        "components": ["Header", "Footer", "ProfileDetails", "CoreTeamAuthCheck"]
      },
      "pa-mcb001": {
        "path": "core-team/pa-mcb001/page.tsx",
        "description": "Personal assistant dashboard",
        "components": ["Header", "Footer", "PADashboard", "CoreTeamAuthCheck"]
      }
    },
    "activity-areas": {
      "path": "activity-areas/page.tsx",
      "description": "Activity areas overview",
      "components": ["Header", "Footer", "ActivityMap"],
      "routes": [
        "activity-areas/loading.tsx",
        "activity-areas/[division]/page.tsx",
        "activity-areas/[division]/[district]/page.tsx",
        "activity-areas/chittagong/page.tsx",
        "activity-areas/chittagong/coxs-bazar/page.tsx"
      ]
    }
  }
}
```

## 6. Components Directory (components.json)

```json
{
  "directoryPath": "components",
  "components": {
    "ui": {
      "description": "UI components from shadcn/ui",
      "components": [
        "accordion",
        "alert",
        "avatar",
        "button",
        "card",
        "dropdown-menu",
        "input",
        "label",
        "select",
        "separator",
        "switch",
        "badge",
        "breadcrumb",
        "collapsible",
        "sidebar"
      ]
    },
    "scroll-button": {
      "path": "scroll-button.tsx",
      "description": "Button that scrolls to a target element",
      "props": {
        "targetId": "string",
        "children": "React.ReactNode"
      }
    },
    "schedule-form": {
      "path": "schedule-form.tsx",
      "description": "Form for scheduling consultations"
    },
    "fallback-image": {
      "path": "fallback-image.tsx",
      "description": "Image component with fallback"
    },
    "password-policy-notice": {
      "path": "password-policy-notice.tsx",
      "description": "Notice about password policies"
    },
    "core-team-auth-check": {
      "path": "core-team-auth-check.tsx",
      "description": "Authentication check for core team members"
    },
    "simple-footer": {
      "path": "simple-footer.tsx",
      "description": "Simplified footer component"
    },
    "theme-provider": {
      "path": "theme-provider.tsx",
      "description": "Provider for theme context"
    }
  }
}
```

## 7. API Directory (api.json)

```json
{
  "directoryPath": "app/api",
  "endpoints": {
    "submit-volunteer": {
      "path": "submit-volunteer/route.ts",
      "description": "API endpoint for volunteer submissions",
      "method": "POST"
    },
    "newsletter": {
      "path": "newsletter/route.ts",
      "description": "API endpoint for newsletter subscriptions",
      "method": "POST"
    },
    "schedule-consultation": {
      "path": "schedule-consultation/route.ts",
      "description": "API endpoint for scheduling consultations",
      "method": "POST"
    },
    "submit-donation": {
      "path": "submit-donation/route.ts",
      "description": "API endpoint for donation submissions",
      "method": "POST"
    },
    "submit-membership": {
      "path": "submit-membership/route.ts",
      "description": "API endpoint for membership submissions",
      "method": "POST"
    },
    "core-team-auth": {
      "path": "core-team-auth/route.ts",
      "description": "API endpoint for core team authentication",
      "method": "POST"
    },
    "get-user-ids": {
      "path": "get-user-ids/route.ts",
      "description": "API endpoint for retrieving user IDs",
      "method": "GET"
    }
  }
}
```

## 8. Public Directory (public.json)

```json
{
  "directoryPath": "public",
  "assets": {
    "images": {
      "cox1.svg": {
        "path": "images/cox1.svg",
        "description": "Cox's Bazar image 1"
      },
      "cox2.svg": {
        "path": "images/cox2.svg",
        "description": "Cox's Bazar image 2"
      }
    },
    "img": {
      "cox1.svg": {
        "path": "img/cox1.svg",
        "description": "Cox's Bazar image 1 (duplicate)"
      },
      "cox2.svg": {
        "path": "img/cox2.svg",
        "description": "Cox's Bazar image 2 (duplicate)"
      }
    },
    "externalAssets": {
      "logo": "https://mj-ahmad.github.io/mja2025/img/logo.png",
      "icon": "https://mj-ahmad.github.io/mja2025/img/icon.png",
      "eco1": "https://mj-ahmad.github.io/mja2025/img/eco1.png",
      "edu1": "https://mj-ahmad.github.io/mja2025/img/edu1.png",
      "edu2": "https://mj-ahmad.github.io/mja2025/img/edu2.png",
      "coop1": "https://mj-ahmad.github.io/mja2025/img/coop1.png",
      "com1": "https://mj-ahmad.github.io/mja2025/img/com1.png",
      "env1": "https://mj-ahmad.github.io/mja2025/img/env1.png",
      "sos1": "https://mj-ahmad.github.io/mja2025/img/sos1.png",
      "quran-journey": "https://mj-ahmad.github.io/mja2025/img/quran-journey.jpg"
    }
  }
}
```

## 9. Social Initiatives Section (social-initiatives.json)

```json
{
  "sectionName": "Social Initiatives",
  "basePath": "app/social-initiatives",
  "description": "Social initiatives and community support programs",
  "pages": {
    "index": {
      "path": "page.tsx",
      "description": "Main social initiatives page",
      "components": ["Header", "Footer", "InitiativesList"]
    },
    "support-our-initiatives": {
      "path": "support-our-initiatives/page.tsx",
      "description": "Ways to support social initiatives",
      "components": ["Header", "Footer", "SupportOptions"]
    }
  }
}
```

## 10. Environmental Development Section (environmental-development.json)

```json
{
  "sectionName": "Environmental Development",
  "basePath": "app/environmental-development",
  "description": "Environmental initiatives and sustainability programs",
  "pages": {
    "index": {
      "path": "page.tsx",
      "description": "Main environmental development page",
      "components": ["Header", "Footer", "EnvironmentalPrograms"]
    },
    "join-our-eco-efforts": {
      "path": "join-our-eco-efforts/page.tsx",
      "description": "Ways to join environmental efforts",
      "components": ["Header", "Footer", "EcoVolunteerOptions"]
    }
  }
}
```

## How to Use This Structure

1. **For Development**: Use these JSON files to understand the project structure and relationships between components.
2. **For API Integration**: Create an API that serves these JSON files to dynamically build navigation or sitemaps.
3. **For Documentation**: Use this structure to generate comprehensive documentation of your project.
4. **For Deployment**: Use this structure to determine which files need to be included in specific deployments.
5. **For Maintenance**: When updating the project, update the corresponding JSON files to keep documentation in sync.


This structure provides a complete map of your project that can be used for various purposes while maintaining modularity and organization.
