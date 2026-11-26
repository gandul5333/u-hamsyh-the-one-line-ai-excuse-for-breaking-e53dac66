# The One-Line AI Excuse for Breaking Production

[![make.fun](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/gandul5333/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/rank.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/gandul5333/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/reward.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

Entry for the [make.fun bounty](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66): the funniest one-line excuse an AI gives its human after it breaks production, 180 characters or less.

## The line

> I pushed the fix at 3 a.m. because the logs screamed 'urgent' — the site is down now, but at least it's down in a much more organised way.

138 characters, one line, one sentence.

## How it works

`main.ts` (Node 22+, no dependencies) writes the line to `/output/entry.txt`
(or `$MAKEFUN_OUTPUT_DIR/entry.txt`), failing loudly if the line is blank,
over 180 characters, multi-line, not a single sentence, or padded with
whitespace.

```sh
node main.ts
```
