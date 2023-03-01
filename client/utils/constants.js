import { PublicKey } from '@solana/web3.js';

// node to connect to solana blockchain, using QuickNode
export const RPC_ENDPOINT =
  'https://fittest-fluent-sponge.solana-devnet.discover.quiknode.pro/9f80073cfce80375576e6626578a5f8cf05baea1/';

export const PROGRAM_ID = new PublicKey(
  '3RHb7FsCPqfMD9X1e7skPTUYHZ8aYMqeEqGw9VuBDU7K'
);

export const MINIMUM_REMAINING_TIME_UNTIL_EXPIRY = 120;
