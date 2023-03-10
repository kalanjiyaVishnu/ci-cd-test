FROM node:19.2-alpine
RUN addgroup -S app && adduser -S app -G app
WORKDIR /app
COPY package.json . 
RUN yarn
COPY . .
CMD [ "npm","run","dev" ]
