# Use Node base image
FROM node:20-slim AS builder

# Install build deps (needed for native modules like lightningcss)
RUN apt-get update && apt-get install -y \
  libc6 g++ make python3 curl build-essential pkg-config \
  && rm -rf /var/lib/apt/lists/*

# Create app dir
WORKDIR /app

# Copy only package.json first (for caching)
COPY package.json package-lock.json* ./

# Install deps
RUN npm install --force

# Rebuild lightningcss for linux
RUN npm rebuild lightningcss --force

# Copy rest of the project
COPY . .

# Build Next.js
RUN npm run build

# ---------- Production Image ----------
FROM node:20-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy built files + deps
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]