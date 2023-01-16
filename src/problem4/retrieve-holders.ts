import { ethers } from "ethers";

const contract_abi = require("./contract_abi.json");

const TOKEN = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";

const GIVEN_ADDRESSES = [
  "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];

const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org/"
);

// const provider = new ethers.providers.AlchemyProvider(network, "demo");

provider.getCode(TOKEN);

const loaded_contract = new ethers.Contract(TOKEN, contract_abi, provider);

const getTokenBalance = async (input: String) => {
  const res = await loaded_contract.balanceOf(input);
  return res;
};

const outputBalances = async (input: Array<String>) => {
  input.forEach(async (address: String) => {
    const bal_res = await getTokenBalance(address);
    console.log(
      `${address} ${parseFloat(
        ethers.utils.formatUnits(bal_res, 8)
      ).toLocaleString("en-SG", { minimumFractionDigits: 8 })}`
    );
  });
};

outputBalances(GIVEN_ADDRESSES);
