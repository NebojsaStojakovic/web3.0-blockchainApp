require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/gQMBO1Dv4-AlNrCtSlFCWCARkqQVoqmO',
      accounts: ['e4c2f56d6ad62079aa7b6922f2a40de30af23e2fd86c33ec72e62b411914de9e'],
    },
  },
};