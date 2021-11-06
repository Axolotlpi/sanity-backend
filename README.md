# Sanity Backend
Currently the goal of this backend will be to provide basic functions responding to  
Sanity webhook calls and possible site generation tiggers. (see Frontend Notes)

## Use
Clone repo and:  

To install packages:  

    npm i
  

**Check the ***Don't forget*** section before continuing**   
To run dev server  

    npm run dev 

## Don't forget to:   
create .env file with the folling environment variables:  

    GEN_SCRIPT="./generate.sh" #the script called on sanity webhook
    SANITY_KEY=key #your own generated key that you will share with sanity webhook  

The script will be run on webhook calls and is intended to call the commands for generating  
the astro frontend.

The provided script is for the following use.

## Frontend notes:

This backend was created for Astro js since it does not yet  
have its own site generation mechanisms (like NEXT js does).

For use with astro you may create a seperate bash script in your fontend
which simply builds to this backend's public directory.   
In this case we have the directory passed into the second script as a parameter.

## The `generate.sh` script

The script provided has placeholder names for:  
* **astro-frontend**: the relative root directory of your frontend
* **sanity-backend**: the relative root directory of this backend from the frontend directory
* **`buildToServer.sh`**: the bash script located in your frontend's root dir that will be run with this backend's public directory as its parameter  

Checkout the script for a walkthrough.

Notice the purpose of the public-backup dir is to cover for the possibility of a brief interruption caused by the `buildToServer.sh` script replacing the old site files.