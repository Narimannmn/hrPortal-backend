#!/bin/sh

# Install expect
apk add --no-cache expect

# Make sure auto_confirm.sh is executable
chmod +x ./auto_confirm.sh

# Set npm proxy configurations
npm config set proxy 'http://MSansyzb:%21%40%23Eubank%40%21%23%23@proxy01.eub.kz:8080'
npm config set https-proxy 'http://MSansyzb:%21%40%23Eubank%40%21%23%23@proxy01.eub.kz:8080'

# Clean npm cache and force reinstall packages
npm cache clean --force
npm install --force --verbose

# Run the development server
echo "Running"
npm run dev