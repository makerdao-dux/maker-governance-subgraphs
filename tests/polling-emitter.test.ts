import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { PollCreated } from "../generated/schema"
import { PollCreated as PollCreatedEvent } from "../generated/PollingEmitter/PollingEmitter"
import { handlePollCreated } from "../src/polling-emitter"
import { createPollCreatedEvent } from "./polling-emitter-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let creator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let blockCreated = BigInt.fromI32(234)
    let pollId = BigInt.fromI32(234)
    let startDate = BigInt.fromI32(234)
    let endDate = BigInt.fromI32(234)
    let multiHash = "Example string value"
    let url = "Example string value"
    let newPollCreatedEvent = createPollCreatedEvent(
      creator,
      blockCreated,
      pollId,
      startDate,
      endDate,
      multiHash,
      url
    )
    handlePollCreated(newPollCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("PollCreated created and stored", () => {
    assert.entityCount("PollCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "PollCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "creator",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "PollCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "blockCreated",
      "234"
    )
    assert.fieldEquals(
      "PollCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "pollId",
      "234"
    )
    assert.fieldEquals(
      "PollCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "startDate",
      "234"
    )
    assert.fieldEquals(
      "PollCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "endDate",
      "234"
    )
    assert.fieldEquals(
      "PollCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "multiHash",
      "Example string value"
    )
    assert.fieldEquals(
      "PollCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "url",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
