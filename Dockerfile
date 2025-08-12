# STAGE 1: Build
FROM node:18-alpine AS build
WORKDIR /opt/app

# Copy package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies cho production
RUN npm ci --only=production

# Copy toàn bộ mã nguồn
COPY . .

# Build Strapi
RUN npm run build

# STAGE 2: Production
FROM node:18-alpine
WORKDIR /opt/app

# Copy các dependencies đã cài đặt từ stage 'build'
COPY --from=build /opt/app/node_modules ./node_modules

# Copy các file đã build và file cấu hình
COPY --from=build /opt/app/package.json .
COPY --from=build /opt/app/config ./config
COPY --from=build /opt/app/database ./database
COPY --from=build /opt/app/public ./public
COPY --from=build /opt/app/src ./src
COPY --from=build /opt/app/.strapi ./.strapi

# Expose port mà Strapi chạy
EXPOSE 1337

# Lệnh để khởi động ứng dụng
CMD ["npm", "run", "start"]