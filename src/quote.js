'use strict';

const axios = require('axios');
const fs = require('fs')

const {
    UUID_PROCESS,
    VOLUME_PATH,
    BUSINESS_TYPE
} = process.env;

const inputHO3 = require(`../${VOLUME_PATH}/${UUID_PROCESS}/HO3.json`);
const inputHO4 = require(`../${VOLUME_PATH}/${UUID_PROCESS}/HO4.json`);
const inputHO6 = require(`../${VOLUME_PATH}/${UUID_PROCESS}/HO6.json`);

const { log } = console;

const quote = (url, token) =>{
    log(`::::: ${BUSINESS_TYPE} ::::: `);

    let body = {}

    const headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };

    switch (BUSINESS_TYPE) {
        case 'HO4':
            body = inputHO4;
            break;

        case 'HO6':
            body = inputHO6;
            break;

        default:
            body = inputHO3;
            break;
    }

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
	quote
};
