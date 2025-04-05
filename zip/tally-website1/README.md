# Trusted Ally Website

This is the official repository for the Trusted Ally Website, a platform dedicated to various social initiatives and projects.

## Features

- Home page with overview of our initiatives
- Detailed pages for each project (TechAlly Ventures, Ally Voyage, AlQuranJourney)
- Volunteer registration form
- Investment and donation pages
- Schedule consultation feature

## New Feature: Schedule Consultation

We've added a new feature that allows users to schedule consultations. This feature includes:

- A calendar-based booking system
- 30-minute time slots from 11 AM to 4 PM
- Automatic email confirmation upon successful booking

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`

## Environment Variables

For the consultation scheduling feature to work properly, you need to set up the following environment variables:

- `SMTP_HOST`: Your SMTP server host (e.g., smtp.office365.com for Outlook)
- `SMTP_PORT`: Your SMTP server port (e.g., 587 for Outlook)
- `SMTP_SECURE`: Whether to use a secure connection (true/false)
- `SMTP_USER`: Your email address
- `SMTP_PASS`: Your email password or app password (if using 2FA)

### Setting up Environment Variables

#### For Local Development:

Create a `.env.local` file in the root directory of your project and add the following:

