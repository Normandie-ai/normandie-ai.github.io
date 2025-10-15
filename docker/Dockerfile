# Dockerfile for Astro application

# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY astro/package.json astro/yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY astro/ .

# Build the application
RUN yarn build

# Stage 2: Production
FROM node:20-alpine

WORKDIR /app

# Copy built assets from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

# Install only production dependencies
RUN yarn install --production --frozen-lockfile

# Expose port
EXPOSE 4321

# Start the application
CMD ["yarn", "preview", "--host", "0.0.0.0"]
