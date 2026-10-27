# SpeakAI

Foundation for an AI-powered English speaking platform with an interactive 3D human tutor. This setup contains no speaking, avatar, authentication or persistence features.

## Prerequisites

- Node.js 24 LTS (24.15 or later) and npm. Setup was performed with Node 24.22.1 and npm 12.2.1.
- Git. No external API key or database is needed.

## Install and run

Run from the repository directory:

```sh
cd web
npm ci
cp .env.example .env.local
npm run dev
```

The frontend runs at http://localhost:3000. In another terminal:

```sh
cd api
npm ci
cp .env.example .env
npm run start:dev
```

The API runs at http://localhost:3001 and its generated root endpoint returns `Hello World!`. On PowerShell use `Copy-Item` instead of `cp` if preferred. Each package can run independently. Keep environment files local; only `.env.example` files belong in Git.

## Commands

Run these inside the relevant package:

| Command                | web                             | api                        |
| ---------------------- | ------------------------------- | -------------------------- |
| `npm run lint`         | ESLint                          | ESLint                     |
| `npm run typecheck`    | Next route types and TypeScript | TypeScript                 |
| `npm run format`       | Prettier write                  | Prettier write             |
| `npm run format:check` | Prettier check                  | Prettier check             |
| `npm run build`        | Production build                | Production build           |
| `npm start`            | Serve production build          | Start Nest                 |
| `npm run start:prod`   | —                               | Serve compiled API         |
| `npm test`             | —                               | Generated Vitest unit test |
| `npm run test:e2e`     | —                               | Generated HTTP smoke test  |

CI runs formatting, lint, type checks, backend tests and production builds. Frontend styling uses Tailwind CSS and the official shadcn CLI configuration, including its generated base Button primitive; no product UI has been added. Run future shadcn commands inside `web/`.

## Structure

```text
speakai/
├── web/                 # Next.js App Router and frontend dependencies
│   ├── public/models/   # Reserved for future assets (empty, untracked)
│   └── src/
│       ├── app/
│       ├── components/  # Future avatar/, speaking/, layout/ (empty, untracked)
│       ├── hooks/       # Empty, untracked
│       ├── lib/         # shadcn utilities
│       └── types/       # Empty, untracked
├── api/                 # NestJS REST scaffold and generated tests
├── docs/architecture.md
├── .github/workflows/ci.yml
└── AGENTS.md
```

Empty future directories are created locally without placeholder files. Git will include them when real files are added. No orchestration tool is needed; each package has its own lockfile.

## Planned work

See [architecture](docs/architecture.md) and [engineering guidance](AGENTS.md). Gemini Live API, PostgreSQL/Prisma, WebSocket conversation events, avatars and microphone capture require later tasks. Do not put provider secrets into `NEXT_PUBLIC_*` variables.
