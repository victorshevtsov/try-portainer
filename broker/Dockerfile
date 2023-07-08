FROM node:18.15-buster

WORKDIR /app

COPY ./package.json ./

RUN npm i

COPY ./ ./

CMD [ "index.js" ]
