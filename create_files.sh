#!/bin/bash

# মূল ডিরেক্টরির পথ (আপনার নিজের পথটি এখানে ব্যবহার করুন)
main_directory="C:/Users/Public/mjahmad/directory/trusted-ally-dir/projects/educational-project/the-holy-book-project/research/ayah"

# 1 থেকে 6666 পর্যন্ত লুপ চালানো
for i in $(seq 01 6666)
do
  # ফোল্ডারের নাম তৈরি করুন
  folder_path="$main_directory/$i"
  
  # ফোল্ডারটি নিশ্চিত করার জন্য তৈরি করুন (যদি না থাকে)
  mkdir -p "$folder_path"
  
  # প্রতিটি ফোল্ডারে ফাইল তৈরি করুন
  touch "$folder_path/index.html"
  touch "$folder_path/README.md"
  touch "$folder_path/overview.json"
done

echo "ফাইল তৈরি সম্পন্ন হয়েছে!"
