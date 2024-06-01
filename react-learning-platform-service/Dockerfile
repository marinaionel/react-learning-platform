FROM node:alpine

RUN mkdir /app

WORKDIR /app

COPY package*.json .

RUN npm install

COPY --chown=node:node . .

CMD [ "npm", "start" ]
