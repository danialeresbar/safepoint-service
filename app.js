const { error, log } = console;
const {
    decodeBase64,
    getBusinessType,
    writeJsonFile
} = require('./src/utils');

const login = require('./src/login');
const quote = require('./src/quote');

const BASE_URL = 'https://uat.safepointdc.com';
const QUOTE_ENDPOINT = 'IntelAgent/api/Quote/CreateQuote';

(async() => {
    const {
        CARRIER_USER,
        CARRIER_PASSWORD,
        ENV,
        SAFEPOINTUSER,
        SAFEPOINTPASSWORD,
        ID_CARRIER,
        UUID_PROCESS,
        VOLUME_PATH,
        BUSINESS_TYPE
    } = process.env;

    try {    
        const loginResponse = login.login(BASE_URL, SAFEPOINTUSER, SAFEPOINTPASSWORD);

        const quoteOption = {
            quote_id: '-',
            carrier_id: '-',
            quote_carrier_id: '-',
            base_price: 0,
            surcharges: 0,
            total_price: 0,
            selected: false,
            process_time: 0,
            error_details: '',
            result_status: 1,
            url_quote: '',
            url_screenshot_success: '',
            url_screenshot_failed: ''
        };

        // Solving promise
        loginResponse.then((token) => {
            log('::::: QUOTING PROCESS :::::');
            const start = Date.now();
            const quoteResponse = quote.quote(`${BASE_URL}/${QUOTE_ENDPOINT}`, token);
            quoteResponse.then((quoteResult) => {
                log(quoteResult);
                const duration = Date.now() - start;
                log(duration);
            });
        });

    } catch (error) {
        error(error);
    }
})();
