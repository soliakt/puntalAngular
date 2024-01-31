FROM node:20.11.0-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install -g @angular/cli@15.2.9
RUN npm install

COPY . .
RUN ng build
# EXPOSE 4300

CMD /usr/src/app/node_modules/.bin/ng serve --host 0.0.0.0