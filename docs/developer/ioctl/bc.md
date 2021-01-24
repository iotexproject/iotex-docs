---
title: Query the Blockchain
---

# Query the Blockchain

[[toc]]

## Query Blockchain Information

`Usage: ioctl bc info`

```
➜  ioctl bc info
height:50268  numActions:50852  tps:0
epochNum:140  epochStartHeight:50041  gravityChainStartHeight:7485100
```

## Query Block

`Usage: ioctl bc block [HEIGHT|HASH]`

```
➜  ioctl bc block
Transactions: 1
Height: 122
Total Amount: 0
Timestamp: 1553238923
Producer Public Key: io1urumju6laya40h25rx2cdseql9xm2gm8auepac
Transactions Root: 8a4e41d5a183a4e12784872da4d76c32ac8d1cf11ed1543859e98000dbdf2620
Receipt Root: e8e28a529d99a70b7dab8dd6d491bdb0c20818defac307780c919a610e552d6a
Delta State Digest: 82286c69c59aaff815bb888b876eed7228ea51065027dc07ac1c04e5e082ea6b
Hash: 87f73c3a6e3312075a9aae70660656a9209bb11fb4d5fb1a2f21e020e20d3365
```

```
➜  ioctl bc block 101
Transactions: 1
Height: 101
Total Amount: 0
Timestamp: 1553238713
Producer Public Key: io1urumju6laya40h25rx2cdseql9xm2gm8auepac
Transactions Root: 8a4e41d5a183a4e12784872da4d76c32ac8d1cf11ed1543859e98000dbdf2620
Receipt Root: e8e28a529d99a70b7dab8dd6d491bdb0c20818defac307780c919a610e552d6a
Delta State Digest: 999003ad9f4ea85f45a8a3ebafcb8ad03c43852fbe8cce14aaf86bed9aed8895
Hash: c9cac24ed4a782583526132cc266f3def121e34ad4c4244f8b045fdd2d82d4cc
```

```
➜  ioctl bc block c9cac24ed4a782583526132cc266f3def121e34ad4c4244f8b045fdd2d82d4cc
Transactions: 1
Height: 101
Total Amount: 0
Timestamp: 1553238713
Producer Public Key: io1urumju6laya40h25rx2cdseql9xm2gm8auepac
Transactions Root: 8a4e41d5a183a4e12784872da4d76c32ac8d1cf11ed1543859e98000dbdf2620
Receipt Root: e8e28a529d99a70b7dab8dd6d491bdb0c20818defac307780c919a610e552d6a
Delta State Digest: 999003ad9f4ea85f45a8a3ebafcb8ad03c43852fbe8cce14aaf86bed9aed8895
Hash: c9cac24ed4a782583526132cc266f3def121e34ad4c4244f8b045fdd2d82d4cc
```

## Query Staking Bucket Information

`Usage: ioctl bc bucketlist [ALIAS|ADDRESS]`

```
➜  ioctl bc bucketlist daddypig
Blockchain Node: api.testnet.iotex.one:443
{
index: 56
owner: io1gh439pm67d4cwxt882xpylj75klys6esepml60
candidate: io1q2whygmmzphr22fh5703l04jz5kh9thj9dgs99
stakedAmount: 232 IOTX
stakedDuration: 7 days
autoStake: false
createTime: 2020-05-21T13:10:10Z
stakeStartTime: 2020-05-21T13:28:25Z
unstakeStartTime: none
}
```

## Query Staking BucketList By Candidate

`Usage: ioctl bc bucketlist cand [CANDIDATE_NAME] [OFFSET] [LIMIT]`

```
➜  ioctl bc bucketlist cand longz 0 10
Blockchain Node: api.testnet.iotex.one:443
{
index: 34
owner: io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4
candidate: io1t56twy23yjuqscljpjc869hyqw3gpswwj0g228
stakedAmount: 100 IOTX
stakedDuration: 7 days
autoStake: false
createTime: 2020-05-11T06:41:20Z
stakeStartTime: 2020-05-11T06:41:20Z
unstakeStartTime: none
}
{
index: 43
owner: io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4
candidate: io1l40dc4q95fsjdprhcga5qrpdsj46q3wpzr27n9
stakedAmount: 170 IOTX
stakedDuration: 14 days
autoStake: false
createTime: 2020-05-14T02:42:15Z
stakeStartTime: 2020-05-14T02:42:15Z
unstakeStartTime: none
}
```

## Query Staking BucketList By Voter

`Usage: ioctl bc bucketlist voter [VOTER_ADDRESS] [OFFSET] [LIMIT]`

```
➜  ioctl bc bucketlist voter tmp2 0 10
Blockchain Node: api.testnet.iotex.one:443
{
index: 34
owner: io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4
candidate: io1t56twy23yjuqscljpjc869hyqw3gpswwj0g228
stakedAmount: 100 IOTX
stakedDuration: 7 days
autoStake: false
createTime: 2020-05-11T06:41:20Z
stakeStartTime: 2020-05-11T06:41:20Z
unstakeStartTime: none
}
{
index: 43
owner: io120au9ra0nffdle04jx2g5gccn6gq8qd4fy03l4
candidate: io1l40dc4q95fsjdprhcga5qrpdsj46q3wpzr27n9
stakedAmount: 170 IOTX
stakedDuration: 14 days
autoStake: false
createTime: 2020-05-14T02:42:15Z
stakeStartTime: 2020-05-14T02:42:15Z
unstakeStartTime: none
}
```

## Query Staking Bucket By Index

`Usage: ioctl bc bucket [BUCKET_INDEX]`

```
➜  ioctl bc bucket 56
Blockchain Node: api.testnet.iotex.one:443
{
	index: 56
	owner: io19n5sqmreq4tk7w7xevnwms9ux8h7kuemjrjlf7
	candidate: io1xrcfzdmujtr9hvmrm58yxvhe5djahdzt30ljs2
	stakedAmount: 100 IOTX
	stakedDuration: 0 days
	autoStake: false
	createTime: 2020-06-01T18:32:35Z
	stakeStartTime: 2020-06-01T18:32:35Z
	unstakeStartTime: none
}
```
