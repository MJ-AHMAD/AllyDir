#!/bin/bash

# Base directory
BASE_DIR="C:/Users/Public/mjahmad/directory/trusted-ally-dir/projects/social_projects/bangladesh_aria"

# Division and district mapping
declare -A DIVISIONS_AND_DISTRICTS

DIVISIONS_AND_DISTRICTS["Dhaka"]="Dhaka Faridpur Gazipur Gopalganj Kishoreganj Madaripur Manikganj Munshiganj Narayanganj Narsingdi Rajbari Shariatpur Tangail"
DIVISIONS_AND_DISTRICTS["Chattogram"]="Bandarban Brahmanbaria Chandpur Chattogram Cox's_Bazar Cumilla Feni Khagrachari Lakshmipur Noakhali Rangamati"
DIVISIONS_AND_DISTRICTS["Rajshahi"]="Bogura Chapai_Nawabganj Joypurhat Naogaon Natore Pabna Rajshahi Sirajganj"
DIVISIONS_AND_DISTRICTS["Khulna"]="Bagerhat Chuadanga Jashore Jhenaidah Khulna Kushtia Magura Meherpur Narail Satkhira"
DIVISIONS_AND_DISTRICTS["Barishal"]="Barguna Barishal Bhola Jhalokati Patuakhali Pirojpur"
DIVISIONS_AND_DISTRICTS["Sylhet"]="Habiganj Moulvibazar Sunamganj Sylhet"
DIVISIONS_AND_DISTRICTS["Rangpur"]="Dinajpur Gaibandha Kurigram Lalmonirhat Nilphamari Panchagarh Rangpur Thakurgaon"
DIVISIONS_AND_DISTRICTS["Mymensingh"]="Jamalpur Mymensingh Netrokona Sherpur"

# Create directories
for division in "${!DIVISIONS_AND_DISTRICTS[@]}"; do
    DIVISION_DIR="$BASE_DIR/$division"
    mkdir -p "$DIVISION_DIR"  # Create division directory
    
    # Create district directories
    for district in ${DIVISIONS_AND_DISTRICTS[$division]}; do
        mkdir -p "$DIVISION_DIR/$district"
    done
done

echo "All directories have been created successfully!"