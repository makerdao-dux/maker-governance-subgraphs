# Maker Governance subgraph.



Subgraph to cover maker's governance. Initial work based on https://github.com/messari/subgraphs/blob/master/subgraphs/maker-governance

## Install

Install and codegen: 

```
yarn install
yarn codegen
yarn build
```

Publishing: 
```
npx graph auth --product hosted-service CODE
npx graph deploy --product hosted-service [USER]/[GRAPH]

```

## Goals
- [] Fetches all the polls 
    - [] Each poll can fetch all the IPFS metadata from a contract that binds polls with IPFS hashes.
        - If we are able to fetch the IPFS metadata, we can parse the poll options and decompose the optionID correctly
        - We are then able to add the different victory algorithms in the graph instead on the governance portal.
- [] Fetches all the delegates
    - [] Each delegate entity is created when a new delegate contract is created, not only when a person delegates MKR
    - [] It can fetch delegate descriptions from IPFS based on a contract that emits that event
- [] Fetches all executives.
- [] Can fetch votes for a poll