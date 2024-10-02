#!/bin/sh

apk add --no-cache expect vips vips-dev build-base python3

chmod +x ./auto_confirm.sh
chmod -R 755 /home/node/app/auto_confirm.sh

npm config set proxy 'http://MSansyzb:%21%40%23Eubank%40%21%23%23@proxy01.eub.kz:8080'
npm config set https-proxy 'http://MSansyzb:%21%40%23Eubank%40%21%23%23@proxy01.eub.kz:8080'

yarn config set proxy 'http://MSansyzb:%21%40%23Eubank%40%21%23%23@proxy01.eub.kz:8080'
yarn config set https-proxy 'http://MSansyzb:%21%40%23Eubank%40%21%23%23@proxy01.eub.kz:8080'

echo "HTTP_PROXY: $HTTP_PROXY"
echo "HTTPS_PROXY: $HTTPS_PROXY"

npm config list

npm i --force
#npm i sharp

echo "Running!"
npm run dev