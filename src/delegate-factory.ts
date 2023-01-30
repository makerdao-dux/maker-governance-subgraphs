import { BigInt } from "@graphprotocol/graph-ts"
import {
  DelegateFactory,
  CreateVoteDelegate
} from "../generated/DelegateFactory/DelegateFactory"
import { VoteDelegate } from "../generated/schema"

export function handleCreateVoteDelegate(event: CreateVoteDelegate): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type

  // TODO: Load delegate admin, if it does not exist, create it and assing the delegate contract.
  // TODO: Create the delegate contract and assign the delegate admin.
  // https://etherscan.io/address/0xD897F108670903D1d6070fcf818f9db3615AF272#code
  // event.params.delegate and event.transcation.from.toHex() should be the same
  const delegateAdminAddress = event.transaction.from.toHex()
  let admin = DelegateAdmin.load(delegateAdminAddress)
  if (!admin) {
    admin = new DelegateAdmin(delegateAdminAddress)
    admin.voteDelegate = event.params.voteDelegate
    admin.save()
  }

  // Create voteDelegate
  VoteDelegate.create(event.params.voteDelegate, delegateAdminAddress);

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.delegate = event.params.delegate
  entity.voteDelegate = event.params.voteDelegate

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.chief(...)
  // - contract.create(...)
  // - contract.delegates(...)
  // - contract.isDelegate(...)
  // - contract.polling(...)
}
