FROM node

#RUN ["apt-get", "update", "-y"]
#RUN ["apt-get", "install", "-y", "--no-install-recommends", "software-properties-common"]

WORKDIR /data/app

RUN mkdir -p /install/
ENV PATH /install/node_modules/.bin:$PATH
ENV NODE_PATH /install/node_modules/

COPY ./app/package.json /install/package.json
RUN cd /install; npm install
RUN ln -s /install/node_modules /data/app
