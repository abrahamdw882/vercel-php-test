const { exec } = require("child_process");

console.log("Starting PHP in Docker...");

exec("docker build -t my-php-app . && docker run -p 3000:80 my-php-app", (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${err.message}`);
        return;
    }
    console.log(stdout);
});
