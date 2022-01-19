# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. 

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/deploy.js
npx hardhat help
```
About Project
------------------
What is ERC-20?

The ERC-20 introduces a standard for Fungible Tokens, in other words, they have a property that makes each Token be exactly the same (in type and value) of another Token. For example, an ERC-20 Token acts just like the ETH, meaning that 1 Token is and will always be equal to all the other Tokens.

BODY
---------
The ERC-20 (Ethereum Request for Comments 20), proposed by Fabian Vogelsteller in November 2015, is a Token Standard that implements an API for tokens within Smart Contracts.

Example functionalities ERC-20 provides:

-->transfer tokens from one account to another
-->get the current token balance of an account
-->get the total supply of the token available on the network
-->approve whether an amount of token from an account can be spent by a third-party account.

If a Smart Contract implements the following methods and events it can be called an ERC-20 Token Contract and, once deployed, it will be responsible to keep track of the created tokens on Ethereum

NPX install credential
-------------------------

npx create-react-app react-dapp

npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers

npm install --save-dev @nomiclabs/hardhat-web3 web3

npx hardhat

npx hardhat compile

npx hardhat run scripts/deploy.js --network ropsten

npx hardhat run scripts/deploy.js --network ropsten

npm start

npm install @openzeppelin/contracts

npx hardhat node

npm i bootstrap

npm i dotenv --save

npm i @alch/alchemy-web3

(in index.js)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/oHgF5L-nRZw9gkMBmqQQDZ9h_hthR2YO",
      accounts: [`615a1eb9b6f7ac0a980ea60bbf6cc24e56b2fe96b665c0e8113ac5a89ee8ef2f`]
    }
  }
  }
