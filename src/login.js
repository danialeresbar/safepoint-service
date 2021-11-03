'use strict';

const axios = require('axios');
const fs = require('fs')
const { log } = console;

const LOGIN_PATH = 'IntelAgent/api/Login/UserLogin'

const login = (url, user, password) => {
    log('::::: LOGIN :::::');

    try {
        return axios.post(`${url}/${LOGIN_PATH}`, {
            "userName": user,
            "password": password
        }).then((response) => {
            const status = response.status;
            if (status === 200) {
                fs.writeFile('./data/0/tokens.json', JSON.stringify(response.data, null, 2), err => {
                    if (err) throw err;
                });
                log('Login successfully! - Token has been saved');

                if (response.data.hasOwnProperty('accessToken')) {
                    return response.data.accessToken
                }
            } else {
                log('Login attempt failed')
            }
        });
    } catch (error) {
        throw {
            code: error.code,
            message: error.message,
            responseStatus: error.response?.status
        };
    }
}

module.exports = {
	login
};
