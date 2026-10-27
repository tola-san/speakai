# SpeakAI architecture

SpeakAI is a planned English speaking platform with an interactive 3D human tutor. This initial repository contains framework setup only.

## Frontend: web

Next.js App Router owns pages, layouts and future interaction state. Tailwind and shadcn/ui provide styling conventions; Lucide provides icons. Three.js with React Three Fiber and Drei will support a future client-side avatar. No models, animations, audio capture or speaking interface are implemented.

Intended locations are `src/components/avatar`, `src/components/speaking`, `src/components/layout`, `src/hooks`, `src/lib`, `src/types` and `public/models`. Empty directories are not tracked; create these when actual source or assets are needed.

## Backend: api

NestJS owns server-side orchestration and future REST endpoints. `@nestjs/config` reads local environment configuration. A global validation pipe supports future class-based DTO validation. The generated root controller remains a framework smoke endpoint.

The API package overrides Nest's pinned Multer dependency to 2.5.0 for [GHSA-q7qp-rjg7-q26m](https://github.com/advisories/GHSA-q7qp-rjg7-q26m). Remove the override when the upstream adapter pins a patched release.

## Future real-time transport

NestJS WebSocket and Socket.IO adapters are installed. A future gateway will own connection lifecycle, validated events, cancellation and conversation coordination. There is no gateway or conversation protocol yet. Define authentication, allowed origins and event contracts before enabling it.

## Future Gemini integration

Gemini Live will support real-time voice conversations. Server code must own credentials and privileged orchestration. A later design must decide whether audio is relayed through the backend or uses short-lived provider credentials in the browser, including privacy and latency considerations. No Gemini SDK or API integration is present.

## Future persistence

PostgreSQL and Prisma are planned for conversation history. The backend will own data access, retention and authorization. No database dependency, schema, migration or database connection exists yet.

## Local operation and verification

The web app uses port 3000 and the API defaults to 3001. They install and run independently with separate lockfiles. CI installs each package with `npm ci` and runs lint, type checks and builds; backend checks also run the generated tests. No external services or credentials are required for these checks.
