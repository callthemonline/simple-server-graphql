FROM node:alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install --only=production

COPY ./src /usr/src/app/src

EXPOSE 4000 4001

CMD ["npm","run","start:prod"]
