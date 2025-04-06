import type { Chain } from "thirdweb";
import { polygon } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by your marketplace(s)
 * This is of course hard-coded for demo purpose
 *
 * In reality, the list should be dynamically fetched from your own data source
 */
export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0x79e2FA025C23e4b243D1753b223AbE749c2e82CC",
    chain: polygon,
    title: "SPNTRTNMNT COLLECTION",
    thumbnailUrl:
      "ipfs://QmbjhvTjkoypjNiggfqn9UWKro8obCDUycoPxmGosQ7XdU/starryai-13lxw-photo.png",
    type: "ERC721",
  }
];
