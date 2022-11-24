FROM node:alpine

WORKDIR /api
ARG NODE_LOCAL_PORT
ARG NODE_DOCKER_PORT
COPY package.json .
RUN npm install
COPY . .
RUN npm install typescript
RUN npx tsc
CMD npm start
