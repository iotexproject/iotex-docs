---
title: Call RPC Methods
---

## Call RPC Methods

The `rpc-method` package allows you to make direct gRPC calls to the IoTeX blockchain. The complete gRPC API can be found in the [iotex-proto](https://github.com/iotexproject/iotex-proto/blob/master/proto/api/api.proto) GitHub repository, and all calls can be made both using the _umbrella_ `antenna.iotex` object or using `rpc-method` as a standalone package.

#### Using `antenna.iotx`:

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

#### Using `rpc-method`as a standalone package:

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
