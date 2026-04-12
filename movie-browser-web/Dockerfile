# Etapa de construcción (Build stage)
FROM node:18-alpine AS builder
WORKDIR /app

# Copiar dependencias
COPY package.json package-lock.json ./
RUN npm ci

# Copiar el resto del código y construir la app
COPY . .
RUN npm run build

# Etapa de producción (Production stage)
FROM nginx:alpine

# Copiar el frontend compilado (Vite compila a /dist por defecto)
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar la configuración personalizada de NGINX para React Router y proxy si fuera necesario
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
