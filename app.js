const { error, log } = console;
const {
    decodeBase64,
    getBusinessType,
    writeJsonFile
} = require('./src/utils');

const login = require('./src/login');
const ho3 = require('./src/ho3');
const ho4 = require('./src/ho4');
const ho6 = require('./src/ho6');

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
        const HO3 = require(`${VOLUME_PATH}/${UUID_PROCESS}/HO3.json`);
        const HO4 = require(`${VOLUME_PATH}/${UUID_PROCESS}/HO4.json`);
        const HO6 = require(`${VOLUME_PATH}/${UUID_PROCESS}/HO6.json`);
    
        login.login(BASE_URL, SAFEPOINTUSER, SAFEPOINTPASSWORD);

        // Quoting according to the business type
        switch (BUSINESS_TYPE) {
            case 'HO3':
                ho3.ho3(HO3, `${BASE_URL}/${QUOTE_ENDPOINT}`)
                break;

            case 'HO4':

                break;
        
            case 'HO6':

                break;

            default:
                break;
        }

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

    } catch (error) {
        error(error);
    }
})();
