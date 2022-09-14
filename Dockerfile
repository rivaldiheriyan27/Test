FROM node:16.15

WORKDIR /

ENV PORT=3000

COPY package.json package-lock.json /

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

CMD ["npm", "run", "start"]