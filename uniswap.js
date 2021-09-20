const Web3 = require('web3')

const COIN = process.env.COIN || "dai"

const EXCHANGE_GET_RATE_CONTRACT = process.env.EXCHANGE_GET_RATE_CONTRACT
const UNISWAP_GET_RATE_WALLET = process.env.UNISWAP_GET_RATE_WALLET
const UNISWAP_GET_RATE_ABI = require(`./ABI/uniswap_get_rate_${COIN}.json`)

const url = `${process.env.RPC_URL}/${process.env.API_KEY}`

const web3 = new Web3(url)

const fetchRate = async () => {
    var priceContract = new web3.eth.Contract(UNISWAP_GET_RATE_ABI, EXCHANGE_GET_RATE_CONTRACT)
    return new Promise((resolve,reject) => {
        priceContract.methods.getUniswapBuyPrice().call({'from': UNISWAP_GET_RATE_WALLET}, (error, data) => {
            if(error != null){ reject(error) }
            resolve(data)
        })
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