/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.19.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Uint128, Logo, EmbeddedLogo, Binary, InstantiateMsg, Cw20Coin, InstantiateMarketingInfo, MinterResponse, ExecuteMsg, AddressType, QueryMsg, AllAccountsResponse, BalanceResponse, DownloadLogoResponse, LogoInfo, Addr, MarketingInfoResponse, TokenInfoResponse, TopTokenHoldersResponse, TokenHolder } from "./Cw20Spark.types";
export interface Cw20SparkMessage {
  contractAddress: string;
  sender: string;
  mint: ({
    addressType,
    amount,
    recipient
  }: {
    addressType: AddressType;
    amount: Uint128;
    recipient: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateMinterInfo: ({
    minterInfo
  }: {
    minterInfo: MinterResponse;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateMarketing: ({
    description,
    marketing,
    project
  }: {
    description?: string;
    marketing?: string;
    project?: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  uploadLogo: (funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class Cw20SparkMessageComposer implements Cw20SparkMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.mint = this.mint.bind(this);
    this.updateMinterInfo = this.updateMinterInfo.bind(this);
    this.updateMarketing = this.updateMarketing.bind(this);
    this.uploadLogo = this.uploadLogo.bind(this);
  }

  mint = ({
    addressType,
    amount,
    recipient
  }: {
    addressType: AddressType;
    amount: Uint128;
    recipient: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          mint: {
            address_type: addressType,
            amount,
            recipient
          }
        })),
        funds
      })
    };
  };
  updateMinterInfo = ({
    minterInfo
  }: {
    minterInfo: MinterResponse;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_minter_info: {
            minter_info: minterInfo
          }
        })),
        funds
      })
    };
  };
  updateMarketing = ({
    description,
    marketing,
    project
  }: {
    description?: string;
    marketing?: string;
    project?: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_marketing: {
            description,
            marketing,
            project
          }
        })),
        funds
      })
    };
  };
  uploadLogo = (funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          upload_logo: {}
        })),
        funds
      })
    };
  };
}