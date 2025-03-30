import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, Code, Database, Server, FileText, Download } from "lucide-react"

export default function CLI() {
  const commands = [
    {
      command: "trusted-ally help",
      description: "Display help information and list all available commands",
    },
    {
      command: "trusted-ally login",
      description: "Authenticate with the Trusted Ally system",
    },
    {
      command: "trusted-ally data list",
      description: "List available datasets for Cox's Bazar district",
    },
    {
      command: "trusted-ally data download <dataset-id>",
      description: "Download a specific dataset",
    },
    {
      command: "trusted-ally report generate <type> --from=<date> --to=<date>",
      description: "Generate reports for specified time period",
    },
    {
      command: "trusted-ally status",
      description: "Check system status and available services",
    },
    {
      command: "trusted-ally sync",
      description: "Synchronize local data with the central database",
    },
    {
      command: "trusted-ally config",
      description: "Configure CLI settings and preferences",
    },
  ]

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Command Line Interface (CLI) - Trusted Ally</h1>
      <p className="text-lg mb-8">
        The Trusted Ally CLI provides command-line access to the Cox's Bazar district management system, allowing
        administrators and developers to interact with the platform programmatically.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              CLI Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The Trusted Ally CLI is a powerful tool for accessing and managing data, generating reports, and
              automating tasks related to the Cox's Bazar district management system. It provides a scriptable interface
              for system administrators, data analysts, and developers.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Installation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Install the CLI using npm:</p>
            <div className="bg-muted p-2 rounded-md font-mono text-sm">npm install -g trusted-ally-cli</div>
            <p className="mt-4">Or download the binary for your platform from the downloads section.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Data Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              The CLI provides commands for listing, downloading, and uploading datasets related to various aspects of
              Cox's Bazar district, including tourism statistics, educational data, healthcare metrics, and
              environmental monitoring information.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              System Administration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              System administrators can use the CLI to monitor system status, manage user accounts, configure services,
              and perform maintenance tasks. The CLI supports scripting for automated administrative workflows.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Available Commands
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Command</th>
                  <th className="text-left p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                {commands.map((cmd) => (
                  <tr key={cmd.command} className="border-b">
                    <td className="p-2 font-mono text-sm">{cmd.command}</td>
                    <td className="p-2">{cmd.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Downloads
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a href="#" className="flex items-center gap-2 p-3 border rounded-md hover:bg-muted transition-colors">
              <Download className="h-4 w-4" />
              <span>CLI for Windows (64-bit)</span>
            </a>
            <a href="#" className="flex items-center gap-2 p-3 border rounded-md hover:bg-muted transition-colors">
              <Download className="h-4 w-4" />
              <span>CLI for macOS (64-bit)</span>
            </a>
            <a href="#" className="flex items-center gap-2 p-3 border rounded-md hover:bg-muted transition-colors">
              <Download className="h-4 w-4" />
              <span>CLI for Linux (64-bit)</span>
            </a>
            <a href="#" className="flex items-center gap-2 p-3 border rounded-md hover:bg-muted transition-colors">
              <Download className="h-4 w-4" />
              <span>CLI for Linux (ARM)</span>
            </a>
            <a href="#" className="flex items-center gap-2 p-3 border rounded-md hover:bg-muted transition-colors">
              <Download className="h-4 w-4" />
              <span>CLI Documentation (PDF)</span>
            </a>
            <a href="#" className="flex items-center gap-2 p-3 border rounded-md hover:bg-muted transition-colors">
              <Download className="h-4 w-4" />
              <span>Sample Scripts</span>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

