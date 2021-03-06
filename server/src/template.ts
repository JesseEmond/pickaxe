/*
 * This is a code duplication with the bitcore definition, but I don't know how
 * not to.
 */

export interface Coinbaseaux {
  flag: string;
}

export interface Transaction {
  data: string;
  hash: string;
  depends: number[];
  fee: number;
  sigops: number;
}

export class BlockTemplate {
  capabilities: string[];
  version: number;
  previousblockhash: string;
  transactions: Transaction[];
  coinbaseaux: Coinbaseaux;
  coinbasevalue: number;
  longpollid: string;
  target: string;
  mintime: number;
  mutable: string[];
  noncerange: string;
  sigoplimit: number;
  sizelimit: number;
  curtime: number;
  bits: string;
  height: number;

  [key: string]: any;
}

export interface ReceivedAddress {
  address: string;
  account: string;
  amount: number;
  confirmations: number;
  label: string;
  txids: Array<string>;
}

export class Template extends BlockTemplate {
  hash: string;
  coinbase: string;
  address: string;

  constructor(obj: BlockTemplate) {
    super();
    for (let propName in obj) {
      this[propName] = <any>obj[propName]
    }
  }
}
