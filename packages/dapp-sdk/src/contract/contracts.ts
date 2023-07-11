import { LockABI, HardhatContractAddresses } from '@dapp/contracts'

export const getLockContract = () => {
  return {
    abi: LockABI,
    address: HardhatContractAddresses.Lock,
  }
}
