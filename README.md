## Full stack NFT marketplace built with Polygon, Solidity, IPFS, & Next.js

<!-- ![Header](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pfofv47dooojerkmfgr4.png) -->

### Running this project

#### Download repo & install dependencies

To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:

```sh
git clone https://github.com/lolaji/minting-dapp.git

cd minting-dapp

# install using NPM or Yarn
npm install

# or

yarn
```


### Configuration

1. Create a .env.local file in the root directory, then copy the content of the .env.local.example file into it:

```sh
cp .env.local.example .env.local
```
2. Put your smart contract address, like this:

```sh
NEXT_PUBLIC_CONTRACT_ADDRESS=0xcc6fC7Fe7db7d367cC96973d2304aAcBD8F974d2
```

3. Save the file

4. Start the app

```
npm run dev
```

5. Open your browser and point to http://localhost:3000

### Usage

1. Make sure you have switch to polygon mainet in your metamask wallet

2. Input commer seperated of addresses in the form

3. Then click mint.