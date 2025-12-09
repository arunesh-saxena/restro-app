FROM node:8.11.3

# CMD ["node","-v"]

MAINTAINER arunsh saxerna

EXPOSE 2020 3030

RUN mkdir -p /restro_app

WORKDIR /restro_app


COPY app /restro_app/app
COPY server /restro_app/server
COPY .babelrc /restro_app/.babelrc
COPY webpack /restro_app/webpack
COPY package.json /restro_app/package.json
COPY package-lock.json /restro_app/package-lock.json
COPY pm2.config.json  /restro_app/pm2.config.json 

RUN npm install 
RUN npm run build

RUN npm install -g pm2 

# CMD ["npm","start"]

CMD ["pm2","start","--env","production","pm2.config.json"]

# CMD ["echo","hello arunesh"]
