FROM node:latest

WORKDIR /usr/www/kompas-ogy

COPY . .

ENV PORT=4000

RUN npm install -g nodemon

RUN npm install && npm cache clean --force

EXPOSE 4000

CMD ["npm", "run", "dev"]