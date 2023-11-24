FROM node:21.0.0-alpine3.17

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY ./ ./

RUN npm run build

CMD ["node", "dist/src/main"]