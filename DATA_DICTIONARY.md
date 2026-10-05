# WEB-03 U+ Community Growth Funnel
## Data Dictionary

## 1. Purpose

This data dictionary defines the audit fields and derived fields used in the WEB-03 U+ Community Growth Funnel project.

It is intended to help another analyst or developer understand the meaning, expected values, and role of each field across the audit workbook, Python exports, and SQL model.

## 2. Source Inventory

| Field | Definition |
|---|---|
| `Page_URL` | Public U+ Community page URL reviewed during the audit. |
| `Page_Type` | General type or purpose of the page, such as home, program, event, or volunteer page. |
| `Access_Date` | Date the public page was reviewed. |
| `Status` | Review status of the source page. |
| `Notes` | Additional observations about the page source. |

## 3. Page Inventory

| Field | Definition |
|---|---|
| `Page_ID` | Unique identifier assigned to each reviewed page. |
| `Page_URL` | Public URL of the reviewed page. |
| `Page_Title` | Title displayed for the page. |
| `Page_Type` | General page classification. |
| `Primary_Audience` | Main intended audience for the page. |
| `Primary_Goal` | Main user action or purpose of the page. |
| `Primary_CTA` | Main call-to-action identified on the page. |
| `Secondary_CTA` | Secondary call-to-action identified on the page. |
| `Program_Area` | U+ program or service area associated with the page. |
| `Time_Sensitive_Flag` | Indicates whether the page contains information that may become outdated over time. Expected values: `Yes` or `No`. |
| `H1_Count` | Number of H1 headings identified on the page. |
| `H2_Count` | Number of H2 headings identified on the page. |
| `Word_Count` | Approximate number of visible words on the page. |
| `Internal_Link_Count` | Number of links pointing to other U+ pages or internal destinations. |
| `External_Link_Count` | Number of links pointing to external websites or destinations. |
| `CTA_Count` | Number of identified calls-to-action on the page. |
| `Form_or_Signup_Present` | Indicates whether a form or signup interaction is present. |
| `Mailing_List_Present` | Indicates whether a mailing-list form or mailing-list CTA is present. |
| `Last_Reviewed_Date` | Most recent date the page was manually reviewed. |
| `Priority_Notes` | Important page-level issue or follow-up note. |

## 4. CTA Inventory

| Field | Definition |
|---|---|
| `CTA_ID` | Unique identifier assigned to each CTA. |
| `Page_ID` | Identifier of the page where the CTA appears. |
| `Page_URL` | Public URL of the page containing the CTA. |
| `CTA_Text` | Visible text shown on the button or action link. |
| `CTA_Type` | Type of CTA, such as button or link. |
| `Destination_URL` | URL or destination opened when the CTA is selected. |
| `Conversion_Category` | Type of conversion action associated with the CTA, such as Registration, Volunteer, Contact, Jobs, or Mailing List. |
| `Above_Fold_Flag` | Indicates whether the CTA is visible before the initial page scroll. |
| `Mobile_Visible_Flag` | Indicates whether the CTA is clearly visible on mobile. |
| `Tracking_Event_Name` | Recommended analytics event name for future tracking. |
| `Notes` | Additional CTA-specific observations. |

## 5. Link QA

| Field | Definition |
|---|---|
| `Link_ID` | Unique identifier assigned to each reviewed link. |
| `Page_ID` | Identifier of the source page containing the link. |
| `Source_URL` | URL of the page where the link appears. |
| `Link_Text` | Visible clickable text associated with the link. |
| `Link_Type` | Indicates whether the link is internal or external. |
| `Destination_URL` | URL or destination opened by the link. |
| `Destination_Status` | Result of the link review. Expected values may include `Working`, `Broken`, `Redirect`, or `Unresolved`. |
| `Notes` | Additional information about the link behavior or issue. |

## 6. Content Freshness

| Field | Definition |
|---|---|
| `Freshness_ID` | Unique identifier assigned to each freshness observation. |
| `Page_ID` | Identifier of the page where the content appears. |
| `Page_URL` | Public URL of the reviewed page. |
| `Content_Item` | Specific content item or section being reviewed for freshness. |
| `Visible_Date_or_Status` | Date or status exactly as displayed on the public website. |
| `Time_Sensitive_Flag` | Indicates whether the content may become outdated. |
| `Freshness_Status` | Current freshness assessment, such as `Current`, `Outdated`, or `Needs Review`. |
| `Review_Needed` | Indicates whether manual follow-up or correction is required. |
| `Review_Date` | Date the content freshness item was reviewed. |
| `Notes` | Explanation or follow-up information related to the freshness issue. |

