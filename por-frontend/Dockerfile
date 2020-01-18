# build environment
FROM node:12.2.0-alpine as build
WORKDIR /web
ENV PATH /web/node_modules/.bin:$PATH
COPY package.json /web/package.json
RUN npm install
RUN npm install @vue/cli -g
COPY . /web
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /web/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]