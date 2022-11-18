FROM node:14-alpine

RUN npm install --quiet -g nodemon

WORKDIR /app

RUN apk add --update --no-cache tzdata

ENV NODE_ENV=development
ENV TZ=America/Sao_Paulo

COPY ["package.json", "./"]
COPY ["package-lock.json", "./"]

RUN apk add --update --no-cache --virtual build-dependencies \
    g++ \
    make \
    && npm install --production \
    && npm i -g prisma \
    && apk del build-dependencies

RUN apk add bash

EXPOSE ${PORT}

COPY ./ /app
COPY ./prisma /app/prisma

RUN npm run build

CMD ["npm", "start"]
