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
    slug: "hedwigs",
    name: "Hedwigs",
    featured: true,
    tagline:
      "AI Chief-of-Staff inbox that triages email across 27+ SaaS tools, drafts replies in your own writing voice, and never sends anything without your approval.",
    problem:
      "Knowledge workers drown in notifications across Gmail, Slack, Jira, HubSpot and dozens of other disconnected tools, wasting hours a day on manual triage and context-switching.",
    highlights: [
      "Multi-tenant AI email platform unifying Gmail, Outlook, Calendar, Slack, Jira, HubSpot and 20+ other apps in one inbox",
      "pgvector-based style profiling that learns from a user's own sent mail to match their tone in AI-drafted replies",
      "Human-in-the-loop PendingAction architecture — the AI only drafts write actions, execution requires explicit approval via Web, Telegram or WhatsApp",
      "Enterprise SSO and Supabase Realtime for sub-second inbox synchronization",
    ],
    stack: [
      "Next.js 15",
      "tRPC v11",
      "Prisma",
      "Supabase (Postgres + pgvector)",
      "Inngest",
      "OpenAI",
    ],
    technicalHighlight:
      "Write operations never touch an external API directly — every mutating AI tool call is intercepted and staged as a pending_actions row, so a wrong AI decision can be rejected before it ever reaches Gmail or Jira.",
    liveUrl: "https://hedwigs.site",
  },
  {
    slug: "nodebase",
    name: "NodeBase",
    featured: true,
    tagline:
      "Visual workflow automation platform built for Indian D2C and fintech — 48+ native integrations with Redis-backed idempotency so a payment webhook retry never double-ships an order.",
    problem:
      "Global automation tools like Zapier and n8n have zero native support for Indian infrastructure (Razorpay, Shiprocket, Cashfree, MSG91), forcing developers into fragile custom HTTP scripts that break on webhook retries.",
    highlights: [
      "React Flow visual canvas for building DAG-based automation workflows by dragging and wiring nodes",
      "Native first-class integrations for Razorpay, Shiprocket, Cashfree and MSG91",
      "Distributed idempotency locking with Upstash Redis combined with Inngest durable step-functions, so a rate-limited step retries alone without re-running the whole workflow",
      "AI agent that can architect and wire an entire workflow canvas from a natural language description",
    ],
    stack: [
      "Next.js 15",
      "React Flow",
      "tRPC",
      "Prisma",
      "Neon Postgres",
      "Inngest",
      "Upstash Redis",
    ],
    technicalHighlight:
      "Every webhook is fingerprinted into a deterministic idempotency key and atomically claimed in Redis before a workflow ever runs — this is what prevents duplicate order shipments when a payment gateway resends the same event.",
    liveUrl: "https://nodebase.tech",
  },
  {
    slug: "wanderplan",
    name: "WanderPlan",
    featured: true,
    tagline:
      "Real-time collaborative trip planner — 14 tools in one canvas, every itinerary edit and expense split syncs to the whole group in under 100ms, no refresh.",
    problem:
      "Group trip planning is scattered across WhatsApp threads, static spreadsheets and standalone expense splitters that never talk to each other.",
    highlights: [
      "Day-by-day drag-and-drop itinerary builder, interactive map, and shared budget/expense splitting with a debt-minimization algorithm",
      "Fully reactive backend on Convex — no polling, every client re-renders automatically when data changes",
      "AI-powered boarding pass parsing that extracts structured flight data from pasted confirmation emails",
      "Role-based access control (Owner / Editor / Viewer) enforced server-side on every mutation",
    ],
    stack: ["Next.js 16", "Convex", "Clerk", "Tailwind CSS v4", "Leaflet", "Recharts"],
    technicalHighlight:
      "Convex's WebSocket-based reactive subscriptions mean a mutation on one member's phone is pushed and re-rendered on every other member's screen without any manual cache invalidation or polling.",
  },
  {
    slug: "moris-ide",
    name: "Moris IDE",
    featured: true,
    tagline:
      "Full-stack AI coding agent that runs entirely inside your browser — boots a real Node.js environment via WebContainers, no cloud VM, live preview in seconds.",
    problem:
      "Setting up a full-stack dev environment (Node.js, package managers, .env files, local servers) is friction that slows down both learning and prototyping.",
    highlights: [
      "Multi-model AI pair-programmer (Claude, GPT-4o, Gemini via OpenRouter) with real file-system tools — it reads and lists files before editing them, instead of guessing",
      "WebContainers boot a real Node.js runtime in-browser, so npm install and a live dev server preview run with zero cloud infrastructure",
      "One-click GitHub import/export that programmatically constructs git blobs, trees and commits via the GitHub REST API",
    ],
    stack: ["Next.js 16", "Convex", "Inngest Agent Kit", "WebContainers API", "CodeMirror 6"],
    technicalHighlight:
      "The agent's reasoning and its file mutations are fully decoupled — the LLM never writes to disk directly, it calls deterministic tools (readFiles, updateFile, createFiles), which keeps AI-generated edits syntactically consistent with the existing codebase.",
    liveUrl: "https://moris-ide.vercel.app",
  },
  {
    slug: "variantx",
    name: "VariantX",
    featured: true,
    tagline:
      "Deep learning model that reads raw DNA sequences and classifies pathogenic mutations.",
    problem:
      "Manually interpreting whether a DNA mutation is likely pathogenic or benign is slow and requires domain expertise most developers don't have.",
    highlights: [
      "Python deep-learning pipeline trained on genomic sequence data",
      "Classifies mutation pathogenicity directly from raw sequence input",
    ],
    stack: ["Python", "Deep Learning"],
    technicalHighlight:
      "Unlike the rest of the portfolio (full-stack SaaS), this project applies the same engineering rigor to a completely different domain — bioinformatics.",
    githubUrl: "https://github.com/Mayank-saraswal/variant-x",
  },
  {
    slug: "chai-combinator",
    name: "Chai Combinator",
    featured: false,
    tagline:
      "A Superhuman-style email client built for the Indian market, with an iOS 26 liquid-glass redesign.",
    stack: ["Next.js", "Turborepo", "TypeScript"],
    problem: "",
    highlights: [],
    technicalHighlight: "",
  },
  {
    slug: "formcraft",
    name: "FormCraft",
    featured: false,
    tagline:
      "An India-first Typeform competitor, built for a hackathon with Razorpay payments built in.",
    stack: ["Next.js 15", "Express 5", "tRPC v11", "Drizzle ORM", "better-auth", "Razorpay"],
    problem: "",
    highlights: [],
    technicalHighlight: "",
  },
  {
    slug: "pollflow",
    name: "PollFlow",
    featured: false,
    tagline:
      "A real-time poll platform with a monochrome black-and-white visual identity, built for a hackathon.",
    stack: ["Next.js 15", "Socket.io", "Upstash Redis", "Neon Postgres", "Azure Blob Storage"],
    problem: "",
    highlights: [],
    technicalHighlight: "",
  },
];
