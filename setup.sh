#!/bin/sh

apk add --no-cache expect

chmod +x ./auto_confirm.sh

npm config set proxy 'http://MSansyzb:%21%40%23Eubank%40%21%23%23@proxy01.eub.kz:8080'
npm config set https-proxy 'http://MSansyzb:%21%40%23Eubank%40%21%23%23@proxy01.eub.kz:8080'

npm cache clean --force
npm install --force --verbose

echo "Running"
npm run dev