## 7. UX Audit

| Field | Definition |
|---|---|
| `UX_ID` | Unique identifier assigned to each UX observation. |
| `Page_ID` | Identifier of the reviewed page. |
| `Page_URL` | Public URL of the reviewed page. |
| `Device` | Device or viewport context used during the review, such as Desktop or Mobile. |
| `Area_Checked` | UX area being reviewed, such as CTA hierarchy, navigation, or program discovery. |
| `Finding` | Actual UX observation recorded during the review. |
| `Severity` | Relative seriousness of the UX issue. Expected values may include `Low`, `Medium`, `High`, or `Pending Review`. |
| `Recommended_Action` | Suggested action to improve the identified UX issue. |
| `Review_Date` | Date the UX review was performed. |
| `Notes` | Additional UX observations or follow-up information. |

## 8. SEO and Accessibility

| Field | Definition |
|---|---|
| `Page_ID` | Identifier of the reviewed page. |
| `Page_URL` | Public URL of the reviewed page. |
| `Page_Title` | Page title observed during the review. |
| `H1_Count` | Number of H1 headings on the page. |
| `Heading_Order_Status` | Assessment of heading hierarchy and order. Expected values may include `Pass`, `Needs Review`, or `Issue`. |
| `Alt_Text_Status` | Assessment of image alt text. Expected values may include `Pass`, `Needs Review`, or `Issue`. |
| `Metadata_Status` | Assessment of reviewed metadata. Expected values may include `Verified`, `Not Verified`, or `Needs Review`. |
| `Overall_Status` | Overall SEO/accessibility review result for the page. |

## 9. Recommendations

| Field | Definition |
|---|---|
| `Recommendation_ID` | Unique identifier assigned to each recommendation. |
| `Page_ID` | Identifier of the page associated with the recommendation. |
| `Page_URL` | Public URL of the affected page. |
| `Issue` | Problem or opportunity identified during the audit. |
| `Recommended_Action` | Proposed improvement or corrective action. |
| `Priority` | Relative implementation priority. |
| `Effort` | Estimated implementation effort. |
|| `Expected_Business_Impact` | Expected effect of the recommendation on business, conversion, or user-experience goals. |
| `Category` | Recommendation category, such as UX, Accessibility, Links, SEO, CTA, Freshness, or Navigation. |
| `Evidence_or_Reason` | Audit evidence or reason supporting the recommendation. |
| `Status` | Current status of the recommendation, such as Open or Completed. |

## 10. Python Page Audit Export

| Field | Definition |
|---|---|
| `reviewed_url` | URL submitted to the audit script for review. |
| `crawl_timestamp` | Date and time when the automated page request was made. |
| `status_code` | HTTP response status code returned by the page request. |
| `final_url` | Final URL after any redirect. |
| `page_title` | Page title extracted automatically from the page. |
| `h1_text` | Text of the first identified H1 heading. |
| `h2_text` | Extracted H2 heading text. |
| `internal_link_count` | Number of internal links identified automatically. |
| `external_link_count` | Number of external links identified automatically. |
| `cta_count` | Number of CTA-like elements detected by the script. |
| `request_error` | Error message recorded if the automated request failed. |

## 11. Python CTA Audit Export

| Field | Definition |
|---|---|
| `page_url` | Page where the CTA was detected. |
| `cta_text` | Text associated with the detected CTA. |
| `cta_type` | HTML or interaction type of the detected CTA. |
| `destination_url` | Destination associated with the CTA. |
| `conversion_category` | Assigned conversion category when available. |
| `tracking_event_name` | Suggested tracking event associated with the CTA when available. |

## 12. Python Link Audit Export

| Field | Definition |
|---|---|
| `source_url` | Page where the link was detected. |
| `link_text` | Visible text associated with the link. |
| `link_type` | Internal or external link classification. |
| `destination_url` | Destination URL of the link. |
| `destination_status` | Review status assigned to the destination. |

## 13. SQL Model

### `pages`

