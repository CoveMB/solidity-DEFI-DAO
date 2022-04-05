/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EthQuoteSwap,
  EthQuoteSwapInterface,
} from "../../contracts/EthQuoteSwap";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract SatiToken",
        name: "_quoteToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ethToUsdRate",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
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
        name: "_baseTokenAmount",
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
        name: "_quoteToken",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "quoteToken",
    outputs: [
      {
        internalType: "contract SatiToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_baseTokenAmount",
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
        name: "_quoteTokenAmount",
        type: "uint256",
      },
    ],
    name: "swapQuoteForBaseToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526003805460ff191660121790553480156200001e57600080fd5b506040516200138038038062001380833981016040819052620000419162000284565b806200004d3362000147565b600180546001600160a01b0319166001600160a01b0392831617905560038054610100600160a81b031916610100858416810291909117918290556040805180820182526004808252634554482f60e01b602083015282516395d89b4160e01b815292516200012896929594909404909116926395d89b41928083019260009291829003018186803b158015620000e357600080fd5b505afa158015620000f8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200012291908101906200030c565b62000197565b80516200013e91600291602090910190620001c5565b50505062000434565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60608282604051602001620001ae929190620003c4565b604051602081830303815290604052905092915050565b828054620001d390620003f7565b90600052602060002090601f016020900481019282620001f7576000855562000242565b82601f106200021257805160ff191683800117855562000242565b8280016001018555821562000242579182015b828111156200024257825182559160200191906001019062000225565b506200025092915062000254565b5090565b5b8082111562000250576000815560010162000255565b6001600160a01b03811681146200028157600080fd5b50565b600080604083850312156200029857600080fd5b8251620002a5816200026b565b6020840151909250620002b8816200026b565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620002f6578181015183820152602001620002dc565b8381111562000306576000848401525b50505050565b6000602082840312156200031f57600080fd5b81516001600160401b03808211156200033757600080fd5b818401915084601f8301126200034c57600080fd5b815181811115620003615762000361620002c3565b604051601f8201601f19908116603f011681019083821181831017156200038c576200038c620002c3565b81604052828152876020848701011115620003a657600080fd5b620003b9836020830160208801620002d9565b979650505050505050565b60008351620003d8818460208801620002d9565b835190830190620003ee818360208801620002d9565b01949350505050565b600181811c908216806200040c57607f821691505b602082108114156200042e57634e487b7160e01b600052602260045260246000fd5b50919050565b610f3c80620004446000396000f3fe6080604052600436106100915760003560e01c80639b013aee116100595780639b013aee1461015d5780639d0ba1831461017d578063ad5d203c1461019d578063d880c370146101b0578063f2fde38b146101c357600080fd5b80630c57004a14610096578063217a4b70146100c957806340794c3b14610106578063715018a6146101285780638da5cb5b1461013f575b600080fd5b3480156100a257600080fd5b506100b66100b1366004610a20565b6101e3565b6040519081526020015b60405180910390f35b3480156100d557600080fd5b506003546100ee9061010090046001600160a01b031681565b6040516001600160a01b0390911681526020016100c0565b34801561011257600080fd5b5061011b610246565b6040516100c09190610a65565b34801561013457600080fd5b5061013d6102d4565b005b34801561014b57600080fd5b506000546001600160a01b03166100ee565b34801561016957600080fd5b506100b6610178366004610a20565b61033f565b34801561018957600080fd5b506100b6610198366004610aa7565b61036c565b61013d6101ab366004610a20565b6104ce565b61013d6101be366004610a20565b6105ac565b3480156101cf57600080fd5b5061013d6101de366004610ac4565b61060e565b6000806101ef836106d9565b90508083604051610210906945544820746f2053544960b01b8152600a0190565b604051908190038120907f88350a00c9d980accf5486d4817c4f938edc6aa8a526efb4c9eaa7e12c69f4cb90600090a492915050565b6002805461025390610aed565b80601f016020809104026020016040519081016040528092919081815260200182805461027f90610aed565b80156102cc5780601f106102a1576101008083540402835291602001916102cc565b820191906000526020600020905b8154815290600101906020018083116102af57829003601f168201915b505050505081565b6000546001600160a01b031633146103335760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b61033d6000610714565b565b60008061034b83610764565b9050808360405161021090690a6a89240e8de408aa8960b31b8152600a0190565b6000806000600160009054906101000a90046001600160a01b03166001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b1580156103bf57600080fd5b505afa1580156103d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f79190610b47565b509350509250506000600160009054906101000a90046001600160a01b03166001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561044e57600080fd5b505afa158015610462573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104869190610b97565b90506000610495848388610798565b905082817fb6c1393c2251d5f83b6b4923759cf156e72f269dc654f872eab19c92b853cf5e60405160405180910390a395945050505050565b60006104d9826101e3565b90506104e53082610809565b6104ef3083610829565b60035460405163a9059cbb60e01b8152336004820152602481018390526101009091046001600160a01b03169063a9059cbb906044015b602060405180830381600087803b15801561054057600080fd5b505af1158015610554573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105789190610bb4565b506040518190839033907f42daeb9fe1f789384a4e1fd40506a3a12cec73b4c4ea3302b3c501c8e044aebb90600090a45050565b6105b63382610809565b60006105c18261033f565b90506105cd3382610829565b6003546040516323b872dd60e01b8152336004820152306024820152604481018490526101009091046001600160a01b0316906323b872dd90606401610526565b6000546001600160a01b031633146106685760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161032a565b6001600160a01b0381166106cd5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161032a565b6106d681610714565b50565b60035460009081906106ed9060ff1661036c565b600354909150819061070390859060ff16610874565b61070d9190610bec565b9392505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60035460009081906107789060ff1661036c565b600354909150819061078e90859060ff16610897565b61070d9190610c21565b60008160ff168360ff1610156107d1576107b28383610c35565b6107c09060ff16600a610d3c565b6107ca9085610d48565b905061070d565b8160ff168360ff161115610801576107e98284610c35565b6107f79060ff16600a610d3c565b6107ca9085610dcd565b509192915050565b6003546108259061010090046001600160a01b031683836108b1565b5050565b80826001600160a01b03163110156108255760405162461bcd60e51b815260206004820152600e60248201526d09cdee840cadcdeeaced0408aa8960931b604482015260640161032a565b600061088460ff8316600a610d3c565b61088e9084610c21565b90505b92915050565b60006108a760ff8316600a610d3c565b61088e9084610bec565b6040516370a0823160e01b81526001600160a01b0383811660048301528291908516906370a082319060240160206040518083038186803b1580156108f557600080fd5b505afa158015610909573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092d9190610dfb565b10156109d06040518060400160405280600b81526020016a02737ba1032b737bab3b4160ad1b815250856001600160a01b03166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561098f57600080fd5b505afa1580156109a3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109cb9190810190610e2a565b6109f4565b906109ee5760405162461bcd60e51b815260040161032a9190610a65565b50505050565b60608282604051602001610a09929190610ed7565b604051602081830303815290604052905092915050565b600060208284031215610a3257600080fd5b5035919050565b60005b83811015610a54578181015183820152602001610a3c565b838111156109ee5750506000910152565b6020815260008251806020840152610a84816040850160208701610a39565b601f01601f19169190910160400192915050565b60ff811681146106d657600080fd5b600060208284031215610ab957600080fd5b813561070d81610a98565b600060208284031215610ad657600080fd5b81356001600160a01b038116811461070d57600080fd5b600181811c90821680610b0157607f821691505b60208210811415610b2257634e487b7160e01b600052602260045260246000fd5b50919050565b805169ffffffffffffffffffff81168114610b4257600080fd5b919050565b600080600080600060a08688031215610b5f57600080fd5b610b6886610b28565b9450602086015193506040860151925060608601519150610b8b60808701610b28565b90509295509295909350565b600060208284031215610ba957600080fd5b815161070d81610a98565b600060208284031215610bc657600080fd5b8151801515811461070d57600080fd5b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610c0657610c06610bd6565b500290565b634e487b7160e01b600052601260045260246000fd5b600082610c3057610c30610c0b565b500490565b600060ff821660ff841680821015610c4f57610c4f610bd6565b90039392505050565b600181815b80851115610c93578160001904821115610c7957610c79610bd6565b80851615610c8657918102915b93841c9390800290610c5d565b509250929050565b600082610caa57506001610891565b81610cb757506000610891565b8160018114610ccd5760028114610cd757610cf3565b6001915050610891565b60ff841115610ce857610ce8610bd6565b50506001821b610891565b5060208310610133831016604e8410600b8410161715610d16575081810a610891565b610d208383610c58565b8060001904821115610d3457610d34610bd6565b029392505050565b600061088e8383610c9b565b60006001600160ff1b0381841382841380821686840486111615610d6e57610d6e610bd6565b600160ff1b6000871282811687830589121615610d8d57610d8d610bd6565b60008712925087820587128484161615610da957610da9610bd6565b87850587128184161615610dbf57610dbf610bd6565b505050929093029392505050565b600082610ddc57610ddc610c0b565b600160ff1b821460001984141615610df657610df6610bd6565b500590565b600060208284031215610e0d57600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610e3c57600080fd5b815167ffffffffffffffff80821115610e5457600080fd5b818401915084601f830112610e6857600080fd5b815181811115610e7a57610e7a610e14565b604051601f8201601f19908116603f01168101908382118183101715610ea257610ea2610e14565b81604052828152876020848701011115610ebb57600080fd5b610ecc836020830160208801610a39565b979650505050505050565b60008351610ee9818460208801610a39565b835190830190610efd818360208801610a39565b0194935050505056fea26469706673582212206c5ea0c36b7a624f6455d4733acfba4465a9349c09cebff54f631951682de62764736f6c63430008090033";

type EthQuoteSwapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EthQuoteSwapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EthQuoteSwap__factory extends ContractFactory {
  constructor(...args: EthQuoteSwapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _quoteToken: string,
    _ethToUsdRate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EthQuoteSwap> {
    return super.deploy(
      _quoteToken,
      _ethToUsdRate,
      overrides || {}
    ) as Promise<EthQuoteSwap>;
  }
  override getDeployTransaction(
    _quoteToken: string,
    _ethToUsdRate: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _quoteToken,
      _ethToUsdRate,
      overrides || {}
    );
  }
  override attach(address: string): EthQuoteSwap {
    return super.attach(address) as EthQuoteSwap;
  }
  override connect(signer: Signer): EthQuoteSwap__factory {
    return super.connect(signer) as EthQuoteSwap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EthQuoteSwapInterface {
    return new utils.Interface(_abi) as EthQuoteSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EthQuoteSwap {
    return new Contract(address, _abi, signerOrProvider) as EthQuoteSwap;
  }
}
