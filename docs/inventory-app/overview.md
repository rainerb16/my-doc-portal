---
id: overview
title: Inventory Management System
sidebar_label: Overview
---

# Inventory Management System

This project is a full-stack application designed with a **"Merchant-First"** mindset. It focuses on scannability, data security, and ease of use for non-technical business owners.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="frontend" label="Frontend (UI)">

  ## Inventory Dashboard (UI)
  The frontend utilizes a **stateless** approach to maximize security, ensuring sensitive auth data never hits `localStorage`.

  ### Technical Stack
  - **Library:** React.js (Vite)
  - **State:** React Hooks (`useState`, `useEffect`)
  - **Styling:** Modular Sass (SCSS)

  ### Key Features
  * **Real-Time Dashboard:** Overview of stock levels with low-stock highlighting.
  * **Inline Management:** Update quantities directly from the table view.
  * **Responsive:** Optimized for the warehouse floor (tablet/mobile).

  ### Component Design
  - **Reusability:** Modular SCSS and functional components (Modals, Tables).
  - **User Feedback:** Clear loading states and error boundaries.

  </TabItem>
  <TabItem value="backend" label="Backend (API)">

  ## Inventory Management API
  A robust **Node/Express** REST API designed for admin-style inventory dashboards. This backend handles secure data persistence via **PostgreSQL**.

  ### Technical Highlights
  - **Engine:** Node.js + Express
  - **Persistence:** PostgreSQL with `pg` connection pooling and parameterized queries
  - **Security:** Session-based auth via `HttpOnly` cookies, stored server-side in Postgres (`connect-pg-simple`)
  - **DevOps:** GitHub Actions CI pipeline for automated build verification

  ### API Documentation
  All protected routes require a valid session cookie established via the Auth endpoints.

  #### Authentication
  | Method | Endpoint | Description |
  | :--- | :--- | :--- |
  | `POST` | `/auth/signup` | Register a new account (hashes password via `bcrypt`) |
  | `POST` | `/auth/login` | Authenticate user and initiate session |
  | `GET` | `/me` | Returns details for the currently logged-in user |
  | `POST` | `/auth/logout` | Destroys session and clears client cookie |

  #### Items (Protected)
  | Method | Endpoint | Description |
  | :--- | :--- | :--- |
  | `GET` | `/items` | List all inventory items owned by the current user |
  | `POST` | `/items` | Create a new item record |

  ### Manual Testing (CLI)
  You can verify the authentication flow and data scoping using `curl`:

  **1. Signup:**
  ```bash
  curl -i -c cookies.txt -X POST http://localhost:3000/auth/signup \
    -H "Content-Type: application/json" \
    -d '{"email":"user@test.com","password":"password123"}'
  ```

   **2. Create a item:**
  ```bash
  curl -b cookies.txt -X POST http://localhost:3000/items \
    -H "Content-Type: application/json" \
    -d '{"name":"Inventory Item A","quantity":10}'
  ```
  </TabItem>
</Tabs>

---
 ## Local Setup
  To run the full Inventory Management System locally, follow these steps in order to ensure the frontend can successfully communicate with the backend.

  **1. Database & Environment**
  Ensure PostgreSQL is running, then create the database and apply the schema:
  ```bash
    createdb inventory_app
    psql -d inventory_app < db/schema.sql
  ```

  Create a `.env` file in the root directory:
  ```bash
    PORT=3000
    DATABASE_URL=postgres://localhost:5432/inventory_app
    SESSION_SECRET=your_secret_string
  ```

  **2. Launching the System**
  :::tip[Order of Operations] 
  Always start the Backend first so the Frontend has an API to connect to. 
  :::

  Start Backend (Terminal 1):
  ```bash
    # From the root directory
    npm install
    npm run dev
  ```

  Start Frontend (Terminal 2):
  ```bash
    # If frontend is in a separate folder
    cd frontend
    npm install
    npm run dev
  ```

  The dashboard will be accessible at `http://localhost:5173`.


  ---

## Security & Design Implementation

The Inventory Management System follows a **stateful, "security-first" authentication flow** to protect merchant data from common web vulnerabilities.

* **Data Isolation:** Enforced via a `user_id` foreign key on the `items` table, ensuring users can only access their own data.
* **SQL Injection Protection:** All database interactions utilize parameterized queries (`$1`, `$2`).
* **Stateful Security:** Server-side sessions prevent unauthorized data access even if client-side state is compromised.

:::info[Technical Deep Dive]
I’ve written a detailed breakdown of the session-based authentication architecture, including the logic behind choosing **HttpOnly cookies** over **JWTs**.

**[Read the Security & Auth Deep Dive](./auth-deep-dive.md)**
:::

---


