# Dockerfile

FROM node:16-alpine

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org

WORKDIR /app
COPY package.json package-lock.json ./
RUN cnpm install 

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["node", "build"]