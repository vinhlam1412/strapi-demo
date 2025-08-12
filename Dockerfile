# Stage 1: Builder
FROM node:18-alpine AS builder

WORKDIR /opt/app

# Copy package.json và package-lock.json
COPY package*.json ./

# Install tất cả dependencies (kể cả dev)
RUN npm install

# Copy toàn bộ source code
COPY . .

# Build TypeScript + Admin
RUN npm run build

# Stage 2: Runner
FROM node:18-alpine AS runner

WORKDIR /opt/app

# Copy package.json
COPY package*.json ./

# Install dependencies production
RUN npm install --omit=dev

# Copy build output từ builder
COPY --from=builder /opt/app/build ./build       # Admin panel
COPY --from=builder /opt/app/dist ./dist         # Backend JS đã compile
COPY --from=builder /opt/app/public ./public     # Static files

# Mở port
EXPOSE 1337

CMD ["npm", "start"]
