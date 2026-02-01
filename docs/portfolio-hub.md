---
title: Documentation Portfolio
sidebar_label: Portfolio Hub
slug: /portfolio-hub
---

# Documentation Projects

Welcome to my technical documentation showcase. Below are examples of API portals and documentation suites I have engineered.

---

### Mapping Calgary: CMS Schema Design
<span class="badge badge--primary">Information Architecture</span> <span class="badge badge--info">CMS Strategy</span> <span class="badge badge--success">Logic-Driven Docs</span>

**The Project:**
A deep dive into documenting a complex, logic-driven CMS schema for a municipal mapping project. This highlights my ability to translate abstract data relationships into clear, actionable documentation for developers and stakeholders.

[**Read the Case Study**](/docs/mapping-calgary) | [**View Original on Medium**](https://medium.com/@rainerbrieger/mapping-calgary-documenting-a-logic-driven-cms-schema-afe001ee9b9d)


---

### Inventory Management System: Full-Stack Security
<span class="badge badge--primary">React.js</span> <span class="badge badge--info">Node/Express</span> <span class="badge badge--success">PostgreSQL</span> <span class="badge badge--warning">Security Architecture</span>

**The Project:**
A full-stack application built with a **"Merchant-First"** mindset. This project showcases my ability to document the interaction between a React frontend and a secure Node.js backend. It features a deep dive into stateful session-based authentication using `HttpOnly` cookies and strict data isolation.

[**View Inventory Overview**](/docs/inventory-app/inventory-overview) | [**Read the Auth Deep Dive**](/docs/inventory-app/auth-deep-dive)


---

### CI/CD: Automated Documentation Pipeline
<span class="badge badge--primary">GitHub Actions</span> <span class="badge badge--info">YAML</span> <span class="badge badge--success">Automation</span>

**The Problem:** Manual deployments are prone to human error and version drift. I needed a way to ensure that as soon as a technical writer or developer pushes a change, the live site is updated instantly.

**The Solution:**
I engineered a custom GitHub Actions workflow that triggers on every `push` to the `main` branch. 
* **Environment:** Ubuntu-latest runner.
* **Process:** Automatically installs dependencies, executes the Docusaurus build script, and deploys the static assets to GitHub Pages.
* **Security:** Utilizes encrypted `GITHUB_TOKEN` secrets for secure deployment permissions.

[**View automated pipeline documentation**](/docs/automated-pipeline.md)


---

### Petstore API (Interactive Sandbox)

<span class="badge badge--primary">OpenAPI 3.0</span> <span class="badge badge--info">Docusaurus</span> <span class="badge badge--success">REST API</span>

**The Project:**
This project demonstrates a full integration of a REST API into a documentation site. It features a live "Send Request" console, automated code snippet generation, and a responsive three-column layout.

[**View Petstore Documentation**](/docs/petstore/swagger-petstore)

---