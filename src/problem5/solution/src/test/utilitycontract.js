const { expect } = require("chai");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const Contract = await ethers.getContractFactory("UtilityContract");

    const UtilContract = await Contract.deploy();

    const ADDRESS = "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430";

    const tokens = [
      "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      "0xc0ecb8499d8da2771abcbf4091db7f65158f1468",
    ];

    const balances = await UtilContract.getBalances(ADDRESS, tokens);

    console.log(balances);

    expect(length(await balances) == 2);
  });
});
