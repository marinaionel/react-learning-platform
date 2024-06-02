FROM node:lts-alpine
RUN mkdir /frontend
WORKDIR /frontend
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent && mv node_modules ../
COPY . .
RUN chown -R node /frontend
USER node
CMD ["npm", "start"]
