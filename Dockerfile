FROM node:latest
# Create app directory

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Copy and download dependencies
COPY package.json /usr/src/app

RUN npm install

# Bundle app source
COPY . .

EXPOSE 7500

#command to run within the container
CMD [ "node", "server.js" ]