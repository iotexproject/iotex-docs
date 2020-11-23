---
title: Create a DID JWT
---

# Create a Decentralized Identity JWT

Decentralized Identity (DID) is essentially an ID that is:

1. globally unique
1. resolve-able with high availability, and
1. cryptographically verifiable.

Please see more detailed specs in [IIP-7](https://github.com/iotexproject/iips/blob/master/iip-7.md) and you can learn more in the [DID documentation](/developer/did/overview).

Given an IoTeX address `io1tpphshf0npzawfug7g4dhrzwkzepfkwgq5prm6`, we can derive its DID as `did:io:io1tpphshf0npzawfug7g4dhrzwkzepfkwgq5prm6`. And then you can create a DID JWT as in the following example:

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

The self-sovereign JWT can be decoded as:

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
