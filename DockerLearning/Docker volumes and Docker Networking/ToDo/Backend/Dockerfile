FROM node:20-alpine

WORKDIR /app

COPY . . 

RUN npm install

EXPOSE 2900

CMD ["npx", "nodemon", "app.js"]