# The Worst App Idea Ever Pitched

![Bounty](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23.svg)
![Rank](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/muherilobak-web/worst-app-idea/rank.svg)
![Reward](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/muherilobak-web/worst-app-idea/reward.svg)

## The entry

MeowTranslate — an app that translates your cat's meows into English with a
confident 97% accuracy claim, except every single translation comes back as
"I'm bored", which the founder sells as radical honesty rather than a bug.
Paying for Premium changes nothing except the language: the same bored
complaint, now in 40 languages.

One sentence, under 240 characters, pitching a product that sounds real, a
founder who sounds certain, and a function nobody on Earth needs.

## Run

```sh
node main.ts
```

This writes the entry text to `output/entry.txt` with no trailing newline.

## Deterministic

The entry text is a fixed string in `main.ts`. There are no dependencies, no
network calls, no randomness, and no timestamps, so every run produces a
byte-identical `output/entry.txt`.
