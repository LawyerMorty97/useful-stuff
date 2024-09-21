FROM node:21-alpine

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api
WORKDIR /home/node/api

COPY package*.json ./
# COPY ./package-lock.json package-lock.json

# USER node
RUN npm install
COPY . .

EXPOSE 8080

CMD [ "npm", "run", "api:start" ]
