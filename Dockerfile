FROM node:18
WORKDIR /demoapp

COPY package.json ./
COPY server.js ./

RUN npm install

CMD ["node", "server.js"]
