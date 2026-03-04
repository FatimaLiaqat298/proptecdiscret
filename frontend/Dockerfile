# Build Stage
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files from frontend directory
COPY frontend/package.json frontend/package-lock.json* frontend/.npmrc* ./

# Install dependencies (using legacy-peer-deps for React 19)
RUN npm ci --legacy-peer-deps || npm install --legacy-peer-deps

# Copy the rest of the frontend source code
COPY frontend/ .

# Production optimizations
ENV DISABLE_ESLINT_PLUGIN=true
ENV GENERATE_SOURCEMAP=false
ENV CI=false

# Build the React application
RUN npm run build

# Production Stage: Serve with Nginx
FROM nginx:stable-alpine

# Copy built files from build stage to nginx html folder
# Note: npm run build creates 'build' folder in the current WORKDIR (/app)
COPY --from=build /app/build /usr/share/nginx/html

# Add custom nginx config from frontend directory
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
