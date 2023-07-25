FROM node:18-alpine as development

WORKDIR /opt/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

FROM node:18-alpine as production

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /opt/app/dist ./dist

CMD [ "node", "dist/main.js" ]
