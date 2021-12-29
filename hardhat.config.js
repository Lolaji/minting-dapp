require("@nomiclabs/hardhat-waffle");
const dotenv = require('dotenv');
// dotenv.config();

// const fs = require('fs');
// const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    // mumbai: {
    //   // Infura
    //   url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
    //   // url: "https://rpc-mumbai.matic.today",
    //   accounts: [process.env.ACCOUNT_PRIVATE_KEY]
    // },
    // matic: {
    //   // Infura
    //   url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
    //   // url: "https://rpc-mainnet.maticvigil.com",
    //   accounts: [process.env.ACCOUNT_PRIVATE_KEY]
    // }
    
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

