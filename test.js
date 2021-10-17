const { exec } = require('child_process');
process.env.REGEN_SCRIPT = './generate.sh';

exec(process.env.REGEN_SCRIPT, (error, stdout, stderr) => {
    if(error){
        console.log(error);
    } else {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    }
});