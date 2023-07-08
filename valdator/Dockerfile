FROM node:18.15-buster

COPY ./package.json ./

RUN npm i

COPY ./ ./

CMD [ "index.js" ]
