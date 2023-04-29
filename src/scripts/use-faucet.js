const axios = require('axios');

async function requestEther(address) {
  const url = `https://goerli.infura.io/v3/fa4f4ebd9800481b9e69a88ca17432a6`;
  const data = { jsonrpc: '2.0', method: 'eth_requestFromFaucet', params: [address], id: 1 };
  const response = await axios.post(url, data);
  return response.data.result;
}

const myAddress = '0xD8ccbdd934507551c68314bd67CEAC5E44f661b4'; // Replace with your Ethereum address
requestEther(myAddress).then(txHash => console.log(`Transaction hash: ${txHash}`));
