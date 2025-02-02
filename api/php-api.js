module.exports = async (req, res) => {
    const exec = require('child_process').exec;

    exec('php /app/api/arise.php, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).send(`Error executing PHP code: ${stderr}`);
        }

        res.status(200).send(stdout); 
    });
};
