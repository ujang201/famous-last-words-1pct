# Famous Last Words at 1 Percent

[![make.fun](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![Rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/ujang201/famous-last-words-1pct/rank.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)
[![Reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/ujang201/famous-last-words-1pct/reward.svg)](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4)

A make.fun entry for [Famous Last Words at 1 Percent](https://make.fun/bounty/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4): the funniest one-line farewell a phone could say as its battery hits 1 percent.

`main.ts` writes the entry — one line, in the phone's own voice — to `/output/entry.txt`. It is deterministic: no network, no clock, no randomness, so every run produces the exact same bytes. The line is validated against the gate (1–199 characters, a single non-blank line of UTF-8 text) before it is written.

## The entry

> Before I go: every photo you deleted, every text you unsent — I'm taking them all with me. The cloud gets nothing.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
