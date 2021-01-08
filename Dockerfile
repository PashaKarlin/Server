FROM node:12-alpine as BUILDER
WORKDIR /app
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN npm i
COPY . .
EXPOSE 5000
CMD [ "node", "index.js"]