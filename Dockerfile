# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files for dependency caching
COPY server/package*.json ./server/
COPY client/package*.json ./client/

# Install dependencies
RUN cd server && npm ci
RUN cd client && npm ci

# Copy full application source
COPY . .

# Build statically exported Next.js frontend into client/out
RUN cd client && npm run build:export

# Production runner stage
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000

# Copy server code and production node_modules
COPY --from=builder /app/server ./server

# Copy statically exported Next.js frontend
COPY --from=builder /app/client/out ./client/out

EXPOSE 5000

CMD ["node", "server/server.js"]
