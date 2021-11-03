#!/bin/bash

#frontend directory
cd ../astro-frontend/ 

#your fontend build script, and it's parameters
./buildToServer.sh ../sanity-backend/public/

#back to your backend
cd ../sanity-backend

#backup your newly generated frontend
rm -r ./public-backup/*
cp -r ./public/* ./public-backup/