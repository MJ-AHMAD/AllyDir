## 🚀 **সম্পূর্ণ Deployment গাইড: Windows → GitHub → Vercel + Azure**

---

## 📋 **Phase 1: Local Windows Setup (PowerShell Commands)**

### **Step 1: প্রজেক্ট ডাউনলোড ও সেটআপ**

```powershell
# প্রজেক্ট ডিরেক্টরি তৈরি করুন
cd C:\Development
mkdir nexara-project
cd nexara-project

# v0 থেকে প্রজেক্ট ফাইলগুলো কপি করুন (Download Code বাটন ব্যবহার করে)
# অথবা ম্যানুয়ালি সব ফাইল কপি করুন

# Dependencies ইনস্টল করুন
npm install

# Environment variables সেটআপ করুন
New-Item -Path ".env.local" -ItemType File
notepad .env.local
```

**`.env.local` ফাইলে এই variables গুলো যোগ করুন:**

```plaintext
NEXT_PUBLIC_NOTES_PASSWORD=your_password_here
NEXT_PUBLIC_NOTES_PASSWORD_2=your_secondary_password
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development
```

### **Step 2: Local Testing**

```powershell
# প্রজেক্ট বিল্ড টেস্ট করুন
npm run build

# Development server চালু করুন
npm run dev

# নতুন PowerShell window খুলে ব্রাউজার খুলুন
Start-Process "http://localhost:3000"

# সব কিছু ঠিক আছে কিনা চেক করুন
# Ctrl+C দিয়ে dev server বন্ধ করুন
```

---

## 📋 **Phase 2: Git Setup ও GitHub Push**

### **Step 3: Git Repository Initialize**

```powershell
# Git initialize করুন
git init

# .gitignore ফাইল তৈরি করুন
New-Item -Path ".gitignore" -ItemType File
notepad .gitignore
```

**`.gitignore` ফাইলে এই content যোগ করুন:**

```plaintext
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Next.js
.next/
out/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port
```

### **Step 4: GitHub Repository তৈরি ও Push**

```powershell
# সব ফাইল add করুন
git add .

# প্রথম commit করুন
git commit -m "Initial commit: Nexara project setup"

# GitHub এ যান এবং নতুন repository তৈরি করুন (nexara-project নামে)
# তারপর remote origin যোগ করুন (আপনার GitHub username দিয়ে)
git remote add origin https://github.com/YOUR_USERNAME/nexara-project.git

# Main branch এ push করুন
git branch -M main
git push -u origin main

# Push সফল হয়েছে কিনা verify করুন
git status
```

---

## 📋 **Phase 3: Vercel Frontend Deployment**

### **Step 5: Vercel Account Setup**

1. **Vercel.com এ যান** এবং GitHub দিয়ে sign up করুন
2. **"New Project"** বাটনে ক্লিক করুন
3. **আপনার GitHub repository** (nexara-project) select করুন
4. **"Import"** বাটনে ক্লিক করুন


### **Step 6: Vercel Configuration**

**Project Settings:**

```plaintext
Project Name: nexara-project
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev
```

**Environment Variables (Vercel Dashboard এ):**

```plaintext
NEXT_PUBLIC_NOTES_PASSWORD = your_password_here
NEXT_PUBLIC_NOTES_PASSWORD_2 = your_secondary_password
NEXT_PUBLIC_SITE_URL = https://your-project-name.vercel.app
NODE_ENV = production
```

### **Step 7: Vercel CLI Setup (Optional but Recommended)**

```powershell
# Vercel CLI install করুন
npm install -g vercel

# Vercel এ login করুন
vercel login

# প্রজেক্ট link করুন
vercel link

# Production এ deploy করুন
vercel --prod

# Deployment status check করুন
vercel ls
```

---

## 📋 **Phase 4: Azure Backend Setup**

### **Step 8: Azure Account ও Resource Setup**

```powershell
# Azure CLI install করুন (যদি না থাকে)
# https://aka.ms/installazurecliwindows থেকে download করুন

# Azure এ login করুন
az login

# Resource group তৈরি করুন
az group create --name nexara-backend-rg --location "East US"

# App Service Plan তৈরি করুন
az appservice plan create --name nexara-backend-plan --resource-group nexara-backend-rg --sku B1 --is-linux

# Web App তৈরি করুন
az webapp create --resource-group nexara-backend-rg --plan nexara-backend-plan --name nexara-backend-api --runtime "NODE|18-lts"
```

### **Step 9: Backend Code Preparation**

```powershell
# Backend এর জন্য আলাদা folder তৈরি করুন
mkdir C:\Development\nexara-backend
cd C:\Development\nexara-backend

# Package.json তৈরি করুন
npm init -y

# Express.js install করুন
npm install express cors dotenv helmet morgan compression

# Development dependencies
npm install --save-dev nodemon @types/node typescript

# TypeScript config
npx tsc --init
```

