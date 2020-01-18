FROM node:12.2.0-alpine as build
WORKDIR /usr/api
COPY ./package.json ./

RUN npm install
COPY ./ ./
EXPOSE 3000
CMD [ "npm","run","start" ]