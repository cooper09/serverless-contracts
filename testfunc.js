const axios = require('axios');

const url = 'https://sonyainc.net/json/test.json';

const fetchRate = async () => {
    return new Promise((resolve,reject) => {
    try {
        axios.get('https://sonyainc.net/json/test.json')
            .then(resp => console.log("response: ", resp.data.string ))  
        } catch (e) {
            console.log("Error loading data: ", e );
        }
        
    })//end Promise

}//end fetchRate

const send = async (amount, toAddress) => {
    // 
}

const recieve = async (amount, fromAddress) => {
    //
}

module.exports = {
    fetchRate,
    send,
    recieve
}
