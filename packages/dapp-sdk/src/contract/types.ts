import {
  LockFactory,
} from '@dapp/contracts';

export interface ContractAddresses {
  lock: string;
  ERC20Mock: string;
}

export interface Contracts {
  LockContract: ReturnType<typeof LockFactory.connect>;
}

export enum ChainId {
  Mainnet = 1,
  Goerli = 5,
  BaseGoerli = 84531,
  Hardhat = 31337,
}
