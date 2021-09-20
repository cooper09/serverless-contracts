const axios = require('axios');

const url = 'https://sonyainc.net/json/test.json';

const fetchAllRates = async config => {
    console.log(`config: ${config}`)
    return new Promise((resolve, reject )=>{
        let exchanges = Object.keys(config)
        let promises = []
        for( let key in exchanges) {
            let value = exchanges[key]
            console.log(`exchange: ${key} => ${value}`)
            promises.push(fetchRate(key,value))
        }
        Promise.all(promises).then(results=>{
            resolve(results)
        })
        
    })    
}

const makeDecision = async rates => {
    return "decision"
}

const fetchRate = async (xchg, token) => {
    //console.log("fetchRate: ", xchg )
    return new Promise((resolve, reject) => {
        axios.get(`https://sonyainc.net/json/test.json?exchange=${xchg}&token=${token}`)
            .then(resp => {
                console.log("response: ", resp.data)
                resolve(resp.data)
            })
            .catch(e => {
                console.log("Error loading data: ", e);
                reject(e)
            })
    })//end Promise

}//end fetchRate

const send = async (amount, toAddress) => {
    // 
    return "Send me, baby...";
}

const recieve = async (amount, fromAddress) => {
    //
    return "Receive me, baby...";
}

module.exports = {
    fetchAllRates,
    fetchRate,
    send,
    recieve
}
