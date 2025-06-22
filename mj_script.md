
---

### 🧠 ১. **CPU (Processor) চেক:**

```
Get-CimInstance Win32_Processor | Select-Object Name, NumberOfCores, MaxClockSpeed
```

**না বলো যদি:**
- পুরাতন বা দুর্বল CPU (যেমন: Core i3, Celeron, Pentium)
- 2 Core মাত্র (4 cores আদর্শ)
- Clock speed 2.0 GHz এর নিচে

---

### 🧠 ২. **RAM চেক:**

```
systeminfo | findstr /C:"Total Physical Memory"
```

**না বলো যদি:**
- RAM 4GB বা তার কম  
  → এটা Node.js + VS Code এ কাজ করতে গিয়ে হ্যাং করে ফেলবে

---

### 💾 ৩. **Disk Type (SSD vs HDD) চেক:**

```
Get-PhysicalDisk | Select MediaType, Size, SerialNumber
```

**না বলো যদি:**
- `MediaType` দেখায়: HDD  
  → SSD ছাড়া ল্যাপটপ কেনা মানে টাইম মেশিনে ফিরে যাওয়া 😅

---

### 🔋 ৪. **Battery রিপোর্ট ও Health:**

```
powercfg /batteryreport
start battery-report.html
```

**না বলো যদি:**
- `Design Capacity` আর `Full Charge Capacity` এর মধ্যে বিশাল ব্যবধান
- Cycle Count 700+ (ভবিষ্যতে ব্যাটারি ৩০ মিনিটও চালাবে না)

---

### 💻 ৫. **Windows License ও Activation:**

```
slmgr /xpr
```

**না বলো যদি:**
- "Windows is not activated"  
  → ভবিষ্যতে update/driver সমস্যা তৈরি করবে

---

### 🛠️ ৬. **BIOS Info ও Password presence:**

```
Get-CimInstance Win32_BIOS | Format-List *
```

**না বলো যদি:**
- BIOS info পুরাতন (2012 বা তার আগে)  
- কোনো vendor-lock / BIOS password সন্দেহ হয়

---

### 🗂️ ৭. **Drive Partition ও ফ্রি স্পেস:**

```
Get-Volume | Select DriveLetter, FileSystemLabel, SizeRemaining, Size
```

**না বলো যদি:**
- C: Drive এ 20GB এর নিচে ফাঁকা জায়গা  
  → VS Code, Node.js ইন্সটলেই ঠাঁই নাই থাকবে

---


---
HYRA, NexaNode, GitHub, VS Code, VC JSON প্রজেক্ট নিয়ে কাজ করার জন্য প্রয়োজন **low-resource friendly কিন্তু developer-গ্রেড** একটি পুরোনো ল্যাপটপ—যেটাতে কম টাকায়ও বিশ্বাসযোগ্য পারফরম্যান্স মেলে।

---

## 🔍 কেনার আগে কী কী যাচাই করবো?

### ✅ ১. **প্রসেসর (CPU):**
- ন্যূনতম: **Intel Core i5 (6th–8th Gen)** বা **Ryzen 5 (2000+)**
- 💡 Core i7 4th Gen দেখলে সাবধান—Old thermal issue থাকতে পারে

### ✅ ২. **RAM:**  
- ন্যূনতম: **8GB DDR3/DDR4** (16GB হলে সেরা)  
- চেক করো: কতটা slot খালি? future upgrade সম্ভব কিনা

### ✅ ৩. **Storage (SSD):**  
- **SSD থাকতে হবে**—যদি না থাকে, দ্রুত 240/256GB SATA SSD ফিট করানো সম্ভব কিনা জিজ্ঞাসা করো  
- HDD only হলে একদম না—boot time + tooling performance কমে যাবে

### ✅ ৪. **Display & Portability:**  
- 13” or 14” preferable (কম power drain, mobility-friendly)  
- Screen ঠিক আছে কিনা? Flickering বা yellow spot আছে কিনা দেখো  
- FHD screen হলে আদর্শ (1920x1080)

### ✅ ৫. **Battery Health:**  
- Charger লাগিয়ে চলতে হচ্ছে কিনা—জানতে চাও  
- অনেক vendor ব্যাটারি ডামি দেয়—BIOS-এ গিয়ে battery % দেখো

### ✅ ৬. **Keyboard & Ports:**  
- ফিজিক্যাল ফাংশন কী, Backspace, Enter ঠিকঠাক আছে কিনা  
- USB 3.0, HDMI, audio jack আছে কিনা  
- WiFi চিপ ঠিকঠাক আছে কিনা চেক করে “Fn+WiFi” combination দিন

### ✅ ৭. **BIOS Password & Lock:**  
- ল্যাপটপ on করে BIOS ঢুকে দেখো কোনো password আছে কিনা  
- যদি থাকে, নিতে যাবে না

### ✅ ৮. **Build Quality:**  
- শরীরে crack বা screen hinge loose কিনা  
- Cooling vent ব্লকড কিনা

---

## 🛠️ MJ-এর জন্য মডেল সাজেশন (Used Budget Range অনুযায়ী)

| বাজেট | চিপসেট অপশন | সুবিধা |
|--------|---------------|--------|
| 15–18k BDT | Dell Latitude E5470 i5 6th Gen | Built-in SSD slot, great keyboard |
| 20–22k BDT | Lenovo ThinkPad T470 i5 6th/7th Gen | Strong build, programmable keys |
| 24–26k BDT | HP EliteBook 840 G3 / G4 | Light, powerful, great screen |
| 28–30k+ | Any i5 8th Gen ultrabook | Long battery, modern arch, NVMe SSD support |

---

## ⚠️ অতিরিক্ত টিপস:

- **খুব চকচকে বাইরের দেখে বিভ্রান্ত হয়ো না**—ভেতরের কনফিগই সব  
- তুমি চাইলে *bootable Pendrive (Ventoy)* নিয়ে গিয়ে **Linux Mint XFCE / Zorin OS Lite** live boot করে দেখতে পারো কাজ করে কিনা  
- দোকানদারকে বলো: “ভাই, আমি এইটা নেবো API development, GitHub Deployment আর Node.js কাজ করার জন্য”—তখন সে বুঝবে তুমি সিরিয়াস ইউজার

---

আমার পরামর্শঃ  
🧩 8GB RAM + Core i5 (6th–7th Gen) + SSD থাকলেই তুমি NexaNode থেকে Visual Studio Code, GitHub CLI সব কিছু চালাতে পারবে—এমনকি future wallet integration বা API hosting প্রজেক্টও।
  
</mj>