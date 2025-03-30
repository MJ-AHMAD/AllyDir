import { FolderTree, Folder, File } from "lucide-react"

export default function ProjectStructure() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FolderTree className="h-6 w-6" />
        District Management System - Microservices Architecture
      </h1>

      <div className="space-y-6">
        {/* Core Infrastructure */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-3">Core Infrastructure</h2>
          <div className="pl-5 space-y-2">
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-blue-500" />
              <span className="font-medium">api-gateway/</span>
              <span className="text-sm text-muted-foreground">- API Gateway for routing requests to microservices</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-blue-500" />
              <span className="font-medium">service-registry/</span>
              <span className="text-sm text-muted-foreground">- Service discovery and registration</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-blue-500" />
              <span className="font-medium">config-server/</span>
              <span className="text-sm text-muted-foreground">- Centralized configuration management</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-blue-500" />
              <span className="font-medium">auth-service/</span>
              <span className="text-sm text-muted-foreground">- Authentication and authorization</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-blue-500" />
              <span className="font-medium">monitoring/</span>
              <span className="text-sm text-muted-foreground">- System monitoring and logging</span>
            </div>
          </div>
        </div>

        {/* Domain Microservices */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-3">Domain Microservices</h2>
          <div className="pl-5 space-y-4">
            {/* Tourist Hub */}
            <div>
              <div className="flex items-center gap-2">
                <Folder className="h-5 w-5 text-green-500" />
                <span className="font-medium">tourist-hub/</span>
              </div>
              <div className="pl-5 space-y-1">
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-green-400" />
                  <span>src/</span>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <Folder className="h-4 w-4 text-green-300" />
                  <span>controllers/</span>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <Folder className="h-4 w-4 text-green-300" />
                  <span>services/</span>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <Folder className="h-4 w-4 text-green-300" />
                  <span>models/</span>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <Folder className="h-4 w-4 text-green-300" />
                  <span>repositories/</span>
                </div>
                <div className="flex items-center gap-2">
                  <File className="h-4 w-4 text-gray-500" />
                  <span>Dockerfile</span>
                </div>
              </div>
            </div>

            {/* Education Hub */}
            <div>
              <div className="flex items-center gap-2">
                <Folder className="h-5 w-5 text-yellow-500" />
                <span className="font-medium">education-hub/</span>
              </div>
              <div className="pl-5 space-y-1">
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-yellow-400" />
                  <span>src/</span>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <Folder className="h-4 w-4 text-yellow-300" />
                  <span>controllers/</span>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <Folder className="h-4 w-4 text-yellow-300" />
                  <span>services/</span>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <Folder className="h-4 w-4 text-yellow-300" />
                  <span>models/</span>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <Folder className="h-4 w-4 text-yellow-300" />
                  <span>repositories/</span>
                </div>
                <div className="flex items-center gap-2">
                  <File className="h-4 w-4 text-gray-500" />
                  <span>Dockerfile</span>
                </div>
              </div>
            </div>

            {/* Economic Hub */}
            <div>
              <div className="flex items-center gap-2">
                <Folder className="h-5 w-5 text-purple-500" />
                <span className="font-medium">economic-hub/</span>
              </div>
              <div className="pl-5 space-y-1">
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-purple-400" />
                  <span>src/</span>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <Folder className="h-4 w-4 text-purple-300" />
                  <span>controllers/</span>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <Folder className="h-4 w-4 text-purple-300" />
                  <span>services/</span>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <Folder className="h-4 w-4 text-purple-300" />
                  <span>models/</span>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <Folder className="h-4 w-4 text-purple-300" />
                  <span>repositories/</span>
                </div>
                <div className="flex items-center gap-2">
                  <File className="h-4 w-4 text-gray-500" />
                  <span>Dockerfile</span>
                </div>
              </div>
            </div>

            {/* Climate Hub */}
            <div>
              <div className="flex items-center gap-2">
                <Folder className="h-5 w-5 text-blue-500" />
                <span className="font-medium">climate-hub/</span>
              </div>
              <div className="pl-5 space-y-1">
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-blue-400" />
                  <span>src/</span>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <Folder className="h-4 w-4 text-blue-300" />
                  <span>controllers/</span>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <Folder className="h-4 w-4 text-blue-300" />
                  <span>services/</span>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <Folder className="h-4 w-4 text-blue-300" />
                  <span>models/</span>
                </div>
                <div className="flex items-center gap-2 pl-5">
                  <Folder className="h-4 w-4 text-blue-300" />
                  <span>repositories/</span>
                </div>
                <div className="flex items-center gap-2">
                  <File className="h-4 w-4 text-gray-500" />
                  <span>Dockerfile</span>
                </div>
              </div>
            </div>

            {/* Other Hubs (Simplified) */}
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-red-500" />
              <span className="font-medium">social-initiatives/</span>
              <span className="text-sm text-muted-foreground">- Similar structure as above</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-pink-500" />
              <span className="font-medium">health-hub/</span>
              <span className="text-sm text-muted-foreground">- Similar structure as above</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-indigo-500" />
              <span className="font-medium">marine-resource-hub/</span>
              <span className="text-sm text-muted-foreground">- Similar structure as above</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-orange-500" />
              <span className="font-medium">infrastructure-hub/</span>
              <span className="text-sm text-muted-foreground">- Similar structure as above</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-teal-500" />
              <span className="font-medium">research-hub/</span>
              <span className="text-sm text-muted-foreground">- Similar structure as above</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-cyan-500" />
              <span className="font-medium">water-resources-hub/</span>
              <span className="text-sm text-muted-foreground">- Similar structure as above</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-lime-500" />
              <span className="font-medium">community-hub/</span>
              <span className="text-sm text-muted-foreground">- Similar structure as above</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-emerald-500" />
              <span className="font-medium">sustainable-development-hub/</span>
              <span className="text-sm text-muted-foreground">- Similar structure as above</span>
            </div>
          </div>
        </div>

        {/* Support Services */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-3">Support Services</h2>
          <div className="pl-5 space-y-2">
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-gray-500" />
              <span className="font-medium">administrative/</span>
              <span className="text-sm text-muted-foreground">- Administrative services and management</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-gray-500" />
              <span className="font-medium">sitemap/</span>
              <span className="text-sm text-muted-foreground">- Site navigation and structure</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-gray-500" />
              <span className="font-medium">cli/</span>
              <span className="text-sm text-muted-foreground">- Command-line tools for system management</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-gray-500" />
              <span className="font-medium">ads/</span>
              <span className="text-sm text-muted-foreground">- Advertisement management</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-gray-500" />
              <span className="font-medium">archive/</span>
              <span className="text-sm text-muted-foreground">- Data archiving services</span>
            </div>
          </div>
        </div>

        {/* Internationalization */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-3">Internationalization</h2>
          <div className="pl-5 space-y-2">
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-amber-500" />
              <span className="font-medium">i18n-service/</span>
              <span className="text-sm text-muted-foreground">- Internationalization service</span>
            </div>
            <div className="pl-5 space-y-1">
              <div className="flex items-center gap-2">
                <Folder className="h-4 w-4 text-amber-400" />
                <span>english/</span>
              </div>
              <div className="flex items-center gap-2">
                <Folder className="h-4 w-4 text-amber-400" />
                <span>bangla/</span>
              </div>
              <div className="flex items-center gap-2">
                <Folder className="h-4 w-4 text-amber-400" />
                <span>arabic/</span>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment and Infrastructure */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-3">Deployment and Infrastructure</h2>
          <div className="pl-5 space-y-2">
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-red-500" />
              <span className="font-medium">docker/</span>
              <span className="text-sm text-muted-foreground">- Docker configuration files</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-red-500" />
              <span className="font-medium">kubernetes/</span>
              <span className="text-sm text-muted-foreground">- Kubernetes configuration files</span>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-red-500" />
              <span className="font-medium">ci-cd/</span>
              <span className="text-sm text-muted-foreground">- CI/CD pipeline configurations</span>
            </div>
            <div className="flex items-center gap-2">
              <File className="h-5 w-5 text-gray-500" />
              <span className="font-medium">docker-compose.yml</span>
              <span className="text-sm text-muted-foreground">- Docker Compose configuration</span>
            </div>
          </div>
        </div>

        {/* Documentation */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-3">Documentation</h2>
          <div className="pl-5 space-y-2">
            <div className="flex items-center gap-2">
              <Folder className="h-5 w-5 text-blue-500" />
              <span className="font-medium">docs/</span>
              <span className="text-sm text-muted-foreground">- System documentation</span>
            </div>
            <div className="flex items-center gap-2">
              <File className="h-5 w-5 text-gray-500" />
              <span className="font-medium">README.md</span>
              <span className="text-sm text-muted-foreground">- Project overview</span>
            </div>
            <div className="flex items-center gap-2">
              <File className="h-5 w-5 text-gray-500" />
              <span className="font-medium">CONTRIBUTING.md</span>
              <span className="text-sm text-muted-foreground">- Contribution guidelines</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

