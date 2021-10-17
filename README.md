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

    GEN_SCRIPT="./your-script.sh" #intended for a shell script that triggers site generation  
    SANITY_KEY=key #your own generated key that you will share with sanity webhook  

The script will be run on webhook calls but may be modified for other use cases.

The provided script is for the following use.

## Frontend notes: {frontend}

This backend was created for Astro js since it does not yet  
have its own site generation mechanisms (like NEXT js does).

For use with astro you may create a seperate bash script in your fontend
which simply builds  
to this backend's public directory.   
Preferably have the directory included through a parameter.

## The `generate.sh` script

The script provided has placeholder names for:  
* **astro-frontend**: the relative root directory of your frontend
* **sanity-backend**: the relative root directory of this backend from the frontend directory
* **`buildToServer.sh`**: the bash script located in your frontend's root dir that will be run with this backend's public directory as its parameter  

### To go over the script:  

    cd ../astro-frontend/ # go to frontend dir
    ./buildToServer.sh ../sanity-backend/public/ #run the bash script with this public dir
    cd ../sanity-backend # go back to backend root dir
    cp -r ./public/* ./public-backup/ # copy the new site to the backup dir (for next time)

Notice the public-backup dir is used to cover for the possibility of a brief interruption caused by  
the `buildToServer.sh` script replacing the old site files.