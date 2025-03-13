#Build stage
FROM node:18-alpine3.17 AS build

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

#Production stage
FROM nginx:stable-alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=ssl fullchain2.pem ssl/fullchain.pem
COPY --from=ssl privkey2.pem ssl/privkey.pem

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]