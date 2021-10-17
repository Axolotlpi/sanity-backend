const { exec } = require('child_process');

const api = function(req, res, next) {
    try {
        console.log("Running GEN_SCRIPT: ", process.env.GEN_SCRIPT);
        exec(process.env.GEN_SCRIPT, (error, stdout, stderr) => {
            if(error){
                console.log(error);
            } else {
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
            }
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

module.exports = api;