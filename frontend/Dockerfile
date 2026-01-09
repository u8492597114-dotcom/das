# Stage 1: Build the Angular application
FROM node:20-alpine AS build

WORKDIR /usr/src/app

# Argument to specify the client brand for the build
ARG BRAND=default

COPY package*.json ./
RUN npm install

COPY . .
# Build the application using the specified configuration
# Note: The configuration name in angular.json must match the BRAND argument
RUN npm run build -- --configuration=$BRAND

# Stage 2: Serve the application with Nginx
FROM nginx:1.25-alpine

# Copy the build output from the build stage
COPY --from=build /usr/src/app/dist/frontend/browser /usr/share/nginx/html

# Copy a custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for Nginx
EXPOSE 80
