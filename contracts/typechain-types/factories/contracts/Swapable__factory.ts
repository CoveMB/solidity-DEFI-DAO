/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Swapable, SwapableInterface } from "../../contracts/Swapable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int256",
        name: "scaledPrice",
        type: "int256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "timeStamp",
        type: "uint256",
      },
    ],
    name: "Rate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "exchangeType",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "sellingAmount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "buyingAmount",
        type: "uint256",
      },
    ],
    name: "SwapRateInfo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amountSent",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amountReceived",
        type: "uint256",
      },
    ],
    name: "SwapTransferInfo",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ERC20TokenAmount",
        type: "uint256",
      },
    ],
    name: "getAskPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_satiAmount",
        type: "uint256",
      },
    ],
    name: "getBidPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_scalingDecimal",
        type: "uint8",
      },
    ],
    name: "getScaledRate",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pairName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ERC20TokenAmount",
        type: "uint256",
      },
    ],
    name: "swapBaseForQuoteToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_satiAmount",
        type: "uint256",
      },
    ],
    name: "swapQuoteForBaseToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class Swapable__factory {
  static readonly abi = _abi;
  static createInterface(): SwapableInterface {
    return new utils.Interface(_abi) as SwapableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Swapable {
    return new Contract(address, _abi, signerOrProvider) as Swapable;
  }
}
