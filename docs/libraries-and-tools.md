---
title: Libraries and Tools
---

## SDK Overview

`iotex-antenna` is our SDK allowing you to interact with a local or remote iotex blockchain node, using a gRPC or gRPC-web connection.

### Installation

In your JS project root, use `npm install` or `yarn add`.

```js
npm install iotex-antenna
```

In your Golang project root, use `go dep` or `go mod`.

```golang
go get -u github.com/iotexproject/iotex-antenna-go
```

### Quick Start

Using JS/Golang SDK

1. [generate an account / recover an account from the private key](/docs/libraries-and-tools.html#account)
2. [transfer tokens](/docs/libraries-and-tools.html#transfer)
3. [run smart contracts](/docs/libraries-and-tools.html#smart-contract)
4. [make RPC calls](/docs/libraries-and-tools.html#rpc-methods)
5. [check the complete API references](/#api-2-0)

Using GraphQL

1. [Documentation](https://iotexscan.io/doc/api-gateway/query.doc.html)
2. [GraphQL Playground](https://iotexscan.io/api-gateway/)

Having questions? Ask in [our gitter chat room](https://gitter.im/iotex-dev-community/Lobby).



## Account

The `antenna.iotx.accounts` contains functions to generate Iotex accounts and sign transactions and data.

:::: tabs

::: tab JS
```js
import Antenna from "iotex-antenna";

(async () => {
  const antenna = new Antenna("http://api.testnet.iotex.one:80");

  // create a new wallet which contains a public key, a private key, and an address.
  const wallet = antenna.iotx.accounts.create();

  // recover the whole wallet from a single private key
  const unlockedWallet = antenna.iotx.accounts.privateKeyToAccount("69805ee813eadffa8fae53d0e6063e5fbf6a6e0fb9e90f6eaad7bc67f3d6c4bd");
})()
```
:::

::: tab Golang
``` go
package main

import (
	"fmt"
	"log"

	"github.com/iotexproject/iotex-antenna-go/antenna"
)

func main() {
	// create a new wallet which contains a public key, a private key, and an address.
	wallet, err := antenna.NewAntenna("api.testnet.iotex.one:80")
	if err != nil {
		log.Fatalf("create antenna error: %v", err)
	}

	// recover the whole wallet from a single private key
	account, err := wallet.Iotx.Accounts.PrivateKeyToAccount("69805ee813eadffa8fae53d0e6063e5fbf6a6e0fb9e90f6eaad7bc67f3d6c4bd")
	if err != nil {
		log.Fatalf("create account error: %v", err)
	}
	fmt.Println(account.Address)
}
```
:::

::::


## Transfer

`antenna.iotx.accounts` create, sign, and send a transaction of transfer to iotex blockchain network.

:::: tabs

::: tab JS
```js
import Antenna from "iotex-antenna";
import {toRau} from "iotex-antenna/lib/account/utils";

(async () => {
  const antenna = new Antenna("http://api.testnet.iotex.one:80");
  const unlockedWallet = await antenna.iotx.accounts.privateKeyToAccount("73c7b4a62bf165dccf8ebdea8278db811efd5b8638e2ed9683d2d94889450426");
  const newWallet = antenna.iotx.accounts.create("any entropy");

  const actionHash = await antenna.iotx.sendTransfer({
    from: unlockedWallet.address,
    to: newWallet.address,
    value: toRau("1", "iotx"),
    gasLimit: "100000",
    gasPrice: toRau("1", "Qev")
  });
})()
```
:::

::: tab Golang
```go
package main

import (
	"fmt"
	"log"

	"github.com/iotexproject/iotex-antenna-go/iotx"

	"github.com/iotexproject/iotex-antenna-go/antenna"
)

func main() {
	wallet, err := antenna.NewAntenna("api.testnet.iotex.one:80")
	if err != nil {
		log.Fatalf("create antenna error: %v", err)
	}

	unlockedWallet, _ := wallet.Iotx.Accounts.PrivateKeyToAccount("73c7b4a62bf165dccf8ebdea8278db811efd5b8638e2ed9683d2d94889450426")
	newWallet, _ := wallet.Iotx.Accounts.Create()

	actionHash, err := wallet.Iotx.SendTransfer(&iotx.TransferRequest{
		From:     unlockedWallet.Address,
		To:       newWallet.Address,
		Value:    antenna.ToRau("1", "iotx"),
		GasLimit: "100000",
		GasPrice: "1",
	})
	if err != nil {
		log.Fatalf("transfer error: %v", err)
	}
	fmt.Println(actionHash)
}
```
:::

::::

To see the result of the transfer action, you can ether go to `https://iotexscan.io/action/:actionHash` or query like

:::: tabs

::: tab JS
```js
const action = await antenna.iotx.getActions({byHash: {actionHash: "91524e81da32c2ad75af76c673b2e01920e69a95737a4a5438e6d0da6b910616", checkingPending: true}});
```
:::

::: tab Golang
```go
action, err := wallet.Iotx.GetActions(&iotexapi.GetActionsRequest{
  Lookup: &iotexapi.GetActionsRequest_ByHash{
    ByHash: &iotexapi.GetActionByHashRequest{
      ActionHash:   "91524e81da32c2ad75af76c673b2e01920e69a95737a4a5438e6d0da6b910616",
      CheckPending: true,
    },
  },
})
```
:::

::::



## Smart Contract

The `iotx.Contract` class makes it easy to interact with smart contracts on the iotex blockchain. When you create a new contract object, you give it the json interface of the respective smart contract, and it will auto converts all calls into low-level ABI calls over RPC for you.

This allows you to interact with smart contracts as if they were JavaScript objects.

### Compiling Solidity

`iotex-antenna` does not compile solidity. However, you can use the following ways to get ABI and bytecode.

1. option 1: use https://iotexscan.io/wallet/smart-contract/deploy

2. option 2: in Node.js, use [`solc@0.4.25`](https://www.npmjs.com/package/solc)

```js
import solc from "solc";

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
const contractName = ":SimpleStorage";
const output = solc.compile(solidityFileString, 1);
const abi = JSON.parse(output.contracts[contractName].interface);
const bytecode = output.contracts[contractName].bytecode;
```

3. option 3: in browser, use [browser-solc](https://www.npmjs.com/package/browser-solc). [Here is an example from iotex-explorer](https://github.com/iotexproject/iotex-explorer/blob/master/src/shared/wallet/contract/deploy.tsx#L114).

### Deploying Contract

Once you get the abi and bytecode from the step above, then you can deploy it by sending the execution to the iotex blockchain network.

:::: tabs

::: tab JS
```js
import Antenna from "iotex-antenna";

(async () => {
  const antenna = new Antenna("http://api.testnet.iotex.one:80");

  const bytecode = "608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a7230582043be766a6a271867521090c3e12130ea8891a8f59d4833bc205a3e2e2c70b4730029";

	const abi = [{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_x","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

  const creator = antenna.iotx.accounts.privateKeyToAccount(
    "73c7b4a62bf165dccf8ebdea8278db811efd5b8638e2ed9683d2d94889450426"
  );

  const actionHash = await antenna.iotx.deployContract({
    from: creator.address,
    amount: "0",
		abi: abi,
    data: Buffer.from(bytecode, "hex"),
    gasPrice: toRau("1", "Qev"),
    gasLimit: "100000"
  });
})()
```
:::

::: tab Golang
```go
package main

import (
	"fmt"
	"log"

	"github.com/iotexproject/iotex-antenna-go/iotx"

	"github.com/iotexproject/iotex-antenna-go/antenna"
)

func main() {
	wallet, err := antenna.NewAntenna("api.testnet.iotex.one:80")
	if err != nil {
		log.Fatalf("create antenna error: %v", err)
	}

	bytecode := "608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a7230582043be766a6a271867521090c3e12130ea8891a8f59d4833bc205a3e2e2c70b4730029"

	creator, _ := wallet.Iotx.Accounts.PrivateKeyToAccount("73c7b4a62bf165dccf8ebdea8278db811efd5b8638e2ed9683d2d94889450426")

	actionHash, err := wallet.Iotx.DeployContract(&iotx.ContractRequest{
		From:     creator.Address,
		Abi:      `[{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_x","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]`,
		Data:     bytecode,
		GasLimit: "100000",
		GasPrice: "1",
	})
	if err != nil {
		log.Fatalf("transfer error: %v", err)
	}

	fmt.Println(actionHash)
}
```
:::

::::

Need a full example? [Check our integration test.](https://github.com/iotexproject/iotex-antenna/blob/master/src/__test__/iotx.integration.test.ts#L98)

Once the action is broadcast, you can query the action.

:::: tabs

::: tab JS
```js
const action = await antenna.iotx.getActions({byHash: actionHash, checkingPending: true});
```
:::

::: tab Golang
```go
action, err := wallet.Iotx.GetActions(&iotexapi.GetActionsRequest{
  Lookup: &iotexapi.GetActionsRequest_ByHash{
    ByHash: &iotexapi.GetActionByHashRequest{
      ActionHash:   actionHash,
      CheckPending: true,
    },
  },
})
```
:::

::::

Once the action is minted, you can query the receipt.

:::: tabs

::: tab JS
```js
const receipt = await antenna.iotx.getReceiptByAction({actionHash: actionHash});
```
:::

::: tab Golang
```go
receipt, err := wallet.Iotx.GetReceiptByAction(&iotexapi.GetReceiptByActionRequest{
  ActionHash: actionHash,
})
```
:::

::::

### Interacting with Smart Contract

After you get the contract address from the receipt, you can interact with the contract by constructing the contract first, and then calling contract functions.

There are methods `set` and `get` in the example contract `SimpleStorage` defined in the [solidity string above](#compiling-solidity), so you can call them as the following.

:::: tabs

::: tab JS
```js
import Antenna from "iotex-antenna";
import {Contract} from "iotex-antenna/lib/contract/contract";

(async () => {
  const antenna = new Antenna("http://api.testnet.iotex.one:80");

  const sender = antenna.iotx.accounts.privateKeyToAccount("73c7b4a62bf165dccf8ebdea8278db811efd5b8638e2ed9683d2d94889450426");

  const contract = new Contract(
    [{
      "constant": false,
      "inputs": [{"name": "x", "type": "uint256"}],
      "name": "set",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [{"name": "", "type": "uint256"}],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }],
    "io186s45j3rgvhxh25ec6xk9wap0drtthk3jq4du7",
    {
      provider: antenna.iotx
    }
  );

  const actionHash = await contract.methods.set(101, {
    account: sender,
    gasLimit: "1000000",
    gasPrice: "1000000000000"
  });

  const getResult = await antenna.iotx.readContractByMethod({
    from: sender.address,
    contractAddress: "io186s45j3rgvhxh25ec6xk9wap0drtthk3jq4du7",
    abi: [{
      "constant": false,
      "inputs": [{"name": "x", "type": "uint256"}],
      "name": "set",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [{"name": "", "type": "uint256"}],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }],
    method: "get"
  });
})()
```
:::

::: tab Golang
```go
package main

import (
	"log"

	"github.com/iotexproject/iotex-antenna-go/antenna"
	"github.com/iotexproject/iotex-antenna-go/iotx"
)

func main() {
	wallet, err := antenna.NewAntenna("api.testnet.iotex.one:80")
	if err != nil {
		log.Fatalf("create antenna error: %v", err)
	}

	sender, _ := wallet.Iotx.Accounts.PrivateKeyToAccount("73c7b4a62bf165dccf8ebdea8278db811efd5b8638e2ed9683d2d94889450426")

	actionHash, err := wallet.Iotx.ExecuteContract(&iotx.ContractRequest{
		From:     sender.Address,
		Address:  "io186s45j3rgvhxh25ec6xk9wap0drtthk3jq4du7",
		Abi:      `[{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_x","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]`,
		Method:   "set",
		GasLimit: "100000",
		GasPrice: "1",
	}, 101)
	if err != nil {
		log.Fatalf("transfer error: %v", err)
	}

	result, err := wallet.Iotx.ReadContractByMethod(&iotx.ContractRequest{
		From:     sender.Address,
		Address:  "io186s45j3rgvhxh25ec6xk9wap0drtthk3jq4du7",
		Abi:      `[{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_x","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]`,
		Method:   "get",
		GasLimit: "100000",
		GasPrice: "1",
	})
	if err != nil {
		log.Fatalf("transfer error: %v", err)
	}
}
```
:::

::::



## RPC Methods

The `rpc-method`(provider) package allows you to make gRPC calls to Iotex blockchain.

Use the umbrella antenna.iotex package:

:::: tabs

::: tab JS
```js
import Antenna from "iotex-antenna";

(async () => {
  const antenna = new Antenna("http://api.testnet.iotex.one:80");

  const account = await antenna.iotx.getAccount({address: "io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng"});
  const chainMeta = await antenna.iotx.getChainMeta();
  const actions = await antenna.iotx.getActions({byIndex: {start: 1, count: 5}});
  const blocks = await antenna.iotx.getBlockMetas({byIndex: {start: 1, count: 5}});
})()
```
:::

::: tab Golang
```go
package main

import (
	"log"

	"github.com/iotexproject/iotex-core/protogen/iotexapi"

	"github.com/iotexproject/iotex-antenna-go/antenna"
)

func main() {
	wallet, err := antenna.NewAntenna("api.testnet.iotex.one:80")
	if err != nil {
		log.Fatalf("create antenna error: %v", err)
	}

	account, err := wallet.Iotx.GetAccount(&iotexapi.GetAccountRequest{Address: "io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng"})
	chainMeta, err := wallet.Iotx.GetChainMeta(&iotexapi.GetChainMetaRequest{})
	actions, err := wallet.Iotx.GetActions(&iotexapi.GetActionsRequest{
		Lookup: &iotexapi.GetActionsRequest_ByIndex{
			ByIndex: &iotexapi.GetActionsByIndexRequest{
				Start: 1,
				Count: 5,
			},
		},
	})
	blocks, err := wallet.Iotx.GetBlockMetas(&iotexapi.GetBlockMetasRequest{
		Lookup: &iotexapi.GetBlockMetasRequest_ByIndex{
			ByIndex: &iotexapi.GetBlockMetasByIndexRequest{
				Start: 1,
				Count: 5,
			},
		},
	})
}
```
:::

::::

Use this standalone package:

:::: tabs

::: tab JS
```js
import RpcMethod from "iotex-antenna/lib/rpc-method";

(async () => {
  const provider = new RpcMethod("http://api.testnet.iotex.one:80");

  const account = await provider.getAccount({address: "io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng"});
  const chainMeta = await provider.getChainMeta();
  const actions = await provider.getActions({byIndex: {start: 1, count: 5}});
  const blocks = await provider.getBlockMetas({byIndex: {start: 1, count: 5}});
})()
```
:::

::: tab Golang
```go
package main

import (
	"log"

	"github.com/iotexproject/iotex-antenna-go/rpcmethod"

	"github.com/iotexproject/iotex-core/protogen/iotexapi"
)

func main() {
	provider, err := rpcmethod.NewRPCMethod("api.testnet.iotex.one:80")
	if err != nil {
		log.Fatalf("create antenna error: %v", err)
	}

	account, err := provider.GetAccount(&iotexapi.GetAccountRequest{Address: "io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng"})
	chainMeta, err := provider.GetChainMeta(&iotexapi.GetChainMetaRequest{})
	actions, err := provider.GetActions(&iotexapi.GetActionsRequest{
		Lookup: &iotexapi.GetActionsRequest_ByIndex{
			ByIndex: &iotexapi.GetActionsByIndexRequest{
				Start: 1,
				Count: 5,
			},
		},
	})
	blocks, err := provider.GetBlockMetas(&iotexapi.GetBlockMetasRequest{
		Lookup: &iotexapi.GetBlockMetasRequest_ByIndex{
			ByIndex: &iotexapi.GetBlockMetasByIndexRequest{
				Start: 1,
				Count: 5,
			},
		},
	})
}
```
:::

::::
