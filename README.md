# react-restro
# react restro demo
sever side render 
> npm run setup 
> npm run dev
#client side render
#https://blog.hellojs.org/importing-images-in-react-c76f0dfcb552
> copy images/** to ./assets/images
> npm run start:spa

# For production build
> npm run build
> npm run start




<!-- config pm2 -->
> npm build
> copy foldes/files to some other folder compiled, public, package.json, package-lock.json, pm2.config.json 
> npm install -g babel-cli (this is one time)
> npm install -g pm2 (this is one time)
> npm install
> pm2 start --env "production" pm2.config.json / pm2 start --env "developement" pm2.config.json / pm2 start --env "qa" pm2.config.json

# pm2 commands
> pm2 logs
> pm2 status
> pm2 stop/delete all
