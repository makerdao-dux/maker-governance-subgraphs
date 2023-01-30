import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Etch,
  LogNote,
  LogSetAuthority,
  LogSetOwner
} from "../generated/DSChief/DSChief"

export function createEtchEvent(slate: Bytes): Etch {
  let etchEvent = changetype<Etch>(newMockEvent())

  etchEvent.parameters = new Array()

  etchEvent.parameters.push(
    new ethereum.EventParam("slate", ethereum.Value.fromFixedBytes(slate))
  )

  return etchEvent
}

export function createLogNoteEvent(
  sig: Bytes,
  guy: Address,
  foo: Bytes,
  bar: Bytes,
  wad: BigInt,
  fax: Bytes
): LogNote {
  let logNoteEvent = changetype<LogNote>(newMockEvent())

  logNoteEvent.parameters = new Array()

  logNoteEvent.parameters.push(
    new ethereum.EventParam("sig", ethereum.Value.fromFixedBytes(sig))
  )
  logNoteEvent.parameters.push(
    new ethereum.EventParam("guy", ethereum.Value.fromAddress(guy))
  )
  logNoteEvent.parameters.push(
    new ethereum.EventParam("foo", ethereum.Value.fromFixedBytes(foo))
  )
  logNoteEvent.parameters.push(
    new ethereum.EventParam("bar", ethereum.Value.fromFixedBytes(bar))
  )
  logNoteEvent.parameters.push(
    new ethereum.EventParam("wad", ethereum.Value.fromUnsignedBigInt(wad))
  )
  logNoteEvent.parameters.push(
    new ethereum.EventParam("fax", ethereum.Value.fromBytes(fax))
  )

  return logNoteEvent
}

export function createLogSetAuthorityEvent(
  authority: Address
): LogSetAuthority {
  let logSetAuthorityEvent = changetype<LogSetAuthority>(newMockEvent())

  logSetAuthorityEvent.parameters = new Array()

  logSetAuthorityEvent.parameters.push(
    new ethereum.EventParam("authority", ethereum.Value.fromAddress(authority))
  )

  return logSetAuthorityEvent
}

export function createLogSetOwnerEvent(owner: Address): LogSetOwner {
  let logSetOwnerEvent = changetype<LogSetOwner>(newMockEvent())

  logSetOwnerEvent.parameters = new Array()

  logSetOwnerEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return logSetOwnerEvent
}
