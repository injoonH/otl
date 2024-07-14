FROM oven/bun:1 AS base
WORKDIR /usr/src/app

FROM base AS install
COPY packages/api/package.json bun.lockb /
RUN bun install
COPY packages/api .
RUN bun run build

FROM base
COPY --from=install /usr/src/app/build build

USER bun
EXPOSE 3000
ENTRYPOINT [ "bun", "run", "build/index.js" ]
