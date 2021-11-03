'use strict';

const axios = require('axios');
const fs = require('fs')
const { error, log } = console;

const ho3 = (body, url, token) =>{
    log('::::: HO3 :::::');

    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };

    try {
        return axios.post(url, body, {headers: headers}).then((response) => {
            const status = response.status;
            // log('Status: ' + status + '-' + response.statusText);
            if (status === 200) {
                // fs.writeFile('./data/0/response.json', JSON.stringify(response.data, null, 2), err => {
                //     if (err) throw err;
                // });
                // log('Quote generated successfully!');
                return response.data;
            } else {
                error('Error: ' + status)
            }
        })
        .catch(function (error) {
            log('ERROR', error.response?.status);
            log(error.response)
        });
    } catch (error) {
        log(error)
    }
}

module.exports = {
	ho3
};
