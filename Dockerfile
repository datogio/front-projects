FROM node:alpine AS development

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY .eslintrc.json .
COPY next-env.d.ts .
COPY next.config.ts .
COPY postcss.config.mjs .
COPY tailwind.config.ts .
COPY tsconfig.json .
COPY app ./app
COPY public ./public

RUN yarn run build

FROM node:alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production

COPY --from=development /usr/src/app/.next ./.next

EXPOSE 3000

CMD [ "yarn", "start" ]