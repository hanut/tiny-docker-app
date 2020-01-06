FROM node:lts

WORKDIR $HOME/app/
COPY package.json .
RUN npm install --only=prod
COPY . .

CMD ["node", "app.js"]
