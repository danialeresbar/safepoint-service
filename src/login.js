'use strict';

const axios = require('axios');
const fs = require('fs')
const { log } = console;

const LOGIN_PATH = '/IntelAgent/api/Login/UserLogin'

const login = (url, user, password) => {
    log('::::: LOGIN :::::');

    axios.post(`${url}/IntelAgent/api/Login/UserLogin`, {
        "userName": user,
        "password": password
    })
    .then((response) => {
        const status = response.status
        // log('Status: ' + response.status + '-' + response.statusText);
        if (status === 200) {
            fs.writeFile('./data/0/tokens.json', JSON.stringify(response.data, null, 2), err => {
                if (err) throw err;
            });
            log('Login successfully! - Token has been saved')
        } else {
            log('Login attempt failed')
        }
    })
    .catch(function (error) {
        console.log(error);
    });   
}

module.exports = {
	login
};
