import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { Etch } from "../generated/schema"
import { Etch as EtchEvent } from "../generated/DSChief/DSChief"
import { handleEtch } from "../src/ds-chief"
import { createEtchEvent } from "./ds-chief-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let slate = Bytes.fromI32(1234567890)
    let newEtchEvent = createEtchEvent(slate)
    handleEtch(newEtchEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Etch created and stored", () => {
    assert.entityCount("Etch", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Etch",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "slate",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
