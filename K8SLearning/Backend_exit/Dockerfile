FROM node:18-alpine

WORKDIR /myapp

COPY . .

RUN npm install

EXPOSE 3500

CMD [ "node", "app.js" ]