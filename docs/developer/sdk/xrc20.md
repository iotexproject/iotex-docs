---
title: XRC20 Tokens
---

## XRC20 Tokens

The XRC20 package provides facility API for interacting with XRC20 tokens deployed on the IoTeX blockchain.

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

  // transfer tokens to io16acqxqlmaep6z96khs3ey2607sygnx3surn3ga
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
