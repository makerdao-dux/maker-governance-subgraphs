import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { CreateVoteDelegate } from "../generated/DelegateFactory/DelegateFactory"

export function createCreateVoteDelegateEvent(
  delegate: Address,
  voteDelegate: Address
): CreateVoteDelegate {
  let createVoteDelegateEvent = changetype<CreateVoteDelegate>(newMockEvent())

  createVoteDelegateEvent.parameters = new Array()

  createVoteDelegateEvent.parameters.push(
    new ethereum.EventParam("delegate", ethereum.Value.fromAddress(delegate))
  )
  createVoteDelegateEvent.parameters.push(
    new ethereum.EventParam(
      "voteDelegate",
      ethereum.Value.fromAddress(voteDelegate)
    )
  )

  return createVoteDelegateEvent
}
