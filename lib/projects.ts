export interface Project {
  slug: string;
  name: string;
  tagline: string;
  featured: boolean;
  problem: string;
  highlights: string[];
  stack: string[];
  technicalHighlight: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "nodebase",
    name: "NodeBase",
    featured: true,
    tagline:
      "Enterprise-grade visual workflow automation and orchestration platform for Indian D2C & fintech — 48+ native integrations with atomic Upstash Redis distributed locking and durable Inngest step-functions.",
    problem:
      "While global platforms like n8n and Zapier cater to western SaaS ecosystems, they lack native support for Indian infrastructure (Razorpay, Shiprocket, Cashfree, MSG91, Zoho India). Furthermore, payment gateways frequently retry webhook notifications due to network lag; without distributed locking, standard automations process payments twice, resulting in duplicate order shipments, double CRM entries, and repeated SMS spam.",
    highlights: [
      "48+ Native Integrations & Nodes across 7 core categories: 10 Trigger nodes, 8 AI/ML providers (OpenAI, Anthropic, Gemini, Groq, DeepSeek, Perplexity, xAI) with 9 operations, Indian D2C infrastructure (Razorpay 28 ops, Shiprocket 23 ops, Cashfree 26 ops, MSG91 14 ops), and 250+ enterprise CRM/helpdesk operations (GitHub 145+ ops, Zoho CRM India 32 ops, HubSpot 35 ops, Freshdesk 26 ops)",
      "Atomic Distributed Webhook Deduplication: Implements Upstash Redis serverless locks (claimIdempotencyKey via 'SET key CLAIMED NX EX 86400') across all webhook endpoints to guarantee deterministic once-and-only-once execution with fail-open architecture",
      "Durable Step Orchestration & Replay Protection: Uses Inngest v3 durable step-functions where every node execution is wrapped in an independent, resumable transaction (step.run). If an API rate-limits (HTTP 429), Inngest pauses state and retries only that node without re-running upstream triggers or charging credit cards twice",
      "End-to-End AES-256-GCM Cryptography & Zero-Leakage tRPC Routers: All API keys, database strings, and OAuth tokens are encrypted at rest before touching Azure PostgreSQL. tRPC routers completely strip ciphertext before returning payloads to client UI dialogs",
      "Embedded AI Agent Workflow Generator: Features natural language workflow architecture where users converse with OpenAI, Claude, or GLM-5 models to automatically wire DAG canvases with built-in PII and prompt-injection guardrails",
      "Real-Time WebSocket Telemetry (@inngest/realtime): Server-sent Pub/Sub channels emit live node lifecycle states (loading, success, error) directly to React Flow (@xyflow/react v12) canvas nodes, dynamically transitioning node border animations without page polling",
    ],
    stack: [
      "Next.js 15",
      "React Flow",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "Inngest",
      "Redis",
      "Tailwind CSS",
      "TypeScript",
      "Razorpay",
      "Shiprocket",
      "Cashfree",
      "OpenAI",
      "Anthropic",
      "GitHub",
    ],
    technicalHighlight:
      "When an external webhook fires, it is fingerprinted into a deterministic scoped ID ('razorpay:' + eventId) and atomically claimed in Upstash Redis before workflow execution starts. The payload is dispatched to Inngest where dynamic Handlebars template resolution ('{{razorpayTrigger.amount}}') replaces tokens against upstream step outputs in context, while real-time WebSocket telemetry emits state transitions outside of step.run() blocks to prevent duplicate pushes during crash recovery.",
    liveUrl: "https://nodebase.tech",
  },
  {
    slug: "hedwigs",
    name: "Hedwigs",
    featured: true,
    tagline:
      "AI Chief-of-Staff inbox that triages email across 27+ SaaS tools, drafts replies in your own writing voice, and never sends anything without explicit human approval.",
    problem:
      "Knowledge workers drown in notifications across Gmail, Slack, Jira, HubSpot and dozens of other disconnected tools, wasting hours a day on manual triage and context-switching without unified governance.",
    highlights: [
      "Multi-tenant AI email platform unifying Gmail, Outlook, Calendar, Slack, Jira, HubSpot and 20+ other apps in one centralized inbox",
      "pgvector-based style profiling in Supabase Postgres that learns from a user's own sent mail archives to semantically match their exact tone and vocabulary in AI-drafted replies",
      "Human-in-the-loop PendingAction architecture — the AI only stages write actions; execution requires explicit cryptographic approval via Web, Telegram or WhatsApp",
      "Enterprise SSO (SAML/OIDC), append-only audit logs enforced by Postgres database triggers, and Supabase Realtime for sub-second synchronization",
    ],
    stack: [
      "Next.js 15",
      "tRPC",
      "Prisma",
      "Supabase",
      "PostgreSQL",
      "Inngest",
      "OpenAI",
    ],
    technicalHighlight:
      "Write operations never touch an external API directly — every mutating AI tool call is intercepted by a custom middleware and staged into a pending_actions database table with strict state transitions, ensuring any erroneous LLM decision is caught and rejected before it ever reaches Gmail or Jira.",
    liveUrl: "https://hedwigs.site",
  },
  {
    slug: "wanderplan",
    name: "WanderPlan",
    featured: true,
    tagline:
      "Real-time, AI-empowered collaborative travel planning and group management platform — 14 essential travel workflows unified into one reactive workspace syncing in under 100ms via Convex WebSockets.",
    problem:
      "Traditional group trip planning is notoriously fragmented across a disjointed patchwork of apps: communication in WhatsApp or Slack threads, schedules in static spreadsheets lacking spatial awareness, financial tracking in standalone splitters like Splitwise decoupled from bookings, and documents or tickets scattered across email inboxes without destination context.",
    highlights: [
      "14 Core Capabilities ('14 Tools. One Trip.'): Centralized Dashboard, Executive Trip Overview, Day-by-Day Interactive Itinerary Planner (drag-and-drop via @dnd-kit), Granular Member Management (RBAC), Multi-Currency Budget & Split Engine, Collaborative Ideas Board with up/down voting, Spatial Interactive Map (Leaflet), Shared Checklists, Weather-Aware AI Packing Lists, Cloud Files & Documents repository, Dedicated Boarding Passes ticket manager, Consolidated Reservations tracker, In-App Contextual Real-Time Chat, and Visual Financial Analytics (Recharts)",
      "Serverless Reactive Data Architecture via Convex (v1.32): Replaces traditional REST/GraphQL polling with persistent WebSocket subscriptions where queries automatically re-run server-side inside ACID transactions and push sub-100ms state deltas directly to subscribed DOMs without manual refetching",
      "Greedy Debt Minimization Graph Algorithm: Separates trip participants into Creditors and Debtors, iteratively matching the largest debtor against the largest creditor to generate simplified repayment instructions (e.g., resolving A→B→C debt chains into direct atomic settlement transfers)",
      "Generative AI Boarding Pass Extraction Engine: Leverages OpenAI GPT-4o inside Convex Node.js runtime Server Actions (action()) with constrained JSON schema formatting (response_format: { type: 'json_object' }) to extract airline, flight number, gates, terminals, and timestamps from unstructured email text",
      "Strict Role-Based Access Control (RBAC) & Authentication: Clerk identity verification integrated with Next.js 16 Edge middleware (proxy.ts), synchronized via Svix webhook signatures, and enforced server-side on every Convex mutation via compound index queries ([tripId, userId])",
      "Real-Time Notification & In-Trip Chat Broadcasts: Batch database insertions into notifications table push live unread badge counts and popover alerts across group members' navigation bars instantaneously",
    ],
    stack: [
      "Next.js 16",
      "React",
      "Convex",
      "Clerk",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI",
      "Recharts",
      "Leaflet",
      "Vercel",
    ],
    technicalHighlight:
      "When a user edits an itinerary item or logs an expense, Convex executes the mutation inside an ACID transaction, identifies all active client WebSocket subscriptions depending on the modified records, and pushes the exact delta in sub-100ms latency. In parallel, financial settlement calculations run a greedy graph minimization algorithm to eliminate redundant person-to-person debt transfers across the group.",
  },
  {
    slug: "moris-ide",
    name: "Moris IDE",
    featured: true,
    tagline:
      "Full-stack AI coding agent running entirely in-browser — boots a real Node.js runtime via WebContainers with zero cloud VMs and instant live server previews.",
    problem:
      "Setting up a full-stack development environment (Node.js runtimes, package managers, .env files, local ports) creates significant onboarding friction that slows down prototyping and code review.",
    highlights: [
      "Multi-model AI pair-programmer (Claude 3.5 Sonnet, GPT-4o, Gemini via OpenRouter) with real filesystem tools — it inspects and lists directory structures before editing files deterministically",
      "WebContainers API boots a secure, sandboxed Node.js runtime directly inside the browser tab, enabling native 'npm install' and live development server previews without server infrastructure",
      "One-click GitHub repository import/export engine that programmatically constructs git blobs, trees, and commits via the GitHub REST API",
      "Real-time filesystem synchronization with Convex and Sentry-based LLM execution observability",
    ],
    stack: [
      "Next.js 16",
      "Convex",
      "Inngest",
      "TypeScript",
      "Tailwind CSS",
    ],
    technicalHighlight:
      "The agent's reasoning and filesystem mutations are strictly decoupled — the LLM never generates blind diffs or writes directly to disk; instead, it executes typed tool calls (readFiles, updateFile, createFiles), ensuring AI edits remain syntactically valid and type-safe within the active AST.",
    liveUrl: "https://moris-ide.vercel.app",
  },
  {
    slug: "variantx",
    name: "VariantX",
    featured: true,
    tagline:
      "Deep learning bioinformatics pipeline that ingests raw genomic sequence data to classify pathogenic DNA mutations.",
    problem:
      "Manually interpreting whether a genomic sequence mutation is benign or pathogenic is computationally intensive and requires clinical bioinformatics expertise.",
    highlights: [
      "Python deep-learning architecture trained on curated clinical genomic variant datasets",
      "Automated feature extraction and classification of mutation pathogenicity directly from raw sequence strings",
    ],
    stack: ["Python", "Deep Learning"],
    technicalHighlight:
      "Demonstrates domain adaptability by applying rigorous software engineering and model evaluation techniques to clinical bioinformatics and genomics data.",
    githubUrl: "https://github.com/Mayank-saraswal/variant-x",
  },
  {
    slug: "chai-combinator",
    name: "Chai Combinator",
    featured: false,
    tagline:
      "A Superhuman-style email client built for the Indian market, featuring an iOS 26 liquid-glass visual redesign and keyboard-first navigation.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    problem: "",
    highlights: [],
    technicalHighlight: "",
  },
  {
    slug: "formcraft",
    name: "FormCraft",
    featured: false,
    tagline:
      "An India-first Typeform competitor featuring conditional branching logic and native Razorpay payment link collection.",
    stack: ["Next.js 15", "tRPC", "Prisma", "PostgreSQL", "Razorpay"],
    problem: "",
    highlights: [],
    technicalHighlight: "",
  },
  {
    slug: "pollflow",
    name: "PollFlow",
    featured: false,
    tagline:
      "A real-time live polling platform with a monochrome minimalist aesthetic and instant WebSocket vote aggregation.",
    stack: ["Next.js 15", "Socketio", "Redis", "PostgreSQL", "Azure"],
    problem: "",
    highlights: [],
    technicalHighlight: "",
  },
];
