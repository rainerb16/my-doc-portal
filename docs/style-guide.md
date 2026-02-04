---
id: style-guide
sidebar_label: Style Guide
---

# Documentation Style Guide

This guide defines the standards for all technical content within this portfolio. Adhering to these rules ensures that the documentation remains consistent, accessible, and professional.

---

## Voice and Tone
I follow the **Google Technical Writing** philosophy: be direct, be clear, and focus on the user's goals.

* **Active Voice:** Always favour active over passive voice. 
  * *Correct:* "Click the **Add** button."
  * *Incorrect:* "The **Add** button should be clicked."
* **Person:** Use the second person ("You") to address the reader.
* **Clarity:** Avoid idioms. If a word doesn't add value, remove it.

---

## Terminology Standards
To maintain consistency across the Vue.js main site and this Docusaurus portal, I use the following standard terms:

| Term | Use Case | Avoid |
| :--- | :--- | :--- |
| **Sign in** | When a user enters credentials. | Login, Log on |
| **Sign up** | When a user creates an account. | Register |
| **Merchant** | The primary user of the Inventory App. | Client, Guy, Admin |
| **Endpoint** | Referring to a specific API URL. | Link, Route |

---

## Formatting & UI Elements
Consistent styling helps users scan documentation quickly.

* **UI Components:** Bold all buttons, menus, and screen names (e.g., "Navigate to the **Settings** menu").
* **Code Snippets:** * Use `inline backticks` for file names (`package.json`) and variables.
  * Use fenced code blocks with language identifiers (e.g., ```json) for snippets.
* **Admonitions:** Use Docusaurus "Callouts" to highlight non-linear information:
  * `:::tip` for helpful shortcuts.
  * `:::warning` for actions that could cause data loss (like Delete).

---

## Media and Accessibility
* **Screenshots:** Must be cropped to the relevant area of the interface.
* **Alt Text:** Every image must include descriptive Alt Text for screen readers.
* **File Storage:** All images must be stored in the `/static/img/` directory to ensure stable build paths.

---

## Tools Used
* **Framework:** Docusaurus (React-based)
* **Writing:** Markdown (MDX)
* **Deployment:** GitHub Actions (CI/CD)
* **Version Control:** Git