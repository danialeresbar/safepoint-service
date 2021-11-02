const https = require('https');
const { error, log } = console;
const {
    decodeBase64,
    getBusinessType,
    writeJsonFile
} = require('./src/utils');

(async() => {
    const {
        CARRIER_USER,
        CARRIER_PASSWORD,
        ENV,
        SAFEPOINTUSER,
        SAFEPOINTPASSWORD,
        ID_CARRIER,
        UUID_PROCESS,
        VOLUME_PATH
    } = process.env;

    const data = new TextEncoder().encode(
        JSON.stringify({
            "userName": SAFEPOINTUSER,
            "password": SAFEPOINTPASSWORD
        })
    )
    
    const options = {
        host: 'uat.safepointdc.com/IntelAgent/api/Login/UserLogin',
        port: 443,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    }
    
    const req = https.request(options, (res) => {
        console.log(`statusCode: ${res.statusCode}`);
        console.log('headers:', res.headers);
      
        res.on('data', d => {
          process.stdout.write(d)
        });
      });
    
    req.on('error', error => {
        console.error(error);
    });
    
    req.write(data);
    req.end();
})();

function doQuoteRequest(params) {

    // const quoteOPtion = {
    //     quote_id: '-',
    //     carrier_id: '-',
    //     quote_carrier_id: '-',
    //     base_crice: 0,
    //     surcharges: 0,
    //     total_price: 0,
    //     selected: false,
    //     process_time: 0,
    //     error: errorMessage,
    //     error_details: errorDetailMessage,
    //     result_status: resultStatus,
    //     url_quote: '',
    //     url_screenshot_success: '',
    //     url_screenshot_failed: ''
    // }
}
