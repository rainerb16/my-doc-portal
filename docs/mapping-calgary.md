---
title: "Mapping Calgary: Documenting a Logic-Driven CMS Schema"
sidebar_label: Mapping Calgary
description: A case study on documenting complex CMS architecture for municipal data.
---

# Mapping Calgary: Documenting a Logic-Driven CMS Schema

**How I turned a complex React + Contentful mapping system into a simple, error-proof workflow for city operations.**

<span class="published-at">Originally published on [Medium](https://medium.com/@rainerbrieger/mapping-calgary-documenting-a-logic-driven-cms-schema-afe001ee9b9d)</span>

---

## The System Architecture
Our team built an interactive map to track downtown Calgary road closures and detours. To maintain real-time accuracy, the system relied on a three-tier data flow:

* **CMS (Contentful):** Served as the single source of truth for all street-level data.
* **Business Logic (JavaScript):** Parsed CMS data to render visual polylines and SVG markers.
* **UI (React):** Displayed the interactive map and contextual modals for end-users.

## The Challenge: Mapping Attributes to Visual Symbols
The map was dynamic rather than static. It featured several layers of conditional visibility that changed based on user input in the CMS:

* **Status Toggles:** A selection between `Closed` or `Detour` changed the street color on the map.
* **Accessibility Markers:** Toggling `Walking` or `Cycling` accessibility triggered specific SVG icons to appear on the affected street segment.
* **Contextual Modals:** A description field provided details for the closure, appearing only when a user clicked the interactive map area.

If the operations team entered data inconsistently or missed a mandatory field, the JavaScript logic failed. This resulted in incorrect symbols or empty modals, leading to public confusion and increased support tickets for the development team.

---

## The Documentation Solution: Field-Level Guidance
To ensure the JavaScript logic rendered the UI correctly every time, I developed a **Component Reference Guide**. This shifted the team from an ad-hoc process to a standardized data-entry workflow.

### 1. The Entry Lifecycle
I documented the exact sequence required to "activate" a street on the map. These instructions use the imperative mood to ensure clarity:

1.  **Search** for the specific Street or Intersection entry (e.g., *7th Ave & 1st St SW*).
2.  **Select** the Status (`Closed` or `Detour`). 
    * *System Logic:* This choice triggers the CSS-in-JS theme to change the polyline color.
3.  **Toggle** Accessibility options for `Pedestrian Access` or `Bicycle Access`.
    * *System Logic:* These checkboxes append the corresponding SVG icon to the map marker.
4.  **Define** the closure details in the `Description` field (e.g., “Water main repair”).
    * *System Logic:* This text populates the React Modal component on a click event.

### 2. The Data Dictionary (Validation Rules)
I created a data dictionary to prevent "logic breaks" caused by malformed data.

| Field Name | Data Type | Visual Output | Rule |
| :--- | :--- | :--- | :--- |
| **Status** | Dropdown | Red/Yellow Line | **Required.** Map will not render without this selection. |
| **Accessibility** | Multi-select | Icon Overlays | Optional. Icons will auto-stack if both are selected. |
| **Description** | Rich Text | Modal Pop-up | **Recommended.** Modal will appear empty if left blank. |

---

## The Result: A “Self-Serve” Operations Team
By documenting the rules of the system rather than just the buttons, we achieved three key outcomes:

* **UI Consistency:** The map became a reliable source of truth; accessibility symbols and closure colors remained in sync with real-world conditions.
* **User Empowerment:** The operations team began "debugging" their own entries. If a symbol failed to appear, they could identify the missing checkbox without developer intervention.
* **Engineering Efficiency:** The engineering team shifted focus from content maintenance to developing new features, such as real-time transit detour integration.

## Conclusion
As a developer-writer, my goal is to ensure the **Code** and the **User** speak the same language. By documenting the relationship between Contentful schemas and React components, I transformed a complex technical tool into a sustainable community resource.

---

> **Technical Stack:** Headless CMS, JSON Schema, OpenAPI, Docusaurus.
> 
> *Interested in the full technical breakdown? [Check out the original article on Medium.](https://medium.com/@rainerbrieger/mapping-calgary-documenting-a-logic-driven-cms-schema-afe001ee9b9d)*