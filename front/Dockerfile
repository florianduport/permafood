# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# so that npm installs not into the code path, so we can share this directory and still have npm_modules not shared
RUN mkdir -p /install/ # so that executable from modules are added to the path
ENV PATH /install/node_modules/.bin:$PATH
# so that you can `require` any installed module
ENV NODE_PATH /install/node_modules/

COPY ./app/package.json /install/package.json
RUN cd /install; npm install
RUN ln -s /install/node_modules /app
RUN ln -s /install/node_modules /app/src

# start app
CMD ["npm", "start"]
