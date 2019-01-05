---
id: sdk-smart-contract
title: Smart Contract
---

The `iotx.Contract` class makes it easy to interact with smart contracts on the iotex blockchain. When you create a new contract object, you give it the json interface of the respective smart contract, and it will auto converts all calls into low-level ABI calls over RPC for you.

This allows you to interact with smart contracts as if they were JavaScript objects.

## Compiling Solidity

`iotex-client-js` does not compile solidity. However, you can use the following ways to get ABI and bytecode.

1. option 1: use https://iotexscan.io/wallet

2. option 2: in Node.js, use [`solc`](https://www.npmjs.com/package/solc)

```js
import solc from 'solc';

const solidityFileString = `
pragma solidity ^0.4.16;

contract SimpleStorage {
   uint storedData;

   function set(uint x) public {
       storedData = x;
   }

   function get() public view returns (uint) {
       return storedData;
   }
}
`;
const contractName = ':SimpleStorage';
const output = solc.compile(solidityFileString, 1);
const abi = JSON.parse(output.contracts[contractName].interface);
const bytecode = output.contracts[contractName].bytecode;
```

3. option 3: in browser, use [browser-solc](https://www.npmjs.com/package/browser-solc)

## Deploying Contract

Once you get the abi and bytecode from the above step, then you can deploy it by sending the execution to the iotex blockchain network.

```js
import {Iotx, HttpProvider} from 'iotex-client-js';

(async () => {
  const contractName = ':SimpleStorage';
  const abi = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "x",
          "type": "uint256"
        }
      ],
      "name": "set",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
  const bytecode = "608060405234801561001057600080fd5b5060bf8061001f6000396000f30060806040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166360fe47b18114604d5780636d4ce63c146064575b600080fd5b348015605857600080fd5b5060626004356088565b005b348015606f57600080fd5b506076608d565b60408051918252519081900360200190f35b600055565b600054905600a165627a7a723058208236d8b2917002adfa862bbd8ea837cd90c6d76c5f0d7e1a0a7549faece1559f0029"

  const provider = new HttpProvider('http://localhost:14004/');
  const iotx = new Iotx(provider, {walletProvider: new HttpProvider('http://localhost:4004/api/wallet-core/')});
  const wallet = await iotx.accounts.add('c5364b1a2d99d127439be22edfd657889981e9ba4d6d18fe8eca489d48485371efcb2400');
  const contract = new iotx.Contract({abi, contractName, wallet});
  const exec = await contract.deploy({
    byteCode: bytecode,
    gasLimit: 100000,
    gasPrice: '0',
    version: 1,
    contract: '',
    amount: '1',
  });
})()
```

The exec's type is [TExecution](https://docs.iotex.io/docs/iotex-client-js#texecution). And then you can query its receipt.

```js
const receipt = await iotx.rpcMethods.getReceiptByExecutionID(exec.ID);
// receipt return value => {
//   returnValue: '',
//   status: 1,
//   hash: '7eb31c95ae0066c17699f6ca7d30b2e3f654794c7c30d9af06118f4f459f56ae',
//   gasConsumed: 10000,
//   contractAddress: 'io1qyqsqqqqgh345g9zle6qg7txkumkshluqd2p0yj0n7e50m',
//   logs: []
// }
```

## Interacting with Smart Contract

After you get the contract address from the receipt, you can interact with the contract by preparing the methods first, and then call contract functions.
There are methods `set` and `get` in the example contract `SimpleStorage` defined in the [solidity string above](#compiling-solidity), so you can call them as the following.

```js
await contract
.prepareMethods({
     contractAddress: receipt.contractAddress,
     gasLimit: 100000,
     gasPrice: '0',
     version: 1,
     amount: '0',
   })
.set(666);

const value = await contract
.prepareMethods({
     contractAddress: receipt.contractAddress,
     gasLimit: 100000,
     gasPrice: '0',
     version: 1,
     amount: '0',
   })
.get();
```
The value above is a dynamic type depending on what you defined in the solidity. Need more detailed API references? Please visit [iotx.Contract](/docs/iotex-client-js#contract)
