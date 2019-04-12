# react-restro
# react restro demo

> sever side render 
- npm run setup 
- npm run dev

> client side render

## https://blog.hellojs.org/importing-images-in-react-c76f0dfcb552
- copy images/** to ./assets/images
- npm run start:spa

# For production build
- npm run install
- npm run build
- npm run start


# pm2 config
- npm build
- copy foldes/files to some other folder compiled, public, package.json, package-lock.json, pm2.config.json 
- npm install -g babel-cli (this is one time)
- npm install -g pm2 (this is one time)
- npm install
- pm2 start --env "production/developement/QA" pm2.config.json 
- pm2 stop/delete <pmID>

> pm2 commands
- pm2 logs
- pm2 status
- pm2 stop/delete all


# docker 
```docker build -t <image name>:<version> .
docker run -p <port to access>:<node port> <imageID>
docker run -d -p <port to be exposed>:4002 --name <container name> --cap-add=SYS_ADMIN <image name>
```

> docker usefull commonds

```
docker exec -it <container id> sh[/bin/bash]
docker rm/stop/restart <container id>
docker ps -a/-aq
docker rmi <images id>
docker rm $(docker images -aq)
docker log <container id>
```