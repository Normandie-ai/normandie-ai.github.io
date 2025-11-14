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

# Accept build-time environment variables
ARG STRAPI_URL
ARG HIEVENTS_API_HOST
ARG HIEVENTS_EVENT_ID
ARG MAX_TICKETS
ARG MODE
ARG MATOMO_ENABLED
ARG MATOMO_HOST
ARG MATOMO_SITE_ID
ARG MATOMO_DISABLE_COOKIES

# Set environment variables for build
ENV STRAPI_URL=${STRAPI_URL}
ENV HIEVENTS_API_HOST=${HIEVENTS_API_HOST}
ENV HIEVENTS_EVENT_ID=${HIEVENTS_EVENT_ID}
ENV MAX_TICKETS=${MAX_TICKETS}
ENV MODE=${MODE}
ENV MATOMO_ENABLED=${MATOMO_ENABLED}
ENV MATOMO_HOST=${MATOMO_HOST}
ENV MATOMO_SITE_ID=${MATOMO_SITE_ID}
ENV MATOMO_DISABLE_COOKIES=${MATOMO_DISABLE_COOKIES}
# Build the application
RUN yarn build

# Stage 2: Production
FROM node:20-alpine

WORKDIR /app

# Install serve globally for serving static files
RUN npm install -g serve

# Copy built assets from builder stage
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 4321

# Start the application with serve (no host restrictions, no SPA mode)
CMD ["serve", "dist", "-l", "4321"]
