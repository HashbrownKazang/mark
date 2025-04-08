import type { Chain } from "thirdweb";
import { polygon } from "./chains";

type MarketplaceContract = {
  address: string;
  chain: Chain;
};

/**
 * You need a marketplace contract on each of the chain you want to support
 * Only list one marketplace contract address for each chain
 */
export const MARKETPLACE_CONTRACTS: MarketplaceContract[] = [
  {
    address: "0x19804fFA27AE6aCeA3e895b532D64A003Ce18bd6",
    chain: polygon,
  },
  {
    address: "0x88B429Ff63aF913bbEf13a83441aF93Cde510761",
    chain: polygon,
  },
];
