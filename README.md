# GearLink CRM

Welcome to **GearLink**, a comprehensive CRM and business management application built with Next.js and Firebase, designed specifically for auto parts stores. GearLink leverages AI-powered features to streamline operations, enhance customer engagement, and boost sales.

This project was built in Firebase Studio.

## Key Features

- **Authentication**: Secure user sign-up and login functionality using Firebase Authentication.
- **Dashboard**: An at-a-glance overview of key business metrics, including total revenue, customer statistics, stock levels, and recent sales activity.
- **Point of Sale (POS)**: A user-friendly interface for processing sales, managing a shopping cart, and finalizing transactions.
- **Product Management**: Easily manage your product inventory, including details, pricing, and stock levels.
- **Customer Management**: Maintain a database of your customers, track their status, and view their purchase history.
- **Sales Pipeline**: A visual Kanban board to track sales deals through various stages, from "New Lead" to "Closed - Won".
- **Task Management**: Organize and track team tasks, assign priorities, and monitor statuses.
- **Calendar View**: A unified calendar that displays tasks and invoice due dates to help your team stay organized.
- **Sales Reports**: Visualize sales data with charts for monthly sales, category-wise breakdowns, and top-selling products. Includes an AI-powered summary generator.
- **Invoice Management**: Create, view, and track invoices. Includes features for sending reminders and downloading PDFs.

### AI-Powered Tools

- **Smart Part Finder**: An intelligent search tool that uses AI to recommend compatible parts and accessories based on vehicle specifications.
- **AI Email Marketer**: Generate compelling marketing emails for promotional campaigns by simply describing the offer.

## Tech Stack

- **Framework**: Next.js with App Router
- **Backend & Authentication**: Firebase
- **Generative AI**: Google's Gemini models via Genkit
- **UI**: React, TypeScript, ShadCN UI, Tailwind CSS
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Forms**: React Hook Form with Zod for validation

## Getting Started

To get the application running locally, follow these steps:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run the Development Server**:
    ```bash
    npm run dev
    ```
    This command starts the Next.js development server, typically on `http://localhost:9002`.

3.  **Run the Genkit Development Server**:
    For AI features to work, you need to run the Genkit server in a separate terminal.
    ```bash
    npm run genkit:dev
    ```
    This starts the Genkit server, which manages the AI flows.

