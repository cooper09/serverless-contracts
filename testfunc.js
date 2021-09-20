const url = 'https://sonyainc.net/json/test.json';

const fetchRate = async () => {
    return new Promise((resolve,reject) => {
        fetch('https://sonyainc.net/json/test.json')
        .then(response => response.json())
        //.then(data => console.log(data));
        .then(resolve(data));    
    })
}

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