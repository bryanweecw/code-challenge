const { ethers } = require("ethers");

const ADDR = "0x0DBEBf576F579CB36485A4f4F670a7b564393b4A"; // your contract address
const ABI = require("./artifacts/contracts/UtilityContract.sol/UtilityContract.json"); // your contract ABI

const ADDRESS = "…"; // some wallet address with token balance
const TOKENS = [
  // token contract addresses
  "…",
  "…",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = new ethers.providers.AlchemyProvider(
  (network = "goerli"),
  "_IhULwrIVj5qB_2JgrX0GUaoOPVXLR8S"
);

const test = async () => {
  const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, tokens);

  return balances;
};

test().then(console.log);