**Simple Express Server তৈরি করুন (`server.js`):**

```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: ['https://your-project-name.vercel.app', 'http://localhost:3000'],
  credentials: true
}));
app.use(morgan('combined'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Nexara Backend API',
    status: 'running',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.get('/api/projects', (req, res) => {
  res.json({
    projects: [
      { id: 1, name: 'Infinity Nexus', status: 'active' },
      { id: 2, name: 'Trusted Ally', status: 'active' },
      { id: 3, name: 'Yunus Inspire', status: 'planning' }
    ]
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### **Step 10: Azure Backend Deployment**

```powershell
# Backend repository initialize করুন
git init
git add .
git commit -m "Initial backend setup"

# GitHub এ backend repository তৈরি করুন
git remote add origin https://github.com/YOUR_USERNAME/nexara-backend.git
git branch -M main
git push -u origin main

# Azure এ deploy করুন
az webapp deployment source config --name nexara-backend-api --resource-group nexara-backend-rg --repo-url https://github.com/YOUR_USERNAME/nexara-backend.git --branch main --manual-integration

# Deployment status check করুন
az webapp deployment source show --name nexara-backend-api --resource-group nexara-backend-rg
```

---

## 📋 **Phase 5: Integration ও Final Setup**

### **Step 11: Frontend-Backend Connection**

```powershell
# Frontend প্রজেক্টে ফিরে যান
cd C:\Development\nexara-project

# Environment variables update করুন
notepad .env.local
```

**Updated `.env.local`:**

```plaintext
NEXT_PUBLIC_NOTES_PASSWORD=your_password_here
NEXT_PUBLIC_NOTES_PASSWORD_2=your_secondary_password
NEXT_PUBLIC_SITE_URL=https://your-project-name.vercel.app
NEXT_PUBLIC_API_URL=https://nexara-backend-api.azurewebsites.net
NODE_ENV=production
```

### **Step 12: Final Deployment**

```powershell
# Changes commit করুন
git add .
git commit -m "Add backend integration"
git push origin main

# Vercel এ environment variables update করুন (Dashboard থেকে)
# NEXT_PUBLIC_API_URL = https://nexara-backend-api.azurewebsites.net

# Manual redeploy trigger করুন
vercel --prod
```

---

## 📋 **Phase 6: Verification ও Testing**

### **Step 13: Deployment Verification**

```powershell
# Frontend URL test করুন
Start-Process "https://your-project-name.vercel.app"

# Backend API test করুন
Start-Process "https://nexara-backend-api.azurewebsites.net"

# API endpoint test করুন
curl https://nexara-backend-api.azurewebsites.net/api/health

# Local development এর জন্য
npm run dev
```

---

## 🔧 **Troubleshooting Commands**

### **Common Issues ও Solutions:**

```powershell
# Build issues
npm run build --verbose
npm cache clean --force
rm -rf node_modules
npm install

# Git issues
git status
git log --oneline
git remote -v

# Vercel issues
vercel logs
vercel env ls
vercel domains ls

# Azure issues
az webapp log tail --name nexara-backend-api --resource-group nexara-backend-rg
az webapp restart --name nexara-backend-api --resource-group nexara-backend-rg
```

---

## 📊 **Deployment Checklist**

### **Pre-Deployment:**

- Local build successful (`npm run build`)
- All environment variables set
- Git repository clean (`git status`)
- All files committed and pushed


### **Vercel Deployment:**

- Project imported successfully
- Environment variables configured
- Build and deployment successful
- Custom domain configured (optional)


### **Azure Deployment:**

- Resource group created
- App Service configured
- Code deployed successfully
- API endpoints responding


### **Integration:**

- Frontend can communicate with backend
- CORS configured properly
- All features working end-to-end


---

## 🎯 **Final URLs Structure**

```plaintext
Frontend (Vercel): https://your-project-name.vercel.app
Backend (Azure): https://nexara-backend-api.azurewebsites.net
API Health: https://nexara-backend-api.azurewebsites.net/api/health
API Projects: https://nexara-backend-api.azurewebsites.net/api/projects
```

---

## 📞 **Support Commands**

```powershell
# Check all services status
curl https://your-project-name.vercel.app/api/health
curl https://nexara-backend-api.azurewebsites.net/api/health

# Monitor logs
vercel logs --follow
az webapp log tail --name nexara-backend-api --resource-group nexara-backend-rg

# Restart services if needed
vercel --prod
az webapp restart --name nexara-backend-api --resource-group nexara-backend-rg
```
