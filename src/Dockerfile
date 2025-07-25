# Lab11/src/Dockerfile
FROM node:18-alpine

# Create and use a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy only package files first to install dependencies
COPY package*.json ./
RUN npm install --production

# Copy remaining app files
COPY . .

# Change ownership of app files to non-root user (optional but good)
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# Start the app
CMD ["node", "server.js"]
