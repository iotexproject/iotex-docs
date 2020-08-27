---
title: Issue tokens on IoTeX
---

# Issue tokens on the IoTeX Blockchain

IoTeX is fully compliant with ERC20, ERC721<sup>★</sup> Ethereum token standards, so that you can just port any existing Ethereum token to IoTeX with no change to the code.

<p><small>★<i>XRC20 is the IoTeX equivalent for the ERC20 token standard, while XRC721 is the equivalent for ERC721.</i></small></p>

## Issue an ERC20 Token on IoTeX

As a quick example, let's see how to deploy an XRC20 token on IoTeX in a few simple steps:

### 1. Get IoPay Desktop wallet ready

In this example we will use IoPay Desktop wallet to deploy the contract. Download IoPay Desktop wallet from [http://iopay.iotex.io/desktop/](http://iopay.iotex.io/desktop/), create a new account or import a private key if you have one, and select the _Test Network_ from the Network combobox. Finally, get some IOTX test tokens from any [IoTeX faucet](/developer/more/faucets) and send them you your IoPay account address:

<div class="polaroid">
  <img src="/img/developer/iopay-testnet.png">
  <div class="container">
  <p>Select "Testnet" in IoPay Desktop</p>
  </div>
</div>

### 2. Edit Solidity code in IoTeX Studio IDE

IoTeX Studio is the Web IDE to develop and deploy IoTeX Smart Contracts. It's still an early release, yet it can already compile solidity code and deploy your contracts. The most recent supported Solidity compiler is v0.5.5, so let's use the following example contract from OpenZeppelin to deploy a [Simple Token](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/examples/SimpleToken.sol).

Open IoTeX Studio at [ide.iotex.io](https://ide.iotex.io), delete any existing code in the editor, and paste the following code:

```solidity
pragma solidity ^0.5.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/GSN/Context.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v2.5.0/contracts/token/ERC20/ERC20Detailed.sol";

/**
 * @title SimpleToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `ERC20` functions.
 */
contract SimpleToken is Context, ERC20, ERC20Detailed {

    /**
     * @dev Constructor that gives _msgSender() all of existing tokens.
     */
    constructor () public ERC20Detailed("SimpleToken", "SIM", 18) {
        _mint(_msgSender(), 10000 * (10 ** uint256(decimals())));
    }
}
```

This will create a token named _SimpleToken_, whose symbol will be _SIM_, plus it will have 18 decimals digits (i.e. it can be fractioned down to $10^{-18}$), and will be pre-mined: 10,000 of SIM tokens will be assigned to the account that is deploying the token contract upon contract deployment to the blockchain. You can customize these values to anything else if you wish!

### 3. Build and Deploy

Make sure the selected version number for the solidity compiler in the Studio is at least v0.5.0, then click **COMPILE** button to compile your token contract:

<div class="polaroid">
  <img src="/img/developer/ide-compile.png">
  <div class="container">
    <p>Select compiler version then click COMPILE</p>
  </div>
</div>

You are now ready to deploy your token! Select _IoPay_ as the environment you want to deploy to (or choose _Javascript_ to deploy and test interaction in the browser)

<div class="polaroid">
  <img src="/img/developer/ide-env.png" width="400px">
  <div class="container">
  <p>Select IoPay as the deploy environment</p>
  </div>
</div>

Now, in the **Deploy section** select your contract by name (it's _SimpleToken_, or the name you chose for it), and click **DEPLOY** button:

<div class="polaroid">
  <img src="/img/developer/ide-deploy.png" width="400px">
  <div class="container">
  <p>Select the token contract and click DEPLOY</p>
  </div>
</div>

check out the logs window at the bottom for the newly deployed **contract address**, and take note of it!

<div class="polaroid">
  <img src="/img/developer/ide-logs.png">
  <div class="container">
  <p>Select the contract to deploy then click DEPLOY</p>
  </div>
</div>

IoPay desktop will now pop up with a transaction confirmation dialog: confirm it to deploy your contrat to the IoTeX testnet!

<div class="polaroid">
  <img src="/img/developer/iopay-sign.png">
  <div class="container">Sign the deploy transaction in IoPay</p>
  </div>
</div>

In IoTeX Studio IDE, you can now expand your contract under the "Deployed Contracts" section and test contract calls. For example, you can make a call to the `balanceOf`function to query the balance of your IoPay account that deployed the contract:

<div class="polaroid">
  <img src="/img/developer/ide-interact.png" width=400px>
  <div class="container">Check the balance of the contract owner account</p>
  </div>
</div>

### 4. Import your token in IoPay Wallet

You can import any IoTeX token into IoPay wallet, including the token that you just issued, to check your balance, and transfer your tokens to any othe IoTeX Account!

In IoPay Desktop just click the **Custom Token link** and input the contract address of your token to import it (you obtained it in the IoTeX Studio log window when you deployed the contract).

<div class="polaroid">
  <img src="/img/developer/iopay-import-token.png">
  <div class="container">Import a custom token in IoPay Desktop by the token contract address</p>
  </div>
</div>

<div class="polaroid">
  <img src="/img/developer/iopay-custom-tokens.png">
  <div class="container">Cutom token imported in IoPay</p>
  </div>
</div>

As you will notice, you have a balance of 10,000 SIM: the pre-mined amount that was assigned to the account when you deployed the contract!
