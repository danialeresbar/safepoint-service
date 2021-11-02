'use strict';

const axios = require('axios');
const fs = require('fs')
const { error, log } = console;

const ho3 = (body, url) => {
    log('::::: HO3 :::::');

    axios.post(url, body)
    .then((response) => {
        const status = response.status
        // log('Status: ' + response.status + '-' + response.statusText);
        if (status === 200) {
            fs.writeFile('./data/0/response.json', JSON.stringify(response.data, null, 2), err => {
                if (err) throw err;
            });
            log('Quote generated successfully!')
        } else {
            error('Error: ' + status)
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}

module.exports = {
	ho3
};
