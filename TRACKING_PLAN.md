# WEB-03 U+ Community Growth Funnel
## Analytics & Conversion Tracking Plan

## 1. Purpose

This tracking plan defines the recommended analytics events for the U+ Community website and Program Discovery prototype.

The goal is to provide a consistent event taxonomy that a future site administrator could implement using Wix Analytics, Google Analytics, Google Tag Manager, or another approved analytics platform.

This project does not require access to production analytics or private visitor-level data.

## 2. Tracking Principles

- Track user actions that represent meaningful conversion intent.
- Use consistent event names across future U+ program pages.
- Use structured parameters so events can be analyzed by page, program, audience, and conversion type.
- Do not collect visitor names, email addresses, IP addresses, or other personal-level information.
- Track only approved public website interactions.
- Use lowercase event names with underscores between words.

## 3. Event Taxonomy

| Event Name | Trigger | Suggested Parameters |
|---|---|---|
| `program_card_view` | User sees an opportunity card | `opportunity_id`, `category`, `audience` |
| `program_card_click` | User opens an opportunity | `opportunity_id`, `source_page` |
| `volunteer_apply_click` | User selects a volunteer application CTA | `page_path`, `cta_text`, `destination_url` |
| `camp_register_click` | User selects a camp registration CTA | `page_path`, `camp_name`, `cta_text` |
| `event_rsvp_click` | User selects an event RSVP CTA | `event_name`, `page_path` |
| `job_apply_click` | User selects a paid-role application CTA | `role_name`, `page_path` |
| `mailing_list_start` | User begins mailing-list interaction | `page_path`, `placement` |
| `mailing_list_submit` | Mailing-list submission succeeds, if technically measurable | `page_path`, `placement` |
| `contact_click` | User selects an email, phone, or contact CTA | `contact_type`, `page_path` |
| `donate_click` | User selects a donation CTA | `page_path`, `placement` |

## 4. Parameter Definitions

### `opportunity_id`

Unique identifier for an opportunity in the Program Discovery data.

Example:

`volunteer-connect`

### `category`

Opportunity category used in the discovery interface.

Examples:

- Volunteer Opportunities
- Camps & Youth Programs
- Networking & Community Events
- Public Speaking / Seniors Programming
- Paid / Summer Opportunities
- Mailing List / Stay Updated

### `audience`

Intended audience for an opportunity.

Examples:

- Youth
- Young Adults
- Children
- Community

### `source_page`

The public U+ page associated with the selected opportunity.

Example:

`/volunteer`

### `page_path`

Path of the page where the tracked action occurred.

Example:

`/summer-camps`

### `cta_text`

Visible text of the selected call-to-action.

Examples:

- Sign Up
- Register Now
- Apply Now
- RSVP Now
- Join Mailing List

### `destination_url`

Public destination URL opened after the CTA is selected.

### `camp_name`

Name of the camp associated with a registration action.

Example:

`Public Speaking Camp`

### `event_name`

Name of the event associated with an RSVP action.

### `role_name`

Name of the paid or summer role associated with an application action.

### `placement`

Location of the CTA within the page or Program Discovery interface.

Examples:

- header
- featured
- program_card
- mailing_section
- footer

### `contact_type`

Type of contact action selected by the visitor.

Examples:

- email
- phone
- contact_form

## 5. Program Discovery Tracking Flow

The Program Discovery prototype supports the following future tracking flow:

1. An opportunity card becomes visible.
2. `program_card_view` is recorded.
3. The user selects the opportunity.
4. `program_card_click` is recorded.
5. The user reaches the related public U+ page.
6. A conversion CTA may then be selected.
7. The relevant conversion event is recorded, such as `volunteer_apply_click`, `camp_register_click`, `event_rsvp_click`, or `job_apply_click`.

This structure allows U+ to measure both program discovery activity and downstream conversion intent.

## 6. Primary Growth KPIs

| KPI | Definition |
|---|---|
| Program Discovery CTR | Program card clicks / Program card views |
| Primary CTA CTR | Primary CTA clicks / Page views or sessions |
| Volunteer Application Click Rate | Volunteer apply clicks / Volunteer page views |
| Camp Registration Click Rate | Camp registration clicks / Camp page views |
| Event RSVP Click Rate | Event RSVP clicks / Event page views |
| Mailing List Conversion Rate | Successful mailing-list submissions / Mailing-list starts or eligible page sessions |
| Contact Intent Rate | Contact clicks / Page sessions |
| Program-to-Action Rate | Any defined conversion action / Program-page sessions |

## 7. Recommended Reporting Dimensions

Future reporting should allow events to be analyzed by:

- Page path
- Opportunity
- Opportunity category
- Audience
- CTA text
- Conversion type
- Placement
- Date

## 8. Optional Analytics Export

If U+ provides an approved analytics export, it should be used as an additional evidence layer without changing the current project structure.

Recommended aggregate fields:

- Date
- Page Path
- Page Title
- Views
- Sessions
- Users
- Average Engagement Time
- Existing click events
- Existing form or conversion events

Do not request or use:

- Visitor names
- Email addresses
- IP addresses
- Personal-level visitor records

## 9. Implementation Notes

The event taxonomy is platform-independent.

It could later be implemented using:

- Wix Analytics
- Google Analytics
- Google Tag Manager
- Another U+-approved analytics platform

Actual production implementation, analytics credentials, and tag deployment are outside the scope of this project.

## 10. Current Project Limitation

The current WEB-03 project uses public website audit data and a standalone prototype.

No production analytics access was provided, so conversion events and KPI formulas are specifications for future implementation rather than measured production results.