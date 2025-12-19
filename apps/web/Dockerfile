FROM oven/bun:1 AS builder

WORKDIR /app

COPY bun.lock package.json tsconfig.base.json ./
COPY apps/web/package.json apps/web/package.json
COPY packages/db/package.json packages/db/package.json
COPY packages/zero/package.json packages/zero/package.json

RUN bun install --frozen-lockfile

COPY apps/web apps/web
COPY packages packages

RUN bun --filter @zero-onboarding/web build

FROM oven/bun:1 AS runner

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

COPY --from=builder --chown=bun:bun /app/node_modules ./node_modules
COPY --from=builder --chown=bun:bun /app/apps/web/.output ./apps/web/.output
COPY --from=builder --chown=bun:bun /app/packages ./packages

USER bun
EXPOSE 3000

CMD ["bun", "./apps/web/.output/server/index.mjs"]
