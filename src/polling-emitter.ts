import {
  PollCreated as PollCreatedEvent,
  PollWithdrawn as PollWithdrawnEvent,
  Voted as VotedEvent
} from "../generated/PollingEmitter/PollingEmitter"
import { PollCreated, PollWithdrawn, Voted } from "../generated/schema"

export function handlePollCreated(event: PollCreatedEvent): void {
  let entity = new PollCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.creator = event.params.creator
  entity.blockCreated = event.params.blockCreated
  entity.pollId = event.params.pollId
  entity.startDate = event.params.startDate
  entity.endDate = event.params.endDate
  entity.multiHash = event.params.multiHash
  entity.url = event.params.url
  entity.save()
}

export function handlePollWithdrawn(event: PollWithdrawnEvent): void {
  let entity = new PollWithdrawn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.creator = event.params.creator
  entity.blockWithdrawn = event.params.blockWithdrawn
  entity.pollId = event.params.pollId
  entity.save()
}

export function handleVoted(event: VotedEvent): void {
  let entity = new Voted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.voter = event.params.voter
  entity.pollId = event.params.pollId
  entity.optionId = event.params.optionId
  entity.save()
}
