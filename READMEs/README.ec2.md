# Tips related to hosting on EC2

## Connecting to the instance

```.sh
chmod 400 ai.pem
ssh -i "ai.pem" ubuntu@ec2-44-204-187-195.compute-1.amazonaws.com
```

## Installing nodejs

https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04

### Technique 1

```
sudo apt update
sudo apt install nodejs
node -v
```

### Technique 2

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc
nvm list-remote
nvm install lts/fermium
nvm list
```

## Install nginx

- sudo apt install nginx

## Install PM2 globally

npm i -g pm2

## pull project onto server

```.sh
mkdir src
git clone https://github.com/thaddavis/emend.ai_v1.git
cd emend.ai_v1
pm2 start npm --name "nextjs" -- run start -- -p 8000
```

## Useful tips

- pm2 show nextjs
- pm2 logs 
- 

## Check nginx status on Ubuntu

https://linuxconfig.org/how-to-check-nginx-status-on-ubuntu
sudo nginx -t
systemctl status nginx
sudo systemctl reload nginx

## Redeploying

git pull
npm i
npm run build
pm2 restart 7