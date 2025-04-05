"use client"
import Link from "next/link"
import { Check, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PowerShellSuitePage() {
  return (
    <div className="container mx-auto py-12 max-w-5xl">
      <div className="text-center space-y-6 py-10">
        <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl">PowerShell Suite Project</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          This project focuses on creating a suite of PowerShell scripts and modules to automate various system
          administration tasks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="bg-primary/10 text-primary font-semibold text-sm uppercase p-2 rounded-md inline-block">
            Project Overview
          </div>
          <p className="text-muted-foreground text-lg">
            The PowerShell Suite project aims to develop a collection of PowerShell tools that simplify common
            administrative tasks. This includes scripts for managing users, services, processes, and system
            configurations.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>User Management Scripts</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Service Management Modules</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Process Automation Tools</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>System Configuration Scripts</span>
            </li>
          </ul>
        </div>
        <div>
          <Card>
            <CardContent className="p-0 overflow-hidden">
              <div className="relative h-64 w-full">
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-500">
                  PowerShell Image Placeholder
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="space-y-4">
        <div className="bg-primary/10 text-primary font-semibold text-sm uppercase p-2 rounded-md inline-block">
          Project Details
        </div>
        <p className="text-muted-foreground text-lg">
          This project involves writing PowerShell scripts and modules, testing them thoroughly, and documenting their
          usage. Students will gain hands-on experience with PowerShell scripting, module development, and system
          administration concepts.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Scripting in PowerShell</li>
          <li>Module Development</li>
          <li>System Administration</li>
        </ul>
      </div>

      <Separator className="my-8" />

      <div className="space-y-4">
        <div className="bg-primary/10 text-primary font-semibold text-sm uppercase p-2 rounded-md inline-block">
          Resources
        </div>
        <ul className="space-y-2">
          <li>
            <Link
              href="https://docs.microsoft.com/powershell/"
              className="text-primary hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              PowerShell Documentation
              <ExternalLink className="h-4 w-4 ml-1" />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/PowerShell/PowerShell"
              className="text-primary hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              PowerShell GitHub Repository
              <ExternalLink className="h-4 w-4 ml-1" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

