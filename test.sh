#!/bin/sh
apk add --no-cache expect

chmod +x ./auto_confirm.sh

npm i --force

npm run dev