FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY package*.json .
RUN npm install --silent && mv node_modules ../
COPY . .
RUN chown -R node /app
USER node
HEALTHCHECK --interval=30s \
    CMD ["npm", "run", "health"]
CMD [ "npm", "start" ]
