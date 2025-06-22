# MJ's Device Config Diagnostic Tool
Clear-Host
Write-Host "🔍 MJ_Nexara Laptop Check Script Initializing..." -ForegroundColor Cyan

# 1. CPU Info
Write-Host "`n🔧 CPU Info:" -ForegroundColor Yellow
Get-CimInstance Win32_Processor | Select-Object Name, NumberOfCores, MaxClockSpeed

# 2. RAM
Write-Host "`n💾 RAM Info:" -ForegroundColor Yellow
systeminfo | findstr /C:"Total Physical Memory"

# 3. Disk Type (SSD vs HDD)
Write-Host "`n🧱 Disk Type & Size:" -ForegroundColor Yellow
Get-PhysicalDisk | Select MediaType, Size, SerialNumber

# 4. Battery Report
Write-Host "`n🔋 Generating Battery Report..." -ForegroundColor Yellow
powercfg /batteryreport > $null
Start-Process "battery-report.html"

# 5. Windows Activation
Write-Host "`n🪪 Windows License Status:" -ForegroundColor Yellow
slmgr /xpr

# 6. BIOS Info
Write-Host "`n🧬 BIOS Version Info:" -ForegroundColor Yellow
Get-CimInstance Win32_BIOS | Format-List Manufacturer, SMBIOSBIOSVersion, ReleaseDate

# 7. Storage Volumes
Write-Host "`n📁 Volume Free Space:" -ForegroundColor Yellow
Get-Volume | Select DriveLetter, FileSystemLabel, SizeRemaining, Size

Write-Host "`n✅ MJ Script Finished. Inspect results & make your call wisely!" -ForegroundColor Green