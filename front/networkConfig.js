const networkConfig = {
  netId1: {
    verifyingContract: '0xfab46e002bbf0b4509813474841e0716e6730136',
    rpcCallRetryAttempt: 10,
    gasPrice: 21,
    currencyName: 'ETH',
    explorerUrl: {
      tx: 'https://etherscan.io/tx'
    },
    networkName: 'Mainnet',
    rpcUrl: 'https://mainnet.infura.io'
  },
  netId3: {
    verifyingContract: '0xfab46e002bbf0b4509813474841e0716e6730136',
    rpcCallRetryAttempt: 10,
    gasPrice: 21,
    currencyName: 'rETH',
    explorerUrl: {
      tx: 'https://ropsten.etherscan.io/tx'
    },
    networkName: 'Ropsten',
    rpcUrl: 'https://ropsten.infura.io'
  },
  netId4: {
    verifyingContract: '0xfab46e002bbf0b4509813474841e0716e6730136',
    rpcCallRetryAttempt: 10,
    gasPrice: 1,
    currencyName: 'RETH',
    explorerUrl: {
      tx: 'https://rinkeby.etherscan.io/tx'
    },
    networkName: 'Rinkeby',
    rpcUrl: 'https://rinkeby.infura.io'
  },
  netId5: {
    verifyingContract: '0xBA62BCfcAaFc6622853cca2BE6Ac7d845BC0f2Dc',
    rpcCallRetryAttempt: 10,
    gasPrice: 1,
    currencyName: 'GöETH',
    explorerUrl: {
      tx: 'https://goerli.etherscan.io/tx'
    },
    networkName: 'Görli'
  },
  netId42: {
    verifyingContract: '0xfab46e002bbf0b4509813474841e0716e6730136',
    rpcCallRetryAttempt: 10,
    gasPrice: 1,
    currencyName: 'kETH',
    explorerUrl: {
      tx: 'https://kovan.etherscan.io/tx'
    },
    networkName: 'Kovan',
    rpcUrl: 'https://kovan.infura.io'
  }
}

export default networkConfig