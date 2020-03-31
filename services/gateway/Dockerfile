# latest official node image
FROM node:latest

WORKDIR /data/app
RUN npm install -g nodemon

RUN mkdir -p /install/
ENV PATH /install/node_modules/.bin:$PATH
ENV NODE_PATH /install/node_modules/

COPY ./package.json /install/package.json
RUN cd /install; npm install
RUN ln -s /install/node_modules /data/app
CMD ["nodemon", "/data/app/server.js"]
