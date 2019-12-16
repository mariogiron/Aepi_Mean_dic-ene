const axios = require('axios');
const chalk = require('chalk');
const fs = require('fs');

axios.get('https://asociacionaepi.es')
    .then((response) => {
        console.log(response.data);
        fs.appendFile('./aepi.html', response.data, (err) => {
            if (err) return console.log(err);
            console.log(chalk.bgBlue('Fichero guardado'));
        })
    })
    .catch((error) => {
        console.log(error);
    });