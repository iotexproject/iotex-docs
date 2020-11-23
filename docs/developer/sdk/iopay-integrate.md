---
title: Integrate IoPay Wallet
---

## Integrate with ioPay Desktop

Client-side, you can use the `iotex-antenna@latest`package. Below is an example of setting up WsSignerPlugin to connect to the wallet: it is nothing more than passing the plugin as a dependency when calling the Antenna object constructor.

:::tip IoPay Wallet Plugins
You can also import the following plugins to interact with IoPay Wallet:

- **For IoPay Desktop**:
  [https://github.com/iotexproject/iotex-dapp-sample/blob/master/src/common/utils/ws-plugin.ts](https://github.com/iotexproject/iotex-dapp-sample/blob/master/src/common/utils/ws-plugin.ts)

- **For IoPay Mobile**:
  [https://github.com/iotexproject/iotex-dapp-sample/blob/master/src/common/utils/js-plugin.ts](https://github.com/iotexproject/iotex-dapp-sample/blob/master/src/common/utils/js-plugin.ts)
  :::

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

Before sending the transfer or the contract call above, you need to open and unlock IoPay Desktop Wallet on the client machine. Once the wallet is ready and unlocked, you can run the script below in both the browser and the node environment, and then you can see the message to sign. Please click "Yes, sign transaction" in IoPay Wallet to continue and sign the message with the unlocked account.
