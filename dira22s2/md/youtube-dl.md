**youtube-dl** সেটআপ করার একটি সম্পূর্ণ গাইড, যাতে **YouTube, Vimeo, Dailymotion, Facebook, SoundCloud, Twitch, TikTok** সহ অন্যান্য প্ল্যাটফর্ম থেকে ভিডিও ডাউনলোড। এছাড়াও, **ভিডিওর গুণমান নির্বাচন, অডিও আলাদা করে ডাউনলোড, সাবটাইটেল সংগ্রহ, পুরো প্লেলিস্ট ডাউনলোড** ইত্যাদি সুবিধা।

### **Windows-এ youtube-dl সেটআপ**
#### **PowerShell ব্যবহার করে ইনস্টলেশন**
1. **PowerShell** চালু করুন (**Run as Administrator**).
2. নিম্নলিখিত কমান্ড চালান:
   ```powershell
   Set-ExecutionPolicy Unrestricted -Scope CurrentUser
   iwr -useb https://yt-dl.org/downloads/latest/youtube-dl.exe | Out-File -FilePath "$env:APPDATA\youtube-dl.exe"
   ```
3. youtube-dl ইনস্টল হয়েছে কিনা যাচাই করতে:
   ```powershell
   $env:APPDATA\youtube-dl.exe --version
   ```

#### **FFmpeg ইনস্টল করুন (যদি অডিও/ভিডিও কনভার্সন দরকার হয়)**
1. [FFmpeg](https://ffmpeg.org/download.html) ডাউনলোড করুন।
2. `.exe` ফাইলটি `C:\ffmpeg\bin\` ফোল্ডারে রাখুন।
3. **PowerShell**-এ নিম্নলিখিত কমান্ড চালান:
   ```powershell
   [System.Environment]::SetEnvironmentVariable("Path", "$env:Path;C:\ffmpeg\bin", [System.EnvironmentVariableTarget]::Machine)
   ```

### **Linux-এ youtube-dl সেটআপ**
#### **Terminal ব্যবহার করে ইনস্টলেশন**
1. **Terminal** খুলুন এবং নিম্নলিখিত কমান্ড চালান:
   ```bash
   sudo apt update && sudo apt install youtube-dl
   ```
2. youtube-dl ইনস্টল হয়েছে কিনা যাচাই করতে:
   ```bash
   youtube-dl --version
   ```

### **Mac-এ youtube-dl সেটআপ**
#### **Homebrew ব্যবহার করে ইনস্টলেশন**
1. **Terminal** খুলুন এবং নিম্নলিখিত কমান্ড চালান:
   ```bash
   brew install youtube-dl
   ```
2. ইনস্টলেশন যাচাই করতে:
   ```bash
   youtube-dl --version
   ```

### **PowerShell স্ক্রিপ্ট (Windows)**
আপনি যদি **PowerShell** ব্যবহার করে **youtube-dl** চালাতে চান, তাহলে নিচের স্ক্রিপ্টটি ব্যবহার করতে পারেন:
```powershell
$videoURL = Read-Host "ভিডিও URL দিন"
$downloadPath = "$env:USERPROFILE\Downloads\"
$youtubeDL = "$env:APPDATA\youtube-dl.exe"

Start-Process -FilePath $youtubeDL -ArgumentList "$videoURL -o '$downloadPath\%(title)s.%(ext)s'" -NoNewWindow -Wait
Write-Host "ডাউনলোড সম্পন্ন!"
```
এই স্ক্রিপ্টটি **PowerShell**-এ চালালে, এটি **ভিডিও URL** ইনপুট নেবে এবং **Downloads** ফোল্ডারে ভিডিওটি সংরক্ষণ করবে।

### **youtube-dl ব্যবহার করার কিছু গুরুত্বপূর্ণ কমান্ড**
#### **সর্বোচ্চ মানের ভিডিও ডাউনলোড**
```powershell
youtube-dl -f best <video_url>
```
#### **শুধুমাত্র অডিও ডাউনলোড (MP3)**
```powershell
youtube-dl -x --audio-format mp3 <video_url>
```
#### **সম্পূর্ণ প্লেলিস্ট ডাউনলোড**
```powershell
youtube-dl -i <playlist_url>
```
#### **সাবটাইটেল সহ ভিডিও ডাউনলোড**
```powershell
youtube-dl --write-sub --sub-lang en <video_url>
```

**স্বয়ংক্রিয়ভাবে** ভিডিও ডাউনলোড , তাহলে **Task Scheduler (Windows)** বা **Cron Job (Linux)** ব্যবহার।
