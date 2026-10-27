# SpeakAI engineering guidance

## Architecture

- `web/`: Next.js App Router, React, TypeScript, Tailwind and shadcn/ui. Three.js, React Three Fiber and Drei are installed for future avatar rendering.
- `api/`: NestJS REST foundation with configuration, validation and WebSocket dependencies.
- Each application owns its npm package and lockfile. Keep frontend and backend responsibilities separate.
- See `docs/architecture.md` before extending the system.

## Conventions

- Follow framework conventions and strict TypeScript; avoid `any` and unnecessary abstractions.
- Use PascalCase for React components and classes, camelCase for functions and variables, and descriptive filenames consistent with each framework.
- Use two spaces, LF, single quotes and semicolons; run package formatting, lint, typecheck and build scripts after edits.
- Put browser APIs and 3D rendering in client components when implemented. Keep server credentials in the API.
- Install only necessary dependencies and commit package lockfiles.

## Security

- Never commit real credentials, private keys or local environment files. Examples contain placeholders only.
- `NEXT_PUBLIC_*` values are public browser configuration; never place secrets there.
- Validate external inputs. Use explicit CORS origins if cross-origin access is introduced.
- Do not log tokens, voice recordings or sensitive conversation content.

## Current scope

This repository is foundation only. Do not implement avatars, speaking rooms, microphone recording, Gemini integration, conversation WebSocket logic, authentication, database schemas/migrations, history or payments without a later explicit task.
Do not introduce microservices, Redis, RabbitMQ, Docker or monorepo orchestration tooling at this stage.
