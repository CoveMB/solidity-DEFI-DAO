/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockV3Aggregator,
  MockV3AggregatorInterface,
} from "../../../contracts/test/MockV3Aggregator";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint80",
        name: "_roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "_answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "_startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "_answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "_roundId",
        type: "uint80",
      },
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102cd3803806102cd83398101604081905261002f9161008b565b600080546001600160501b039687166001600160501b031991821617909155600194909455600292909255600355600480549190931691161790556100db565b80516001600160501b038116811461008657600080fd5b919050565b600080600080600060a086880312156100a357600080fd5b6100ac8661006f565b94506020860151935060408601519250606086015191506100cf6080870161006f565b90509295509295909350565b6101e3806100ea6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063313ce5671461005c57806354fd4d50146100705780637284e4161461007f5780639a6fc8f514610099578063feaf968c14610101575b600080fd5b604051600881526020015b60405180910390f35b60405160078152602001610067565b604080516020810182526000815290516100679190610125565b6100ca6100a736600461017a565b600154600254600354600454939492939192909169ffffffffffffffffffff1690565b6040805169ffffffffffffffffffff968716815260208101959095528401929092526060830152909116608082015260a001610067565b60005460015460025460035460045469ffffffffffffffffffff94851694166100ca565b600060208083528351808285015260005b8181101561015257858101830151858201604001528201610136565b81811115610164576000604083870101525b50601f01601f1916929092016040019392505050565b60006020828403121561018c57600080fd5b813569ffffffffffffffffffff811681146101a657600080fd5b939250505056fea2646970667358221220aa871a97734223d3e32e53b8edc10b972696857cd35829702bd7e0aac69648c764736f6c63430008090033";

type MockV3AggregatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockV3AggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockV3Aggregator__factory extends ContractFactory {
  constructor(...args: MockV3AggregatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _roundId: BigNumberish,
    _answer: BigNumberish,
    _startedAt: BigNumberish,
    _updatedAt: BigNumberish,
    _answeredInRound: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockV3Aggregator> {
    return super.deploy(
      _roundId,
      _answer,
      _startedAt,
      _updatedAt,
      _answeredInRound,
      overrides || {}
    ) as Promise<MockV3Aggregator>;
  }
  override getDeployTransaction(
    _roundId: BigNumberish,
    _answer: BigNumberish,
    _startedAt: BigNumberish,
    _updatedAt: BigNumberish,
    _answeredInRound: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _roundId,
      _answer,
      _startedAt,
      _updatedAt,
      _answeredInRound,
      overrides || {}
    );
  }
  override attach(address: string): MockV3Aggregator {
    return super.attach(address) as MockV3Aggregator;
  }
  override connect(signer: Signer): MockV3Aggregator__factory {
    return super.connect(signer) as MockV3Aggregator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockV3AggregatorInterface {
    return new utils.Interface(_abi) as MockV3AggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockV3Aggregator {
    return new Contract(address, _abi, signerOrProvider) as MockV3Aggregator;
  }
}
