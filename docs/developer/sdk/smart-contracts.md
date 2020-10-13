---
title: Interact with Smart Contracts
---

# Deploy Smart Contracts

## Overview

The IoTeX Blockchain implements a full featured Ethereum Virtual Machine (EVM), fully compatible with the latest version, hence you can use **solidity** programming language to create smart contracts on IoTeX or port any existing Ethereum smart contract to IoTeX.

The `iotx.Contract` class makes it easy to interact with smart contracts on the IoTeX blockchain. When you create a new contract object, you initialize it with the JSON interface of the respective smart contract, and it will take care of converting all method calls into low-level ABI calls over RPC for you, hence you can interact with IoTeX smart contracts as with any JavaScript object.

::: tip

1. **Need a full example**? [Check the integration test.](https://github.com/iotexproject/iotex-antenna/blob/master/src/__test__/iotx.integration.test.ts#L98)

2. **Looking for an IDE**? Check out [IoTeX Studio web IDE](https://ide.iotex.io) to write, compile, test & deploy your smart contracts to the IoTex Blobkchain, in a quick and convenient way!
   :::

[[toc]]

## Compiling Solidity Code

Antenna SDK does not compile solidity code iteself, however you can get the ABI and bytecode of your contract in one of the following options:

- **Option 1**: use our [IoTeX Studio web IDE](https://ide.iotex.io) to compile your smart contract and copy the ABI/Bytecode

- **Option 2**: in Node.js, import and use the [`solc@0.4.25`](https://www.npmjs.com/package/solc) node package, as in the following example:

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

- **Option 3**: on the browser side, you can use [browser-solc](https://www.npmjs.com/package/browser-solc) package. Check out this [example from iotex-explorer](https://github.com/iotexproject/iotex-explorer/blob/master/src/shared/wallet/contract/deploy.tsx#L114).

## Deploying a Smart Contract

Once you get the ABI and bytecode from the step above, then you can deploy it by sending the deploy action to the IoTeX blockchain network.

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

## Interacting with a Smart Contract

After you get the contract address from the receipt, you can interact with the contract by constructing the contract first, and then calling contract functions.

There are methods `set` and `get` in the example contract `SimpleStorage` defined in the [solidity string above](#compiling-solidity-code), so you can call them as the following.

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
