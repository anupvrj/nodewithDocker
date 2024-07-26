FROM node:14.17.0

WORKDIR /user/src/app


RUN npm install -g npm@9.6.2

COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 3035

CMD ["node", "index.js"]
