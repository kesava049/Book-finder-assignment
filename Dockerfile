# ---- Dependencies build stage ----
FROM node:20-alpine  AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Production runtime stage ----
FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./
COPY --from=builder /app/app ./app
COPY --from=builder /app/components ./components
COPY --from=builder /app/server_actions ./server_actions

ENV NODE_ENV=production
EXPOSE 4000
CMD ["npm", "start"]
