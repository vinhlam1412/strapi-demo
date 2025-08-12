# ================================
# 1. Stage: Build
# ================================
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /opt/app

# Copy package files trước (để tận dụng cache layer)
COPY package*.json ./

# Install dependencies (bao gồm devDependencies để build TypeScript)
RUN npm install

# Copy toàn bộ source code
COPY . .

# Build TypeScript sang JavaScript
RUN npm run build

# ================================
# 2. Stage: Production
# ================================
FROM node:18-alpine AS runner

WORKDIR /opt/app

# Copy package files trước
COPY package*.json ./

# Install production dependencies
RUN npm install --omit=dev

# Copy build output và các file cần thiết từ builder
COPY --from=builder /opt/app/build ./build
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/config ./config
COPY --from=builder /opt/app/src ./src

# Mở cổng Strapi
EXPOSE 1337

# Chạy Strapi production
CMD ["npm", "start"]
