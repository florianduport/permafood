rm -f /data/src/node_modules;
ln -s /install/node_modules /data/src;
cd ../app/ && PORT=80 yarn run start;
