---
title: Libraries and Tools
---

## SDK Overview

`iotex-antenna` is our SDK allowing you to interact with a local or remote iotex blockchain node, using a gRPC connection.

| Features      | [antenna](https://github.com/iotexproject/iotex-antenna) | [antenna-java](https://github.com/iotexproject/iotex-antenna-java) | [antenna-go](https://github.com/iotexproject/iotex-antenna-go) | [antenna-swift](https://github.com/iotexproject/iotex-antenna-swift) |
| ------------- | -------------------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------- |
| crypto        | Yes                                                      | Yes                                                                | Yes                                                            | Yes                                                                  |
| rpc-method    | Yes                                                      | Yes                                                                | Yes                                                            | Yes                                                                  |
| account       | Yes                                                      | Yes                                                                | Yes                                                            | Yes                                                                  |
| action        | Yes                                                      | Yes                                                                | Yes                                                            | Yes                                                                  |
| contract      | Yes                                                      | Yes                                                                | Yes                                                            | Yes                                                                  |
| token support | Yes                                                      | Yes                                                                | Yes                                                            | Yes                                                                  |

### Installation

#### JS Project

In your JS project root, use `npm install` or `yarn add`.

```js
npm install iotex-antenna
```

or add the following line to your html.

```html
<script src="https://cdn.jsdelivr.net/npm/iotex-antenna@0.29.1/lib/iotex-antenna.browser.min.js"></script>
```

#### Golang Project

In your Golang project root, use `go dep` or `go mod`.

```golang
go get -u github.com/iotexproject/iotex-antenna-go
```

### Quick Start

Using JS/Golang SDK

1. [generate an account / recover an account from the private key](/docs/libraries-and-tools.html#account)
1. [generate a decentralized identity (DID)](/docs/libraries-and-tools.html#decentralized)
1. [transfer tokens](/docs/libraries-and-tools.html#transfer)
1. [run smart contracts](/docs/libraries-and-tools.html#smart-contract)
1. [make RPC calls](/docs/libraries-and-tools.html#rpc-methods)
1. [check the complete API references](/#api-2-0)

Using GraphQL

1. [Documentation](https://iotexscan.io/doc/api-gateway/query.doc.html)
2. [GraphQL Playground](https://iotexscan.io/api-gateway/)

Reference Doc

[iotex-antenna](https://iotexproject.github.io/iotex-antenna/)

Having questions? Ask in [our Discord channel](https://discord.com/channels/534888542648664074/549879942775701505).

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
  const unlockedWallet = antenna.iotx.accounts.privateKeyToAccount(
    "69805ee813eadffa8fae53d0e6063e5fbf6a6e0fb9e90f6eaad7bc67f3d6c4bd"
  );

  // get the balance, nonce, number of actions, pendingNonce of the account
  const accountDetails = await antenna.iotx.getAccount({
    address: wallet.address
  });
})();
```

:::

::: tab Golang

```go
package main

import (
	"fmt"
	"log"

	"github.com/iotexproject/iotex-antenna-go/v2/account"

)

func main() {

	// create a new wallet which contains a public key, a private key, and an address.
	wallet, err := account.NewAccount();
	if err != nil {
		log.Fatal(err)
	}

	// recover the whole wallet from a single private key
	acc, err := account.HexStringToAccount("69805ee813eadffa8fae53d0e6063e5fbf6a6e0fb9e90f6eaad7bc67f3d6c4bd")
	if err != nil {
		log.Fatalf("create account error: %v", err)
	}
	fmt.Println(acc.Address)
}
```

:::

::::

For more APIs, please visit [iotex-antenna js reference](https://iotexproject.github.io/iotex-antenna/classes/_iotx_.iotx.html#getaccount).

## Decentralized Identity (DID)

Decentralized Identity (DID) is essentially an ID that is

1. globally unique
1. resolve-able with high availability, and
1. cryptographically verifiable.

Given an IoTeX address `io1tpphshf0npzawfug7g4dhrzwkzepfkwgq5prm6`, we can derive its DID as `did:io:io1tpphshf0npzawfug7g4dhrzwkzepfkwgq5prm6`. And then you can create a DID JWT as the following example:

```js
import Antenna from "iotex-antenna";
import { sign, verify } from "iotex-antenna/lib/jwt/jwt";

(async () => {
  const antenna = new Antenna("http://api.testnet.iotex.one:80");

  // recover the whole wallet from a single private key
  const unlockedWallet = antenna.iotx.accounts.privateKeyToAccount(
    "69805ee813eadffa8fae53d0e6063e5fbf6a6e0fb9e90f6eaad7bc67f3d6c4bd"
  );

  const payload = {
    yourOwnPayload: "yourOwnPayload",
    iss: unlockedWallet.publicKey,
    sub: `did:io:${unlockedWallet.address}`
  };

  const signed = await sign(payload, unlockedWallet.privateKey);
  // eyJhbGciOiJFSzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ5b3VyT3duUGF5bG9hZCI6InlvdXJPd25QYXlsb2FkIiwiaXNzIjoiMDQ0MjI0MDkwYjhhYWU0NWI2MzdjOTA1NjI5ZTRjMzUyNjBhMTgwNDZkODc3MDlmNDIzMzBhNzlhYzBiYWFmMzc4NWU2NjkxNWQyZjRmZjdiMzgwYTVkNDA5NGYyZWFhM2YyYjc4MDE2YjI3OTIwOWRhYmZhY2Q3NGYxMDI2Y2QwMiIsInN1YiI6ImRpZDppbzppbzF0cHBoc2hmMG5wemF3ZnVnN2c0ZGhyendremVwZmt3Z3E1cHJtNiJ9.FK3R09_C99kvTPb-f56cvXGjkl8wd8auHBJJ2iqljAopuZhk8cg2_Wji8Gi30Q19jonMoQTYpMVREFmxw3d_DQA

  const actualPayload = await verify(signed);
  // {yourOwnPayload: "yourOwnPayload", iss: "044224090b8aae45b637c905629e4c35260a18046d87709f42…380a5d4094f2eaa3f2b78016b279209dabfacd74f1026cd02", sub: "did:io:io1tpphshf0npzawfug7g4dhrzwkzepfkwgq5prm6"}
})();
```

The self-sovereign JWT can be decoded as

```json
{
  "alg": "EK256K",
  "typ": "JWT"
}
.
{
  "yourOwnPayload": "yourOwnPayload",
  "iss": "044224090b8aae45b637c905629e4c35260a18046d87709f42330a79ac0baaf3785e66915d2f4ff7b380a5d4094f2eaa3f2b78016b279209dabfacd74f1026cd02",
  "sub": "did:io:io1tpphshf0npzawfug7g4dhrzwkzepfkwgq5prm6"
}
.signature
```

Please see more detailed specs in [IIP-7](https://github.com/iotexproject/iips/blob/master/iip-7.md).

## Transfer

`antenna.iotx.accounts` create, sign, and send a transaction of transfer to iotex blockchain network.

:::: tabs

::: tab JS

```js
import Antenna from "iotex-antenna";
import { toRau } from "iotex-antenna/lib/account/utils";

(async () => {
  const antenna = new Antenna("http://api.testnet.iotex.one:80");
  const unlockedWallet = await antenna.iotx.accounts.privateKeyToAccount(
    "73c7b4a62bf165dccf8ebdea8278db811efd5b8638e2ed9683d2d94889450426"
  );
  const newWallet = antenna.iotx.accounts.create("any entropy");

  const actionHash = await antenna.iotx.sendTransfer({
    from: unlockedWallet.address,
    to: newWallet.address,
    value: toRau("1", "iotx"),
    gasLimit: "100000",
    gasPrice: toRau("1", "Qev")
  });
})();
```

:::

::: tab Golang

```go
package main

import (
	"context"
	"fmt"
	"log"
	"math/big"

	"github.com/iotexproject/iotex-antenna-go/v2/account"
	"github.com/iotexproject/iotex-antenna-go/v2/iotex"
	"github.com/iotexproject/iotex-proto/golang/iotexapi"
)

func main() {
	conn, err := iotex.NewDefaultGRPCConn("api.testnet.iotex.one:80")
	if err != nil {
		log.Fatalf("connection error : %v", err)
	}
	defer conn.Close()


	acc, err := account.HexStringToAccount("9cdf22c5caa8a4d99eb674da27756b438c05c6b1e8995f4a0586745e2071b115")
	if err != nil {
		log.Fatalf("create account from private key error : %v", err)
	}
	c := iotex.NewAuthedClient(iotexapi.NewAPIServiceClient(conn), acc)

	to, err := account.NewAccount()
	if err != nil {
		log.Fatalf("create new account error : %v", err)
	}

	v := big.NewInt(1000000000000000000)
	hash, err := c.Transfer(to.Address(), v).SetGasPrice(big.NewInt(1)).SetGasLimit(1000000).Call(context.Background())
	if err != nil {
		log.Fatalf("transfer error %v", err)
	}
	fmt.Println(hash)
}


```

:::

::::

To see the result of the transfer action, you can either go to `https://iotexscan.io/action/actionHash` or query like

:::: tabs

::: tab JS

```js
const action = await antenna.iotx.getActions({
  byHash: {
    actionHash:
      "91524e81da32c2ad75af76c673b2e01920e69a95737a4a5438e6d0da6b910616",
    checkingPending: true
  }
});
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

option 1: use https://iotexscan.io/wallet/smart-contract/deploy

option 2: in Node.js, use [`solc@0.4.25`](https://www.npmjs.com/package/solc)

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
import { toRau } from "iotex-antenna/lib/account/utils";

(async () => {
  const antenna = new Antenna("http://api.testnet.iotex.one:80");

  const bytecode =
    "608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a7230582043be766a6a271867521090c3e12130ea8891a8f59d4833bc205a3e2e2c70b4730029";

  const abi = `[
    {
      constant: false,
      inputs: [{ name: "x", type: "uint256" }],
      name: "set",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "get",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [{ name: "_x", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    }
  ]`;

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
})();
```

:::

::: tab Golang

```go
package main

import (
	"context"
	"encoding/hex"
	"fmt"
	"log"
	"math/big"
	"strings"

	"github.com/ethereum/go-ethereum/accounts/abi"

	"github.com/iotexproject/iotex-antenna-go/account"
	"github.com/iotexproject/iotex-antenna-go/iotex"
	"github.com/iotexproject/iotex-proto/golang/iotexapi"

)

func main() {
	conn, err := iotex.NewDefaultGRPCConn("api.testnet.iotex.one:80")
	if err != nil {
		log.Fatalf("connection error : %v", err)
	}
	defer conn.Close()

	creator, _ := account.HexStringToAccount("73c7b4a62bf165dccf8ebdea8278db811efd5b8638e2ed9683d2d94889450426")
	c := iotex.NewAuthedClient(iotexapi.NewAPIServiceClient(conn), creator)

	abi, err := abi.JSON(strings.NewReader(`[{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_x","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]`))
	if err != nil{
		log.Fatalf("JSON error : %v", err)
	}
	bytecode := "608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a7230582043be766a6a271867521090c3e12130ea8891a8f59d4833bc205a3e2e2c70b4730029"
	data, err := hex.DecodeString(bytecode)
	if err != nil{
		log.Fatalf("Hex Decoding error : %v", err)
	}

	actionHash, err := c.DeployContract(data).SetGasPrice(big.NewInt(1)).SetGasLimit(1000000).SetArgs(abi, big.NewInt(10)).Call(context.Background())
	if err != nil {
		log.Fatalf("deploy error: %v", err)
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
const action = await antenna.iotx.getActions({
  byHash: actionHash,
  checkingPending: true
});
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
const receipt = await antenna.iotx.getReceiptByAction({
  actionHash: actionHash
});
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
import { Contract } from "iotex-antenna/lib/contract/contract";

(async () => {
  const antenna = new Antenna("http://api.testnet.iotex.one:80");

  const sender = antenna.iotx.accounts.privateKeyToAccount(
    "73c7b4a62bf165dccf8ebdea8278db811efd5b8638e2ed9683d2d94889450426"
  );

  const contract = new Contract(
    [
      {
        constant: false,
        inputs: [{ name: "x", type: "uint256" }],
        name: "set",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "get",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      }
    ],
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
    abi: [
      {
        constant: false,
        inputs: [{ name: "x", type: "uint256" }],
        name: "set",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "get",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      }
    ],
    method: "get"
  });
})();
```

:::

::: tab Golang

```go
package main

import (
	"context"
	"fmt"
	"log"
	"math/big"
	"strings"

	"github.com/ethereum/go-ethereum/accounts/abi"

	"github.com/iotexproject/iotex-address/address"
	"github.com/iotexproject/iotex-antenna-go/account"
	"github.com/iotexproject/iotex-antenna-go/iotex"
	"github.com/iotexproject/iotex-proto/golang/iotexapi"

)

func main() {
	conn, err := iotex.NewDefaultGRPCConn("api.testnet.iotex.one:80")
	if err != nil {
		log.Fatalf("connection error : %v", err)
	}
	defer conn.Close()

	creator, _ := account.HexStringToAccount("73c7b4a62bf165dccf8ebdea8278db811efd5b8638e2ed9683d2d94889450426")
	c := iotex.NewAuthedClient(iotexapi.NewAPIServiceClient(conn), creator)

	abi, err := abi.JSON(strings.NewReader(`[{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_x","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]`))
	if err != nil{
		log.Fatalf("JSON error : %v", err)
	}
	contract, err := address.FromString("io17sn486alutrnzlrdz9vv44g7qyc38hygf7s6h0")
	if err != nil{
		log.Fatalf("JSON error : %v", err)
	}
	//contract execution test
	actionHash, err := c.Contract(contract, abi).Execute("set", big.NewInt(8)).SetGasPrice(big.NewInt(1)).SetGasLimit(1000000).Call(context.Background())
	if err != nil{
		log.Fatalf("Execute error : %v", err)
	}
	fmt.Println(actionHash)

	//contract read test
	result, err := c.ReadOnlyContract(contract, abi).Read("get").Call(context.Background())
	if err != nil {
		log.Fatalf("Read error : %v", err)
	}
	fmt.Println(result)
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

  const account = await antenna.iotx.getAccount({
    address: "io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng"
  });
  const chainMeta = await antenna.iotx.getChainMeta();
  const actions = await antenna.iotx.getActions({
    byIndex: { start: 1, count: 5 }
  });
  const blocks = await antenna.iotx.getBlockMetas({
    byIndex: { start: 1, count: 5 }
  });
})();
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

  const account = await provider.getAccount({
    address: "io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng"
  });
  const chainMeta = await provider.getChainMeta();
  const actions = await provider.getActions({
    byIndex: { start: 1, count: 5 }
  });
  const blocks = await provider.getBlockMetas({
    byIndex: { start: 1, count: 5 }
  });
})();
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

## XRC20

The XRC20 package provide facility api for XEC20 contract to Iotex blockchain.

:::: tabs

::: tab JS

```js
import Antenna from "iotex-antenna";
import BigNumber from "bignumber.js";
import { XRC20 } from "iotex-antenna/lib/token/xrc20";

(async () => {
  const antenna = new Antenna("http://api.testnet.iotex.one:80");

  // init accounts
  const account1 = antenna.iotx.accounts.privateKeyToAccount("privateKey1");
  const account2 = antenna.iotx.accounts.privateKeyToAccount("privateKey2");
  const account3 = antenna.iotx.accounts.privateKeyToAccount("privateKey3");

  // create VITA XRC20 contract instance
  // io1hy9w96v7gz7mqquyyacfhtqn6r0yasnsqrjk9h is contract address
  const vita = new XRC20("io1hy9w96v7gz7mqquyyacfhtqn6r0yasnsqrjk9h", {
    provider: antenna.iotx
  });

  // token name: IoTeX Vitality
  const name = await vita.name();

  // token symbol: VITA
  const symbol = await vita.symbol();

  // token decimals: 18
  const decimals = await vita.decimals();

  // token balanceOf io16acqxqlmaep6z96khs3ey2607sygnx3surn3ga
  const balance = await vita.balanceOf(
    "io16acqxqlmaep6z96khs3ey2607sygnx3surn3ga"
  );

  // transfer token to io16acqxqlmaep6z96khs3ey2607sygnx3surn3ga
  const hash = await vita.transfer(
    "io16acqxqlmaep6z96khs3ey2607sygnx3surn3ga",
    new BigNumber("1000000000000000000"),
    {
      account: antenna.iotx.accounts[0],
      gasPrice: "1000000000000",
      gasLimit: "50000"
    }
  );

  // decode method invoke inputs
  const inputs = vita.decode(
    Buffer.from(
      "a9059cbb0000000000000000000000008896780a7912829781f70344ab93e589dddb29300000000000000000000000000000000000000000000000001bc16d674ec80000",
      "hex"
    )
  );
})();
```

:::

::::

## Working with Desktop Wallet

In the client-side, use iotex-antenna@0.29.1. Here is an example of setting up WsSignerPlugin to connect to the wallet. It is nothing more than applying the plugin when initializing Antenna instance, and NOT adding your private key to the SDK as specified in the earlier documentation.

Before receiving the transfer or the contract call above, please open and unlock your wallet. Once the wallet is ready, you can run the script below in both the browser and the node environment, and then you can see the message to sign. Please click "Yes, sign transaction" to continue.

### Client-side

```js
import sleepPromise from "sleep-promise";
import Antenna from "iotex-antenna";

import { WsSignerPlugin } from "iotex-antenna/lib/plugin/ws";
import { toRau } from "iotex-antenna/lib/account/utils";
import { Contract } from "iotex-antenna/lib/contract/contract";

(async () => {
  const antenna = new Antenna("http://api.iotex.one:80", {
    signer: new WsSignerPlugin()
  });

  await sleepPromise(3000);

  // example for transfer
  let resp = await antenna.iotx.sendTransfer({
    to: "io1mwekae7qqwlr23220k5n9z3fmjxz72tuchra3m",
    from: antenna.iotx.accounts[0].address,
    value: toRau("1", "Iotx"),
    gasLimit: "100000",
    gasPrice: toRau("1", "Qev")
  });

  console.log(resp);

  // example for contract call
  // option 1: using simple executeContract shortcut
  resp = await antenna.iotx.executeContract(
    {
      contractAddress: "io1jmq0epcswzu7vyquxlr9j9jvplwpvtc4d50ze9",
      amount: "0",
      abi:
        '[{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]',
      method: "set",
      gasLimit: "100000",
      gasPrice: toRau("1", "Qev"),
      from: antenna.iotx.accounts[0].address
    },
    666
  );
  console.log(resp);

  // example for contract call
  // option 2: using full-featured contract class
  const contract = new Contract(
    [
      {
        constant: false,
        inputs: [{ name: "x", type: "uint256" }],
        name: "set",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "get",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      }
    ],
    "io1jmq0epcswzu7vyquxlr9j9jvplwpvtc4d50ze9",
    { provider: antenna.iotx, signer: antenna.iotx.signer }
  );
  resp = await contract.methods.set(999, {
    account: antenna.iotx.accounts[0],
    gasLimit: "300000",
    gasPrice: "1000000000000",
    amount: toRau(0, "IOTX")
  });
  console.log(`contract.set() => ${resp}`);

  await sleepPromise(20000);

  resp = await contract.methods.get({ from: antenna.iotx.accounts[0].address });
  console.log(`contract.get() => ${resp}`);
})();
```
