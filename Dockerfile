FROM node:16

WORKDIR /usr/src/app

# when docker is building images, it scans line by line in this dockerfile
# it can cache the state of previous build
# since our source is going to change alot faster than the dependencies
# we are going to seperate the dependencies and the source files
COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build
EXPOSE 8080
CMD [ "yarn","start" ]