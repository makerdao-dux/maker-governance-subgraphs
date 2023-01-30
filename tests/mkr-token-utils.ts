import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Mint,
  Burn,
  MKRTokenLogSetAuthority,
  MKRTokenLogSetOwner,
  MKRTokenLogNote,
  Transfer,
  Approval
} from "../generated/MKRToken/MKRToken"

export function createMintEvent(guy: Address, wad: BigInt): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam("guy", ethereum.Value.fromAddress(guy))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("wad", ethereum.Value.fromUnsignedBigInt(wad))
  )

  return mintEvent
}

export function createBurnEvent(guy: Address, wad: BigInt): Burn {
  let burnEvent = changetype<Burn>(newMockEvent())

  burnEvent.parameters = new Array()

  burnEvent.parameters.push(
    new ethereum.EventParam("guy", ethereum.Value.fromAddress(guy))
  )
  burnEvent.parameters.push(
    new ethereum.EventParam("wad", ethereum.Value.fromUnsignedBigInt(wad))
  )

  return burnEvent
}

export function createMKRTokenLogSetAuthorityEvent(
  authority: Address
): MKRTokenLogSetAuthority {
  let mkrTokenLogSetAuthorityEvent = changetype<MKRTokenLogSetAuthority>(
    newMockEvent()
  )

  mkrTokenLogSetAuthorityEvent.parameters = new Array()

  mkrTokenLogSetAuthorityEvent.parameters.push(
    new ethereum.EventParam("authority", ethereum.Value.fromAddress(authority))
  )

  return mkrTokenLogSetAuthorityEvent
}

export function createMKRTokenLogSetOwnerEvent(
  owner: Address
): MKRTokenLogSetOwner {
  let mkrTokenLogSetOwnerEvent = changetype<MKRTokenLogSetOwner>(newMockEvent())

  mkrTokenLogSetOwnerEvent.parameters = new Array()

  mkrTokenLogSetOwnerEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return mkrTokenLogSetOwnerEvent
}

export function createMKRTokenLogNoteEvent(
  sig: Bytes,
  guy: Address,
  foo: Bytes,
  bar: Bytes,
  wad: BigInt,
  fax: Bytes
): MKRTokenLogNote {
  let mkrTokenLogNoteEvent = changetype<MKRTokenLogNote>(newMockEvent())

  mkrTokenLogNoteEvent.parameters = new Array()

  mkrTokenLogNoteEvent.parameters.push(
    new ethereum.EventParam("sig", ethereum.Value.fromFixedBytes(sig))
  )
  mkrTokenLogNoteEvent.parameters.push(
    new ethereum.EventParam("guy", ethereum.Value.fromAddress(guy))
  )
  mkrTokenLogNoteEvent.parameters.push(
    new ethereum.EventParam("foo", ethereum.Value.fromFixedBytes(foo))
  )
  mkrTokenLogNoteEvent.parameters.push(
    new ethereum.EventParam("bar", ethereum.Value.fromFixedBytes(bar))
  )
  mkrTokenLogNoteEvent.parameters.push(
    new ethereum.EventParam("wad", ethereum.Value.fromUnsignedBigInt(wad))
  )
  mkrTokenLogNoteEvent.parameters.push(
    new ethereum.EventParam("fax", ethereum.Value.fromBytes(fax))
  )

  return mkrTokenLogNoteEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}
