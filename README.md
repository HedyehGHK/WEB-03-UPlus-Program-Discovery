# WEB-03 U+ Program Discovery Prototype

## Project Purpose

This project is part of the WEB-03 U+ Community Growth Funnel project.

The purpose of the Program Discovery prototype is to consolidate public U+ Community programs and opportunities into one searchable and filterable experience.

The prototype allows users to discover opportunities by keyword, category, audience, delivery format, and status.

Each opportunity links back to an existing public U+ Community page or approved public destination.

## Features

- Keyword search
- Filter by opportunity category
- Filter by audience
- Filter by delivery format
- Filter by status
- Featured opportunity section
- Data-driven opportunity cards
- Empty-state message when no results match
- Mailing-list call-to-action
- Responsive desktop, tablet, and mobile layouts
- Keyboard-accessible controls
- Visible focus states
- Links to existing U+ Community public pages

## Technology

- React
- Vite
- JavaScript
- CSS

## Project Structure

```text
WEB-03_UPlus_Program_Discovery/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── data.js
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Setup

Clone or download the repository.

Install project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local Vite URL shown in the terminal, usually:

```text
http://localhost:5173/
```

## Opportunity Data

Opportunity content is stored in:

```text
src/data.js
```

The prototype uses structured data instead of duplicated card HTML.

Example opportunity object:

```js
{
  id: "volunteer-connect",
  title: "Youth Volunteer Connect",
  category: "Volunteer Opportunities",
  audience: ["Youth", "Young Adults"],
  format: ["In-Person", "Virtual"],
  status: "Current",
  shortDescription:
    "A free volunteer program with training, mentorship, supervised placements, and opportunities to earn volunteer hours.",
  sourceUrl: "https://www.upluscommunity.org/volunteer",
  primaryCTA: "Sign Up",
  trackingCategory: "Volunteer Application",
  featured: true
}
```

## Data Schema

Each opportunity contains the following fields:

- `id` - Unique opportunity identifier
- `title` - Opportunity name
- `category` - Opportunity category
- `audience` - Intended audience
- `format` - Delivery format
- `status` - Current opportunity status
- `shortDescription` - Short description displayed on the card
- `sourceUrl` - Public destination URL
- `primaryCTA` - Call-to-action text
- `trackingCategory` - Conversion tracking category
- `featured` - Controls whether the opportunity appears in the featured section

## Adding or Updating an Opportunity

To add a new opportunity:

1. Open `src/data.js`.
2. Add a new object to the `opportunities` array.
3. Give the opportunity a unique `id`.
4. Use an appropriate category, audience, format, and status.
5. Add the correct public U+ Community destination URL.
6. Confirm that the opportunity is supported by a current public U+ Community page.
7. Set `featured: true` only when the opportunity should appear in the featured section.

To update an existing opportunity, edit the corresponding object in `src/data.js`.

Because the interface is rendered from structured data, the opportunity cards update automatically when the data is changed.

## Content Rule

Every opportunity included in this prototype must be traceable to a current public U+ Community page or approved public destination.

Fictional programs, dates, fees, or registration information should not be added merely to fill the interface.

## Responsive Design

The prototype was designed and tested for:

- Desktop
- Tablet
- Mobile

The layout adapts the filters, opportunity cards, navigation, and content sections for smaller screen sizes.

## Accessibility

The prototype includes:

- Semantic HTML
- Descriptive form labels
- Keyboard-accessible search and filter controls
- Visible focus states
- Responsive controls and text
- Accessible empty-state interaction

## Analytics

A separate tracking specification defines recommended future analytics events for the Program Discovery experience.

Suggested events include:

- `program_card_view`
- `program_card_click`
- `volunteer_apply_click`
- `camp_register_click`
- `event_rsvp_click`
- `job_apply_click`
- `mailing_list_start`
- `mailing_list_submit`
- `contact_click`
- `donate_click`

Production analytics implementation is outside the scope of this prototype.

## Known Limitations

- The prototype uses manually reviewed public U+ Community content.
- It is not connected to the live U+ CMS.
- It does not automatically update when public U+ website content changes.
- Production analytics tracking is not implemented.
- Registration and application actions are handled through existing public U+ destination pages.
- Opportunity status and destination URLs should be reviewed before final deployment.
- The prototype is intended as a standalone discovery experience and not as a replacement for the current live website.

## Project Scope

This repository contains the standalone Program Discovery prototype only.

The complete WEB-03 U+ Community Growth Funnel project also includes:

- Website Growth Audit
- Python Audit Pipeline
- SQLite Analytical Model
- SQL Queries
- Figma Wireframes
- Analytics Tracking Specification
- Power BI Dashboard
- Final Recommendation Memo