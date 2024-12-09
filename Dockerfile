FROM node:18.13.0-buster-slim

WORKDIR /opt/
COPY package.json ./
RUN npm install
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .

CMD ["npm", "run", "build"]