const axios = require('axios');
const Web3 = require('web3');

const COIN = process.env.COIN || "dai";
const EXCHANGE_GET_RATE_CONTRACT = process.env.EXCHANGE_GET_RATE_CONTRACT
const UNISWAP_GET_RATE_WALLET = process.env.UNISWAP_GET_RATE_WALLET
//const UNISWAP_GET_RATE_ABI = require(`./ABI/uniswap_get_rate_${COIN}.json`)
const UNISWAP_GET_RATE_ABI = require(`./ABI/uniswap_get_rate_dai.json`)

const url = `${process.env.RPC_URL}/${process.env.API_KEY}`

const web3 = new Web3(url)

//const url = 'https://sonyainc.net/json/test.json';


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
        
    }) //end promise   
}

const makeDecision = async rates => {
    return "decision"
}

const fetchRate = async () => {
    var priceContract = new web3.eth.Contract(UNISWAP_GET_RATE_ABI, EXCHANGE_GET_RATE_CONTRACT)
    return new Promise((resolve,reject) => {
        priceContract.methods.getUniswapBuyPrice().call({'from': UNISWAP_GET_RATE_WALLET}, (error, data) => {
            if(error != null){ reject(error) }
            resolve(data)
        })
    })
}//end fetchRate


/*
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

}//end fetchRate  */

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