| Field | Definition |
|---|---|
| `page_id` | Primary key for each page. |
| `page_url` | Public page URL. |
| `page_title` | Page title. |
| `page_type` | Page classification. |
| `primary_audience` | Main intended audience. |
| `primary_goal` | Main page objective. |
| `primary_cta` | Primary CTA. |
| `secondary_cta` | Secondary CTA. |
| `program_area` | Related program area. |
| `time_sensitive_flag` | Indicates whether the page contains time-sensitive content. |
| `h1_count` | Number of H1 headings. |
| `h2_count` | Number of H2 headings. |
| `word_count` | Approximate page word count. |
| `internal_link_count` | Number of internal links. |
| `external_link_count` | Number of external links. |
| `cta_count` | Number of CTAs. |
| `form_or_signup_present` | Indicates whether a form or signup element is present. |

### `ctas`

| Field | Definition |
|---|---|
| `cta_id` | Primary key for each CTA. |
| `page_id` | Foreign key linking the CTA to the related page. |
| `cta_text` | Visible CTA text. |
| `cta_type` | CTA type. |
| `destination_url` | CTA destination. |
| `conversion_category` | Conversion purpose associated with the CTA. |
| `tracking_event_name` | Recommended analytics event name. |

### `links`

| Field | Definition |
|---|---|
| `link_id` | Primary key for each reviewed link. |
| `page_id` | Foreign key linking the link to the related page. |
| `source_url` | Page containing the link. |
| `link_text` | Visible link text. |
| `link_type` | Internal or external classification. |
| `destination_url` | Link destination. |
| `destination_status` | Link QA status. |

### `page_audit`

| Field | Definition |
|---|---|
| `page_id` | Identifier of the related page. |
| `crawl_date` | Date associated with the automated audit record. |
| `status_code` | HTTP response status from the automated request. |
| `final_url` | Final resolved URL. |
| `page_title` | Automatically extracted page title. |
| `h1_text` | Automatically extracted H1 text. |
| `h2_text` | Automatically extracted H2 text. |
| `internal_link_count` | Automated internal-link count. |
| `external_link_count` | Automated external-link count. |
| `cta_count` | Automated CTA count. |
| `request_error` | Request or crawl error if one occurred. |

### `analytics_daily`

| Field | Definition |
|---|---|
| `date` | Reporting date. |
| `page_path` | Website page path. |
| `views` | Aggregate page views if approved analytics data is provided. |
| `sessions` | Aggregate sessions if available. |
| `users` | Aggregate users if available. |
| `average_engagement_time` | Aggregate engagement time if available. |

### `events_daily`

| Field | Definition |
|---|---|
| `date` | Reporting date. |
| `event_name` | Analytics event name. |
| `page_path` | Page path associated with the event. |
| `event_count` | Aggregate count of the event. |

## 14. Derived Fields and Metrics

| Field / Metric | Definition |
|---|---|
| `Pages_With_Primary_CTA` | Number of reviewed pages where `Primary_CTA` is populated. |
| `Pages_Requiring_Freshness_Review` | Number of pages or freshness records flagged for review. |
| `Broken_Links` | Number of links classified as broken or unresolved. |
| `Average_CTAs_Per_Page` | Total identified CTAs divided by total reviewed pages. |
| `High_Priority_Recommendations` | Number of recommendations classified as high priority. |
| `Program_Discovery_CTR` | Program card clicks divided by program card views. |
| `Primary_CTA_CTR` | Primary CTA clicks divided by page views or sessions. |
| `Volunteer_Application_Click_Rate` | Volunteer application clicks divided by Volunteer page views. |
| `Camp_Registration_Click_Rate` | Camp registration clicks divided by camp page views. |
| `Event_RSVP_Click_Rate` | Event RSVP clicks divided by event page views. |
| `Mailing_List_Conversion_Rate` | Successful mailing-list submissions divided by mailing-list starts or eligible page sessions. |
| `Contact_Intent_Rate` | Contact clicks divided by page sessions. |
| `Program_to_Action_Rate` | Any defined conversion action divided by program-page sessions. |
| `Total_Pages` | Total number of reviewed pages in the Page Inventory. |
| `Total_CTAs` | Total number of identified CTA records in the CTA Inventory. |
| `CTA_Issue` | Power BI page-level classification showing whether a page has a Missing Primary CTA, Competing CTA, or Clear CTA status based on the audit evidence. |

## 15. Data Handling Notes

- Public website data should be recorded as observed during the review.
- Time-sensitive information should not be inferred or invented.
- Aggregate analytics may be added later if U+ provides an approved export.
- Personal visitor data should not be stored in the project.
- Identifiers such as `Page_ID`, `CTA_ID`, `Link_ID`, and recommendation IDs should remain unique.
- Derived metrics should be calculated from the documented source fields rather than manually estimated.