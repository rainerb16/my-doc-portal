---
title: CI/CD Automation
sidebar_label: CI/CD Pipeline
---

# CI/CD: Automated Documentation Pipeline

In a modern "Docs-as-Code" environment, the gap between writing and publishing should be zero. I engineered this portal's deployment pipeline to ensure that every technical update is validated and live within minutes.

## The Architecture
This pipeline uses **GitHub Actions** to create a reproducible build environment. By automating the deployment, I've eliminated "version drift" where the live documentation doesn't match the latest code in the repository.



### Key Automation Stages
* **Triggers:** The workflow is configured to listen for `push` events specifically on the `main` branch.
* **Environment Setup:** It initializes an `ubuntu-latest` virtual machine and installs Node.js version 18.
* **Dependency Management:** The pipeline caches `npm` modules to speed up subsequent builds.
* **Static Generation:** It runs `npm run build`, which compiles the React-based Docusaurus site into highly optimized static HTML, CSS, and JS.
* **Secure Deployment:** Using the `peaceiris/actions-gh-pages` action, the build assets are securely pushed to the `gh-pages` branch using an encrypted `GITHUB_TOKEN`.

## The Impact
* **Reliability:** No manual dragging of files or local build errors reaching the public.
* **Speed:** The entire process from "Git Push" to "Live Site" takes under 3 minutes.
* **Scalability:** This same YAML structure can be scaled to include automated link checking or pull request previews.

---

### Technical Deep Dive
For those interested in the underlying automation logic, you can view the raw YAML configuration file here:

[**View Workflow Config**](https://github.com/rainerb16/my-doc-portal/blob/main/.github/workflows/deploy.yml)