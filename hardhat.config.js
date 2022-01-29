// https://eth-ropsten.alchemyapi.io/v2/w2dHt8HPR7-A6II3mTvSM9YJTsj5PeP-

require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/w2dHt8HPR7-A6II3mTvSM9YJTsj5PeP-",
      accounts: ["0ed0a74a037a473fe0a8337c8f21fb9e2861141f0107a971e2f9ecccbb88561e"]
    }
  }
}