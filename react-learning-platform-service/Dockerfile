FROM node:alpine

RUN mkdir /app

WORKDIR /app

COPY package*.json .

RUN npm install

COPY --chown=node:node . .

EXPOSE 3001

CMD [ "npm", "start" ]
