---
title: Smart Contracts
---

# Smart Contracts

[[toc]]

## Prepare solidity compiler

`Usage: ioctl contract prepare`

```
➜  ioctl contract prepare

...
Solidity compiler is ready now.
```

This process installs `solc` to you env. You can also install it by using the following commands.

On Ubuntu, you can use the following command

```
sudo add-apt-repository ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install solc
```

On macOS, you can use the following command

```
brew update
brew upgrade
brew tap ethereum/ethereum
brew install solidity@5
```

For more detailed instruction of installing `solc`, please refer to https://solidity.readthedocs.io/en/v0.5.0/installing-solidity.html.

Please note that `ioctl` currently supports `solc` `4.x` and `5.x`. Please make sure you install the current version.

## Compile smart contract

`Usage: ioctl contract compile CONTRACT_NAME [CODE_FILES...] [--abi-out ABI_PATH] [--bin-out BIN_PATH]`

```
➜  ioctl contract compile Multisend
Output:
======= multisend2.sol:Multisend =======
Binary:
0x608060405234801561001057600080fd5b5060405160408061096483398101604052805160209091015160008054600160a060020a03191633179055600191909155600255610911806100536000396000f30060806...
Contract JSON ABI
[{"constant":false,"inputs":[{"name":"recipients","type":"address[]"},{"name":"amounts","type":"uint256[]"},{"name":"payload","type":"string"}],"name":"sendCoin","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},
...
```

## Deploy smart contract from sol file

`Usage: ioctl contract deploy sol CONTRACT_NAME [CODE_FILES...] [--with-arguments INIT_INPUT]`

```
➜  ioctl contract deploy sol Multisend --with-arguments '{"_minTips":1,"_limit":20}' -s yqr
Output:
...
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:iotexscan.io/action/xxx...
```

## Deploy smart contract from bytecode

`Usage: ioctl contract deploy bytecode BYTECODE [ABI_PATH INIT_INPUT]`

```
➜  ioctl contract deploy bytecode 0x1bfc56c6... -s yqr
Output:
...
version: 1  nonce: 144  gasLimit: 745466  gasPrice: 0.000001 IOTX
senderAddress: io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng (yqr)
execution: <
  contract:
  data: 608060405234801561001057600080fd5b5060405160408061096483398101604052805160209091015160008054600160a060020a03191633179055600191909155600255610911806100536000396000f300608060405260043610
...
>
senderPubKey: 046d89e514d67b702d0a4bf15bfa32f2ffac43ab56f9c9a3a0020b3cd02c426267dd8a5a03bca5c2fe2487fd0e1539b8d25053ba1fc9db83684ea7a33b70f936f7
signature: f436c1ffadd63bf67308d8416529aac04deeb0761022aa5d75a60869e91dc5ab4dd64576d82ffe1a40e569450c6463accbbe2b9cf9251b0577419f6a6995e48800

Please confirm your action.


Options: yes
Quit for anything else.
yes
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:iotexscan.io/action/xxx...
```

## Deploy smart contract from bin file

`Usage: ioctl contract deploy bin BIN_PATH [ABI_PATH INIT_INPUT]`

```
➜  ioctl contract deploy bin a.bin a.abi '{"_minTips":1,"_limit":20}' -s yqr
Output:
...
version: 1  nonce: 143  gasLimit: 781866  gasPrice: 0.000001 IOTX
senderAddress: io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng (yqr)
execution: <
  contract:
  data: 608060405234801561001057600080fd5b5060405160408061096483398101604052805160209091015160008054600160a060020a03191633179055600191909155600255610911806100536000396000f300608060405260043610
...
>
senderPubKey: 046d89e514d67b702d0a4bf15bfa32f2ffac43ab56f9c9a3a0020b3cd02c426267dd8a5a03bca5c2fe2487fd0e1539b8d25053ba1fc9db83684ea7a33b70f936f7
signature: 310b186c59563eb1e261465b9e28a325149267e10afed988e697272f5411defc7c1cc419f01c6fbb45e4fbb2f50bcdbfb63fec7bd5e1a0f9ec43d6fcc286462a01

Please confirm your action.


Options: yes
Quit for anything else.
yes
Action has been sent to blockchain.
Wait for several seconds and query this action by hash:iotexscan.io/action/xxx...
```

## Invoke smart contract by function

`Usage: ioctl contract invoke function (CONTRACT_ADDRESS|ALIAS) ABI_PATH FUNCTION_NAME [AMOUNT_IOTX] [--with-arguments INVOKE_INPUT]`

```
→  ioctl contract invoke function io1h8z... a.abi sendCoin 2 --with-arguments {"recipients":["io1h8zxmdacge966wp6t90a02ncghaa6eptnftfqr","io14fmlh7zedcx7tn3k9k744v54nxnv8zky86tjhj"],"amounts":["312","123"],"payload":"PLEASE!!!"}
Output:
version: 1  nonce: 146  gasLimit: 45600  gasPrice: 0.000001 IOTX
senderAddress: io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng (yqr)
execution: <
  contract: io1h8zxmdacge966wp6t90a02ncghaa6eptnftfqr (m)
  amount: 2 IOTX
  data: 02c4bc47000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000
...
```

## Invoke smart contract by bytecode

`Usage: ioctl contract invoke bytecode (CONTRACT_ADDRESS|ALIAS) PACKED_ARGUMENTS [AMOUNT_IOTX]`

```
→  ioctl contract deploy bytecode 0x1bfc56c6... -s yqr
Output:
version: 1  nonce: 147  gasLimit: 45600  gasPrice: 0.000001 IOTX
senderAddress: io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng (yqr)
execution: <
  contract: io1h8zxmdacge966wp6t90a02ncghaa6eptnftfqr (m)
  amount: 2 IOTX
  data: 02c4bc47000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000
...
```

## Test smart contract by bytecode

`Usage: ioctl contract test bytecode (CONTRACT_ADDRESS|ALIAS) PACKED_ARGUMENTS [AMOUNT_IOTX]`

```
→  ioctl contract test bytecode io18qq... a4d66daf
Output:
return 0000000000000000000000000000000000000000000000000000000000000000
```

## Test smart contract by function

`Usage: ioctl contract test function (CONTRACT_ADDRESS|ALIAS) ABI_PATH FUNCTION_NAME [AMOUNT_IOTX] [--with-arguments INVOKE_INPUT]`

```
→  ioctl contract test function io18qq... a.abi owner
Output:
return 000000000000000000000000c7f43fab2ca353d29ce0da04851ab74f45b09593
```
## Share local files to your IoTex IDE for developing, deploying and debugging of native IoTeX smart contract

`Usage: ioctl contract share LOCAL_FOLDER_PATH [--iotex-ide YOUR_IOTEX_IDE_URL_INSTANCE]`

LOCAL_FOLDER_PATH can be absolute or relatively. --iote-ide flag defaults to https://ide.iotex.io.

```
→  ioctl contract share ioctl 
Output:
2020/08/22 16:45:00 Listening on 127.0.0.1:65520, Please open your IDE ( https://ide.iotex.io ) to connect to local files
2020/08/22 16:45:05 share :ioctl/client.go
2020/08/22 16:45:05 share :ioctl/cmd/account/account.go
2020/08/22 16:45:05 share :ioctl/cmd/account/account_test.go
2020/08/22 16:45:05 share :ioctl/cmd/account/accountbalance.go
...
```
