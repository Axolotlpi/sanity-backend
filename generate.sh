#!/bin/bash

cd ../astro-frontend/
./buildToServer.sh ../sanity-backend/public/
cd ../sanity-backend
rm -r ./public-backup/*
cp -r ./public/* ./public-backup/