Now you can open [http://localhost:9002](http://localhost:9002) in your browser to see the application.


# Architecture

```mermaid
flowchart TD

subgraph group_public["Public &amp; Identity"]
  node_root_shell["Root shell<br/>Next.js layout<br/>[layout.tsx]"]
  node_public_pages["Public account pages<br/>Next.js routes<br/>[page.tsx]"]
  node_login_forms["Login &amp; signup forms<br/>client forms<br/>[login-form.tsx]"]
  node_middleware{{"Route protection<br/>Next.js middleware<br/>[middleware.ts]"}}
  node_auth_state["Client auth state<br/>auth provider hook<br/>[auth-provider.tsx]"]
end

subgraph group_app["Operational App"]
  node_app_shell["Authenticated shell<br/>route-group layout<br/>[layout.tsx]"]
  node_navigation["App navigation<br/>sidebar<br/>[app-sidebar.tsx]"]
  node_crm_routes["CRM operations<br/>routed screens<br/>[page.tsx]"]
  node_sales_pipeline["Sales pipeline<br/>pipeline screen<br/>[page.tsx]"]
  node_calendar["Calendar<br/>scheduling screen<br/>[page.tsx]"]
  node_reports["Reports<br/>analytics screen<br/>[page.tsx]"]
  node_ai_forms["AI workflow forms<br/>app forms"]
end

subgraph group_domain["Domain &amp; Backend"]
  node_domain_data[("Business data modules<br/>domain data<br/>[products.ts]")]
  node_firebase_adapter{{"Firebase integration<br/>backend adapter<br/>[firebase.ts]"}}
  node_firebase[("Firebase services<br/>external backend")]
end

subgraph group_ai["AI Workflows"]
  node_server_actions{{"Server actions<br/>service boundary<br/>[actions.ts]"}}
  node_genkit{{"Genkit runtime<br/>AI runtime<br/>[genkit.ts]"}}
  node_ai_flows["AI flows<br/>Genkit flows"]
  node_gemini(("Google Gemini<br/>external AI model"))
end

node_hosting{{"Firebase App Hosting<br/>deployment<br/>[apphosting.yaml]"}}

node_root_shell -->|"renders"| node_public_pages
node_root_shell -->|"hosts"| node_app_shell
node_middleware -->|"guards"| node_app_shell
node_public_pages -->|"contains"| node_login_forms
node_login_forms -->|"signs in/up"| node_firebase_adapter
node_auth_state -->|"uses"| node_firebase_adapter
node_firebase_adapter -->|"connects to"| node_firebase
node_app_shell -->|"includes"| node_navigation
node_app_shell -->|"routes to"| node_crm_routes
node_app_shell -->|"routes to"| node_sales_pipeline
node_app_shell -->|"routes to"| node_calendar
node_app_shell -->|"routes to"| node_reports
node_app_shell -->|"routes to"| node_ai_forms
node_crm_routes -->|"uses"| node_domain_data
node_sales_pipeline -->|"reads deals"| node_domain_data
node_calendar -->|"uses timing data"| node_domain_data
node_reports -->|"analyzes"| node_domain_data
node_ai_forms -->|"invokes"| node_server_actions
node_server_actions -->|"executes"| node_ai_flows
node_genkit -->|"runs"| node_ai_flows
node_ai_flows -->|"uses"| node_gemini
node_hosting -.->|"deploys"| node_root_shell

click node_root_shell "https://github.com/meetmendapara09/gearlink-crm/blob/main/src/app/layout.tsx"
click node_public_pages "https://github.com/meetmendapara09/gearlink-crm/blob/main/src/app/page.tsx"
click node_login_forms "https://github.com/meetmendapara09/gearlink-crm/blob/main/src/app/login/login-form.tsx"
click node_middleware "https://github.com/meetmendapara09/gearlink-crm/blob/main/src/middleware.ts"
click node_auth_state "https://github.com/meetmendapara09/gearlink-crm/blob/main/src/components/auth-provider.tsx"
click node_app_shell "https://github.com/meetmendapara09/gearlink-crm/blob/main/src/app/(app)/layout.tsx"
click node_navigation "https://github.com/meetmendapara09/gearlink-crm/blob/main/src/components/app-sidebar.tsx"
click node_crm_routes "https://github.com/meetmendapara09/gearlink-crm/blob/main/src/app/(app)/dashboard/page.tsx"
click node_sales_pipeline "https://github.com/meetmendapara09/gearlink-crm/blob/main/src/app/(app)/sales-pipeline/page.tsx"
click node_calendar "https://github.com/meetmendapara09/gearlink-crm/blob/main/src/app/(app)/calendar/page.tsx"
click node_reports "https://github.com/meetmendapara09/gearlink-crm/blob/main/src/app/(app)/reports/page.tsx"
click node_ai_forms "https://github.com/meetmendapara09/gearlink-crm/blob/main/src/app/(app)/smart-finder/smart-finder-form.tsx"
click node_domain_data "https://github.com/meetmendapara09/gearlink-crm/blob/main/src/lib/data/products.ts"
click node_firebase_adapter "https://github.com/meetmendapara09/gearlink-crm/blob/main/src/lib/firebase.ts"
click node_server_actions "https://github.com/meetmendapara09/gearlink-crm/blob/main/src/lib/actions.ts"
click node_genkit "https://github.com/meetmendapara09/gearlink-crm/blob/main/src/ai/genkit.ts"
click node_ai_flows "https://github.com/meetmendapara09/gearlink-crm/blob/main/src/ai/flows/smart-part-finder.ts"
click node_hosting "https://github.com/meetmendapara09/gearlink-crm/blob/main/apphosting.yaml"

classDef toneNeutral fill:#f8fafc,stroke:#334155,stroke-width:1.5px,color:#0f172a
classDef toneBlue fill:#dbeafe,stroke:#2563eb,stroke-width:1.5px,color:#172554
classDef toneAmber fill:#fef3c7,stroke:#d97706,stroke-width:1.5px,color:#78350f
classDef toneMint fill:#dcfce7,stroke:#16a34a,stroke-width:1.5px,color:#14532d
classDef toneRose fill:#ffe4e6,stroke:#e11d48,stroke-width:1.5px,color:#881337
classDef toneIndigo fill:#e0e7ff,stroke:#4f46e5,stroke-width:1.5px,color:#312e81
classDef toneTeal fill:#ccfbf1,stroke:#0f766e,stroke-width:1.5px,color:#134e4a
class node_root_shell,node_public_pages,node_login_forms,node_middleware,node_auth_state toneBlue
class node_app_shell,node_navigation,node_crm_routes,node_sales_pipeline,node_calendar,node_reports,node_ai_forms toneAmber
class node_domain_data,node_firebase_adapter,node_firebase toneMint
class node_server_actions,node_genkit,node_ai_flows,node_gemini toneRose
class node_hosting toneNeutral
```
