FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# Bundle app source
COPY . .

RUN npm install 
EXPOSE 8080
