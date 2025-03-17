#!/bin/bash

base_directory="C:/Users/Public/mjahmad/directory/trusted-ally-dir/projects/email"

# ডিরেক্টরি স্ট্রাকচার তৈরি
mkdir -p "$base_directory/assets/images" && echo "Created: assets/images" || echo "Failed to create: assets/images"
mkdir -p "$base_directory/assets/logos" && echo "Created: assets/logos" || echo "Failed to create: assets/logos"
mkdir -p "$base_directory/assets/templates" && echo "Created: assets/templates" || echo "Failed to create: assets/templates"
mkdir -p "$base_directory/audience" && echo "Created: audience" || echo "Failed to create: audience"
mkdir -p "$base_directory/audience/feedback" && echo "Created: audience/feedback" || echo "Failed to create: audience/feedback"
mkdir -p "$base_directory/campaign/campaign-1/analytics" && echo "Created: campaign/campaign-1/analytics" || echo "Failed to create: campaign/campaign-1/analytics"
mkdir -p "$base_directory/campaign/campaign-2/analytics" && echo "Created: campaign/campaign-2/analytics" || echo "Failed to create: campaign/campaign-2/analytics"
mkdir -p "$base_directory/configs" && echo "Created: configs" || echo "Failed to create: configs"
mkdir -p "$base_directory/reports" && echo "Created: reports" || echo "Failed to create: reports"
mkdir -p "$base_directory/scripts" && echo "Created: scripts" || echo "Failed to create: scripts"

# ফাইল তৈরি
touch "$base_directory/audience/subscribers.csv" && echo "Created: subscribers.csv" || echo "Failed to create: subscribers.csv"
touch "$base_directory/audience/segmentation.json" && echo "Created: segmentation.json" || echo "Failed to create: segmentation.json"
touch "$base_directory/campaign/campaign-1/content.md" && echo "Created: campaign-1/content.md" || echo "Failed to create: campaign-1/content.md"
touch "$base_directory/campaign/campaign-1/schedule.json" && echo "Created: campaign-1/schedule.json" || echo "Failed to create: campaign-1/schedule.json"
touch "$base_directory/campaign/campaign-2/content.md" && echo "Created: campaign-2/content.md" || echo "Failed to create: campaign-2/content.md"
touch "$base_directory/campaign/campaign-2/schedule.json" && echo "Created: campaign-2/schedule.json" || echo "Failed to create: campaign-2/schedule.json"
touch "$base_directory/configs/smtp-config.json" && echo "Created: smtp-config.json" || echo "Failed to create: smtp-config.json"
touch "$base_directory/configs/campaign-settings.json" && echo "Created: campaign-settings.json" || echo "Failed to create: campaign-settings.json"
touch "$base_directory/reports/engagement.csv" && echo "Created: engagement.csv" || echo "Failed to create: engagement.csv"
touch "$base_directory/reports/performance-summary.md" && echo "Created: performance-summary.md" || echo "Failed to create: performance-summary.md"
touch "$base_directory/scripts/send_emails.py" && echo "Created: send_emails.py" || echo "Failed to create: send_emails.py"
touch "$base_directory/scripts/validate_list.py" && echo "Created: validate_list.py" || echo "Failed to create: validate_list.py"
touch "$base_directory/scripts/analytics_tool.py" && echo "Created: analytics_tool.py" || echo "Failed to create: analytics_tool.py"
touch "$base_directory/README.md" && echo "Created: README.md" || echo "Failed to create: README.md"

echo "স্ট্রাকচার এবং ফাইল তৈরি সম্পন্ন হয়েছে!"
