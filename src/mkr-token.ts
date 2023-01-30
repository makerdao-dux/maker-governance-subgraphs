import {
  Mint as MintEvent,
  Burn as BurnEvent,
  MKRTokenLogSetAuthority as MKRTokenLogSetAuthorityEvent,
  MKRTokenLogSetOwner as MKRTokenLogSetOwnerEvent,
  MKRTokenLogNote as MKRTokenLogNoteEvent,
  Transfer as TransferEvent,
  Approval as ApprovalEvent
} from "../generated/MKRToken/MKRToken"
import {
  Mint,
  Burn,
  MKRTokenLogSetAuthority,
  MKRTokenLogSetOwner,
  MKRTokenLogNote,
  Transfer,
  Approval
} from "../generated/schema"

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.guy = event.params.guy
  entity.wad = event.params.wad
  entity.save()
}

export function handleBurn(event: BurnEvent): void {
  let entity = new Burn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.guy = event.params.guy
  entity.wad = event.params.wad
  entity.save()
}

export function handleMKRTokenLogSetAuthority(
  event: MKRTokenLogSetAuthorityEvent
): void {
  let entity = new MKRTokenLogSetAuthority(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.authority = event.params.authority
  entity.save()
}

export function handleMKRTokenLogSetOwner(
  event: MKRTokenLogSetOwnerEvent
): void {
  let entity = new MKRTokenLogSetOwner(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.save()
}

export function handleMKRTokenLogNote(event: MKRTokenLogNoteEvent): void {
  let entity = new MKRTokenLogNote(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sig = event.params.sig
  entity.guy = event.params.guy
  entity.foo = event.params.foo
  entity.bar = event.params.bar
  entity.wad = event.params.wad
  entity.fax = event.params.fax
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}
