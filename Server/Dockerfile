FROM node:14

WORKDIR /server

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

RUN yarn build
RUN npx prisma generate


EXPOSE 8080

CMD ["yarn", "start"]

USER node