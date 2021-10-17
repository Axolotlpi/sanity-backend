#!/bin/bash

cd ../astro-frontend/
./buildToServer.sh ../sanity-backend/public/
cd ../sanity-backend
cp -r ./public/* ./public-backup/