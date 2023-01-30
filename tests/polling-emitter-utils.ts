import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  PollCreated,
  PollWithdrawn,
  Voted
} from "../generated/PollingEmitter/PollingEmitter"

export function createPollCreatedEvent(
  creator: Address,
  blockCreated: BigInt,
  pollId: BigInt,
  startDate: BigInt,
  endDate: BigInt,
  multiHash: string,
  url: string
): PollCreated {
  let pollCreatedEvent = changetype<PollCreated>(newMockEvent())

  pollCreatedEvent.parameters = new Array()

  pollCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  pollCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "blockCreated",
      ethereum.Value.fromUnsignedBigInt(blockCreated)
    )
  )
  pollCreatedEvent.parameters.push(
    new ethereum.EventParam("pollId", ethereum.Value.fromUnsignedBigInt(pollId))
  )
  pollCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "startDate",
      ethereum.Value.fromUnsignedBigInt(startDate)
    )
  )
  pollCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "endDate",
      ethereum.Value.fromUnsignedBigInt(endDate)
    )
  )
  pollCreatedEvent.parameters.push(
    new ethereum.EventParam("multiHash", ethereum.Value.fromString(multiHash))
  )
  pollCreatedEvent.parameters.push(
    new ethereum.EventParam("url", ethereum.Value.fromString(url))
  )

  return pollCreatedEvent
}

export function createPollWithdrawnEvent(
  creator: Address,
  blockWithdrawn: BigInt,
  pollId: BigInt
): PollWithdrawn {
  let pollWithdrawnEvent = changetype<PollWithdrawn>(newMockEvent())

  pollWithdrawnEvent.parameters = new Array()

  pollWithdrawnEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  pollWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "blockWithdrawn",
      ethereum.Value.fromUnsignedBigInt(blockWithdrawn)
    )
  )
  pollWithdrawnEvent.parameters.push(
    new ethereum.EventParam("pollId", ethereum.Value.fromUnsignedBigInt(pollId))
  )

  return pollWithdrawnEvent
}

export function createVotedEvent(
  voter: Address,
  pollId: BigInt,
  optionId: BigInt
): Voted {
  let votedEvent = changetype<Voted>(newMockEvent())

  votedEvent.parameters = new Array()

  votedEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )
  votedEvent.parameters.push(
    new ethereum.EventParam("pollId", ethereum.Value.fromUnsignedBigInt(pollId))
  )
  votedEvent.parameters.push(
    new ethereum.EventParam(
      "optionId",
      ethereum.Value.fromUnsignedBigInt(optionId)
    )
  )

  return votedEvent
}
