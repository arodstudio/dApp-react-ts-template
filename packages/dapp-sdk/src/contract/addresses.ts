import { getNetwork } from '@wagmi/core';
import { ContractAddresses } from './types';

export const getNetworkNameFromChainId = (chainId: number): string => {
  const { chains } = getNetwork()

  if (!chains[chainId]) {
    throw new Error(`Unknown chain id (${chainId}). No known network name for this chain.`);
  }

  return chains[chainId].name;
};

export const getContractAddressesForChainOrThrow = async (chainId: number): Promise<ContractAddresses> => {
  const networkName = getNetworkNameFromChainId(chainId)
  const importPath = `@dapp/contracts/logs/deploy-${networkName}.json`;
  const { contractAddresses } = await import(importPath);

  if (!contractAddresses[chainId]) {
    throw new Error(`Unknown chain id (${chainId}). No known contracts have been deployed on this chain.`);
  }

  return contractAddresses[chainId];
};
