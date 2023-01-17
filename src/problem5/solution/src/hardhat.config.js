/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_API_KEY = "_IhULwrIVj5qB_2JgrX0GUaoOPVXLR8S";

const GOERLI_PRIVATE_KEY =
  "6e9eb5f4095833626367f479082bff731d4bef3ea93866a417f40a88a844ddaf";

require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};
