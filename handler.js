'use strict';

let exchange = require('./testfunc')

module.exports.get_all_rates = async event => {
  let answer = await exchange.fetchAllRates(event)
  return JSON.stringify(answer)
}

module.exports.get_rate = async event => {
  let { exchange, coin} = event;  
  let resp = await exchange.fetchRate(exchange, coin)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        test_result: resp,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.send_data = async event => {
  let resp = await exchange.send()

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        test_result: resp,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.recieve_data = async event => {
  let resp = await exchange.recieve(10)

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        test_result: resp,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
