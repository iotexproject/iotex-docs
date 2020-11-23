---
title: Make a Token Transfer
---

# Make a Token Transfer

The object `antenna.iotx` contains functiopns to create, sign, and send actions to the IoTeX blockchain.

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

::: tab Swift

```swift
let hash = try iotx.transfer(TransferRequest(
    nonce: nil, gasLimit: 100000, gasPrice: "10000000000000", account: account,
    recipient: "io13zt8sznez2pf0q0hqdz2hyl938wak2fsjgdeml", amount: "1000000000000000000", payload: "".data(using: .utf8)!
))
print(hash)
```

:::

::: tab Java

```java
TransferRequest request = new TransferRequest();
request.setNonce(1l); // optional, can be null
request.setGasLimit(100000l); // optional, can be null
request.setGasPrice("1000000000000"); // optional, can be null
request.setAccount(account);
request.setAmount("100");
request.setRecipient("io13zt8sznez2pf0q0hqdz2hyl938wak2fsjgdeml");
request.setPayload("68656c6c6f20776f726c6421"); // optional, can be null

String hash = iotx.sendTransfer(request);
```

:::

::::

To see the result of the transfer action, you can either go to the [iotex explorer](https://iotexscan.io/action/) or query the blockchain using antenna sdk like:

:::: tabs

::: tab JSs

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

::::
